import React from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState("student");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const obj = e.target.elements;
  //   console.log(obj[0].value, obj[1].value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    const obj = e.target.elements;
    const email = obj[0].value;
    const password = obj[1].value;
    // console.log(email, password, role);
    if (!isLogin) {
      try {
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            role,
          }),
        });
        console.log(response.ok);
        if (response.ok) {
          // navigate(`/${role}`); // Redirect to /student or /teacher based on role
          window.location.href = `/${role}`;
        } else {
          const errorData = await response.json();
          console.log(errorData.message || "Login failed");
        }
      } catch (error) {
        console.error(error);
        console.log("Something went wrong. Please try again later.");
      }
    } else {
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            role,
          }),
        });
        console.log(response.ok);
        if (response.ok) {
          // navigate(`/${role}`); // Redirect to /student or /teacher based on role
          window.location.href = `/${role}`;
        } else {
          const errorData = await response.json();
          console.log(errorData.message || "Login failed");
        }
      } catch (error) {
        console.error(error);
        console.log("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            {isLogin ? "Login" : "Sign Up"}
          </CardTitle>
          <CardDescription>
            {isLogin ? "Welcome back!" : "Create your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="student"
            onValueChange={setRole}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="institute">Institute</TabsTrigger>
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
            </TabsList>
            <TabsContent value="student">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="studentEmail">Email</Label>
                  <Input
                    id="studentEmail"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentPassword">Password</Label>
                  <Input
                    id="studentPassword"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="studentConfirmPassword">
                        Confirm Password
                      </Label>
                      <Input
                        id="studentConfirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input
                        id="studentId"
                        placeholder="Enter your student ID"
                        required
                      />
                    </div>
                  </>
                )}
                <Button type="submit" className="w-full">
                  {isLogin ? "Login" : "Sign Up"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="institute">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="instituteEmail">Email</Label>
                  <Input
                    id="instituteEmail"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institutePassword">Password</Label>
                  <Input
                    id="institutePassword"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="instituteConfirmPassword">
                        Confirm Password
                      </Label>
                      <Input
                        id="instituteConfirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instituteName">Institute Name</Label>
                      <Input
                        id="instituteName"
                        placeholder="Enter institute name"
                        required
                      />
                    </div>
                  </>
                )}
                <Button type="submit" className="w-full">
                  {isLogin ? "Login" : "Sign Up"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="company">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="companyEmail">Email</Label>
                  <Input
                    id="companyEmail"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyPassword">Password</Label>
                  <Input
                    id="companyPassword"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="companyConfirmPassword">
                        Confirm Password
                      </Label>
                      <Input
                        id="companyConfirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        placeholder="Enter company name"
                        required
                      />
                    </div>
                  </>
                )}
                <Button type="submit" className="w-full">
                  {isLogin ? "Login" : "Sign Up"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <Button
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="pl-1"
            >
              {isLogin ? "Sign up" : "Login"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
