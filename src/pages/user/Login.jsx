import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput, Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import backgroundImage from "../../assets/images/leaves_background_02.webp";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setLoggedIn, setEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Login logic
    try {
      const response = await fetch("OUR_BACKEND_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail, password, rememberMe }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      // Redirect user
    } catch (error) {
      console.error("Login error:", error);
      // Handle errors
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
      <div className="relative w-full mx-auto xs:p-0 p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center text-font-family-color">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="flex flex-col justify-start items-start gap-[2rem] w-[100%] md:w-[60%] lg:w-[45%] xl:w-[40%] bg-white rounded-[15px] p-4 sm:p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px] xs:py-12 py-10">
          <div className="flex items-center">
            <img
              src="/src/assets/tree.png"
              alt="Tree Icon"
              className="w-[40px] h-[40px] mr-2"
            />{" "}
            <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
              Sign In
            </h3>
          </div>
          <p>
            If you have not created an account yet, then please{" "}
            <Link
              to="/register"
              className="text-secondary-color underline font-bold"
            >
              sign up
            </Link>{" "}
            first.
          </p>
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
                placeholder="name@flowbite.com *"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
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
                value="Your password"
                className="visually-hidden"
              />
              <TextInput
                id="password"
                type="password"
                placeholder="Your Password *"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <Checkbox
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
              </Label>
              <Link to="" className="ml-10 text-secondary-color underline">
                Forgot Password?
              </Link>
            </div>

            <Button type="submit" className="custom-button-style">
              Sign In
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
