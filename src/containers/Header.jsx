import MenuItem from "../Components/MenuItem";
import { Menus } from "../utils/helper";
const Header = () => {
  return (
    <div className="fixed bottom-0 right-0 lg:top-0 w-full h-auto lg:h-screen lg:w-28  flex justify-center items-end lg:items-center pb-8 lg:pb-0">
      <div className="px-3 py-2 lg:py-10 rounded-full border border-[rgba(255,255,255,0.3)] flex flex-row lg:flex-col items-center justify-center gap-7 duration-200 backdrop-blur-md">
        {Menus &&
          Menus.map((item, index) => {
            return <MenuItem key={index} menu={item} index={index} />;
          })}
      </div>
    </div>
  );
};

export default Header;
