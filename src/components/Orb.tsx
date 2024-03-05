const Orb = () => {
  return (
    <div
      style={{
        width: "200px", // Specific size for demonstration
        height: "200px", // Specific size for demonstration
        background: "linear-gradient(221deg, #FFF500 0%, #FFA800 100%)",
        boxShadow: "6px -6px 16px rgba(178, 247, 99, 0.20)",
        borderRadius: "50%", // Makes the div a circle
        margin: "0 auto", // Centers the orb horizontally
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Centers content inside the orb
      }}
    >
      {/* Orb content goes here, if any */}
    </div>
  );
};

export default Orb;
