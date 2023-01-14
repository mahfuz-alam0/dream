import { createBrowserRouter } from "react-router-dom";
import Agency from "../Agency/Agency";
import CourseP from "../CoursesP/CourseP";
import Home from "../Home/Home";
import Main from "../Layout/Main";


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
            }
        ]
    },
    {
        path: '/agency',
        element: <Agency/>
    }
])

export default router;