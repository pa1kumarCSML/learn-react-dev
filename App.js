import React from "react";
import ReactDOM from "react-dom/client";


// react element
const jsxHeading = (<h1 id="child">hello world from jsx</h1>);

//react components
// -> class based - old way
// -> functional based - new way


// functional react component(new way)
const HeadingComponent = () => (<h1 className="heading">Heading Component</h1>); // mostly used syntax

const HeadingComponent2 = () => {
    return (
        <h1 className="heading">Heading Component</h1>
    )
};// more readable syntax

const HeadingComponent3 = () => <h1 className="heading">Heading Component</h1>; // only one element and also in one line

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

root.render(<HeadingComponent />);
