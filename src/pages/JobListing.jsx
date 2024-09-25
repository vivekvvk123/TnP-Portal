import React from "react";
import { NavLink } from "react-router-dom";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";



function JobListing() {
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
            to="/"
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
            to="/student/referral"
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

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Job Listings</CardTitle>
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
              <TableBody>
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
                  <TableCell className="font-medium">UI/UX Designer</TableCell>
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
                  <TableCell className="font-medium">Data Analyst</TableCell>
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
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default JobListing;
