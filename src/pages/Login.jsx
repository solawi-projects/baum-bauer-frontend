import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import backgroundImage from "../assets/images/leaves_background_02.webp";

const Login = () => {
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ email, password, rememberMe }),
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
    <main className="relative text-font-family-color min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 w-full h-[50%] bg-cover bg-center bg-opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
      ></div>
      <div className="z-10 p-8 bg-white bg-opacity-95 rounded-2xl shadow-xl max-w-md w-full space-y-6 mb-20">
        <h2 className="text-3xl lg:text-4xl text-center font-extrabold text-gray-700">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Label htmlFor="email" value="Your email" />
            <TextInput
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password" value="Your password" />
            <TextInput
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Log in</Button>
        </form>
      </div>
      <img
        src="src/assets/images/biobaum_about_footer_img.webp"
        alt="Footer Image"
        className="w-full absolute bottom-0"
      />
    </main>
  );
};

export default Login;
