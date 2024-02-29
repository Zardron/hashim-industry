import { MdNightlight, MdOutlineLightMode } from "react-icons/md";

const DarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <div className="group fixed bottom-20 lg:bottom-5 right-5 p-2 rounded-lg bg-white  border-2 border-primary dark:bg-dark dark:border-primary dark:border-2 z-50 hover:bg-dark">
      {darkMode === "light" ? (
        <MdNightlight
          className="rotate-[-20deg] hover:rotate-[-45deg] text-dark cursor-pointer transition duration-150 ease-out animate-wiggle group-hover:text-white"
          size={30}
          onClick={() => setDarkMode("dark")}
        />
      ) : (
        <MdOutlineLightMode
          className=" text-white hover:text-yellow cursor-pointer animate-spin-slow"
          size={30}
          onClick={() => setDarkMode("light")}
        />
      )}
    </div>
  );
};

export default DarkMode;
