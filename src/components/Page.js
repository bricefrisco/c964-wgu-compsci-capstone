import { useEffect } from "react";
import Pagination from "./Pagination";
import Footer from "./Footer";

const Page = ({ title, meta, children }) => {
  const id = title.toLowerCase().replace(/ /g, "-");

  useEffect(() => {
    document.title = `${title} - Computer Science Capstone - Brice Frisco`;
    window.scrollTo({
      left: 0,
      top: 0,
    });
  }, [title]);

  return (
    <div className="w-full max-w-[750px] mx-auto py-6">
      <h1 id={id} className="text-4xl font-bold text-gray-700 mb-5">
        {title}
      </h1>
      <p className="text-gray-500 text-xl mb-5">{meta}</p>
      {children}
      <Pagination />
      <Footer />
    </div>
  );
};

export default Page;
