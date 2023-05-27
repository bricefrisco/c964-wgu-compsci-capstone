const Subheading = ({ children }) => {
  const id = children.toLowerCase().replace(/ /g, "-");
  return (
    <h2 id={id} className="text-2xl font-bold mb-4 pt-2 text-gray-700">
      {children}
    </h2>
  );
};

export default Subheading;
