import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RastaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="p-4 bg-pink-800">
      <Button variant="contained" color="primary" className="mt-4 text-lg">
        Material-UI with Tailwind
      </Button>
    </div>
  );
}

export default App;

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
    <footer className="flex justify-center pb-3">
      <p>
        Copyright &copy; , Made with 💗 by <strong>Adarsh</strong>
      </p>
    </footer>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Wait....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
