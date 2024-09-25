import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

function TPO_Dashboard() {
  const [isJobPostingOpen, setIsJobPostingOpen] = useState(false);
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    cgpa: "",
    branch: "",
    Package: "",
    deadline: "",
    applications: 0,
  });

  const handlePost = async () => {
    console.log(JSON.stringify(jobData));
    try {
      const response = await fetch("http://localhost:3000/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });
      console.log(response.ok);
      if (response.ok) {
      } else {
        const errorData = await response.json();
        console.log(errorData.message || "Job Posting failed");
      }
    } catch (error) {
      console.error(error);
      console.log("Something went wrong. Please try again later.");
    }
    setJobData({
      title: "",
      company: "",
      cgpa: "",
      branch: "",
      Package: "",
      deadline: "",
      applications: 0,
    });
    setIsJobPostingOpen(false);
  };

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
                  <Button
                    onClick={() => setIsJobPostingOpen(true)}
                    variant="outline"
                    size="sm"
                  >
                    <PlusIcon className="h-4 w-4" />
                    Post New Job
                  </Button>
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
                      <TableHead>Actions</TableHead>

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
                      <TableCell>2023-06-30</TableCell>
                      <TableCell>42</TableCell>
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
                            <DropdownMenuItem>View Applicants</DropdownMenuItem>
                            <DropdownMenuItem>
                              Schedule Interviews
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Job</DropdownMenuItem>
                            <DropdownMenuItem>Close Job</DropdownMenuItem>
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
                      <TableCell>2023-07-15</TableCell>
                      <TableCell>18</TableCell>
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
                            <DropdownMenuItem>View Applicants</DropdownMenuItem>
                            <DropdownMenuItem>
                              Schedule Interviews
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Job</DropdownMenuItem>
                            <DropdownMenuItem>Close Job</DropdownMenuItem>
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
                      <TableCell>2023-08-01</TableCell>
                      <TableCell>29</TableCell>
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
                            <DropdownMenuItem>View Applicants</DropdownMenuItem>
                            <DropdownMenuItem>
                              Schedule Interviews
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Job</DropdownMenuItem>
                            <DropdownMenuItem>Close Job</DropdownMenuItem>
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
                  <Button variant="outline" size="sm">
                    <PlusIcon className="h-4 w-4" />
                    Schedule Interview
                  </Button>
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
                      <TableCell className="font-medium">
                        Vivek Bunkar
                      </TableCell>
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
                    <TableRow>
                      <TableCell className="font-medium">
                        Chaitanya Deshmukh
                      </TableCell>
                      <TableCell>UI/UX Designer</TableCell>
                      <TableCell>8.0</TableCell>
                      <TableCell>Computer Science</TableCell>
                      <TableCell>2023-07-01</TableCell>
                      <TableCell>2:00 PM</TableCell>
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
                    <TableRow>
                      <TableCell className="font-medium">Srijan Raha</TableCell>
                      <TableCell>Data Analyst</TableCell>
                      <TableCell>7.5</TableCell>
                      <TableCell>Statistics</TableCell>
                      <TableCell>2023-07-15</TableCell>
                      <TableCell>4:30 PM</TableCell>
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
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Coding Test Results
                </CardTitle>
                <div className="flex items-center gap-2" />
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>

      <Dialog open={isJobPostingOpen} onOpenChange={setIsJobPostingOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Post a new Job</DialogTitle>
            <DialogDescription>Manage job posting details.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  value={jobData.title}
                  onChange={(e) =>
                    setJobData({ ...jobData, title: e.target.value })
                  }
                  placeholder="eg. SDE, Data Analyst etc"
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={jobData.company}
                  onChange={(e) =>
                    setJobData({ ...jobData, company: e.target.value })
                  }
                  placeholder=" eg. Flipkart, Amazon etc"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cgpa">CGPA</Label>
                <Input
                  id="cgpa"
                  value={jobData.cgpa}
                  onChange={(e) =>
                    setJobData({ ...jobData, cgpa: e.target.value })
                  }
                  placeholder="eg. 7.0, 7.5 etc "
                />
              </div>
              <div>
                <Label htmlFor="branch">Branch</Label>
                <Input
                  id="branch"
                  value={jobData.branch}
                  onChange={(e) =>
                    setJobData({ ...jobData, branch: e.target.value })
                  }
                  placeholder="eg. ECE, CSE"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="package">Package</Label>
                <Input
                  id="package"
                  value={jobData.Package}
                  onChange={(e) =>
                    setJobData({ ...jobData, Package: e.target.value })
                  }
                  placeholder="eg. 15 LPA, 20 LPA etc"
                />
              </div>
              <div>
                <Label htmlFor="deadline">Deadline</Label>
                <Input
                  id="deadline"
                  value={jobData.deadline}
                  onChange={(e) =>
                    setJobData({ ...jobData, deadline: e.target.value })
                  }
                  type="date"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handlePost}>Post</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TPO_Dashboard;
