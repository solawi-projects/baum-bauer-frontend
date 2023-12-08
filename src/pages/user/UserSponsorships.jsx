import React from "react";
import DashboardLinks from "../../components/DashboardLinks";
import MobileDashboardLinks from "../../components/MobileDashboardLinks";
import backgroundImage from "../../assets/images/leaves_background_01.webp";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../../components/PageBreadcrumb";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";

const UserSponsorships = () => {
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Sponsorships" };
  const sample = [
    {
      sponsorshipnumber: 123456,
      Name: "Arora",
      Amount: "100€",
      Date: "20-1-2023",
      certificate: "link",
    },{
      sponsorshipnumber: 123456,
      Name: "Arora",
      Amount: "100€",
      Date: "20-1-2023",
      certificate: "link",
    },{
      sponsorshipnumber: 123456,
      Name: "Arora",
      Amount: "100€",
      Date: "20-1-2023",
      certificate: "link",
    }
  ];
  return (
    <main>
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <div className="relative w-full mx-auto xs:p-0 p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="w-[100%] lg:w-[90%] xl:w-[80%] bg-white rounded-[15px] p-6 xs:p-2 md:p-4 lg:p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
          <div className="bg-secondary-color rounded-[15px] w-[100%] p-4 mx-auto text-white flex flex-row">
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
            <h3 className="text-4xl font-main-font"> Dashboard</h3>
          </div>
          <div className="flex flex-col md:flex-row mt-10 gap-[1rem] md:gap-[2rem]">
            {/* Dashboard Links */}
            <DashboardLinks />
            <MobileDashboardLinks />

            {/* Sponsorships */}
            <div className="w-[100%] ">
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/tree.png"
                  alt="Tree Icon"
                  className="w-[40px] h-[40px] mr-2"
                />{" "}
                <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                  Your Sponsorships
                </h3>
              </div>
              <div className="w-[100%]   min-h-screen items-center  justify-center bg-white">
                <div className="p-6 w-[100]  px-0">
                  <table className="w-[90%] min-w-max table-auto text-left  border border-white rounded-tl-lg rounded-br-md shadow-md">
                    <thead className="pb-10 space-y-4 h-20" >
                      <tr className="bg-bg-header-footer h-30" >
                        <th className="space-y-4 border-blue-gray-100 bg-blue-gray-50/50 p-4 g-3 h-30">
                          <p className="block text-1.5xl antialiased font-sans text-secondary-color font-normal leading-none opacity-70">
                            Sponsorship no.
                          </p>
                        </th> <th className="space-y-4 border-blue-gray-100 bg-blue-gray-50/50 p-4 g-3">
                          <p className="block text-1.5xl antialiased font-sans text-secondary-color font-normal leading-none opacity-70">
                           Image
                          </p>
                        </th>
                        <th className="border-blue-gray-100 bg-blue-gray-50/50 p-4">
                          <p className="block antialiased font-sans text-1.5xl text-secondary-color font-normal leading-none opacity-70">
                            Name
                          </p>
                        </th>
                        <th className=" border-blue-gray-100 bg-blue-gray-50/50 p-4">
                          <p className="block antialiased font-sans text-1.5xl text-secondary-color font-normal leading-none opacity-70">
                            Amount
                          </p>
                        </th>
                        <th className="border-blue-gray-100 bg-blue-gray-50/50 p-4">
                          <p className="block antialiased font-sans text-1.5xl text-secondary-color font-normal leading-none opacity-70">
                            Date
                          </p>
                        </th>
                        <th className=" border-blue-gray-100 bg-blue-gray-50/50 p-4">
                          <p className="block antialiased font-sans text-1.5xl text-secondary-color font-normal leading-none opacity-70">
                            Certificate
                          </p>
                        </th>
                        <th className=" border-blue-gray-100 bg-blue-gray-100 p-4">
                          <p className="block antialiased font-sans text-1.5xl text-secondary-color font-normal leading-none opacity-70">
                            Location
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sample.map((e, key) => {
                        return (
                          <tr key={key} className="rounded h-40 hover:bg-lighter-primary active:bg-bg-lighter-primary focus:bg-bg-lighter-primary">
                            <td className="p-4 border-b border-blue-gray-10">
                                <p className="block antialiased font-sans text-1xl text-secondary-color leading-normal  ">
                                  {e.sponsorshipnumber}
                                </p>
                            </td>  <td className="p-4 border-b border-blue-gray-10">
                                <p className="block antialiased font-sans text-1xl text-secondary-color leading-normal  ">
                                  {e.image}
                                </p>
                            </td> 
                            <td className="p-4 border-b border-blue-gray-10">
                              <p className="block antialiased font-sans text-1xl leading-normal text-secondary-color font-normal">
                                {e.Name}
                              </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-10">
                              <p className="block antialiased font-sans text-1.5xl leading-normal text-secondary-color font-normal">
                                {e.Amount}
                              </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-10">
                              <div className="w-max">
                                <div
                                  className="relative grid items-center font-sans text-secondary-color text-1.5xl uppercase whitespace-nowrap select-none  px-2  rounded-md"
                                  style={{ opacity: 1 }}
                                >
                                  <p className="text-secondary-color">{e.Date}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <div className="flex items-center gap-3">
                               <FaRegFilePdf className="text-2xl text-secondary-color"/>
                                <div className="flex flex-col">
                                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">
                                  </p>
                                  <p className="block antialiased font-sans text-1.5xl text-secondary-color leading-normal text-blue-gray-900 font-normal opacity-70">
                                 Download </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <button
                                className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                                type="button"
                              >
                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <FaMapMarkedAlt className="text-2xl text-secondary-color"/>

                                </span>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="w-full pt-5 px-4 mb-8 mx-auto "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <img
        src="src/assets/images/biobaum_faq_footer_img.webp"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default UserSponsorships;
