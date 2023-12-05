import { useState, useEffect } from "react";
import { Breadcrumb, Label, TextInput, Checkbox, Button } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineKey } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";
import { GiPostOffice } from "react-icons/gi";
import { FaTreeCity } from "react-icons/fa6";
import { SiGooglestreetview } from "react-icons/si";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/leaves_background_02.webp";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobilePhone: "",
    password: "",
    passwordConfirmation: "",
    address1: "",
    address2: "",
    city: "",
    zipCode: "",
    state: "",
    country: "",
    agree: false,
  });

  const navigate = useNavigate();

  const [errorMsgs, setErrorMsgs] = useState([]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmationPasswordVisibility = () => {
    setShowConfirmationPassword(!showConfirmationPassword);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      agree: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      Swal.fire({
        icon: "warning",
        title: "Agreement Required",
        text: "Please agree to the terms and conditions before registering.",
        customClass: {
          confirmButton: "btn-custom-class",
          title: "title-class",
        },
        buttonsStyling: false,
      });
      return; // Stop further execution if not agreed
    }

    //  passwords match
    if (formData.password !== formData.passwordConfirmation) {
      // Display password mismatch
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match!",
        customClass: {
          confirmButton: "btn-custom-class",
          title: "title-class",
        },
        buttonsStyling: false,
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/create-user",
        formData
      );

      if (response.status === 201) {
        setErrorMsgs([]);
        // Display success message
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "You have successfully registered.",
          customClass: {
            confirmButton: "btn-custom-class",
            title: "title-class",
          },
          buttonsStyling: false,
        });
        navigate("/login");
      } else {
        // Handle other server response statuses
        console.error("Error creating user:", response.data.message);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text:
            response.data.message || "An error occurred during registration!",
          customClass: {
            confirmButton: "btn-custom-class",
            title: "title-class",
          },
          buttonsStyling: false,
        });
      }
    } catch (error) {
      setErrorMsgs([]);

      // Handle errors that occurred during the POST request
      if (error.response && error.response.status === 400) {
        setErrorMsgs(error.response.data.errors);

        let errorMessage = "<ul>";

        // Loop through error messages and append to the list
        error.response.data.errors.forEach((error) => {
          errorMessage += `<li>${error.msg}</li>`;
        });

        errorMessage += "</ul>";

        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          html: errorMessage,
          customClass: {
            confirmButton: "btn-custom-class",
            title: "title-class",
          },
          buttonsStyling: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text:
            error.response?.data.message ||
            "An error occurred during registration!",
          customClass: {
            confirmButton: "btn-custom-class",
            title: "title-class",
          },
          buttonsStyling: false,
        });
      }
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
        <Breadcrumb.Item>Registration Form</Breadcrumb.Item>
      </Breadcrumb>
      {/* registration form */}
      <div className="relative w-full mx-auto xs:p-0 p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center text-font-family-color">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-[50%] bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-start items-start gap-[2rem] w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-[15px] p-4 sm:p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px] xs:py-12 py-10"
        >
          <div className="flex items-center">
            <img
              src="/src/assets/tree.png"
              alt="Tree Icon"
              className="w-[40px] h-[40px] mr-2"
            />
            <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
              Register
            </h3>
          </div>

          <p className="text-center">
            Already have an account? Then please{" "}
            <Link
              to="/login"
              className="text-secondary-color underline font-bold"
            >
              sign in
            </Link>
            .
          </p>

          <div className="flex flex-col w-full">
            {/* User Details */}
            <p className="text-2xl text-secondary-color font-main-font tracking-wide mb-2 underline">
              Details
            </p>

            <div className="flex flex-col justify-center md:justify-between md:flex-row gap-[0.5rem] w-full">
              {/* first name field */}
              <div className="mb-4 w-full ">
                <Label
                  htmlFor="firstName"
                  value="First Name"
                  className="visually-hidden"
                />
                <TextInput
                  aria-label="Type your first name here"
                  id="firstName"
                  type="text"
                  name="firstName"
                  icon={IoMdPerson}
                  placeholder="First Name *"
                  required={true}
                  shadow
                  className="input"
                  style={{
                    backgroundColor: "var(--bg-white-color)",
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                  onChange={handleInputChange}
                />
              </div>

              {/* last name field */}
              <div className="mb-4 w-full">
                <Label
                  htmlFor="lastName"
                  value="Last Name"
                  className="visually-hidden"
                />
                <TextInput
                  aria-label="Type your last name here"
                  id="lastName"
                  type="text"
                  name="lastName"
                  icon={IoMdPerson}
                  placeholder="Last Name *"
                  required={true}
                  shadow
                  className="input"
                  style={{
                    backgroundColor: "var(--bg-white-color)",
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center md:justify-between md:flex-row gap-[0.5rem] w-full">
              {/* phone number field */}
              <div className="flex flex-col w-full">
                {" "}
                <div className="mb-0 w-full">
                  <Label htmlFor="mobilePhone" className="visually-hidden">
                    Phone Number
                  </Label>
                  <TextInput
                    required={true}
                    id="mobilePhone"
                    type="tel"
                    name="mobilePhone"
                    icon={FaPhoneAlt}
                    placeholder="Phone Number *"
                    className="input"
                    style={{
                      backgroundColor: "var(--bg-white-color)",
                      borderColor: "var(--bg-header-footer)",
                      outlineColor: "var(--secondary-color)",
                      padding: "1.15rem",
                      color: "var(--font-family-color)",
                      fontSize: "1rem",
                      paddingLeft: "2.5rem",
                    }}
                    onChange={handleInputChange}
                  />
                </div>
                <p className="text-dark-gray">
                  <span className="font-bold" style={{ lineHeight: "0px" }}>
                    Phone e.g.
                  </span>{" "}
                  +16044011234
                </p>
              </div>

              {/* email field */}
              <div className="mb-4 w-full">
                <Label
                  htmlFor="email"
                  value="Email Address"
                  className="visually-hidden"
                />
                <TextInput
                  aria-label="Type your email address here"
                  id="email"
                  icon={MdEmail}
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required={true}
                  shadow
                  className="input"
                  style={{
                    backgroundColor: "var(--bg-white-color)",
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center md:justify-between md:flex-row gap-[0.5rem] w-full">
              {/* password field */}
              <div className="mb-2 w-full" style={{ position: "relative" }}>
                <Label
                  htmlFor="password"
                  value="Password"
                  className="visually-hidden"
                />
                <TextInput
                  aria-label="Enter your password here"
                  id="password"
                  icon={MdOutlineKey}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password *"
                  required={true}
                  shadow
                  className="input"
                  style={{
                    backgroundColor: "var(--bg-white-color)",
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                  onChange={handleInputChange}
                />{" "}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <HiEyeOff className="text-2xl" />
                  ) : (
                    <HiEye className="text-2xl" />
                  )}
                </div>
              </div>

              {/* confirm password field */}
              <div className="mb-2 w-full " style={{ position: "relative" }}>
                <Label
                  htmlFor="passwordConfirmation"
                  value="Confirm Password"
                  className="visually-hidden"
                />
                <TextInput
                  aria-label="Re-enter your password here"
                  id="passwordConfirmation"
                  icon={MdOutlineKey}
                  type={showConfirmationPassword ? "text" : "password"}
                  name="passwordConfirmation"
                  placeholder="Confirm Password *"
                  required={true}
                  shadow
                  className="input"
                  style={{
                    backgroundColor: "var(--bg-white-color)",
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                  onChange={handleInputChange}
                />{" "}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={toggleConfirmationPasswordVisibility}
                >
                  {showConfirmationPassword ? (
                    <HiEyeOff className="text-2xl" />
                  ) : (
                    <HiEye className="text-2xl" />
                  )}
                </div>
              </div>
            </div>

            <div className="text-dark-gray">
              <p className="font-bold">Password Requirements:</p>
              <p>Minimum length of 8 characters</p>
              <p>At least one number</p>
              <p>At least one capital letter</p>
              <p>At least one special symbol</p>
            </div>
          </div>

          <div className="flex flex-col w-full">
            {" "}
            {/* address fields */}
            <p className="text-2xl text-secondary-color font-main-font tracking-wide mb-2 underline">
              Address
            </p>
            <div className="flex flex-col justify-center md:justify-between md:flex-row gap-[0.5rem] w-full">
              {/* address line 1 field */}
              <div className="mb-4 w-full">
                <Label
                  htmlFor="address1"
                  className="text-xs visually-hidden"
                  value="Address Line 1"
                />
                <TextInput
                  aria-label="Address Line 1"
                  id="address1"
                  type="text"
                  name="address1"
                  icon={FaHouse}
                  placeholder="Addrss Line 1 *"
                  required={true}
                  shadow
                  className="input"
                  style={{
                    backgroundColor: "var(--bg-white-color)",
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                  onChange={handleInputChange}
                />
              </div>
              {/* address line 2 field */}
              <div className="mb-4 w-full">
                <Label
                  htmlFor="address2"
                  className="text-xs visually-hidden"
                  value="Address Line 2"
                />
                <TextInput
                  aria-label="Enter your street name here"
                  id="address2"
                  type="text"
                  name="address2"
                  icon={SiGooglestreetview}
                  placeholder="Address Line 2 "
                  shadow
                  className="input"
                  style={{
                    backgroundColor: "var(--bg-white-color)",
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center md:justify-between md:flex-row gap-[0.5rem] w-full">
              {/* city field */}
              <div className="mb-4 w-full">
                <Label
                  htmlFor="city"
                  className="text-xs visually-hidden"
                  value="City"
                />
                <TextInput
                  aria-label="Enter your city name here"
                  id="city"
                  type="text"
                  name="city"
                  icon={FaTreeCity}
                  placeholder="City *"
                  required={true}
                  shadow
                  className="input"
                  style={{
                    backgroundColor: "var(--bg-white-color)",
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                  onChange={handleInputChange}
                />
              </div>

              {/* Postcode */}
              <div className="mb-4 w-full">
                <Label
                  htmlFor="zipCode"
                  className="text-xs visually-hidden"
                  value="City"
                />
                <TextInput
                  aria-label="Enter your city name here"
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  icon={GiPostOffice}
                  placeholder="Postcode *"
                  required={true}
                  shadow
                  className="input"
                  style={{
                    backgroundColor: "var(--bg-white-color)",
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center md:justify-between md:flex-row gap-[0.5rem] w-full">
              {/* state/country field */}
              <div className="mb-4 w-full">
                <Label
                  htmlFor="state"
                  className="text-xs visually-hidden"
                  value="State"
                />
                <TextInput
                  aria-label="Enter your country name here"
                  id="state"
                  type="text"
                  name="state"
                  icon={FaMapLocation}
                  placeholder="State/Country"
                  shadow
                  className="input"
                  style={{
                    backgroundColor: "var(--bg-white-color)",
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                  onChange={handleInputChange}
                />
              </div>

              {/* country field */}
              <div className="w-full">
                <Label
                  htmlFor="country"
                  className="text-xs visually-hidden"
                  value="Country"
                />
                <TextInput
                  aria-label="Enter your country name here"
                  id="country"
                  name="country"
                  type="text"
                  icon={FaMapLocation}
                  placeholder="Country *"
                  required={true}
                  shadow
                  className="input"
                  style={{
                    backgroundColor: "var(--bg-white-color)",
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                  onChange={handleInputChange}
                  disabled={true}
                  value="Germany"
                />
              </div>
            </div>
          </div>

          <div>
            {/* terms and conditions */}
            <div className="flex items-center gap-[0.6rem]">
              <Checkbox
                id="agree"
                className=" border-font-family-color checked:border-none checked:outline-none checked:bg-secondary-color focus:ring-transparent dark:ring-offset-transparent !important cursor-pointer"
                checked={formData.agree}
                onChange={handleCheckboxChange}
              />
              <Label htmlFor="agree" className="text-font-family-color">
                I agree with the&nbsp;
                <Link
                  to="/terms"
                  className="text-secondary-color font-bold underline"
                >
                  terms and conditions.
                </Link>
              </Label>
            </div>

            <div className="flex justify-start mt-6">
              <Button className="custom-button-style" type="submit">
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>{" "}
      <img
        src="src/assets/images/biobaum_about_footer_img.webp"
        alt="Footer Image"
        className="w-full"
      />
    </main>
  );
};

export default Register;
