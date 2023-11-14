import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";

function Footer() {
  return (
    <>
      <div className="bg-bg-header-footer text-font-family-color ">
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
      </div>
    </>
  );
}

export default Footer;
