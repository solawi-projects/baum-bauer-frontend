import { useEffect } from "react";
import { CartContextProvider } from "./store/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Importing our pages
import Home from "./pages/Home";
import Trees from "./pages/Trees";
import Index from "./pages/Index";
import News from "./pages/News";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Cart from "./pages/user/Cart";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/user/Dashboard";
import UpdateProfile from "./pages/user/UpdateProfile";
import UserSponsorships from "./pages/user/UserSponsorships";
import PasswordChange from "./pages/user/PasswordChange";
import Signout from "./pages/user/Signout";
import SingleTreePage from "./pages/SingleTreePage";
import NewsArticle from "./pages/NewsArticle";
import Checkout from "./pages/user/Checkout";
import Order from "./pages/user/Order";
import AddToGallery from "./pages/AddToGallery";
import AddToNewArticle from "./pages/AddToNewsArticle";
import AddNewTree from "./pages/AddNewTree";
import Privacy from "./pages/Privacy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <AuthProvider>
        <CartContextProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />}>
                <Route index element={<Home />} />
                <Route path="/trees" element={<Trees />} />
                <Route path="/trees/:id" element={<SingleTreePage />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsArticle />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order/place_order" element={<Order />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/update_profile" element={<UpdateProfile />} />
                <Route
                  path="/user_sponsorships"
                  element={<UserSponsorships />}
                />
                <Route path="/password_change" element={<PasswordChange />} />
                <Route path="/signout" element={<Signout />} />
                <Route path="/addImageToGallery" element={<AddToGallery />} />
                <Route path="/addToNewArticle" element={<AddToNewArticle />} />
                <Route path="/addNewTree" element={<AddNewTree />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </CartContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
