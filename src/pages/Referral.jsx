import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_5o9v6gf",
      "template_h3kudod",
      e.target,
      "G0RI6a36S0NrDMo7T"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

const Referral = () => {
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
          <Link
            to="referral"
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
            
          >
            <UsersIcon className="h-5 w-5" />
            Referral Support
          </Link>
        </nav>
        <form onSubmit={sendEmail}>
          <div className="grid gap-4">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Referral Request Form
                </CardTitle>
              </CardHeader>
              <CardContent className="">
                <div className="grid gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="applicantname">Applicant Name</Label>
                      <Input
                        type="name"
                        id="name"
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="number">Contact Number</Label>
                      <Input
                        type="number"
                        id="phonenumber"
                        placeholder="Contact Number"
                        name="Contact Number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="companyname">Company Name</Label>
                      <Input
                        type="name"
                        id="company name"
                        placeholder="Company Name"
                        name="Company Name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="Job Role">Job Role</Label>
                      <Input
                        type="name"
                        id="job role"
                        placeholder="Job Role"
                        name="Job Role"
                      />
                    </div>
                    <div>
                      <Label htmlFor="Job ID">Job ID</Label>
                      <Input
                        type="name"
                        id="job id"
                        placeholder="Job ID"
                        name="Job ID"
                      />
                    </div>
                  </div>
                  <div className="grid grid-col gap-4">
                    <div>
                      <Label htmlFor="Referral Need">
                        Why should you be referred?
                      </Label>
                      <Textarea
                        placeholder="Explain the reason why you should be referred. Include your skills, qualifications, and achievements for a better reach."
                        id="message"
                      />
                    </div>
                  </div>
                  <div className="max-w-fit">
                    <Label htmlFor="resume">Resume</Label>
                    <Input id="resume" type="file" />
                  </div>
                </div>
              </CardContent>

              <div className="flex justify-center p-5">
                <Button type="submit" name="submit">
                  Submit Request
                </Button>
              </div>
            </Card>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Referral;
