import React, { useState, useRef, useEffect } from "react";

const AppBottomSheet = (props: any) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(true);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const drawer = drawerRef.current as HTMLDivElement | null; // Add type assertion
    if (drawer) {
      if (isOpen) {
        drawer.style.height = `60%`;
      } else {
        drawer.style.height = "15%";
      }
    }
  }, [isOpen]);

  return (
    <div
      id="drawer-swipe"
      ref={drawerRef}
      className="fixed z-40 w-full overflow-hidden bg-white border-t border-gray-200 shadow-lg rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-height duration-300 ease-in-out bottom-0 left-0 right-0"
      tabIndex={-1}
      aria-labelledby="drawer-swipe-label"
      style={{
        height: isOpen ? "auto" : "0px",
        transition: "height 0.3s ease-in-out",
      }}
    >
      <div
        className="p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
        onClick={toggleDrawer}
      >
        <span className="absolute w-8 h-1 -translate-x-1/2 bg-black rounded-lg top-3 left-1/2"></span>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default AppBottomSheet;
