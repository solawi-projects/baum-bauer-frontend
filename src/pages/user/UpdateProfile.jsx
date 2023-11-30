import React, { useState, useEffect } from "react";
import { Button, TextInput, Label } from "flowbite-react";
import DashboardLinks from "../../components/DashboardLinks";
import MobileDashboardLinks from "../../components/MobileDashboardLinks";
import backgroundImage from "../../assets/images/leaves_background_01.webp";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../../components/PageBreadcrumb";

import axios from '../../utils/axiosInstance'
const UpdateProfile = () => {
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Update Profile" };

const [user,setUser]=useState()
const UId='65673cc189843980368351b0'

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobilePhone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    zipCode: "",
    stateCountry: "",
    country: "",
    state:'',
  });
   const showuser = async () => {
    try {
      const response = await axios.get(`/api/users/find-by-id/${UId}`);
      if (response.status === 200) {      
        console.log(response.data.user)
      setUser(response.data.user)
      }
    } catch (error) {
      console.error("Error fetching Trees:", error.message);
      throw error;
    }
  };
  useEffect(() => {
    showuser();
  }, []);

  useEffect(() => {
    // Set formValues based on user data when user data is available
    if (user) {
      setFormValues({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        mobilePhone: user.mobilePhone || "",
        addressLine1: user.address?.address1 || "",
        addressLine2: user.address?.address2 || "",
        city: user.address?.city || "",
        zipCode: user.address?.zipCode || "",
        state: user.address?.state || "",
        country: user.address?.country || "",

      });
    }
  }, [user]);

  const handleUpdate = async() => {
/*     console.log("Form values:", formValues);

 */
// eslint-disable-next-line react-hooks/rules-of-hooks

const updatedData = {
  // Include all the fields you want to update
  firstName: formValues.firstName,
  lastName: formValues.lastName,
  email: formValues.email,
  mobilePhone: formValues.mobilePhone,
  address: {
    city: formValues.city,
    zipCode:formValues.zipCode,
    country: formValues.country,
    state:formValues.state,}
  };
try {

    // Add other address fields as needed
  
  // ... add other fields as needed

console.log(updatedData.city)
  const response = await axios.patch(`/api/users/update-by-id/${user._id}`, updatedData);
  console.log(updatedData)
  if (response.status === 200) {
    console.log(updatedData.address.city)
    console.log(response.data)
  }
} catch (error) {
  console.error("Error fetching Trees:", error.message);
  throw error;
}
/* const handleInputChange = (fieldName, value) => {
  setFormValues({
    ...formValues,
    [fieldName]: value,
  });
}; */};

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
                  Edit Your Profile
                </h3>
              </div>
              {/* Form Fields */}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 mt-10">
                {/* First Row */}
                <div className="mb-4">
                  <Label htmlFor="firstName" className="">
                    First Name
                 </Label>
                  <TextInput
                    
                    id="firstName"
                    type="text"
                    value={user?.firstName || ""}
                    readOnly
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
                  <Label htmlFor="lastName" className="">
                    Last Name
                  </Label>
                  <TextInput
                    required
                    id="lastName"
                    type="text"
                    value={user?.lastName || ""}

readOnly     
                    onChange={(e) =>console.log(e)
/*                       handleInputChange("lastName", e.target.value)
 */                    }
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
                  <Label htmlFor="email" className="">
                    Email Address
                  </Label>
                  <TextInput
                    required
                    id="email"
                    type="email"
                    value={user?.email || ""}

                    readOnly
                    onChange={(e) =>console.log(e) /* handleInputChange("email", e.target.value) */}
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
                  <Label htmlFor="phoneNumber" className="">
                    Phone Number *
                  </Label>
                  <TextInput
                    required
                    id="phoneNumber"
                    type="text"
                    name="phone"
                    value={formValues.mobilePhone || null ||user?.mobilePhone}

                    onChange={(e) => setFormValues({ ...formValues, mobilePhone: e.target.value })}
                                       
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
                  <Label htmlFor="addressLine1" className="">
                    Address Line 1 *
                  </Label>
                  <TextInput
                    required
                    id="addressLine1"
                    type="text"
                    value={formValues.addressLine1  || null ||user?.address.address1}

                    onChange={(e) => setFormValues({ ...formValues, addressLine1: e.target.value })}
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
                  <Label htmlFor="addressLine2" className="">
                    Address Line 2
                  </Label>
                  <TextInput
                    id="addressLine2"
                    type="text"
                    value={formValues.addressLine2  || null ||user?.address.address2}

                    onChange={(e) => setFormValues({ ...formValues, addressLine2: e.target.value })}
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
                  <Label htmlFor="city" className="">
                    City *
                  </Label>
                  <TextInput
                    required
                    id="city"
                    type="text"
                    value={formValues.city  || null ||user?.address.city}

                    onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
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
                  <Label htmlFor="postcode" className="">
                    Postcode *
                  </Label>
                  <TextInput
                    required
                    id="postcode"
                    type="text"
                    value={formValues.zipCode  || null ||user?.address.zipCode}

                    onChange={(e) => setFormValues({ ...formValues, zipCode: e.target.value })}
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
                  <Label htmlFor="stateCountry" className="">
                    State
                  </Label>
                  <TextInput
                    id="stateCountry"
                    type="text"
                    value={formValues.state  || null ||user?.address.state}

                    onChange={(e) => setFormValues({ ...formValues, state: e.target.value })}
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
                  <Label htmlFor="country" className="">
                    Country *
                  </Label>
                  <TextInput
                    required
                    id="country"
                    type="text"
                    value={formValues.country  || null ||user?.address.country}

                    onChange={(e) => setFormValues({ ...formValues, country: e.target.value })}
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
                  Save Changes
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
