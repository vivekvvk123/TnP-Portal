import React from "react";
import { Link } from "react-router-dom";
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

function Student_Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex-1 grid grid-cols-[250px_1fr] gap-4 p-4 sm:p-6">
        <nav className="flex flex-col gap-2 bg-background rounded-lg shadow-sm">
          <Link
            to="#"
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <LayoutGridIcon className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <UserIcon className="h-5 w-5" />
            Profile
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <BriefcaseIcon className="h-5 w-5" />
            Job Listings
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <CalendarIcon className="h-5 w-5" />
            Interview Schedule
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <CodeIcon className="h-5 w-5" />
            Coding Tests
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <UsersIcon className="h-5 w-5" />
            Placement Statistics
          </Link>
        </nav>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Active Job Listings
                </CardTitle>
                <BriefcaseIcon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Pending Applications
                </CardTitle>
                <ClipboardListIcon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Scheduled Interviews
                </CardTitle>
                <CalendarIcon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Placement Rate
                </CardTitle>
                <UsersIcon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
              </CardContent>
            </Card>
          </div>
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
                    <TableRow>
                      <TableCell className="font-medium">
                        Software Engineer
                      </TableCell>
                      <TableCell>Acme Inc.</TableCell>
                      <TableCell>8.5</TableCell>
                      <TableCell>Computer Science</TableCell>
                      <TableCell>₹30 LPA</TableCell>
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
                            <DropdownMenuItem>
                              View Application
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Withdraw Application
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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
                            <DropdownMenuItem>
                              View Application
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Withdraw Application
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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
                            <DropdownMenuItem>
                              View Application
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Withdraw Application
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
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
                </Table>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Student Profile</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default Student_Dashboard;
