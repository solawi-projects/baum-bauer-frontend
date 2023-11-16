/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Breadcrumb } from "flowbite-react";
// eslint-disable-next-line no-unused-vars
const PageBreadcrumb = (props) => {
  const { activeLinks, deActiveLink } = props;
  return (
    <div className="">
      <Breadcrumb
        aria-label="This is Breadcrumb showing the location of current page"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        {activeLinks.map((aLink) => (
          <span key={aLink.linkText}>
            <Breadcrumb.Item href="/" icon={aLink.linkIcon}>
              {aLink.linkText}
            </Breadcrumb.Item>
          </span>
        ))}
        <Breadcrumb.Item>{deActiveLink.linkText}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
export default PageBreadcrumb;
