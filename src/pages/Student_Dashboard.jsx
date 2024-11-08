import React from "react";
import { useEffect, useState } from "react";
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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    console.log(jobId); // Log the jobId to verify it is being passed correctly
    setAppliedJobs((prev) => ({ ...prev, [jobId]: true }));
    setJobs((prevJobs) =>
      prevJobs.map((job) => {
        if (job.job_id === jobId) {
          const updatedJob = { ...job, applications: job.applications + 1 };
          updateJobInBackend(updatedJob);
          return updatedJob;
        }
        return job; // Unmodified jobs
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
        console.log(data); // Log the response from the server
      })
      .catch((error) => console.error("Error updating job:", error));
  }

  function handleViewApplication(jobId) {
    // Logic to view the application
    toast.info(`Viewing application for job ID: ${jobId}`);
  }
  
  function handleWithdrawApplication(jobId) {
    // Logic to withdraw the application
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
        return job; // Unmodified jobs
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
              ` hover:bg-muted rounded-2xl flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
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
        <div className="grid gap-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Job Listings
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Input
                    type="search"
                    placeholder="Search jobs..."
                    className="w-40 bg-muted rounded-md px-3 py-1 text-sm"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Job Title</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>CGPA</TableHead>
                      <TableHead>Branch</TableHead>
                      <TableHead>Package</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Applications</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  {/* <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Software Engineer
                      </TableCell>
                      <TableCell>Acme Inc.</TableCell>
                      <TableCell>8.5</TableCell>
                      <TableCell>Computer Science</TableCell>
                      <TableCell>₹30 LPA</TableCell>
                      <TableCell>2024-09-30</TableCell>
                      <TableCell>42</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Apply
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        UI/UX Designer
                      </TableCell>
                      <TableCell>Globex Corp.</TableCell>
                      <TableCell>8.0</TableCell>
                      <TableCell>Computer Science</TableCell>
                      <TableCell>₹25 LPA</TableCell>
                      <TableCell>2024-07-15</TableCell>
                      <TableCell>18</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Apply
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Data Analyst
                      </TableCell>
                      <TableCell>Stark Industries</TableCell>
                      <TableCell>7.5</TableCell>
                      <TableCell>Statistics</TableCell>
                      <TableCell>₹20 LPA</TableCell>
                      <TableCell>2024-09-01</TableCell>
                      <TableCell>29</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Apply
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody> */}
                  <TableBody>
                    {jobs.map((job) => (
                      <TableRow key={job.job_id}>
                        <TableCell className="font-medium">
                          {job.title}
                        </TableCell>
                        <TableCell>{job.company}</TableCell>
                        <TableCell>{job.cgpa}</TableCell>
                        <TableCell>{job.branch}</TableCell>
                        <TableCell>{job.Package}</TableCell>
                        <TableCell>{job.deadline}</TableCell>
                        <TableCell>{job.applications}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleApplied(job.job_id)}
                            disabled={appliedJobs[job.job_id]}
                          >
                            {appliedJobs[job.job_id] ? "Applied" : "Apply"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Your Applications
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Input
                    type="search"
                    placeholder="Search your applications..."
                    className="w-40 bg-muted rounded-md px-3 py-1 text-sm"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Job Title</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>CGPA</TableHead>
                      <TableHead>Branch</TableHead>
                      <TableHead>Package</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {appliedJobList.map((job) => (
                      <TableRow key={job.job_id}>
                        <TableCell className="font-medium">
                          {job.title}
                        </TableCell>
                        <TableCell>{job.company}</TableCell>
                        <TableCell>{job.cgpa}</TableCell>
                        <TableCell>{job.branch}</TableCell>
                        <TableCell>{job.Package}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Pending</Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <DotIcon className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => handleViewApplication(job.job_id)}
                              >
                                View Application
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleWithdrawApplication(job.job_id)
                                }
                              >
                                Withdraw Application
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}

export default Student_Dashboard;
