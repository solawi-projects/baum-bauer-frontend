import { Link } from "react-router-dom";

const TreeItem = (props) => {
  const { image, name, treeImg, price, id } = props;
  return (
    <div className="flex items-center p-7 md:p-3 w-full md:w-5/12 lg:w-1/5">
      <div className="w-full h-65 bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        <img
          className="w-full h-[220px] object-cover  mb-1"
          src={image}
          alt={name}
        />
        <div className=" p-4">
          <div className="flex items-center mb-6 justify-between flex-wrap">
            <div className="flex items-center justify-start">
              <img
                src={treeImg}
                alt="Tree Icon"
                className="w-[30px] h-[30px] mr-2"
              />
              <h3 className="text-2xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                {name}
              </h3>
            </div>
            <p className="px-4 py-1 rounded-3xl font-bold price cursor-auto">{`€ ${parseFloat(
              price.$numberDecimal
            )}`}</p>
          </div>

          <div className="mt-2 mb-1 flex justify-start">
            <Link
              to={`/trees/${id}`}
              className="text-center w-full px-4 py-2 bg-bg-header-footer text-font-family-color rounded-[10px] hover:bg-lighter-primary hover:border-2 transition duration-4000 ease-linear mt-4 sm:mt-0"
            >
              view in detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TreeItem;
