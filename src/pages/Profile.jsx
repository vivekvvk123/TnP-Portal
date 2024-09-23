import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Profile() {
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Vivek Bunkar",
    misno: "112116047",
    gender: "Male",
    email: "vivek@example.com",
    phone: "9876543210",
    cgpa: 9.8,
    course: "B.Tech",
    branch: "ECE",
  });

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex-1 grid grid-cols-[250px_1fr] gap-4 p-4 sm:p-6">
        <nav className="flex flex-col gap-2 bg-background rounded-lg shadow-sm">
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
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">
                Student Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <div className="grid gap-6">
                <div className="flex items-center gap-4 justify-center p-5">
                  <Avatar className="h-32 w-32">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="Student Avatar"
                    />
                    <AvatarFallback>Vivek</AvatarFallback>
                  </Avatar>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                  
                    <Input id="name" value={profileData.name} disabled />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={profileData.email} disabled />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="misno">MIS No</Label>
                    <Input id="misno" value={profileData.misno} disabled />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Input id="gender" value={profileData.gender} disabled />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={profileData.phone} disabled />
                  </div>
                  <div>
                    <Label htmlFor="cgpa">CGPA</Label>
                    <Input id="cgpa" value={profileData.cgpa} disabled />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="course">Course</Label>
                    <Input id="course" value={profileData.course} disabled />
                  </div>
                  <div>
                    <Label htmlFor="branch">Branch</Label>
                    <Input id="branch" value={profileData.branch} disabled />
                  </div>
                </div>
                <div className="max-w-fit">
                  <Label htmlFor="resume">Resume</Label>
                  <Input id="resume" type="file" disabled />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-5">
              <Button onClick={() => setIsProfileDialogOpen(true)}>
                Edit Profile
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Student Profile</DialogTitle>
            <DialogDescription>
              View and edit your profile details.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="misno">MIS No</Label>
                <Input
                  id="misno"
                  value={profileData.misno}
                  onChange={(e) =>
                    setProfileData({ ...profileData, misno: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Input
                  id="gender"
                  value={profileData.gender}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      gender: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="cgpa">CGPA</Label>
                <Input
                  id="cgpa"
                  value={profileData.cgpa}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      cgpa: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="course">Course</Label>
                <Input
                  id="course"
                  value={profileData.course}
                  onChange={(e) =>
                    setProfileData({ ...profileData, course: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="branch">Branch</Label>
                <Input
                  id="branch"
                  value={profileData.branch}
                  onChange={(e) =>
                    setProfileData({ ...profileData, branch: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="max-w-fit">
            <Label htmlFor="resume">Resume</Label>
            <Input id="resume" type="file" />
          </div>
          <DialogFooter>
            <Button>Save Profile</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Profile;
