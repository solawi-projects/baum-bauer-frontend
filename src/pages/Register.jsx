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
import backgroundImage from "../assets/images/leaves_background_02.webp";

const Register = () => {
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
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="flex flex-col justify-start items-start gap-[2rem] w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-[15px] p-4 sm:p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px] xs:py-12 py-10">
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
                  htmlFor="firstname"
                  value="First Name"
                  className="visually-hidden"
                />
                <TextInput
                  aria-label="Type your first name here"
                  id="firstname"
                  type="text"
                  icon={IoMdPerson}
                  placeholder="First Name *"
                  required
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
                />
              </div>

              {/* last name field */}
              <div className="mb-4 w-full">
                <Label
                  htmlFor="lastname"
                  value="Last Name"
                  className="visually-hidden"
                />
                <TextInput
                  aria-label="Type your last name here"
                  id="lastname"
                  type="text"
                  icon={IoMdPerson}
                  placeholder="Last Name *"
                  required
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
                />
              </div>
            </div>

            <div className="flex flex-col justify-center md:justify-between md:flex-row gap-[0.5rem] w-full">
              {/* phone number field */}
              <div className="flex flex-col w-full">
                {" "}
                <div className="mb-0 w-full">
                  <Label htmlFor="phoneNumber" className="visually-hidden">
                    Phone Number
                  </Label>
                  <TextInput
                    required
                    id="phoneNumber"
                    type="tel"
                    name="phone"
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
                  htmlFor="emailAddress"
                  value="Email Address"
                  className="visually-hidden"
                />
                <TextInput
                  aria-label="Type your email address here"
                  id="emailAddress"
                  icon={MdEmail}
                  type="email"
                  placeholder="Email Address *"
                  required
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
                />
              </div>
            </div>

            <div className="flex flex-col justify-center md:justify-between md:flex-row gap-[0.5rem] w-full">
              {/* password field */}
              <div className="mb-2 w-full">
                <Label
                  htmlFor="password"
                  value="Password"
                  className="visually-hidden"
                />
                <TextInput
                  aria-label="Enter your password here"
                  id="password"
                  icon={MdOutlineKey}
                  type="password"
                  placeholder="Password *"
                  required
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
                />
              </div>

              {/* confirm password field */}
              <div className="mb-2 w-full">
                <Label
                  htmlFor="passwordC"
                  value="Confirm Password"
                  className="visually-hidden"
                />
                <TextInput
                  aria-label="Re-enter your password here"
                  id="passwordC"
                  icon={MdOutlineKey}
                  type="password"
                  placeholder="Confirm Password *"
                  required
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
                />
              </div>
            </div>

            <div className="text-dark-gray">
              <p className="font-bold">Password Requirements:</p>
              <p>Minimum length of 6 characters</p>
              <p>At least one number</p>
              <p>At least one number</p>
              <p>At least one capital letter</p>
              <p>At least one special symbol</p>
              <p>
                (&#33; &#64; &#35; &#36; &#37; &#94; &#38; &#42; &#95; &#43;
                &#123; &#125; &#58; &lt; &gt; &#63;)
              </p>
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
                  htmlFor="houseNumber"
                  className="text-xs visually-hidden"
                  value="House Number"
                />
                <TextInput
                  aria-label="Enter your house number here"
                  id="houseNumber"
                  type="text"
                  icon={FaHouse}
                  placeholder="Addrss Line 1 *"
                  required
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
                />
              </div>
              {/* address line 2 field */}
              <div className="mb-4 w-full">
                <Label
                  htmlFor="street"
                  className="text-xs visually-hidden"
                  value="Street"
                />
                <TextInput
                  aria-label="Enter your street name here"
                  id="street"
                  type="text"
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
                  icon={FaTreeCity}
                  placeholder="City *"
                  required
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
                />
              </div>
              {/* Postcode */}
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
                  icon={GiPostOffice}
                  placeholder="Postcode *"
                  required
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
                />
              </div>
            </div>
            <div className="flex flex-col justify-center md:justify-between md:flex-row gap-[0.5rem] w-full">
              {/* state/country field */}
              <div className="mb-4 w-full">
                <Label
                  htmlFor="country"
                  className="text-xs visually-hidden"
                  value="Country"
                />
                <TextInput
                  aria-label="Enter your country name here"
                  id="country"
                  type="text"
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
                  type="text"
                  icon={FaMapLocation}
                  placeholder="Country *"
                  required
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
              />
              <Label htmlFor="agree" className="text-font-family-color">
                I agree with the&nbsp;
                <Link
                  href="#"
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
        </div>
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
