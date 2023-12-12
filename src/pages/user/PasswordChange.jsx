import { useContext, useState } from "react";
import { Button, TextInput, Label } from "flowbite-react";
import DashboardLinks from "../../components/DashboardLinks";
import MobileDashboardLinks from "../../components/MobileDashboardLinks";
import backgroundImage from "../../assets/images/leaves_background_01.webp";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../../components/PageBreadcrumb";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/axiosInstance";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Swal from "sweetalert2";

const PasswordChange = () => {
  document.title = "Changing Password";
  // State to manage password values
  const { loggedIn, authUser, setAuthUser } = useContext(AuthContext);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handlePasswordChange = async (event) => {
    event.preventDefault();
    const { currentPassword, newPassword, confirmNewPassword } = passwords;
    if (newPassword !== confirmNewPassword) {
      alert("New password and confirm password do not match");
      return;
    }
    try {
      const response = await axios.post(
        `/api/users/chang-password/${authUser._id}`,
        { currentPassword, newPassword, confirmNewPassword }
      );
      // console.log(response.data);
      // update localStorage
      if (response.status === 200) {
        // Update the user's password in local storage
        console.log("the passord changed sunccessfully");
        Swal.fire({
          icon: "success",
          title: "The Password changed successfully!",
          text: "You have successfully changed your password.",
          customClass: {
            confirmButton: "btn-custom-class",
            title: "title-class",
          },
          buttonsStyling: false,
        });
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...authUser,
            password: newPassword,
          })
        );

        // Set the new password in the state
        setAuthUser({
          ...authUser,
          password: newPassword,
        });
      }
    } catch (error) {
      console.error("Password change failed:", error.response.data.message);
    }

    console.log("Password values:", passwords);
  };
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmNewPasswordVisibility = () => {
    setShowConfirmNewPassword(!showConfirmNewPassword);
  };

  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Change Password" };

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

            <div className="w-[100%] md:w-[75%]">
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/tree.png"
                  alt="Tree Icon"
                  className="w-[40px] h-[40px] mr-2"
                />{" "}
                <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                  Change Password
                </h3>
              </div>
              {/* change password form */}
              <form onSubmit={handlePasswordChange}>
                <div className="grid grid-cols-1 gap:2 lg:gap-4 mt-10">
                  <div className="mb-4" style={{ position: "relative" }}>
                    <Label
                      htmlFor="currentPassword"
                      className="visually-hidden"
                    >
                      Current Password
                    </Label>
                    <TextInput
                      required
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Current Password *"
                      value={passwords.currentPassword}
                      onChange={(e) =>
                        setPasswords({
                          ...passwords,
                          currentPassword: e.target.value,
                        })
                      }
                      className="input"
                      style={{
                        backgroundColor: "var(--bg-white-color)",
                        borderColor: "var(--bg-header-footer)",
                        outlineColor: "var(--secondary-color)",
                        padding: "1.15rem",
                        color: "var(--font-family-color)",
                        fontSize: "1rem",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={toggleCurrentPasswordVisibility}
                    >
                      {showCurrentPassword ? (
                        <HiEyeOff className="text-2xl text-font-family-color" />
                      ) : (
                        <HiEye className="text-2xl text-font-family-color" />
                      )}
                    </div>
                  </div>
                  <div className="mb-4" style={{ position: "relative" }}>
                    <Label htmlFor="newPassword" className="visually-hidden">
                      New Password
                    </Label>
                    <TextInput
                      required
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="New Password *"
                      value={passwords.newPassword}
                      onChange={(e) =>
                        setPasswords({
                          ...passwords,
                          newPassword: e.target.value,
                        })
                      }
                      className="input"
                      style={{
                        backgroundColor: "var(--bg-white-color)",
                        borderColor: "var(--bg-header-footer)",
                        outlineColor: "var(--secondary-color)",
                        padding: "1.15rem",
                        color: "var(--font-family-color)",
                        fontSize: "1rem",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={toggleNewPasswordVisibility}
                    >
                      {showNewPassword ? (
                        <HiEyeOff className="text-2xl text-font-family-color" />
                      ) : (
                        <HiEye className="text-2xl text-font-family-color" />
                      )}
                    </div>
                  </div>
                  <div className="mb-4" style={{ position: "relative" }}>
                    <Label
                      htmlFor="confirmNewPassword"
                      className="visually-hidden"
                    >
                      Confirm New Password
                    </Label>
                    <TextInput
                      required
                      id="confirmNewPassword"
                      type={showConfirmNewPassword ? "text" : "password"}
                      placeholder="Confirm New Password *"
                      value={passwords.confirmNewPassword}
                      onChange={(e) =>
                        setPasswords({
                          ...passwords,
                          confirmNewPassword: e.target.value,
                        })
                      }
                      className="input"
                      style={{
                        backgroundColor: "var(--bg-white-color)",
                        borderColor: "var(--bg-header-footer)",
                        outlineColor: "var(--secondary-color)",
                        padding: "1.15rem",
                        color: "var(--font-family-color)",
                        fontSize: "1rem",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={toggleConfirmNewPasswordVisibility}
                    >
                      {showConfirmNewPassword ? (
                        <HiEyeOff className="text-2xl text-font-family-color" />
                      ) : (
                        <HiEye className="text-2xl text-font-family-color" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-dark-gray">
                  <p className="font-bold">Password Requirements:</p>
                  <p>Minimum length of 8 characters</p>
                  <p>At least one number</p>
                  <p>At least one capital letter</p>
                  <p>At least one special symbol</p>
                </div>
                {/* Change Password Button */}
                <div className="text-center flex justify-center mb-6 mt-6">
                  <Button
                    className="custom-button-style"
                    type="submit"
                    aria-label="Change Password"
                  >
                    Change Password
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <img
        src="src/assets/images/biobaum_landing_footer_img.webp"
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default PasswordChange;
