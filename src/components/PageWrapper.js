import Documentation from "./Page";
import Header from "./Header";
import Navigation from "./Navigation";
import TableOfContents from "./TableOfContents";

const PageWrapper = ({ title, meta, children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto max-w-[1900px] flex place-content-between px-3">
        <Navigation />
        <Documentation title={title} meta={meta}>
          {children}
        </Documentation>
        <TableOfContents />
      </div>
    </div>
  );
};

export default PageWrapper;
