import "./App.css";
import React, { useState, useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import LoadingScreen from "./pages/loadingScreen/LoadingScreen";
import HomePage from "./pages/homePage/HomePage";

function App() {
  const [isLoading, setIsLoading] = useState(
    localStorage.getItem("isWebsiteLoading") === "true"
  );
  //In index.js and App.js, add logic to determine whether the animation should be applied initially (isWebsiteLoading) or when the website is still loading. You can use a state variable and the localStorage API for this purpose.
  // Check if the website is still loading using localStorage
  const isWebsiteLoading = localStorage.getItem("isWebsiteLoading"); //animation should be applied initially

  useEffect(() => {
    console.log(
      "BEFORE: isLoading, isWebsiteLoading:",
      isLoading,
      isWebsiteLoading
    );

    // Listen for the window load event
    const handleLoad = () => {
      // After the animation, set the flag to indicate it's not loading anymore
      setTimeout(() => {
        console.log("Timeout complete"); // Check if this is logged

        localStorage.setItem("isWebsiteLoading", "false");
        setIsLoading(false);
      }, 3300); // Simulate a 4-second loading time
      // Remove the event listener
    };

    // Add an event listener to the window's load event
    window.addEventListener("load", handleLoad());
    console.log(
      "AFTER: isLoading, isWebsiteLoading:",
      isLoading,
      isWebsiteLoading
    );

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("load", handleLoad());
    };
  }, [isLoading, isWebsiteLoading]);

  return (
    <div className="App">{isLoading ? <LoadingScreen /> : <AppRouter />}</div>
  );
}
export default App;
