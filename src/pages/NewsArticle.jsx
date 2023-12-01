import leavesBackground from "../assets/images/news_images/leaves_background.png";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import axios from "../utils/axiosInstance";
import DOMPurify from "dompurify";
import EachPageHeader from "../components/EachPageHeader";
import { Breadcrumb } from "flowbite-react";

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/newsArticle/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("Error fetching article");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  // Go back function

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading)
    return (
      <div className="text-center text-lg font-semibold mt-10">Loading...</div>
    );
  if (error)
    return (
      <div className="text-red-600 text-center text-lg font-semibold mt-10">
        {error}
      </div>
    );
  if (!article)
    return (
      <div className="text-gray-500 text-center text-lg font-semibold mt-10">
        No article found.
      </div>
    );

  if (!article.writer)
    return (
      <div className="text-gray-500 text-center text-lg font-semibold mt-10">
        Writer information is not available.
      </div>
    );

  return (
    <div className="bg-bg-page-color">
      {article && (
        <div className="mt-0 mb-0">
          <Breadcrumb
            aria-label="This is Breadcrumb showing the location of current page"
            className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
          >
            <Breadcrumb.Item href="/" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/news" icon={FaRegNewspaper}>
              News
            </Breadcrumb.Item>
            <Breadcrumb.Item>{article.title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      )}
      <EachPageHeader title={article.title} />
      <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-xl shadow-lg my-10">
        {article && (
          <>
            <img
              className="w-full h-auto object-cover rounded-t-xl"
              src={article.imageUrl}
              alt={article.title}
            />
            <div className="px-6 py-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {article.title}
              </h1>
              <p className="text-md text-gray-600 mb-4">
                &nbsp;By&nbsp;
                <span className="font-semibold">
                  {article.writer.firstName} {article.writer.lastName}
                </span>
                &nbsp;on &nbsp;
                <span className="font-semibold">
                  {new Date(article.dateCreated).toDateString()}
                </span>
              </p>
              <div
                className="prose lg:prose-lg mb-6"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(article.content),
                }}
              />
              <button
                onClick={goBack}
                style={{ backgroundColor: "#5a6448" }}
                className="flex items-center text-white font-medium py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
              >
                <IoMdArrowBack className="text-2xl" />
                <span>&nbsp;Go Back</span>
              </button>
            </div>
          </>
        )}
      </div>
      <img className="w-full" src={leavesBackground} alt="Footer background" />
    </div>
  );
};

export default NewsArticle;
