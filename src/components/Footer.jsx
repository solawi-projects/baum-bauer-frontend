import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import { FaExternalLinkAlt, FaAddressBook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import logoImage from "../assets/images/BioBaumBauer_Logo.svg";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <>
      {/* <div className="bg-bg-header-footer text-font-family-color ">
        <h6 className="text-center pt-2 pb-6 ">Links</h6>
        <div className="flex justify-center gap-10 underline mb-5 text-xs ">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/sponsor">Sponsor</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="flex justify-center gap-3 text-2xl p-4">
          <FaFacebook className="" />
          <FaInstagramSquare />
          <AiFillTwitterCircle />
          <IoLogoTiktok />
        </div>
        <p
          className="text-center text-xs pt-4
        pb-4"
        >
          COPYRIGHT<span> &copy;</span> 2023{" "}
          <span className="font-bold">BioBaumBauer. </span>
          ALL RIGHTS RESERVED
        </p>
      </div> */}
      <div className="bg-bg-header-footer text-font-family-color">
        <div className="container mx-auto flex flex-col py-10">
          <section className="flex flex-row flex-wrap py-4 px-5 gap-16">
            <div className="flex flex-col gap-5 max-w-md grow-2 w-full">
              <p className="flex justify-start items-center gap-2">
                <img
                  src={logoImage}
                  className="w-20 shadow-lg rounded-full"
                  alt="BioBaumBauer_Logo"
                />
                <span className="text-3xl font-main-font text-darkgreen-color">
                  Bio Baum Bauer
                </span>
              </p>
              <p className="text-justify font-sans antialiased whitespace-normal text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt iusto suscipit officiis id asperiores rerum, omnis
                labore maxime. Ratione, magni quibusdam? Dolores facere minus
                tempora dolorem veritatis doloremque, vel aspernatur?
              </p>
              <p className="text-lg font-bold">Follow Us</p>
              <div className="flex justify-start gap-3 text-2xl pr-4 mt-2">
                <a
                  className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
                <a
                  className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp />
                </a>
                <a
                  className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX />
                </a>
                <a
                  className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTiktok />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 max-w-md grow-1 w-full">
              <h3 className="flex items-center gap-1 text-lg font-sans font-bold text-darkgreen-color">
                <FaExternalLinkAlt /> <span>Links to Pages</span>
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  to="/"
                  className="flex items-center gap-1 transition transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color"
                >
                  <MdDoubleArrow />
                  <span>Home</span>
                </Link>
                <Link
                  to="/sponsor"
                  className="flex items-center gap-1 transition transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color"
                >
                  <MdDoubleArrow />
                  <span>Trees</span>
                </Link>
                <Link
                  to="/news"
                  className="flex items-center gap-1 transition transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color"
                >
                  <MdDoubleArrow />
                  <span>News</span>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-1 transition transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color"
                >
                  <MdDoubleArrow />
                  <span>About</span>
                </Link>
                <Link
                  to="/gallery"
                  className="flex items-center gap-1 transition transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color"
                >
                  <MdDoubleArrow />
                  <span>Gallery</span>
                </Link>
                <Link
                  to="/gap"
                  className="flex items-center gap-1 transition transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color"
                >
                  <MdDoubleArrow />
                  <span>FAQ</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-1 transition transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color"
                >
                  <MdDoubleArrow />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 max-w-md grow-1 w-full">
              <h3 className="flex items-center gap-1 text-lg font-sans font-bold text-darkgreen-color">
                <FaAddressBook /> <span>Address</span>
              </h3>
              <p>
                10178 Berlin, Germany <br />
                Alexanderstrasse. 4
              </p>
            </div>
          </section>
          <hr />
          <p className="text-center text-md p-4">
            COPYRIGHT<span> &copy;</span> 2023
            <span className="font-bold">BioBaumBauer. </span>
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
