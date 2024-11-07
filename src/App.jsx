import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import About from "./pages/About";
import TPO_Dashboard from "./pages/TPO_Dashboard";
import Login from "./pages/Login";
import Student_Dashboard from "./pages/Student_Dashboard";
import Profile from "./pages/Profile";
import Referral from "./pages/Referral";
import JobListing from "./pages/JobListing";
import PlacementStatistics from "./pages/student/PlacementStatistics";
import RecruiterFeedback from "./pages/tpo/RecruiterFeedback";
import StudentFeedback from "./pages/tpo/StudentFeedback";
import InterviewPreparation from "./pages/student/InterviewPreparation";
import Home from "./pages/Home";
import Alumi from "./pages/Alumni";
import Courses from "./pages/Courses";
import ResumeBuilder from "./pages/student/ResumeBuilder";
import Scheduler from "./pages/student/Scheduler";
import Interview_Schedule from "./pages/Interview_Schedule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/institute",
        element: <TPO_Dashboard />,
      },
      {
        path: "/student",
        element: <Student_Dashboard />,
      },

      {
        path: "/student/profile",
        element: <Profile />,
      },
      {
        path: "/student/joblisting",
        element: <JobListing />,
      },
      {
        path: "joblisting",
        element: <JobListing />,
      },
      {
        path: "student/interview-schedule",
        element: <Interview_Schedule />,
      },
      {
        path: "placement-statistics",
        element: <PlacementStatistics />,
      },
      {
        path: "recruiter-feedback",
        element: <RecruiterFeedback />,
      },
      {
        path: "student/referral",
        element: <Referral />,
      },

      {
        path: "student-feedback",
        element: <StudentFeedback />,
      },
      {
        path: "interview-preparation",
        element: <InterviewPreparation />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "student/resume-builder",
        element: <ResumeBuilder />,
      },
      { path: "student/scheduler", element: <Scheduler /> },
      {
        path: "/alumni",
        element: <Alumi />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
