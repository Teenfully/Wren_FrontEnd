// App.tsx
import React from "react";
import WelcomePage from "./components/WelcomePage"; // Updated import path

const App: React.FC = () => {
  return (
    <div className="App">
      <WelcomePage />
      {/* Other components or routes */}
    </div>
  );
};

export default App;
