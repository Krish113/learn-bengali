import "./App.css";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";

const applicationHeaders = {
  '/': "মজার বাংলা বর্ণমালা",
  '/vowels': "স্বরবর্ণ পরিচয়",
};

function App() {
  const location = useLocation();
  const showBackButton = location.pathname !== '/';
  const titleText = applicationHeaders[location.pathname] || "মজার বাংলা বর্ণমালা";
  return (
    <>
      <div className="App">
        <Header showBackButton={showBackButton} headerText={titleText} />
      </div>
      <Outlet />
    </>
  );
}

export default App;
