import React from 'react'
import { NavLink } from 'react-router-dom'
import { BriefcaseIcon, CalendarIcon, CodeIcon, UserIcon, UsersIcon, DotIcon } from '@/assets/icons'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

function Interview_Schedule() {
  return (
    <div className='flex-1 grid grid-cols-[250px_1fr] gap-4 p-4 sm:p-6'>
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


        <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Upcoming Interviews
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Input
                    type="search"
                    placeholder="Search interviews..."
                    className="w-40 bg-muted rounded-md px-3 py-1 text-sm"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Candidate</TableHead>
                      <TableHead>Job Title</TableHead>
                      <TableHead>CGPA</TableHead>
                      <TableHead>Branch</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Jane Doe</TableCell>
                      <TableCell>Software Engineer</TableCell>
                      <TableCell>8.5</TableCell>
                      <TableCell>Computer Science</TableCell>
                      <TableCell>2023-06-25</TableCell>
                      <TableCell>10:00 AM</TableCell>
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
                            <DropdownMenuItem>Start Interview</DropdownMenuItem>
                            <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            <DropdownMenuItem>Cancel</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  {/* <TableBody>
                    {jobs.map((job, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {job.jobTitle}
                        </TableCell>
                        <TableCell>{job.company}</TableCell>
                        <TableCell>{job.cgpa}</TableCell>
                        <TableCell>{job.branch}</TableCell>
                        <TableCell>{job.package}</TableCell>
                        <TableCell>{job.deadline}</TableCell>
                        <TableCell>{job.applications}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Apply
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody> */}
                </Table>
              </CardContent>
            </Card>



    </div>
  )
}

export default Interview_Schedule