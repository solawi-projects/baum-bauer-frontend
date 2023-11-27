import React, { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";

const News = () => {
  const titles = ["Bio Blog News", ""];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "News" };

  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/newsArticle");
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
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {newsItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:rounded-lg overflow-hidden"
            >
              <Link to={`/news/${item._id}`}>
                <img
                  className="w-full h-48 object-cover" // Fixed height for all news thumbnail images
                  src={item.imageUrl}
                  alt={item.title}
                />
              </Link>
              <div className="flex flex-col justify-between p-5 h-full">
                <div>
                  <Link to={`/news/${item._id}`}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </Link>
                  <p className="text-s py-2 text-gray-600 pt-1">
                    {new Date(item.dateCreated).toLocaleDateString()}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description.length > 100
                      ? `${item.description.slice(0, 100)}...`
                      : item.description}
                  </p>
                </div>
                <Link
                  to={`/news/${item._id}`}
                  className="inline-flex items-center py-1 text-s font-medium text-center text-secondary-color hover:underline mt-4"
                >
                  Continue Reading <IoIosArrowForward />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Image */}
      <img
        className="bg-bg-page-color w-full"
        src="src/assets/images/news_images/leaves_background.png"
        alt="News Footer Image"
      />
    </div>
  );
};

export default News;
