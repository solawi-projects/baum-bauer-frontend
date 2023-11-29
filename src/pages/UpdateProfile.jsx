import React, { useState, useEffect } from "react";
import { Button, TextInput, Label } from "flowbite-react";
import DashboardLinks from "../components/DashboardLinks";
import MobileDashboardLinks from "../components/MobileDashboardLinks";
import backgroundImage from "../assets/images/leaves_background_01.webp";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../components/PageBreadcrumb";

const UpdateProfile = () => {
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Update Profile" };

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postcode: "",
    stateCountry: "",
    country: "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };

  const handleUpdate = () => {
    console.log("Form values:", formValues);
  };

  return (
    <main>
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <div className="relative w-full mx-auto xs:p-0 p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="w-[100%] lg:w-[90%] xl:w-[80%] bg-white rounded-[15px] p-6 xs:p-2 md:p-4 lg:p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
          <div className="bg-secondary-color rounded-[15px] w-[100%] p-4 mx-auto text-white flex flex-row">
            <div
              className="rounded-full bg-white w-[40px] h-[40px] mr-[10px]"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="src/assets/images/tree_icon.svg"
                alt=""
                style={{ width: "35px", height: "35px", borderRadius: "50%" }}
              />
            </div>{" "}
            <h3 className="text-4xl font-main-font"> Dashboard</h3>
          </div>

          <div className="flex flex-col md:flex-row mt-10 gap-[1rem] md:gap-[2rem]">
            {/* Dashboard Links */}
            <DashboardLinks />
            <MobileDashboardLinks />

            {/* Form */}
            <div className="w-[100%] md:w-[75%]">
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/tree.png"
                  alt="Tree Icon"
                  className="w-[40px] h-[40px] mr-2"
                />{" "}
                <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                  Update Your Profil
                </h3>
              </div>
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 mt-10">
                {/* First Row */}
                <div className="mb-4">
                  <Label htmlFor="firstName" className="visually-hidden">
                    First Name
                  </Label>
                  <TextInput
                    required
                    id="firstName"
                    type="text"
                    placeholder="First Name *"
                    value={formValues.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="input"
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
                <div className="mb-4">
                  <Label htmlFor="lastName" className="visually-hidden">
                    Last Name
                  </Label>
                  <TextInput
                    required
                    id="lastName"
                    type="text"
                    placeholder="Last Name *"
                    value={formValues.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="input"
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

                {/* Second Row */}
                <div className="mb-4">
                  <Label htmlFor="email" className="visually-hidden">
                    Email Address
                  </Label>
                  <TextInput
                    required
                    id="email"
                    type="email"
                    placeholder="Email Address *"
                    value={formValues.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="input"
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
                <div className="mb-4">
                  <Label htmlFor="phoneNumber" className="visually-hidden">
                    Phone Number
                  </Label>
                  <TextInput
                    required
                    id="phoneNumber"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formValues.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    className="input"
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

                {/* Third Row */}
                <div className="mb-4">
                  <Label htmlFor="addressLine1" className="visually-hidden">
                    Address Line 1
                  </Label>
                  <TextInput
                    required
                    id="addressLine1"
                    type="text"
                    placeholder="Address Line 1 *"
                    value={formValues.addressLine1}
                    onChange={(e) =>
                      handleInputChange("addressLine1", e.target.value)
                    }
                    className="input"
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
                <div className="mb-4">
                  <Label htmlFor="addressLine2" className="visually-hidden">
                    Address Line 2
                  </Label>
                  <TextInput
                    id="addressLine2"
                    type="text"
                    placeholder="Address Line 2"
                    value={formValues.addressLine2}
                    onChange={(e) =>
                      handleInputChange("addressLine2", e.target.value)
                    }
                    className="input"
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

                {/* Fourth Row */}
                <div className="mb-4">
                  <Label htmlFor="city" className="visually-hidden">
                    City
                  </Label>
                  <TextInput
                    required
                    id="city"
                    type="text"
                    placeholder="City *"
                    value={formValues.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="input"
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
                <div className="mb-4">
                  <Label htmlFor="postcode" className="visually-hidden">
                    Postcode
                  </Label>
                  <TextInput
                    required
                    id="postcode"
                    type="text"
                    placeholder="Postcode *"
                    value={formValues.postcode}
                    onChange={(e) =>
                      handleInputChange("postcode", e.target.value)
                    }
                    className="input"
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

                {/* Fifth Row */}
                <div className="mb-4">
                  <Label htmlFor="stateCountry" className="visually-hidden">
                    State/Country
                  </Label>
                  <TextInput
                    id="stateCountry"
                    type="text"
                    placeholder="State/Country"
                    value={formValues.stateCountry}
                    onChange={(e) =>
                      handleInputChange("stateCountry", e.target.value)
                    }
                    className="input"
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
                <div className="mb-4">
                  <Label htmlFor="country" className="visually-hidden">
                    Country
                  </Label>
                  <TextInput
                    required
                    id="country"
                    type="text"
                    placeholder="Country *"
                    value={formValues.country}
                    onChange={(e) =>
                      handleInputChange("country", e.target.value)
                    }
                    className="input"
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
              </div>
              {/* Update Button */}
              <div className="text-center flex justify-center mb-6">
                <Button
                  className="custom-button-style"
                  onClick={handleUpdate}
                  aria-label="Update Profile"
                >
                  Update Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <img
        src="src/assets/images/biobaum_contact_footer_img.webp"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default UpdateProfile;
