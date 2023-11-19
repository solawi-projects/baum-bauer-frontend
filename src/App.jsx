import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Importing our pages
import Home from "./pages/Home";
import Sponsor from "./pages/Sponsor";
import Index from "./pages/Index";
import News from "./pages/News";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UpdateProfile from "./pages/UpdateProfile";
import UserSponsorships from "./pages/UserSponsorships";
import PasswordChange from "./pages/PasswordChange";
import Signout from "./pages/Signout";

function App() {
  const bioBaumRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Index />}>
        <Route index element={<Home />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update_profile" element={<UpdateProfile />} />
        <Route path="/user_sponsorships" element={<UserSponsorships />} />
        <Route path="/password_change" element={<PasswordChange />} />{" "}
        <Route path="/signout" element={<Signout />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={bioBaumRouter} />
    </div>
  );
}

export default App;
