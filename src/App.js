import "./App.css";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";

const applicationHeaders = {
  '/': "মজার বাংলা বর্ণমালা",
  '/vowels': "স্বরবর্ণ পরিচয়",
  '/consonants': "ব্যঞ্জনবর্ণ পরিচয়",
  '/word-quiz': "পড়া শেখো",
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
