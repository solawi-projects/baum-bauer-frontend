/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const EachPageHeader = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="flex flex-col justify-center items-center h-32 mt-1 py-24">
      <h2 className="font-main-font md:text-7xl text-5xl mb-5">{title}</h2>
      <p className="font-general-font text-3xl">{subtitle}</p>
    </div>
  );
};
export default EachPageHeader;
