// const BackgroundEffects = () => {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

//       {/* Blue Blob */}
//       <div
//         className="
//           absolute
//           top-[-150px]
//           left-[-100px]
//           w-[500px]
//           h-[500px]
//           rounded-full
//           bg-blue-500/20
//           blur-[140px]
//           animate-pulse
//         "
//       />

//       {/* Purple Blob */}
//       <div
//         className="
//           absolute
//           bottom-[-150px]
//           right-[-100px]
//           w-[500px]
//           h-[500px]
//           rounded-full
//           bg-violet-500/20
//           blur-[140px]
//           animate-pulse
//         "
//       />

//       {/* Cyan Blob */}
//       <div
//         className="
//           absolute
//           top-1/2
//           left-1/2
//           w-[350px]
//           h-[350px]
//           rounded-full
//           bg-cyan-400/15
//           blur-[120px]
//           -translate-x-1/2
//           -translate-y-1/2
//         "
//       />
//     </div>
//   );
// };

// export default BackgroundEffects;


const BackgroundEffects = () => {
  return (
    <>
      {/* Grid */}
      <div className="fixed inset-0 grid-bg -z-20" />

      {/* Aurora */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            top-[-200px]
            left-[-200px]
            h-[700px]
            w-[700px]
            rounded-full
            bg-blue-500/15
            dark:bg-blue-500/20
            blur-[140px]
            animate-pulse
          "
        />

        <div
          className="
            absolute
            bottom-[-250px]
            right-[-150px]
            h-[700px]
            w-[700px]
            rounded-full
            bg-cyan-500/15
            dark:bg-cyan-500/20
            blur-[140px]
            animate-pulse
          "
        />

        <div
          className="
            absolute
            top-[40%]
            left-[45%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-500/10
            dark:bg-violet-500/20
            blur-[140px]
          "
        />
      </div>
    </>
  );
};

export default BackgroundEffects;