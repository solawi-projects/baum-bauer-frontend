import { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  Label,
  Select,
  TextInput,
  Radio,
  FileInput,
  Button,
} from "flowbite-react";
import { MdDoubleArrow } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "../utils/axiosInstance";

const AddNewTree = () => {
  const [errors, setErrors] = useState([]);
  const [treeDescription, setTreeDescription] = useState("");
  const treeName = useRef(null);
  const treePrice = useRef(null);
  // const checkboxRef = useRef(null);
  const availableQuantity = useRef(null);
  const newsImage = useRef(null);

  // const handleCheckboxChange = () => {

  // };
  const handleEditorChange = (content) => {
    console.log("Content was updated:", content);
    setTreeDescription(content);
  };
  const onSubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("description", treeDescription);
    console.log("FormData: ", formData.get("content"));
    try {
      const res = await axios.post("/api/tree/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("RES :", res.response);
      if (res.status === 201) {
        setErrors([]);
        Swal.fire({
          icon: "success",
          title: "Image was Uploaded and Data was saved!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          confirmButtonColor: "#5cb85c",
        });
        treeName.current.value = "";
        treePrice.current.value = "";
        setTreeDescription("");
        newsImage.current.value = "";
      }
    } catch (error) {
      setErrors([]);
      if (error.response.status === 400) {
        setErrors(error.response.data.errors);
        console.log("ERROR:", error.response.data.errors);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {/* {uploadedImage && <img src={uploadedImage} />} */}

      <h2 className="text-4xl mb-8">Add New Tree</h2>
      <br />
      <div className="container mx-auto flex justify-center items-center">
        <ul>
          {errors.map((error, index) => (
            <li
              key={error.path + index}
              className="flex items-center text-red-700"
            >
              <MdDoubleArrow /> <span>&nbsp;{error.msg}</span>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <form
        onSubmit={onSubmitForm}
        encType="multipart/form-data"
        className="flex flex-col gap-10 mb-5"
      >
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="category"
              value="Select the category of this tree"
            />
          </div>
          <Select id="category" name="category">
            <option value="Fruit">Fruit</option>
            <option value="Evergreen">Evergreen</option>
            <option value="Deciduous">Deciduous</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="treeName" value="Type here name of tree" />
          </div>
          <TextInput
            id="treeName"
            type="text"
            ref={treeName}
            name="treeName"
            placeholder="Enter the name of Tree"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="treePrice" value="Type here Price of tree" />
          </div>
          <TextInput
            id="treePrice"
            type="number"
            ref={treePrice}
            name="treePrice"
            placeholder="Enter the Price of Tree"
          />
        </div>
        <div>
          <div className="flex flex-col items-start gap-2 mb-2">
            <legend className="mb-4">Choose the availability</legend>
            <div className="flex items-start gap-10">
              <div className="flex items-center gap-2">
                <Radio
                  id="available"
                  name="status"
                  value="Available"
                  defaultChecked
                />
                <Label htmlFor="available">Available</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="sold" name="status" value="Sold Out" />
                <Label htmlFor="sold">Sold Out</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="Backorder" name="status" value="Backorder" />
                <Label htmlFor="Backorder">Backorder</Label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="availableQuantity"
              value="Type here Amount of Availability"
            />
          </div>
          <TextInput
            id="availableQuantity"
            type="number"
            ref={availableQuantity}
            name="availableQuantity"
            placeholder="Enter the Amount of Availability"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Tree description" />
          </div>
          <Editor
            initialValue="<p>This paragraph is set as initial description of the tree, you can remove it </p>"
            init={{
              height: 400,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family: Arial, sans-serif; font-size: 16px; }",
              paste_data_images: true, // Enable pasting of images
            }}
            onEditorChange={handleEditorChange}
          />
        </div>
        <div id="fileUpload">
          <Label
            htmlFor="dropzone-file"
            className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  // eslint-disable-next-line react/no-unknown-property
                  strokeLineJoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400">
                JPEG, PNG, JPG or WEBP (MAX. 800x400px)
              </p>
              <p></p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Image Size should be less than 3MB
              </p>
            </div>
            <FileInput id="dropzone-file" className="hidden" />
          </Label>
        </div>
        <Button className="custom-button-style" type="submit">
          Upload
        </Button>
      </form>
    </div>
  );
};
export default AddNewTree;
