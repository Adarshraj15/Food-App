import React from "react";
import ReactDOM from "react-dom/client";



/*const heading = React.createElement("h1" , {id:"heading"} , "Hello world using React!");

            const root = ReactDOM.createRoot(document.getElementById("root"));

            root.render(heading);*/


const parent = React.createElement(
    "div" ,
     {id: "parent"} ,
      React.createElement(
        "div" ,
         {id: "child"} ,
       [React.createElement("h1" , {} , "hey") , React.createElement("h2" , {} , "Hey i am h2 tag")]
      )
    );
 //const parent = React.createElement("div",{id: "first"}, "hi");
    //console.log(parent);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);