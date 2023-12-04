import React, { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";
import { Fade } from "react-awesome-reveal";


const News = () => {
  const titles = [
    "Bio Blog News",
    "Discover the Latest Stories and Updates from Our Tree Sponsorship Program!",
  ];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "News" };

  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalNews, setTotalNews] = useState(0);
  //pagination 
   const [skip, setSkip] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(
    useMediaQuery({ query: "(max-width: 768px)" })
  );
const limit= isSmallScreen ? 4:8;

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); // add an event listener for the resize event on the window object.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handlePrev = () => {
    const newSkip = skip - limit;
    if (newSkip < 0) {
      setSkip(0);
    } else {
      setSkip(newSkip);
    }
  };

  const handleNex = () => {
    const newSkip = skip + limit;
    if (newSkip >= totalNews) {
  
      setSkip(skip);
    } else {
      setSkip(newSkip);
    }
  };
  const getNewsArticles = () => {
    
    try { 
 
      axios
        .get(`/api/newsArticle/?limit=${limit}&skip=${skip}`)
        .then((response) => {
          console.log("Response is:", response);
          if (response.status === 200) {
            setNewsItems(response.data.articles);
            setTotalNews(response.data.total);
          }
        })
        .catch((error) => {
          if (error.response.status === 500) {
            setError("Data was not fetched from the DB");
          }
        });
    } catch (error) {
      console.error("Error fetching NewsArticles:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    getNewsArticles();
  }, [skip,isSmallScreen]); // this func is updated based on changes in skip and isSmallScreen

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-bg-page-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <EachPageHeader title={titles[0]} subtitle={titles[1]} />
      <div className="container mx-auto text-2xl">
        <h2>
          Showing {skip + 1} to {Math.min(skip + limit, totalNews)} of{" "}
          {totalNews} News Articles
        </h2>
        <p>{error}</p>
      </div>
      <div className="container mx-auto px-4 py-10">
        <Fade delay={100} cascade damping={0.1} duration={3000}>
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
        </Fade>
      </div>
      {/* pagination buttons */}
      <div className="text-2xl flex justify-center gap-7 m-4 text-font-family-color">
        <button onClick={handlePrev} disabled={skip === 0}>
          Previous
        </button>
        <button onClick={handleNex} disabled={skip + limit >= totalNews}>
          Next
        </button>
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
