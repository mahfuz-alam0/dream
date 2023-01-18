import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Agency from "../Agency/Agency";
import BlogP from "../BlogP/BlogP";
import ContectUs from "../ContectUs/ContectUs";
import CourseP from "../CoursesP/CourseP";
import Freelanchers from "../Freelanchers/Freelanchers";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import SubLayout from "../Layout/SubLayout";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Team from "../Team/Team";


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
            },
            {
                path: '/team',
                element: <Team/>
            },
            {
                path: '/freelanchers',
                element: <Freelanchers/>
            },
            {
                path: '/team',
                element: <Team/>
            },
            {
                path: '/blog',
                element: <BlogP/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/contect',
                element: <ContectUs/>
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