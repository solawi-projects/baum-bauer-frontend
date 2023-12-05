import React, { useContext } from "react";
import backgroundImage from "../../assets/images/leaves_background_01.webp";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/CartContext";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const Order = () => {
  const {
    cartProducts,
    getTreeQuantity,
    TAX_RATE,
    getItemTotalPrice,
    calculateTotalPrice,
    calculateGrandTotal,
  } = useContext(CartContext);

  // Get the state from the location
  const location = useLocation();
  const newPatron = location.state;

  // Check if newPatron is defined
  if (!newPatron) {
    // Handle the case where newPatron is not available
    return <div>No patron data found.</div>;
  }

  return (
    <main>
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
            <Breadcrumb.Item>Complte Sponsorship</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      )}
      <div className="relative w-full mx-auto xs:p-0 p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center text-font-family-color">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="w-[100%] xl:w-[90%] 2xl:w-[80%] bg-white rounded-[15px] p-6 xs:p-2 md:p-4 lg:p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
          {/* Sponsor Cart */}
          <div className="flex flex-col-reverse items-start justify-start lg:flex-row mt-10 gap-[1rem] sm:gap-[2rem]">
            {/* Tree Image with Name, Qty, Price, Remove Tree Button */}
            {cartProducts.length > 0 ? (
              <div className="w-full lg:w-[60%] flex flex-col items-start justify-start sm:gap-[2rem] bg-white rounded-[10px] border border-bg-header-footer mt-4 p-4 ">
                {" "}
                <div className="flex flex-col text-dark-gray">
                  <div className="flex items-center mb-4">
                    <img
                      src="/src/assets/tree.png"
                      alt="Tree Icon"
                      className="w-[40px] h-[40px] mr-2"
                    />{" "}
                    <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                      Patron Details{" "}
                    </h3>
                  </div>{" "}
                  <div className="flex flex-col">
                    {" "}
                    <p className="text-dark-gray italic">
                      <span className="font-semibold text-dark-gray">
                        Full Name:
                      </span>
                      &nbsp;
                      {newPatron.firstName}&nbsp;{newPatron.lastName}
                    </p>
                    <p className="text-dark-gray italic">
                      <span className="font-semibold text-dark-gray">
                        Email:
                      </span>
                      &nbsp; {newPatron.email}
                    </p>
                    <p className="text-dark-gray italic">
                      <span className="font-semibold text-dark-gray">
                        Mobile Phone:
                      </span>
                      &nbsp; {newPatron.mobilePhone}
                    </p>
                    {/* Display address details */}
                    <p className="text-dark-gray italic">
                      <span className="font-semibold text-dark-gray">
                        Address Line 1:
                      </span>
                      &nbsp; {newPatron.address.address1}
                    </p>
                    <p className="text-dark-gray italic">
                      <span className="font-semibold text-dark-gray">
                        Address Line 2:
                      </span>
                      &nbsp; {newPatron.address.address2}
                    </p>
                    <p className="text-dark-gray italic">
                      <span className="font-semibold text-dark-gray">
                        City:
                      </span>
                      &nbsp; City: {newPatron.address.city}
                    </p>
                    <p className="text-dark-gray italic">
                      <span className="font-semibold text-dark-gray">
                        Postcode:
                      </span>
                      &nbsp; {newPatron.address.zipCode}
                    </p>
                    <p className="text-dark-gray italic">
                      <span className="font-semibold text-dark-gray">
                        State/Country:
                      </span>
                      &nbsp; {newPatron.address.state}
                    </p>
                    <p className="text-dark-gray italic">
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
                    className="flex flex-col sm:flex-row justify-between items-start gap-[0.5rem] sm:gap-[2rem] pt-0 w-full"
                  >
                    {/* Tree Photo and Name */}
                    <div className="w-full sm:w-[55%] flex flex-col items-center sm:items-start pt-0 mt-10 sm:mt-0">
                      <div className="hidden sm:flex flex-row items-center text-xl font-main-font text-secondary-color tracking-wide pb-2">
                        <img
                          src="/src/assets/tree.png"
                          alt="Tree Icon"
                          className="w-[30px] h-[30px] mr-2"
                        />
                        Tree
                      </div>
                      <Link to={`/trees/${product._id}`}>
                        <div className="flex flex-col-reverse sm:flex-row">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full sm:w-[60px] h-[400px] sm:h-[60px] object-cover mr-0 sm:mr-2 rounded-[10px] mt-2 mb-6 sm:mb-0"
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
                    <div className="w-full sm:w-[25%] flex flex-col items-start">
                      <div className="hidden sm:flex-1 sm:block flex-row justify-center items-center text-xl font-main-font text-secondary-color tracking-wide pb-0 sm:pb-2">
                        Qty
                      </div>
                      <div className="flex flex-row p-[0px] sm:p-[4px] text-dark-gray mx-auto sm:mx-0">
                        <span className="mx-2 text-lg">
                          {getTreeQuantity(product._id)}
                        </span>
                      </div>
                    </div>

                    {/* Tree Price */}
                    <div className="w-full sm:w-[25%] flex flex-col items-start">
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
            <div className="w-[100%] lg:w-[40%]">
              <div className="flex flex-col gap-[0.4rem] bg-white rounded-[10px] border border-bg-header-footer mt-4 xs:p-2 p-4">
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
                    <div className="flex text-md text-dark-gray">
                      € {calculateGrandTotal().toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Horizontal Line */}
                <hr className="w-[70%] mx-auto border-t-2 border-bg-header-footer my-2" />

                {/* Sponsor Tree Link */}
                <Link
                  to="/sponsor"
                  className="text-center w-full my-2 px-4 py-4 bg-lighter-secondary border border-darker-secondary text-secondary-color rounded-[10px]"
                  aria-label="Card Information"
                >
                  Card Number
                </Link>

                {/* Pay Now */}
                <Link
                  to=""
                  className="text-center w-full my-2 px-4 py-2 bg-darker-secondary text-white-color rounded-[10px] hover:bg-lighter-secondary hover:text-secondary-color transition duration-4000 ease-linear"
                  aria-label="Pay Now"
                >
                  Pay Now
                </Link>

                {/* POWERED BY STRIPE */}
                <div
                  className="text-center w-[70%] mx-auto my-2 px-4 py-2 bg-[#f4f5f3] text-secondary-color rounded-[10px] border border-secondary-color"
                  aria-label="Powered by Stripe"
                >
                  Powered by <span className="font-bold">stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <img
        src="/src/assets/images/biobaum_gallery_footer_img.webp"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default Order;
