import { useContext } from "react";
import backgroundImage from "../../assets/images/leaves_background_01.webp";
import { LuPlus, LuMinus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/CartContext";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../../components/PageBreadcrumb";

const Cart = () => {
  const {
    cartProducts,
    removeTree,
    removeButton,
    clearCart,
    getTreeQuantity,
    TAX_RATE,
    getItemTotalPrice,
    calculateTotalPrice,
    calculateGrandTotal,
    handleAddTree,
  } = useContext(CartContext);

  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Cart" };

  return (
    <main>
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <div className="relative w-full mx-auto xs:p-0 p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center text-font-family-color">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="w-[100%] xl:w-[90%] 2xl:w-[80%] bg-white rounded-[15px] p-6 xs:p-2 md:p-4 lg:p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
          <div className="bg-secondary-color rounded-[15px] w-[100%] p-4 mx-auto text-white flex flex-row items-start justify-start">
            <div
              className="rounded-full bg-white w-[40px] h-[40px] mr-[10px]"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="src/assets/images/tree_icon.svg"
                alt=""
                style={{ width: "35px", height: "35px", borderRadius: "50%" }}
              />
            </div>{" "}
            <h3 className="text-4xl font-main-font"> Sponsorship Cart</h3>
          </div>

          {/* Sponsor Cart */}
          <div className="flex flex-col-reverse items-start justify-start lg:flex-row mt-10 gap-[1rem] sm:gap-[2rem]">
            {/* Tree Image with Name, Qty, Price, Remove Tree Button */}
            {cartProducts.length > 0 && (
              <div className="w-full lg:w-[70%] flex flex-col items-start justify-start gap-[0.5rem] sm:gap-[2rem] bg-white rounded-[10px] border border-bg-header-footer mt-4 p-4 ">
                {cartProducts.map((product) => (
                  <div
                    key={product._id}
                    className="flex flex-col sm:flex-row justify-between items-start gap-[0.5rem] sm:gap-[2rem] pt-0 w-full"
                  >
                    {/* Tree Photo and Name */}
                    <div className="w-full sm:w-[25%] flex flex-col items-center sm:items-start pt-0">
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
                    <div className="w-full sm:w-[25%] flex flex-col justify-start items-start">
                      <div className="hidden sm:flex-1 sm:block flex-row justify-start items-start text-xl font-main-font text-secondary-color tracking-wide pb-2">
                        Qty
                      </div>
                      <div className="flex flex-row items-center justify-center border border-bg-header-footer rounded-[10px] mx-auto sm:mx-0 p-[4px]">
                        <button
                          className="bg-transparent text-lg text-dark-gray p-2"
                          aria-label="Remove Tree"
                          onClick={() => removeTree(product._id)}
                        >
                          <LuMinus />
                        </button>
                        <span className="mx-2 text-lg">
                          {getTreeQuantity(product._id)}
                        </span>
                        <button
                          className="bg-transparent text-lg text-dark-gray p-2"
                          aria-label="Add Tree"
                          onClick={() => handleAddTree(product)}
                        >
                          <LuPlus />
                        </button>
                      </div>
                    </div>

                    {/* Tree Price */}
                    <div className="w-full sm:w-[25%] flex flex-col items-start pt-0">
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

                    {/* Remove Tree */}
                    <div className="w-full sm:w-[25%] flex flex-col items-center mt-auto mb-12 sm:mb-auto">
                      <button
                        className="my-auto px-8 py-2 bg-red-color text-light-bg rounded-[10px] hover:bg-light-bg hover:text-red-color transition duration-4000 ease-linear ml-0 sm:ml-auto"
                        aria-label="Remove Tree"
                        onClick={() => removeButton(product._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="flex w-full mx-auto">
                  <button
                    className="text-center w-full my-2 px-4 py-2 bg-lighter-secondary text-secondary-color rounded-[10px] hover:bg-darker-secondary hover:text-lighter-secondary transition duration-4000 ease-linear mb-6 sm:mb-0"
                    aria-label="Clear Cart"
                    onClick={() => clearCart()}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}

            {/* Empty Cart Message and Link */}
            {cartProducts.length === 0 && (
              <div className="flex flex-col mx-auto text-center my-8">
                <div className="flex items-center mb-4">
                  <img
                    src="/src/assets/tree.png"
                    alt="Tree Icon"
                    className="w-[40px] h-[40px] mr-2"
                  />{" "}
                  <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                    Your cart is empty.
                  </h3>
                </div>
                <Link
                  to="/trees"
                  className="text-center w-full my-2 px-4 py-2 bg-bg-header-footer text-font-family-color rounded-[10px]   hover:bg-lighter-primary transition duration-4000 ease-linear"
                  aria-label="Sponsor Tree page"
                >
                  Sponsor Tree
                </Link>
              </div>
            )}

            {/* Payment Information */}
            {cartProducts.length > 0 && (
              <div className="w-[100%] lg:w-[30%]">
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

                  {/* Checkout Link */}
                  <Link
                    to="/checkout"
                    className="text-center w-full my-2 px-4 py-2 bg-darker-secondary text-white-color rounded-[10px] hover:bg-lighter-secondary hover:text-secondary-color transition duration-4000 ease-linear"
                    aria-label="Checkout page"
                  >
                    Checkout
                  </Link>

                  {/* Sponsor Tree Link */}
                  <Link
                    to="/trees"
                    className="text-center w-full my-2 px-4 py-2 bg-bg-header-footer text-font-family-color rounded-[10px]   hover:bg-lighter-primary transition duration-4000 ease-linear"
                    aria-label="Sponsor Tree page"
                  >
                    Sponsor Tree
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
            )}
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <img
        src="src/assets/images/biobaum_gallery_footer_img.webp"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default Cart;
