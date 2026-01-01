import React from "react";
import ReactDOM from "react-dom/client";



const jsxHeading = <h1 id="child">hello world from jsx</h1>;

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("h1", { id: "child" }, "hello world from react"),
        jsxHeading
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
