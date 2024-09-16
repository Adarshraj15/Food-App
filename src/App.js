import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const parent = React.createElement(
//     "div" ,
//      {id: "parent"} ,
//       React.createElement(
//         "div" ,
//          {id: "child"} ,
//        [React.createElement("h1" , {} , "hey") , React.createElement("h2" , {} , "Hey i am h2 tag")]
//       )
//     );

//React Element

// const jsxHeading = (
// <h1 id="heading">
//   hi written by JSX
//   </h1>
//   );

//   // React Component

//   const Title = () => (
//   <h1 id="heading">
//     hi written by JSX
//     </h1>
//     );

//   // Component Composition

//   const HeadingComponent = () => (
//     <div id="container">
//     <Title />
//       <h1 className="heading">Namaste React Functinol Component</h1>
//     </div>
//   );

//   const title = (
//     <h1 id="heading">
//       hi written by JSX
//       </h1>
//       );

//   const Element = () => (
//     <div id="container">
//     {title}
//       <h1 className="heading">Namaste React Functinol Component</h1>
//     </div>
//   );

/*header
    -logo
    -navbar
    body
    footer*/

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; , Made with 💗 by <strong>Adarsh</strong>
      </p>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
