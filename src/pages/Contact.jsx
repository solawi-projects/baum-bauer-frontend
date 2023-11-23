import { useState, useRef } from "react";
import { Label, TextInput, Checkbox, Button, Textarea } from "flowbite-react";
import Swal from "sweetalert2";
import { HiHome } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { MdEmail, MdDoubleArrow } from "react-icons/md";
import { FaLocationDot, FaYoutube } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneSquareAlt, FaLinkedin, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

import axios from "../utils/axiosInstance";
import EachPageHeader from "../components/EachPageHeader";
import PageBreadcrumb from "../components/PageBreadcrumb";

import { Link } from "react-router-dom";

const Contact = () => {
  const titles = ["Contact Page", "Below, our contact details provided!"];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Contact Page" };

  const [errorMsgs, setErrorMsgs] = useState([]);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const checkboxRef = useRef(false);

  const firsNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleCheckboxChange = () => {
    setIsTermsAccepted(checkboxRef.current.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = await new FormData(event.target);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      emailAddress: formData.get("emailAddress"),
      message: formData.get("message"),
    };

    if (formData.get("agreeToPolicies")) {
      axios
        .post("/api/contact/create", data)
        .then((response) => {
          if (response.status === 201) {
            setErrorMsgs([]);
            Swal.fire({
              icon: "success",
              title:
                "Thanks for your inquiry, we will provide response for you soon",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
              confirmButtonColor: "#5cb85c",
            });

            checkboxRef.current.checked = false;
            setIsTermsAccepted(false);
            firsNameRef.current.value = "";
            lastNameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
          }
        })
        .catch((error) => {
          setErrorMsgs([]);
          // Handle errors that occurred during the POST request
          if (error.response.status === 400) {
            setErrorMsgs(error.response.data.errors);
          }
        });
    }
  };

  return (
    <div className="bg-bg-page-color text-font-family-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <EachPageHeader title={titles[0]} subtitle={titles[1]} />
      <div className="container mx-auto flex justify-center items-center">
        <ul>
          {errorMsgs.map((error, index) => (
            <li
              key={error.path + index}
              className="flex items-center text-red-700"
            >
              <MdDoubleArrow /> <span>&nbsp;{error.msg}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mx-auto flex flex-wrap columns-2 justify-center items-center mt-10 mb-14 gap-16">
        <section className="flex flex-col items-center gap-3 px-3">
          <h2 className="text-2xl border-b-1 w-full py-1 border-b-2">
            GET IN TOUCH
          </h2>
          <p className="flex flex-row w-full items-center bg-white-color shadow-md hover:shadow-lg hover:rounded-lg p-3 rounded-md gap-2">
            <span className="text-lg">
              <FaLocationDot />
            </span>
            <span className="text-lg">
              10679 Berlin, Germany <br /> Rudolf-Str. 43
            </span>
          </p>
          <p className="flex flex-row w-full items-center bg-white-color shadow-md hover:shadow-lg hover:rounded-lg p-3 rounded-md gap-1">
            <span className="text-lg">
              <AiTwotoneMail />
            </span>
            <span className="text-lg">
              <a
                href="mailto:solawi.biobaumbauer@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                solawi.biobaumbauer@gmail.com
              </a>
            </span>
          </p>
          <p className="flex flex-row w-full items-center bg-white-color shadow-md hover:shadow-lg hover:rounded-lg p-3 rounded-md gap-1">
            <span className="text-lg">
              <FaPhoneSquareAlt />
            </span>
            <span className="text-lg">+4917290838934</span>
          </p>
          <p className="flex flex-row w-full justify-center items-center bg-white-color shadow-md rounded-md p-4 hover:shadow-lg hover:rounded-lg gap-5">
            <a
              href="http://"
              className="rounded-full p-2 border-2 border-font-family-color text-font-family-color bg-white-color hover:bg-font-family-color hover:text-white-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="http://"
              className="rounded-full p-2 border-2 border-font-family-color text-font-family-color bg-white-color hover:bg-font-family-color hover:text-white-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="http://"
              className="rounded-full p-2 border-2 border-font-family-color text-font-family-color bg-white-color hover:bg-font-family-color hover:text-white-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </a>

            <a
              href="http://"
              className="rounded-full p-2 border-2 border-font-family-color text-font-family-color bg-white-color hover:bg-font-family-color hover:text-white-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX />
            </a>
            <a
              href="http://"
              className="rounded-full p-2 border-2 border-font-family-color bg-white-color text-font-family-color hover:bg-font-family-color hover:text-white-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </p>
        </section>
        <section className="max-w-md md:w-1/2 sm:w-1 lg:w-1/2 flex flex-row justify-center items-center">
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="firstName" value="First Name" />
              </div>
              <TextInput
                aria-label="Type here your first name"
                id="firstName"
                name="firstName"
                type="text"
                icon={IoMdPerson}
                placeholder="Like: Mice"
                ref={firsNameRef}
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="lastName" value="Last Name" />
              </div>
              <TextInput
                aria-label="Type here your last name"
                id="lastName"
                type="text"
                name="lastName"
                ref={lastNameRef}
                icon={IoMdPerson}
                placeholder="Like: Polocy"
                helperText={
                  <span>
                    Full Name should look like,&nbsp;
                    <span className="bg-white-color px-2 py-1 rounded-md">
                      Mice Polocy
                    </span>
                  </span>
                }
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="emailAddress" value="Email Address" />
              </div>
              <TextInput
                aria-label="Type here your email address"
                id="emailAddress"
                icon={MdEmail}
                ref={emailRef}
                type="email"
                name="emailAddress"
                placeholder="mice.plocy@gmail.com"
                shadow
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="message" value="Your message" />
              </div>
              <Textarea
                aria-label="Type here your your message"
                id="message"
                placeholder="write your message here..."
                name="message"
                rows={4}
                ref={messageRef}
              />
            </div>
            <div className="flex items-center gap-2 ">
              <Checkbox
                id="agree"
                name="agreeToPolicies"
                ref={checkboxRef}
                onChange={handleCheckboxChange}
              />
              <Label htmlFor="agree" className="flex border-red-800">
                I agree with the&nbsp;
                <Link
                  href="#"
                  className="text-font-family-color hover:underline hover"
                >
                  terms and conditions
                </Link>
              </Label>
            </div>
            {isTermsAccepted ? (
              <Button
                outline
                gradientDuoTone="whiteToOrange"
                className="bg-font-family-color hover:bg-bg-header-footer hover:text-white-color hover:border-white-color"
                type="submit"
              >
                send your message
              </Button>
            ) : (
              <Button
                disabled
                outline
                gradientDuoTone="whiteToOrange"
                className="bg-font-family-color hover:bg-bg-header-footer hover:text-white-color hover:border-white-color"
                type="submit"
              >
                send your message
              </Button>
            )}
          </form>
        </section>
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6327705419662!2d13.410731076522424!3d52.521984636082806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1f1ef51c1f%3A0x81d2865ac4d6253a!2sAlexanderstra%C3%9Fe%204%2C%2010178%20Berlin!5e0!3m2!1sen!2sde!4v1700057987685!5m2!1sen!2sde"
          className="w-full h-[650px] border-0 rounded-sm"
          allowFullScreen={true}
          loading="lazy"
          aria-label="Here is the map will find the route to the address!"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};
export default Contact;
