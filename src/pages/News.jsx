import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";

const News = () => {
  const titles = ["Blog News", ""];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "News" };

  const newsItems = [
    // News Article 1
    {
      id: "news1",
      title: "News article number 1",
      date: "July 2023",
      summary:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imageUrl: "src/assets/images/news_images/news1.jpg",
    },
    // News Article 2
    {
      id: "news2",
      title: "News article number 2",
      date: "July 2023",
      summary:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imageUrl: "src/assets/images/news_images/news1.jpg",
    },
    // News Article 3
    {
      id: "news3",
      title: "News article number 3",
      date: "July 2023",
      summary:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imageUrl: "src/assets/images/news_images/news1.jpg",
    },
  ];


  return (
    <div className="bg-bg-page-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <EachPageHeader title={titles[0]} subtitle={titles[1]} />
      <div className="flex flex-wrap justify-center gap-5 pl-2 pr-2 pb-5">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:rounded-lg"
          >
            <Link to={`/news/${item.id}`}>
              <img
                className="rounded-t-lg"
                src={item.imageUrl}
                alt={item.title}
              />
            </Link>
            <div className="p-5">
              <Link to={`/news/${item.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </Link>
              <p className="text-xs text-font-family-color pt-4 pb-2">
                {item.date}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.summary}
              </p>
              <Link
                to={`/news/${item.id}`}
                className="inline-flex items-center py-1 text-sm font-medium text-center text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Read more <IoIosArrowForward />
              </Link>
            </div>
          </div>
        ))}
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
