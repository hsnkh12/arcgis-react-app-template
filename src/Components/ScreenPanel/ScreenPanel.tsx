import { memo } from "react";

const ScreenPanel = (props: any) => {
  const { currentScreen, screens } = props;

  return (
    <div className="flex-grow p-4">
      {screens.find((screen: any) => screen.value === currentScreen)
        ?.component || ""}
    </div>
  );
};

export default memo(ScreenPanel);
