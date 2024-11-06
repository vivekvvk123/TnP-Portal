import React from 'react'
import { Link, NavLink } from "react-router-dom";
import {
    UserIcon,
    BriefcaseIcon,
    CalendarIcon,
    ClipboardListIcon,
    CodeIcon,
    DotIcon,
    LayoutGridIcon,
    PlusIcon,
    UsersIcon,
  } from "@/assets/icons";

function SideBar() {
  return (
    <div>
        <nav className="flex flex-col gap-2 bg-background rounded-lg shadow-sm">
          <NavLink
            to="/student/profile"
            className={({ isActive }) =>
              `rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <UserIcon className="h-5 w-5" />
            Profile
          </NavLink>
          <NavLink
            to="/student/joblisting"
            className={({ isActive }) =>
              ` hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <BriefcaseIcon className="h-5 w-5" />
            Job Listings
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <CalendarIcon className="h-5 w-5" />
            Interview Schedule
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <CodeIcon className="h-5 w-5" />
            Coding Tests
          </NavLink>
          <NavLink
            to="/placement-statistics"
            className={({ isActive }) =>
              `hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <UsersIcon className="h-5 w-5" />
            Placement Statistics
          </NavLink>
          <NavLink
            to="/interview-preparation"
            className={({ isActive }) =>
              `hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <UsersIcon className="h-5 w-5" />
            Interview Preparation
          </NavLink>
          <NavLink
            to="referral"
            className={({ isActive }) =>
              `hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <UsersIcon className="h-5 w-5" />
            Referral Support
          </NavLink>
        </nav>
    </div>
  )
}

export default SideBar