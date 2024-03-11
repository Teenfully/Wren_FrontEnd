// MainPage.tsx
import React from "react";

const MainPage: React.FC = () => {
  const handlePushToTalk = () => {
    // Placeholder function for Push to Talk functionality
    console.log("Push to Talk activated");
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        <div style={styles.interactiveCircle} />
        <button style={styles.button} onClick={handlePushToTalk}>
          Push to Talk
        </button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background:
      "linear-gradient(to bottom, #FF9A9E 0%, #FAD0C4 99%, #FAD0C4 100%)",
    fontFamily: "Arial, sans-serif",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
  },
  interactiveCircle: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "yellow",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4E9AFE",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    outline: "none",
  },
};

export default MainPage;