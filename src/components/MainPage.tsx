// MainPage.tsx
import React from "react";

const MainPage: React.FC = () => {
  const handlePushToTalk = () => {
    // Implement the logic to start voice interaction
    console.log("Push to Talk activated");
  };

  return (
    <div style={styles.container}>
      <div style={styles.interactiveCircle} />
      <button style={styles.button} onClick={handlePushToTalk}>
        Push to Talk
      </button>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  interactiveCircle: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "yellow",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    ":hover": {
      backgroundColor: "#0056b3",
    },
  },
};

export default MainPage;
