/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const EachPageHeader = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-32 bg-white-color mt-1 py-24">
      <h2 className="font-main-font text-6xl mb-5">{title}</h2>
      <p className="font-general-font text-3xl">{subtitle}</p>
    </div>
  );
};
export default EachPageHeader;
