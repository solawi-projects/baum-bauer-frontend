/* eslint-disable no-empty-pattern */
import { Accordion } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import axios from "../utils/axiosInstance";
import "../assets/styles/Faq.css";
import treeicon from "../assets/tree.png";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";
import { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const Faq = () => {
  const titles = ["FAQ", "We have summarized your inquiries as following!"];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "FAQ" };

  const limit = 5;
  const [skip, setSkip] = useState(0);
  const [faqs, setFaqs] = useState([]);
  const [err, setErr] = useState("");
  const [total, setTotal] = useState(0);

  const handlePrev = () => {
    const newSkip = skip - limit;
    if (newSkip <= 0) {
      setSkip(0);
    }
    setSkip(newSkip);
  };
  const handleNex = () => {
    setSkip(limit + skip);
  };

  const getFaqs = () => {
    try {
      axios
        .get(`/api/faq/all?limit=${limit}&skip=${skip}`)
        .then((response) => {
          console.log("Res:", response);
          if (response.status === 200) {
            setFaqs(response.data.data);
            setTotal(response.data.count);
          }
        })
        .catch((err) => {
          if (err.response.status === 500) {
            setErr("Data was not brought");
          }
        });
    } catch (error) {
      console.error("Error fetching FAQs:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    getFaqs();
  }, [skip]);

  return (
    <div className="bg-bg-page-color text-font-family-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <div className="faq-container">
        <EachPageHeader title={titles[0]} subtitle={titles[1]} />
        <div className="container mx-auto text-xl sm:text-2xl pl-4">
          <h2>
            Showing {skip + 1} to {Math.min(skip + limit, total)} of {total} FAQ{" "}
          </h2>
          <p>{err}</p>
        </div>
        {faqs.map((item, index) => (
          <Accordion collapseAll className="Accord-container" key={index}>
            <Accordion.Panel className="Panel">
              <Accordion.Title className="texts title">
                <img className="imageicon" src={treeicon}></img>
                <div className="text-3xl font-thin">{item.Question}</div>
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 texts">{item.Answers}</p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        ))}
        <br />
        <div className="mx-auto text-lg md:text-2xl flex gap-7">
          <button onClick={handlePrev} disabled={skip === 0}>
            Previous
          </button>
          <button onClick={handleNex} disabled={skip + limit >= total}>
            Next
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden email">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-5xl   text-white ">
                Do you have More Questions?{" "}
              </h2>
              <p className="mt-4 text-2xl leading-8 text-gray-300">
                write us here!! we will contact shortly through Email !!{" "}
              </p>
              <div className="mt-6 flex justify-center max-w-md gap-x-4">
                <Link
                  type="submit"
                  className="flex flex-row gap-1 rounded-md bg-bg-page-color px-4 py-4 text-xl font-semibold text-font-family-color shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  to={`/contact`}
                >
                  <IoIosSend className="text-2xl" /> Send a message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
