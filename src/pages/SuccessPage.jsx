import backgroundImage from "../assets/images/leaves_background_01.webp";
import { HiHome } from "react-icons/hi";
import axios from "../utils/axiosInstance";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";
import logoImage from "../assets/images/BioBaumBauer_Logo_ThankYou.svg";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../store/CartContext";

const SuccessPage = () => {
  const titles = ["Payment Successful"];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Payment Successful" };
  const { authUser, patron, handleStripeSession } = useContext(AuthContext);
  const {
    cartProducts,
    getTreeQuantity,
    TAX_RATE,
    getItemTotalPrice,
    calculateTotalPrice,
    calculateGrandTotal,
    getSelectedDataFromCart,
  } = useContext(CartContext);

  const [payId, setPayId] = useState(null);
  const [sponsorId, setSponsorId] = useState(null);

  // methods for inserting data
  const addPayment = async (sessionId, totalGrundPay, userId, taxRate) => {
    try {
      const response = await axios.post("/api/payment/create", {
        sessionId,
        totalGrundPay,
        userId,
        taxRate,
      });
      if (response.status === 201) {
        return response.data.newPayment._id;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const doSponsorShip = async (totalPrice, userId, payId) => {
    try {
      const response = await axios.post("/api/sponsorShip/newSponsorShip", {
        totalPrice,
        userId,
        payId,
      });
      if (response.status === 201) {
        return response.data.newSponsorShip._id;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const addOrderItems = (orderId, trees) => {
    try {
      const response = axios.patch(
        `/api/sponsorShip/updateSponsorShip/${orderId}`,
        {
          trees,
        }
      );
      if (response.status === 200) {
        return response.data.updatedSponsor._id;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // const totalPrice = calculateGrandTotal();
    // addPayment(session.id, totalPrice, authUser._id, TAX_RATE).then(
    //   (paymentId) => {
    //     setPayId(paymentId);
    //   }
    // );
    // doSponsorShip(totalPrice, authUser._id, payId);
    // const items = addOrderItems(sponsorId, trees);
    // console.log("Session:", session);
    // console.log("Trees", trees);
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
