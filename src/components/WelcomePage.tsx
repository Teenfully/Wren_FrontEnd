// WelcomePage.tsx
import React from "react";
import styles from "./WelcomePage.module.css"; // Assuming you are using CSS modules

const WelcomePage: React.FC = () => {
  const handleGetStarted = () => {
    // Handle the "Get Started" action, e.g., navigate to the next page
    console.log("Get Started clicked");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to AI Therapist</h1>
      <p className={styles.introText}>
        Your journey to better mental health begins here. Let's get started!
      </p>
      <button className={styles.getStartedButton} onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default WelcomePage;
