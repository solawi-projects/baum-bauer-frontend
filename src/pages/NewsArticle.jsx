import leavesBackground from "../assets/images/news_images/leaves_background.png";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";

const NewsArticle = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        // Placeholder for fetching data including logic
        const response = await fakeFetchArticle(articleId);
        setArticle(response);
        document.title = response.title + " - Blog News";
      } catch (err) {
        setError("Failed to load article.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();

    return () => {
      document.title = "Original Website Title";
    };
  }, [articleId]);

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

  // Breadcrumb links
  const breadcrumbLinks = [
    { linkTo: "/", linkText: "Home" },
    { linkTo: "/news", linkText: "News" },
  ];

  return (
    <div className="bg-bg-page-color">
      {article && (
        <PageBreadcrumb
          activeLinks={breadcrumbLinks}
          deActiveLink={{ linkText: article.title }}
        />
      )}
      <EachPageHeader title={article.title} />
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Might need to delete later */}

        {/* <h2 className="text-3xl md:text-4xl font-bold text-secondary-color text-center mb-4">
          {article.title}
        </h2> */}
        <img
          className="w-full h-auto rounded-lg mb-6"
          src={article.imageUrl}
          alt={article.title}
        />
        <p className="text-md text-gray-600 mb-2">
          By <span className="font-semibold">{article.createdBy}</span> on{" "}
          <span className="font-semibold">
            {new Date(article.datetime).toDateString()}
          </span>
        </p>
        <div
          className="prose lg:prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.body) }}
        />
        {/* Rest of your article rendering */}
        <button
          onClick={goBack}
          className="mb-4 text-gray-800 hover:text-blue-800 transition duration-300"
        >
          ← Go Back
        </button>
      </div>
      {/* Footer Image */}
      <img className="w-full" src={leavesBackground} alt="Footer background" />
    </div>
  );
};

// Fake fetch function for demonstration
// Replace this actual data fetching logic
const fakeFetchArticle = async (id) => {
  // Simulate fetching an article
  return {
    id: id,
    title: "Sample Article",
    body: "<p>This is the body of the article</p>",
    imageUrl: "https://via.placeholder.com/600x400", // Example image URL
    createdBy: "Author Name",
    datetime: "2023-04-12",
  };
};

export default NewsArticle;
