import "./Loading.css";
const LoadingSpinner = (props: any) => {
  const { style = { margin: 20 }, small = false } = props;

  return (
    <div className={small ? "spinner2" : "spinner"} style={{ ...style }}></div>
  );
};

export default LoadingSpinner;