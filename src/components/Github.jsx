import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar";

const githubUsername = "AbduRazik442";

const GithubSection = () => {
    const [githubData, setGithubData] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const profileResponse = await fetch(
                    `https://api.github.com/users/${githubUsername}`
                );

                const profileData = await profileResponse.json();

                const repoResponse = await fetch(
                    `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`
                );

                const repoData = await repoResponse.json();

                setGithubData(profileData);
                setRepos(repoData);
            } catch (error) {
                console.error("GitHub Fetch Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGithubData();
    }, []);

    if (loading) {
        return (
            <section
                id="github"
                className="py-28 bg-white dark:bg-slate-900"
            >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-semibold">
                        Loading GitHub Data...
                    </h2>
                </div>
            </section>
        );
    }

    return (
        <section
            id="github"
            className="py-28 glass-card dark:bg-slate-900"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <p className="text-blue-600 font-medium mb-3">
                        GITHUB
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Coding Activity & Open Source
                    </h2>

                    <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
                        My GitHub profile, repositories and
                        development activity.
                    </p>
                </motion.div>

                {/* Profile Card */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="
            rounded-[36px]
            border
            border-slate-200
            dark:bg-slate-900
            bg-slate-50
            p-8
            lg:p-10
            mb-12
          "
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                        <div className="flex flex-col sm:flex-row items-center gap-6">

                            <img
                                src={githubData?.avatar_url}
                                alt={githubData?.login}
                                className="
                  h-24
                  w-24
                  rounded-3xl
                  border
                  border-slate-200
                "
                            />

                            <div>
                                <h3 className="text-3xl font-bold">
                                    {githubData?.name || githubData?.login}
                                </h3>

                                <p className="text-slate-500">
                                    @{githubData?.login}
                                </p>

                                {githubData?.bio && (
                                    <p className="mt-2 text-slate-600 max-w-xl">
                                        {githubData.bio}
                                    </p>
                                )}
                            </div>
                        </div>

                        <a
                            href={githubData?.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="
                inline-flex
                items-center
                gap-2
                px-5
                py-3
                rounded-full
                bg-black
                text-white
                hover:opacity-90
              "
                        >
                            View Profile
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">

                    <StatCard
                        value={githubData?.public_repos ?? 0}
                        label="Repositories"
                    />

                    <StatCard
                        value={githubData?.followers ?? 0}
                        label="Followers"
                    />

                    <StatCard
                        value={githubData?.following ?? 0}
                        label="Following"
                    />

                    <StatCard
                        value={githubData?.public_gists ?? 0}
                        label="Gists"
                    />

                </div>

                {/* Contribution Calendar */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="
            rounded-[36px]
            border
            border-slate-200
            bg-white
            p-6
            md:p-8
            overflow-x-auto
            mb-16
          "
                >
                    <h3 className="text-2xl font-bold mb-8">
                        Contribution Activity
                    </h3>

                    <GitHubCalendar
                        username={githubUsername}
                    />
                </motion.div>

                {/* Repository Showcase */}
                <div>
                    <h3 className="text-3xl font-bold mb-8">
                        Featured Repositories
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {repos.map((repo) => (
                            <motion.a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{
                                    y: -6,
                                }}
                                className="
                  block
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-[28px]
                  p-6
                  transition-all
                "
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <FaGithub size={22} />

                                    <ExternalLink size={18} />
                                </div>

                                <h4 className="text-xl font-bold mb-3">
                                    {repo.name}
                                </h4>

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {repo.description ||
                                        "No description available."}
                                </p>

                                {repo.language && (
                                    <div className="mt-5">
                                        <span
                                            className="
                        inline-flex
                        px-3
                        py-1
                        rounded-full
                        bg-blue-50
                        text-blue-700
                        text-sm
                      "
                                        >
                                            {repo.language}
                                        </span>
                                    </div>
                                )}
                            </motion.a>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
};

const StatCard = ({ value, label }) => {
    return (
        <motion.div
            whileHover={{
                y: -5,
            }}
            className="
        bg-slate-50
        border
        border-slate-200
        rounded-[28px]
        p-6
        text-center
      "
        >
            <h3 className="text-3xl font-bold">
                {value}
            </h3>

            <p className="text-slate-500 mt-2">
                {label}
            </p>
        </motion.div>
    );
};

export default GithubSection;