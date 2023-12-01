import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";
import { Link } from "react-router-dom";

const Terms = () => {
  const titles = ["Terms and Conditions"];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Terms and Conditions" };

  return (
    <div className="bg-bg-page-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <EachPageHeader title={titles[0]} subtitle={titles[1]} />
      <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white rounded-xl shadow-lg my-10">
        <h2 className="text-3xl font-semibold mt-6 flex justify-center">
          Terms and Conditions Placeholder
        </h2>
        <Link
          to="/register"
          className="text-secondary-color font-bold underline"
        >
          Go back to Registration page...
        </Link>
      </div>

      {/* Footer Image */}
      <img
        className="bg-bg-page-color w-full"
        src="src/assets/images/news_images/leaves_background.png"
        alt="Terms and Conditions Footer Image"
      />
    </div>
  );
};

export default Terms;
