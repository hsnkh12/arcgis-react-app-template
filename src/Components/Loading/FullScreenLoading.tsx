import "./Loading.css";

export function FullScreenLoading() {
  return (
    <div className="full-screen-overlay">
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
}