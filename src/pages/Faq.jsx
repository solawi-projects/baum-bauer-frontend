/* eslint-disable no-empty-pattern */
import { Accordion } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import axios from "../utils/axiosInstance";
import "../assets/styles/Faq.css";
import treeicon from "../assets/tree.png";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";
import { useState, useEffect } from "react";

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
        <div className="container mx-auto text-2xl">
          <h2>
            Showing {limit} to {skip + limit} of {total} FAQs
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
        <div className="mx-auto text-2xl flex gap-7">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNex}>Next</button>
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
              <div className="mt-6 flex max-w-md gap-x-4">
                <label className="sr-only">Enter Message </label>
                <textarea
                  id="text-area"
                  name="message"
                  type="message"
                  autoComplete="message"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10    focus:outline-none 
              
                 sm:text-sm sm:leading-6"
                  placeholder="Enter the message..."
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-bg-page-color px-4 py-2 text-sm font-semibold text-font-family-color shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
