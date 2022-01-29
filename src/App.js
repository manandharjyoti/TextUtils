// import logo from './lo go.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [swtstate, setSwtstate] = useState("false");
  const [swtstate1, setSwtstate1] = useState("false"); //for go green

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "success");
      // setSwtstate("true"); //true when switch is on
      // setSwtstate1("false");
      document.title = "TextUtils - Dark Mode";
      document.querySelector("#green").disabled = true;
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      // setSwtstate("false");
      // setSwtstate1("false");
      document.querySelector("#green").disabled = false;
    }
  };
  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#c7e7ca";
      showAlert("Green mode has been enabled", "success");
      // setSwtstate1("true"); //true when switch is on
      console.log(swtstate);
      // setSwtstate("false");
      document.title = "TextUtils - Green Mode";
      document.querySelector("#night").disabled = true;
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      // setSwtstate1("false");
      // setSwtstate("false");
      document.querySelector("#night").disabled = false;
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About Text"
        mode={mode}
        toggleMode={toggleMode}
        toggleMode1={toggleMode1}
        // swtstate={swtstate}
        // swtstate1={swtstate1}
      />
      <hr />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about">
              <About />
            </Route> */}

        {/* <Route exact path="/"> */}
        <TextForm heading="Enter text" mode={mode} showAlert={showAlert} />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
