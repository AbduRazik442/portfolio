const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Blue Blob */}
      <div
        className="
          absolute
          top-[-150px]
          left-[-100px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/20
          blur-[140px]
          animate-pulse
        "
      />

      {/* Purple Blob */}
      <div
        className="
          absolute
          bottom-[-150px]
          right-[-100px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-violet-500/20
          blur-[140px]
          animate-pulse
        "
      />

      {/* Cyan Blob */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          w-[350px]
          h-[350px]
          rounded-full
          bg-cyan-400/15
          blur-[120px]
          -translate-x-1/2
          -translate-y-1/2
        "
      />
    </div>
  );
};

export default BackgroundEffects;