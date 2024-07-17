import React from "react";
import UserList from "./Components/UserList";
import ThemeToggle from "./Components/Theme/ThemeToggle";
import { ThemeProvider, useTheme } from "./Components/Theme/ThemeContext";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "light" ? "bg-[#FFFFFF] text-white" : "bg-gray-900 text-white"
      }`}
    >
      <header className="w-full p-6 bg-[#5c677d] shadow-lg">
        <h4 className="text-4xl font-extrabold text-white text-center border-b-4 border-white pb-2 shadow-md">
          List Users
        </h4>
      </header>

      <div className="flex justify-center mt-4">
        <ThemeToggle />
      </div>

      <div className="flex flex-col  items-center">
        <UserList />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
