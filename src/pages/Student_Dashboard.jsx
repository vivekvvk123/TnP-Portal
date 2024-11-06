import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Student_Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState({});

  const appliedJobList = jobs.filter((job) => appliedJobs[job.job_id]);

  useEffect(() => {
    fetch("/../../Backend/DB.json")
      .then((response) => response.json())
      .then((data) => setJobs(data["activeJobs"]))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  function handleApplied(jobId) {
    setAppliedJobs((prev) => ({ ...prev, [jobId]: true }));
    setJobs((prevJobs) =>
      prevJobs.map((job) => {
        if (job.job_id === jobId) {
          const updatedJob = { ...job, applications: job.applications + 1 };
          updateJobInBackend(updatedJob);
          return updatedJob;
        }
        return job;
      })
    );
    toast.success("You have successfully applied for this job.");
  }

  function updateJobInBackend(updatedJob) {
    fetch("http://localhost:3000/update-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobId: updatedJob.job_id,
        applications: updatedJob.applications,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error updating job:", error));
  }

  function handleViewApplication(jobId) {
    toast.info(`Viewing application for job ID: ${jobId}`);
  }

  function handleWithdrawApplication(jobId) {
    setAppliedJobs((prev) => {
      const updatedJobs = { ...prev };
      delete updatedJobs[jobId];
      return updatedJobs;
    });
    setJobs((prevJobs) =>
      prevJobs.map((job) => {
        if (job.job_id === jobId) {
          const updatedJob = { ...job, applications: job.applications - 1 };
          updateJobInBackend(updatedJob);
          return updatedJob;
        }
        return job;
      })
    );
    toast.warn(`Withdrew application for job ID: ${jobId}`);
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex-1 grid grid-cols-[250px_1fr] gap-4 p-4 sm:p-6">
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
              `hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <BriefcaseIcon className="h-5 w-5" />
            Job Listings
          </NavLink>
          <NavLink
            to="/student/interview-schedule"
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
            to="/coding-tests"
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
            to="/referral"
            className={({ isActive }) =>
              `hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <UsersIcon className="h-5 w-5" />
            Referral Support
          </NavLink>
          <NavLink
            to="/student/resume-builder"
            className={({ isActive }) =>
              `hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <UsersIcon className="h-5 w-5" />
            Resume Builder
          </NavLink>
          <NavLink
            to="/alumni"
            className={({ isActive }) =>
              `hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <UsersIcon className="h-5 w-5" />
            Alumni Connect
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <UsersIcon className="h-5 w-5" />
            Certified Courses
          </NavLink>
          <NavLink
            to="/student/scheduler"
            className={({ isActive }) =>
              `hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-black bg-white"
              }`
            }
          >
            <UsersIcon className="h-5 w-5" />
            Scheduler
          </NavLink>
        </nav>
        {/* Rest of the component */}
      </main>
      <ToastContainer />
    </div>
  );
}

export default Student_Dashboard;
