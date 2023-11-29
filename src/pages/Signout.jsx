import {useContext} from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import backgroundImage from "../assets/images/leaves_background_01.webp";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();
  const { setLoggedIn, setEmail } = useContext(AuthContext);

  return (
    <main>
      <Breadcrumb
        aria-label=""
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Sign Out</Breadcrumb.Item>
      </Breadcrumb>
      <div className="relative w-full mx-auto p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center text-font-family-color">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="flex flex-col justify-center items-center gap-[2rem] xs:w-[100%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] bg-white rounded-[15px] p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
          <div className="flex items-center mb-4">
            <img
              src="/src/assets/tree.png"
              alt="Tree Icon"
              className="w-[40px] h-[40px] mr-2"
            />{" "}
            <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
              Sign Out
            </h3>
          </div>
          <p className="text-3xl text-secondary-color font-main-font tracking-wide mt-6 text-center">
            Are you sure you want to sign out?
          </p>
          <Link
            to="/"
            className="text-center my-2 px-8 py-2 bg-bg-header-footer text-font-family-color rounded-[10px] hover:bg-lighter-primary transition duration-4000 ease-linear"
            aria-label="Sign Out and go to the Home page"
          >
            Sign Out
          </Link>
        </div>
      </div>

      {/* Footer Image */}
      <img
        src="src/assets/images/biobaum_news_footer_img.webp"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default Signout;
