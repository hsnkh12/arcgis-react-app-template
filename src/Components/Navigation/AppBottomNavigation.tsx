const AppBottomNavigation = (props: any) => {
  const { screens, currentScreen, setCurrentScreen } = props;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        {screens.map((screen: any) => (
          <button
            key={screen.value}
            type="button"
            className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${
              currentScreen === screen.value
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500 dark:text-gray-400"
            }`}
            onClick={() => setCurrentScreen(screen.value)}
          >
            {screen.icon}
            <span className="text-xs">{screen.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AppBottomNavigation;
