import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DesktopNavbar from "../components/DesktopNavbar";
import MobileNavbar from "../components/MobileNavbar";

const Index = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768); // 768px is a common breakpoint for mobile screens

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <header>{isMobileScreen ? <MobileNavbar /> : <DesktopNavbar />}</header>
      <main className="page">
        <Outlet />
      </main>
      <footer>
        <p>this is the footer</p>
      </footer>
    </div>
  );
};

export default Index;
