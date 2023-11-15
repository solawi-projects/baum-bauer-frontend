import {
  Breadcrumb,
  Label,
  TextInput,
  Checkbox,
  Button,
  Textarea,
} from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  const wrapper = {};
  return (
    <div className="bg-bg-page-color text-font-family-color">
      <div className="container mx-auto">
        <Breadcrumb
          aria-label=""
          className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
        >
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Contact</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="container mx-auto flex justify-center items-center h-32">
        <h1 className="font-main-font text-5xl">Contact Page</h1>
      </div>
      <div className="container mx-auto h-10 flex justify-center items-center">
        <p className="">Below, our contact details provided!</p>
      </div>
      <div className="container mx-auto flex flex-wrap columns-2 justify-center items-center gap-28 py-32">
        <section className="max-w-md md:w-1/2 sm:w-1 lg:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center gap-3">
            <h1 className="text-2xl border-b-1 w-auto py-1 border-b-2 mb-3">
              GET IN TOUCH
            </h1>
            <p className="flex flex-row items-center bg-white-color shadow-md hover:shadow-lg hover:rounded-lg p-3 rounded-md gap-2">
              <span className="text-lg">
                <FaLocationDot />
              </span>
              <span className="text-lg">
                10679 Berlin, Germany <br /> Rudolf-Str. 43
              </span>
            </p>
            <p className="flex flex-row items-center bg-white-color shadow-md hover:shadow-lg hover:rounded-lg p-3 rounded-md gap-1">
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
            <p className="flex flex-row items-center bg-white-color shadow-md hover:shadow-lg hover:rounded-lg p-3 rounded-md gap-1">
              <span className="text-lg">
                <FaPhoneSquareAlt />
              </span>
              <span className="text-lg">+4917290838934</span>
            </p>
            <p className="flex flex-row justify-center items-center bg-white-color shadow-md rounded-md p-4 hover:shadow-lg hover:rounded-lg gap-5">
              <span className="rounded-full p-2 border-2 border-font-family-color bg-font-family-color text-white-color">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </span>
              <span className="rounded-full p-2 border-2 border-font-family-color bg-font-family-color text-white-color">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <IoLogoWhatsapp />
                </a>
              </span>
              <span className="rounded-full p-2 border-2 border-font-family-color bg-font-family-color text-white-color">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <BsTwitterX />
                </a>
              </span>
              <span className="rounded-full p-2 border-2 border-font-family-color bg-font-family-color text-white-color">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaTiktok />
                </a>
              </span>
            </p>
          </div>
        </section>
        <section className="max-w-md md:w-1/2 sm:w-1 lg:w-1/2 flex flex-row justify-center items-center">
          <form className="w-full flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="firstname" value="First Name" />
              </div>
              <TextInput
                aria-label="Type here your first name"
                id="firstname"
                type="text"
                icon={IoMdPerson}
                placeholder="Like: Mice"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="lastname" value="Last Name" />
              </div>
              <TextInput
                aria-label="Type here your last name"
                id="lastname"
                type="text"
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
                required
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
                type="email"
                placeholder="mice.plocy@gmail.com"
                required
                shadow
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                aria-label="Type here your your message"
                id="comment"
                placeholder="write your message here..."
                required
                rows={4}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree" className="flex">
                I agree with the&nbsp;
                <Link
                  href="#"
                  className="text-font-family-color hover:underline hover"
                >
                  terms and conditions
                </Link>
              </Label>
            </div>
            <Button
              outline
              gradientDuoTone="whiteToOrange"
              className="bg-font-family-color hover:bg-bg-header-footer hover:text-white-color hover:border-white-color"
              type="submit"
            >
              send your message
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};
export default Contact;
