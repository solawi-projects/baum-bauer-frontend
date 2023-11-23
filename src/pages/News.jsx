import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";

const News = () => {
  const titles = ["Blog News", ""];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "News" };

  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:4000/api/newsArticle"
        );
        setNewsItems(response.data);
      } catch (err) {
        setError("Failed to load news articles");
        console.error(err.response || err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsArticles();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-bg-page-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <EachPageHeader title={titles[0]} subtitle={titles[1]} />
      <div className="flex flex-wrap justify-center gap-5 pl-2 pr-2 pb-5">
        {newsItems.map((item) => (
          <div
            key={item._id}
            className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:rounded-lg"
          >
            <Link to={`/news/${item._id}`}>
              <img
                className="rounded-t-lg"
                src={item.imageUrl}
                alt={item.title}
              />
            </Link>
            <div className="p-5">
              <Link to={`/news/${item._id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </Link>
              <p className="text-xs text-font-family-color pt-4 pb-2">
                {new Date(item.dateCreated).toLocaleDateString()}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <Link
                to={`/news/${item._id}`}
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
