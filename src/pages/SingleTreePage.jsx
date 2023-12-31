import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../utils/axiosInstance";
import backgroundImage from "../assets/images/leaves_background_01.webp";
import { CartContext } from "../store/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import DOMPurify from "dompurify";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { FaTree } from "react-icons/fa";

const SingleTreePage = () => {
  const { id } = useParams();
  const [tree, setTree] = useState(null);
  const { addTree } = useContext(CartContext);
  const { loggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Tree Detail";
    const fetchTree = async () => {
      try {
        const response = await axios.get(`/api/tree/${id}`);
        setTree(response.data);
      } catch (error) {
        console.error("Error fetching tree:", error);
      }
    };

    fetchTree();
  }, [id]);

  const handleAddToCart = () => {
    addTree(id);
    // Redirect to the cart page
    navigate("/cart");
  };

  if (!tree) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      {tree && (
        <div className="mt-0 mb-0">
          <Breadcrumb
            aria-label="This is Breadcrumb showing the location of current page"
            className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
          >
            <Breadcrumb.Item href="/" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/trees" icon={FaTree}>
              Trees
            </Breadcrumb.Item>
            <Breadcrumb.Item>{tree.name}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      )}
      <div className="relative w-full mx-auto xs:p-0 p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center text-font-family-color">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="flex flex-col gap-[2rem] sm:gap-[0rem] sm:flex-row justify-between w-[100%] lg:w-[90%] lx:w-[75%] 2xl:w-[60%] bg-white rounded-[15px] p-6 xs:p-2 md:p-4 lg:p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
          {/* Tree Image */}
          <div className="w-[100%] sm:w-[50%] aspect-square mr-[2rem]">
            <img
              className="w-full h-full object-cover rounded-[10px]"
              src={tree.image}
              alt={tree.name}
            />
          </div>

          {/* Tree Details */}
          <div className="w-[100%] sm:w-[50%] flex flex-col">
            <div className="flex w-full justify-center items-center bg-secondary-color rounded-[15px] p-4 mx-auto text-white">
              <div className="rounded-full bg-white w-[40px] h-[40px] mb-[10px] flex items-center justify-center mr-[10px]">
                <img
                  src="/src/assets/images/tree_icon.svg"
                  alt=""
                  style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                />
              </div>

              <h3 className="text-4xl font-main-font">{tree.name}</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <p className="mt-[2rem] font-main-font text-secondary-color text-2xl tracking-wide">
                € {tree.price && tree.price.$numberDecimal}
              </p>

              {/* Horizontal Line */}
              <hr className="w-[70%] mx-auto border-t-2 border-bg-header-footer my-2" />
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/tree.png"
                  alt="Tree Icon"
                  className="w-[40px] h-[40px] mr-2"
                />{" "}
                <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block mt-6">
                  Description:
                </h3>
              </div>

              <div
                className="prose lg:prose-lg mb-6 text-justify text-lg"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(tree.description),
                }}
              />

              {/* Horizontal Line */}
              <hr className="w-[70%] mx-auto border-t-2 border-bg-header-footer my-2" />

              <p>
                <span className="text-dark-gray font-bold">
                  Category:&nbsp;&nbsp;
                </span>
                {tree.category}
              </p>

              <p>
                <span className="text-dark-gray font-bold">
                  Stock:&nbsp;&nbsp;
                </span>
                {tree.availableQuantity}
              </p>

              {/* Horizontal Line */}
              <hr className="w-[70%] mx-auto border-t-2 border-bg-header-footer my-2" />

              {/* Add to Cart Button */}
              {loggedIn && (
                <button
                  to="/trees"
                  className="text-center w-full my-2 px-4 py-2 bg-bg-header-footer text-font-family-color rounded-[10px]   hover:bg-lighter-primary transition duration-4000 ease-linear"
                  aria-label="Sponsor page"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <img
        src="/src/assets/images/biobaum_contact_footer_img.webp"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default SingleTreePage;
