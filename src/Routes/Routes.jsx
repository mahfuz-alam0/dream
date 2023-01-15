import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Agency from "../Agency/Agency";
import CourseP from "../CoursesP/CourseP";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import SubLayout from "../Layout/SubLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/course',
                element: <CourseP />
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    },
    {
        path: '/agency',
        element: <SubLayout></SubLayout>,
        children: [
            {
                path: '/agency',
                element: <Agency/>
            }
        ]
    }
])

export default router;