import { IoIosArrowForward } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";
const News = () => {
  const titles = ["Blog News", ""];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "News" };
  return (
    <div className="bg-bg-page-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <EachPageHeader title={titles[0]} subtitle={titles[1]} />
      <div>
        {/* cards container */}
        <div className=" flex flex-wrap justify-center gap-5 pl-2 pr-2 pb-5">
          {/* the first card */}

          <div className=" max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-white-color hover:shadow-lg hover:rounded-lg">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="src/assets/images/news_images/news1.jpg"
                alt=""
              />
            </a>

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="text-xs text-font-family-color pt-4 pb-2">
                July 2023
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center py-1 text-sm font-medium text-center text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Read more{" "}
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                {/*   <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> */}
              </a>
            </div>
          </div>

          {/* the second card */}
          <div className="bg-white-color shadow-md hover:shadow-lg hover:rounded-lg max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="src/assets/images/news_images/news2.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="text-xs text-font-family-color pt-4 pb-2">
                April 2023
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center py-1 text-sm font-medium text-center text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Read more{" "}
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                {/*   <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> */}
              </a>
            </div>
          </div>

          {/* the third card */}
          <div className="bg-white-color shadow-md hover:shadow-lg hover:rounded-lg max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="src/assets/images/news_images/news3.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="text-xs text-font-family-color pt-4 pb-2">
                March 2023
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center py-1 text-sm font-medium text-center text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Read more{" "}
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                {/*   <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className="bg-bg-page-color w-full"
        src="src/assets/images/news_images/leaves_background.png"
        alt=""
      />
    </div>
  );
};
export default News;
