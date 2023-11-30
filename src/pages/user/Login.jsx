import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Breadcrumb,
  Tooltip,
} from "flowbite-react";
import { HiHome } from "react-icons/hi";
import backgroundImage from "../../assets/images/leaves_background_02.webp";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import axios from "../../utils/axiosInstance";

const Login = () => {
  const { setLoggedIn, setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState([]);
  const [backError, setBackError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = await new FormData(e.target);

    const data = {
      email: loginData.get("email"),
      password: loginData.get("password"),
    };
    try {
      await axios
        .post("/api/users/login", data)
        .then((response) => {
          setErrors([]);
          setBackError("");
          setAuthUser(response.data.user);
          setLoggedIn(true);
          navigate("/dashboard");
        })
        .catch((err) => {
          setErrors([]);
          setBackError("");
          if (err.response.status === 400) {
            setErrors(err.response.data.errors);
          } else if (
            err.response.status === 404 ||
            err.response.status === 401 ||
            err.response.status === 500
          ) {
            setBackError(err.response.data.message);
          } else {
            setBackError("Server Error Happened, try later please!");
          }
        });
    } catch (error) {
      setErrors([]);
      setBackError("");
      setBackError("Server Error Happened, try later please!");
    }
  };

  return (
    <main>
      <Breadcrumb
        aria-label=""
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Sign In</Breadcrumb.Item>
      </Breadcrumb>
      <div className="relative w-full mx-auto xs:p-0 p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex flex-col items-center justify-center text-font-family-color">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>
        <div className="container mx-auto flex justify-center items-center ">
          <ul className="bg-white py-4 px-2 rounded-md text-red-700">
            {errors.map((error, index) => (
              <li key={error.path + index} className="flex items-center">
                <IoIosArrowForward /> <span>&nbsp;{error.msg}</span>
              </li>
            ))}
            {backError ? (
              <li className="flex items-center">
                <IoIosArrowForward />
                <span>&nbsp;{backError}</span>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start gap-[2rem] w-[100%] md:w-[60%] lg:w-[45%] xl:w-[40%] bg-white rounded-[15px] p-4 sm:p-8 z-9 shadow-lg mt-[10px] md:mt-[20px] lg:mt-[100px] xl:mt-[90px] xs:py-12 py-10">
          <div className="flex items-center">
            <img
              src="/src/assets/tree.png"
              alt="Tree Icon"
              className="w-[40px] h-[40px] mr-2"
            />
            <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
              Login
            </h3>
          </div>
          <div className="flex items-center">
            <span>Don't have an account ?&nbsp;&nbsp;</span>
            <Tooltip content="Click here to navigate to register page">
              <Link
                to="/register"
                className="text-secondary-color underline font-bold"
              >
                signup
              </Link>
            </Tooltip>
          </div>
          <form onSubmit={handleLogin} className="space-y-6 w-full">
            <div>
              <Label
                htmlFor="email"
                value="Your email"
                className="visually-hidden"
              />
              <TextInput
                id="email"
                type="email"
                name="email"
                placeholder="your email address *"
                style={{
                  backgroundColor: "var(--bg-white-color)",
                  borderColor: "var(--bg-header-footer)",
                  outlineColor: "var(--secondary-color)",
                  padding: "1.15rem",
                  color: "var(--font-family-color)",
                  fontSize: "1rem",
                }}
              />
            </div>
            <div>
              <Label
                htmlFor="password"
                value="your password"
                className="visually-hidden"
              />
              <TextInput
                id="password"
                type="password"
                name="password"
                placeholder="Your Password *"
                style={{
                  backgroundColor: "var(--bg-white-color)",
                  borderColor: "var(--bg-header-footer)",
                  outlineColor: "var(--secondary-color)",
                  padding: "1.15rem",
                  color: "var(--font-family-color)",
                  fontSize: "1rem",
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              {/* <Checkbox
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className=" border-font-family-color checked:border-none checked:outline-none checked:bg-secondary-color focus:ring-transparent dark:ring-offset-transparent !important cursor-pointer"
              />
              <Label
                htmlFor="remember"
                className="text-font-family-color text-"
              >
                Remember me
              </Label> */}
              <span>We will remember you until you logout!</span>
              <Tooltip content="click here to reset your password">
                <Link to="" className="ml-10 text-secondary-color underline">
                  Forgot Password?
                </Link>
              </Tooltip>
            </div>

            <Button type="submit" className="custom-button-style">
              Login
            </Button>
          </form>
        </div>
      </div>
      <img
        src="src/assets/images/biobaum_about_footer_img.webp"
        alt="Footer Image"
        className="w-full"
      />
    </main>
  );
};

export default Login;
