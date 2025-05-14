import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App14 from "./day2/App14";
import App15 from "./day2/App15";
import App16 from "./day2/App16";

// index.html의 <div id = 'root'></div> 에 리액트 앱을 render
// <React.StrictMode>가 있으면 App이 2번 실행된다(디버깅을 위해 필요) -> 제거해서 1번만 실행되게
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App16 />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
