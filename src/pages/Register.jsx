
import {
  Breadcrumb,
  Label,
  TextInput,
  Checkbox,
  Button,

} from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineKey } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";
import { FaTreeCity } from "react-icons/fa6";
import { SiGooglestreetview } from "react-icons/si";
import { FaHouse } from "react-icons/fa6";

import { Link } from "react-router-dom";
import EachPageHeader from "../components/EachPageHeader";
const Register = () => {
  const titles =['Register Now', 'Please enter your personal information in the form below']
  return (
    <>
      <Breadcrumb
        aria-label=""
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Registeration Form</Breadcrumb.Item>
      </Breadcrumb>
      <EachPageHeader title={titles[0]} subtitle={titles[1]} />
     

      {/* registration form */}

      <section className="flex justify-center m-8">
        <form className="max-w-xl w-full px-6 py-6 border rounded-lg shadow-md  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-7">
            <div>{/* first,last and username fields container */}
              {/*first name field  */}
              <div className="mb-2">
                <div className="mb-1 block">
                  <Label htmlFor="firstname" value="First Name" />
                </div>
                <TextInput
                  aria-label="Type your first name here"
                  id="firstname"
                  type="text"
                  icon={IoMdPerson}
                  placeholder="Enter your Name"
                  required
                  shadow
                  style={{fontSize:12}} 
                />
              </div>

              {/* last name field */}
              <div className="mb-2">
                <div className="mb-1 block">
                  <Label htmlFor="lastname" value="Last Name" />
                </div>
                <TextInput
                  aria-label="Type your last name here"
                  id="lastname"
                  type="text"
                  icon={IoMdPerson}
                  placeholder="Enter your Lastname"
                  required
                  shadow
                  style={{fontSize:12}} 
         
                />
              </div>

              {/* username field */}
              <div className="mb-2">
                <div className="mb-1 block">
                  <Label htmlFor="username" value="User Name" />
                </div>
                <TextInput
                  aria-label="Enter an Username"
                  id="username"
                  type="text"
                  icon={IoMdPerson}
                  placeholder="Enter your username"
                  required
                  shadow
                  style={{fontSize:12}} 
          
                />
              </div>
            </div>

            <div>    {/* email field */}
          
              <div className="mb-2">
                <div className="mb-1 block">
                  <Label htmlFor="emailAddress" value="Email Address" />
                </div>
                <TextInput
                  aria-label="Type here your email address"
                  id="emailAddress"
                  icon={MdEmail}
                  type="email"
                  placeholder="Enter your Email"
                  required
                  shadow
                  style={{fontSize:12}} 
                  className="text-base"
                />
              </div>

              {/* password field */}
              <div className="mb-2">
                <div className="mb-1 block">
                  <Label htmlFor="password" value="Password" />
                </div>
                <TextInput
                  aria-label=""
                  id="password"
                  icon={MdOutlineKey}
                  type="password"
                  placeholder="Enter your Password"
                  required
                  shadow
                  style={{fontSize:12}} 
                />
              </div>

              {/* confirm password field */}
              <div className="mb-2">
                <div className="mb-1 block">
                  <Label htmlFor="passwordC" value="Confirm Password" />
                </div>
                <TextInput
                  aria-label="the password should match"
                  id="password"
                  icon={MdOutlineKey}
                  type="password"
                  placeholder="Repeat your Password"
                  required
                  shadow
                  style={{fontSize:12}} 
                  
                />
              </div>
            </div>
          </div>

          {/* address fields */}
          <p className="ml-6">Address</p>
          <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 mt-2 pl-6 pr-6 ">
            <div className=" flex flex-col gap-4 mt-1">{/* house number and street container */}
              {/* house number field */}
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="houseNumber" className="text-xs" value="House Number" />
                </div>
                <TextInput
                style={{fontSize:12}} 
                  aria-label=""
                  id="houseNumber"
                  type="text"
                  icon={FaHouse}
                  placeholder="Enter your House Number"
                  required
                  shadow
           
               

                />
              </div>

              <div>   {/* street field */}
             
                <div className="mb-1">
                  <Label htmlFor="street" className="text-xs" value="Street" />
                </div>
                <TextInput
                  aria-label=""
                  id="street"
                  type="text"
                  icon={SiGooglestreetview}
                  placeholder="Enter your Street"
                  required
                  shadow
                  style={{fontSize:12}} 

                />
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-1 mb-2">   {/* city and country container */}
           
              <div> {/* city field */}
                <div className="mb-1">
                 
                  <Label htmlFor="city" className="text-xs"  value="City" />
                </div>
                <TextInput
                  aria-label=""
                  id="city"
                  type="text"
                  icon={FaTreeCity}
                  placeholder="Enter your City"
                  required
                  shadow
                  style={{fontSize:12}} 
   
                />
              </div>
              <div>  {/* coutry field */}
                <div className="mb-1">
                
                  <Label htmlFor="country" className="text-xs" value="Country" />
                </div>
                <TextInput
                  aria-label=""
                  id="country"
                  type="text"
                  icon={FaMapLocation }
                  placeholder="Enter your Country"
                  required
                  shadow
                  style={{fontSize:12}} 
                />
              </div>
            </div>
          </div>
          <div>
            {/* terms an conditions */}
            <div className="flex items-center ml-6 gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree" className="">
                I agree with the&nbsp;
                <Link
                  href="#"
                  className="text-font-family-color hover:underline hover"
                >
                  terms and conditions
                </Link>
              </Label>
            </div>
            <div className="flex justify-center mt-6">
              <Button
                outline
                gradientDuoTone="whiteToOrange"
                className="mb-5  bg-font-family-color  hover:bg-bg-header-footer hover:text-white-color hover:border-white-color"
                type="submit"
              >
                Register
              </Button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default Register;
