import { useContext } from "react";
import backgroundImage from "../../assets/images/leaves_background_01.webp";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/CartContext";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { MdLabelImportant } from "react-icons/md";
import axios from "../../utils/axiosInstance";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../../contexts/AuthContext";
import { usePatronContext } from "../../store/PatronContext";
import { BiSolidUserDetail } from "react-icons/bi";
import treeIcon from "../../assets/tree.png";
import { FaAmazonPay } from "react-icons/fa";

const Order = () => {
  document.title = "Order";
  const {
    cartProducts,
    getTreeQuantity,
    TAX_RATE,
    getItemTotalPrice,
    calculateTotalPrice,
    calculateGrandTotal,
    getSelectedDataFromCart,
  } = useContext(CartContext);
  const { handleStripeSession, handleOrderGrandPrice, handleOrder } =
    useContext(AuthContext);

  const { newPatron } = usePatronContext();

  const paymentProcess = async () => {
    const stripe = await loadStripe(
      "pk_test_51OJNzPEghw7w3GNSeOkjDgkOcM1DtxgH4n9RgFspfvlxDzomukHCfqCenHxoIFFrQ0MtAvBRYMiIjtGQUYUwM7Ax00xIiee67Q"
    );
    const totalPrice = calculateGrandTotal().toFixed(2);
    const treesInCart = getSelectedDataFromCart();
    const trees = {
      cart: treesInCart,
    };
    axios
      .post("/api/payment/checkout", trees)
      .then((response) => {
        const session = response.data;
        const result = stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.error(result.error);
        }
        handleStripeSession({ type: "UPDATE_SESSION", sessionId: session.id });
        handleOrderGrandPrice({ type: "CALC_GRAND_PRICE", total: totalPrice });
        handleOrder({ type: "ADD_ITEMS", items: trees });
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  // Check if newPatron is defined
  if (!newPatron) {
    // Handle the case where newPatron is not available
    return <div>No patron data found.</div>;
  }

  return (
    <div>
      {cartProducts && (
        <div className="mt-0 mb-0">
          <Breadcrumb
            aria-label="This is Breadcrumb showing the location of current page"
            className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
          >
            <Breadcrumb.Item href="/" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/cart">Cart</Breadcrumb.Item>
            <Breadcrumb.Item href="/checkout">Checkout</Breadcrumb.Item>
            <Breadcrumb.Item>Complete Sponsorship</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      )}
      <div className="cart-page-container relative w-full bg-light-gray mx-auto p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center text-font-family-color">
        {/* Overlay with background image and opacity */}
        <div
          className="cart-page-bg hidden lg:block absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-top"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="w-full xl:w-[90%] 2xl:w-[80%] bg-white rounded-base p-3 lg:p-8 shadow-lg rounded-md lg:mt-[100px] xl:mt-[120px]">
          {/* Sponsor Cart */}
          <div className="flex flex-col-reverse items-start justify-start lg:flex-row md:gap-[1rem] gap-[2rem]">
            {/* Tree Image with Name, Qty, Price, Remove Tree Button */}
            {cartProducts.length > 0 ? (
              <div className="w-full lg:w-[60%] flex flex-col items-start justify-start sm:gap-[2rem] bg-white rounded-md p-4 ">
                {" "}
                <div className="flex flex-col text-dark-gray">
                  <div className="flex items-center gap-2 mb-4">
                    <BiSolidUserDetail size="2.1rem" />
                    <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                      Patron Details
                    </h3>
                  </div>{" "}
                  <div className="flex flex-col">
                    {" "}
                    <p className="text-dark-gray ">
                      <span className="font-semibold text-dark-gray">
                        Full Name:
                      </span>
                      &nbsp;
                      {newPatron.firstName}&nbsp;{newPatron.lastName}
                    </p>
                    <p className="text-dark-gray ">
                      <span className="font-semibold text-dark-gray">
                        Email:
                      </span>
                      &nbsp; {newPatron.email}
                    </p>
                    <p className="text-dark-gray ">
                      <span className="font-semibold text-dark-gray">
                        Mobile Phone:
                      </span>
                      &nbsp; {newPatron.mobilePhone}
                    </p>
                    {/* Display address details */}
                    <p className="text-dark-gray ">
                      <span className="font-semibold text-dark-gray">
                        Address Line 1:
                      </span>
                      &nbsp; {newPatron.address.address1}
                    </p>
                    <p className="text-dark-gray ">
                      <span className="font-semibold text-dark-gray">
                        Additional Address Details
                      </span>
                      &nbsp; {newPatron.address.address2}
                    </p>
                    <p className="text-dark-gray ">
                      <span className="font-semibold text-dark-gray">
                        City:
                      </span>
                      &nbsp; {newPatron.address.city}
                    </p>
                    <p className="text-dark-gray ">
                      <span className="font-semibold text-dark-gray">
                        Postcode:
                      </span>
                      &nbsp; {newPatron.address.zipCode}
                    </p>
                    <p className="text-dark-gray ">
                      <span className="font-semibold text-dark-gray">
                        State/Country:
                      </span>
                      &nbsp; {newPatron.address.state}
                    </p>
                    <p className="text-dark-gray ">
                      <span className="font-semibold text-dark-gray">
                        Country:
                      </span>
                      &nbsp; {newPatron.address.country}
                    </p>
                  </div>
                </div>
                {/* Horizontal Line */}
                <hr className="w-[100%] mx-auto border-t-2 border-bg-header-footer my-2" />
                {cartProducts.map((product) => (
                  <div
                    key={product._id}
                    className="w-full flex flex-col justify-between items-center bg-light-gray rounded-md md:flex-row md:gap-[1.5rem] py-3 mt-6 md:mt-0"
                  >
                    {/* Tree Photo and Name */}
                    <div className="w-full flex flex-col items-center pb-2">
                      <div className="hidden md:flex flex-row items-center md:self-start md:pl-6 text-xl font-main-font text-secondary-color tracking-wide p-2">
                        <img
                          src={treeIcon}
                          alt="Tree Icon"
                          className="w-[30px] h-[30px] mr-2"
                        />
                        Tree
                      </div>
                      <Link to={`/trees/${product._id}`}>
                        <div className="flex flex-col-reverse items-center md:flex-row ">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[200px] md:w-[80px] md:h-[80px] object-cover mr-0 md:mr-2 rounded-md mt-2 mb-1 sm:mb-0"
                          />
                          <div
                            className={`text-2xl sm:text-[1rem] font-main-font sm:font-general-font text-secondary-color sm:text-dark-gray text-center sm:text-start`}
                          >
                            {product.name}
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Tree Qty */}
                    <div className="w-full flex flex-col items-start">
                      <div className="hidden sm:flex-1 sm:block flex-row justify-center items-center text-xl font-main-font text-secondary-color tracking-wide pb-0 sm:pb-2">
                        Qty
                      </div>
                      <div className="flex flex-row p-[0px] sm:p-[4px] text-dark-gray mx-auto sm:mx-0">
                        <span className="mx-2 text-xl font-bold">
                          {getTreeQuantity(product._id)}
                        </span>
                      </div>
                    </div>

                    {/* Tree Price */}
                    <div className="w-full flex flex-col items-start">
                      <div className="hidden sm:flex text-xl font-main-font text-secondary-color tracking-wide pb-2">
                        Price
                      </div>
                      <div className="flex flex-col mx-auto sm:mx-0 text-center sm:text-left">
                        <div className="text-dark-gray text-lg">
                          € {getItemTotalPrice(product).toFixed(2)}
                        </div>
                        <div className="text-md">
                          {" "}
                          €{" "}
                          {product.price && product.price.$numberDecimal
                            ? product.price.$numberDecimal
                            : "N/A"}{" "}
                          each
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Your cart is empty</p>
            )}

            {/* Payment Information */}
            <div className="w-full lg:w-2/5 ">
              <div className="flex flex-col border-l-4 border-lighter-secondary gap-[0.4rem] bg-light-gray rounded-md py-4 px-3">
                {/* Total Price */}
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <div className="felx text-xl font-main-font text-secondary-color tracking-wide">
                      Total Price:
                    </div>
                    <div className="flex text-md text-dark-gray">
                      € {calculateTotalPrice().toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Tax */}
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <div className="felx text-xl font-main-font text-secondary-color tracking-wide">
                      Tax:
                    </div>
                    <div className="flex text-md text-dark-gray">
                      € {(calculateTotalPrice() * TAX_RATE).toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <div className="felx text-xl font-main-font text-secondary-color tracking-wide">
                      Grand Total:
                    </div>
                    <div className="flex text-md text-dark-gray price px-4 py-1 rounded-3xl font-bold">
                      € {calculateGrandTotal().toFixed(2)}
                    </div>
                  </div>
                </div>
                <span
                  className="flex items-center text-left text-lg w-[100%] mx-auto my-2 px-4 py-2 bg-[#f4f5f3] text-secondary-color rounded-[10px]"
                  aria-label="Powered by Stripe"
                >
                  <MdLabelImportant className="hidden md:block" />
                  <span>
                    &nbsp;Tax will be applied later during payment by&nbsp;{" "}
                    <span className="font-bold">Stripe</span>
                  </span>
                </span>
                {/* Horizontal Line */}
                <hr className="w-[40%] mx-auto border-t-2 border-bg-header-footer my-4" />

                {/* Pay Now */}
                <button
                  onClick={paymentProcess}
                  className="flex items-center justify-center gap-1 text-2xl w-full px-4 py-5 bg-darker-secondary text-white-color rounded-md hover:bg-lighter-secondary hover:text-secondary-color transition duration-4000 ease-linear"
                  aria-label="Pay Now"
                >
                  <FaAmazonPay size="1.9rem" />
                  <span>Pay Now</span>
                </button>
                {/* Back to  Checkout */}
                <Link
                  to="/checkout"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-bg-header-footer border-2 text-font-family-color rounded-md hover:bg-lighter-primary transition duration-4000 ease-linear mt-4"
                  aria-label="Sponsor Tree page"
                >
                  <RiArrowGoBackLine />
                  <span>Back to Checkout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
