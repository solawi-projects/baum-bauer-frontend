/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const EachPageHeader = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="flex flex-col items-center mt-0 mb-0">
      <h2 className="font-main-font md:text-7xl text-4xl mt-10 mb-1">
        {title}
      </h2>
      <p className="w-[90%] mx-auto xl:w-[60%] lg:w-[70%] md:w-[80%] text-center text-font-family-color text-md">
        {subtitle}
      </p>
    </div>
  );
};
export default EachPageHeader;
