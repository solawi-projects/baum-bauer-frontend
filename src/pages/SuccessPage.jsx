/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../assets/images/leaves_background_01.webp";
import { HiHome } from "react-icons/hi";
import { addSponsorAndPayment } from "../utils/apiMethods";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";
import logoImage from "../assets/images/BioBaumBauer_Logo_ThankYou.svg";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../store/CartContext";

const SuccessPage = () => {
  const titles = ["Payment Successful"];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Payment Successful" };
  const {
    authUser,
    stripeSession,
    handleStripeSession,
    patron,
    orderGrandPrice,
    handleOrderGrandPrice,
    order,
    handleOrder,
    handlePatronInfo,
  } = useContext(AuthContext);
  const { TAX_RATE, clearCart } = useContext(CartContext);

  useEffect(() => {
    document.title = "Payment Successful";
    async function insertData(
      sId,
      grandPrice,
      userId,
      taxRate,
      patron,
      orders
    ) {
      try {
        const newSponsor = await addSponsorAndPayment(
          sId,
          grandPrice,
          userId,
          taxRate,
          patron,
          orders
        );
        if (newSponsor) {
          handleStripeSession({ type: "RESET_SESSION" });
          handleOrderGrandPrice({ type: "RESET_GRAND_PRICE" });
          handleOrder({ type: "REMOVE_ITEMS" });
          handlePatronInfo({ type: "REMOVE_PATRON" });
          clearCart();
        }
      } catch (error) {
        console.log("error: ", error);
      }
    }
    if (
      (stripeSession.sid && stripeSession.sid !== "") ||
      orderGrandPrice.grand > 0 ||
      Object.keys(patron.patronInfo).length > 0 ||
      Object.keys(order.items).length > 0
    ) {
      insertData(
        stripeSession.sid,
        orderGrandPrice.grand,
        authUser._id,
        TAX_RATE,
        patron.patronInfo,
        order.items.cart
      );
    }
  }, []);

  return (
    <main className="relative text-font-family-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      {/* Success title, positioned absolutely */}
      <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 py-10 text-center z-10">
        <EachPageHeader title={titles[0]} subtitle={titles[1]} />
      </h2>
      <section className="relative flex flex-col items-center justify-center pt-[100px] md:pt-[160px] lg:pt-[180px] xl:pt-[220px]">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.2,
          }}
        ></div>

        {/* Success Message Content */}

        <div className="max-w-6xl mx-auto px-4 py-8 md:p-8 bg-white rounded-xl shadow-lg my-10 z-10">
          <p className="flex justify-center items-center gap-2 mb-16">
            <img
              src={logoImage}
              className="w-80 rounded-full"
              alt="BioBaumBauer Thank You Logo"
            />
          </p>
          <div className="text-center mt-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10">
              Thank You for Your Support!
            </h2>
            <p className="text-md md:text-lg">
              Your sponsorship of a tree has been successfully processed. Thanks
              to your contribution, we're one step closer to a greener, more
              sustainable future. Your tree will not only beautify our landscape
              but also help combat climate change and support local ecosystems.
            </p>
            <p className="text-md md:text-lg mt-4">
              We are thrilled to have you as part of our community. Together, we
              are making a real difference. Stay tuned for updates on your tree
              and our collective impact.
            </p>
            <div className="flex justify-center mt-10">
              <Button className="custom-button-style px-4 py-2 md:px-6 md:py-3">
                <Link
                  to="/"
                  className="text-md md:text-lg text-secondary-color font-bold"
                >
                  Return to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Image */}
      <img
        className="w-full"
        src="src/assets/images/news_images/leaves_background.png"
        alt="Payment Successful Footer Image"
      />
    </main>
  );
};

export default SuccessPage;
