import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
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
        <p>this is the footer</p>
      </footer>
    </div>
  );
};
export default Index;
