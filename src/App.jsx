import { useEffect, useState } from "react";
import Home from "./pages/Home";
import BackgroundEffects from "./components/BackgroundEffects";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
    <CustomCursor />
    <BackgroundEffects />
    <Home
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
    </>
  );
}

export default App;