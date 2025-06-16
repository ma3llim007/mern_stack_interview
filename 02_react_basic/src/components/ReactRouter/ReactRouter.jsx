import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import Layout from "./layouts/layout";
import { RouterProvider } from "react-router";
import NotFound from "./NotFound";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Blogs from "./Blogs";
import BlogDetails from "./BlogDetails";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about-us",
                element: <AboutUs />,
            },
            {
                path: "contact-us",
                element: <Contact />,
            },
            {
                path: "blogs",
                element: <Blogs />,
            },
            {
                path: "blog-details/:blogSlug",
                element: <BlogDetails />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

// const ReactRouter = () => {
//     return <RouterProvider router={routers} />;
// };

// With Another Syntax
const ReactRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blog-details/:blogSlug" element={<BlogDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default ReactRouter;
