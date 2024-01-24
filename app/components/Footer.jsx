const Footer = () => {
  return (
    <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
      <div className="flex flex-wrap">
        <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <ul>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                LinkedIn
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                Github
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <ul>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                Portfolio
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="block text-gray-600 py-2">
                Instagram
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
