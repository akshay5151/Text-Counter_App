import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "grey";
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.title = " Text counterDark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Light mode";
    }
  };

  return (
    <>
      <BrowserRouter>
          <Navbar title="Text Counter " mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
        <Routes>
          {/* <div className="container my-3 "> */}
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode}/>}/>
          {/* </div */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
