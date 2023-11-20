import { Accordion } from "flowbite-react";
import { HiHome } from "react-icons/hi";

import "../components/Faq.css";
import treeicon from "../assets/tree.png";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";

const Faq = () => {
  const titles = ["FAQ", "We have summarized your inquiries as following"];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "FAQ" };
  const data = [
    {
      Question: " What is a tree sponsorship program?",
      Answer:
        "A tree sponsorship program allows individuals or organizations to contribute towards the planting and maintenance of trees. Sponsors typically support environmental initiatives by funding the growth and care of trees.",
    },
    {
      Question: " How does tree sponsorship work?",
      Answer:
        " Tree sponsorship involves making a financial contribution to support the planting and maintenance of a tree. Sponsors may receive updates on the tree's growth, its environmental impact, and other related information.",
    },
    {
      Question: " Can I choose the location for my sponsored tree?",
      Answer:
        " Depending on the program, some sponsors may have the option to choose a general location for their tree. However, specific locations are often determined by environmental considerations and the organization's planting strategy.",
    },
    {
      Question: " Can I choose the location for my sponsored tree?",
      Answer:
        " Depending on the program, some sponsors may have the option to choose a general location for their tree. However, specific locations are often determined by environmental considerations and the organization's planting strategy.",
    },
    {
      Question: " Can I choose the location for my sponsored tree?",
      Answer:
        " Depending on the program, some sponsors may have the option to choose a general location for their tree. However, specific locations are often determined by environmental considerations and the organization's planting strategy.",
    },
    // Add more questions and answers as needed
  ];

  return (
    <div className="bg-bg-page-color text-font-family-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <EachPageHeader title={titles[0]} subtitle={titles[1]} />
      <div className="faq-container">
        {data.map((item, index) => (
          <Accordion collapseAll className="Accord-container" key={index}>
            <Accordion.Panel className="Panel">
              <Accordion.Title className="texts title">
                <img className="imageicon" src={treeicon}></img>
                <div className="text-3xl font-thin">{item.Question}</div>
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 texts">{item.Answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        ))}
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
