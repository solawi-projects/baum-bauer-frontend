import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Index = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="page">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Index;
