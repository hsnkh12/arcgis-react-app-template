import { cilArrowBottom, cilMove, cilSquare } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { memo } from "react";
import Draggable from "react-draggable";
const AppFloatingPanel = ({ children }: { children: any }) => {
  return (
    <Draggable bounds="body" handle=".drag-handle" >
      <div
        style={{
          position: "fixed",
          opacity: 0.98,
          // top: 70,
          marginTop: 72,
          left: 9,
          display: "grid",
          width: 430,
          overflow: "hidden",
          zIndex: 1000,
          height: "89vh",
        }}
        className="flex flex-col h-screen shadow-lg dark:bg-gray-800 bg-white"
      >
        <div className="flex-1 overflow-auto">
            
                <div className="drag-handle w-full h-9" >
                  
                  {/* <CIcon icon={cilMove} className="w-5 cursor-pointer text-gray"  /> */}
                </div>   
           
            {children}
        </div>
      </div>
    </Draggable>
  );
};

export default memo(AppFloatingPanel);
