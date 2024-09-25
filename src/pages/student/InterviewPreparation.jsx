import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function InterviewPreparation() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Interview Preparation Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <Link
                to="https://www.geeksforgeeks.org/"
                className="text-blue-500 underline"
              >
                GeeksforGeeks
              </Link>{" "}
              - Comprehensive coding interview preparation.
            </li>
            <li>
              <Link
                to="https://leetcode.com/"
                className="text-blue-500 underline"
              >
                LeetCode
              </Link>{" "}
              - Practice coding challenges for tech interviews.
            </li>
            <li>
              <Link
                to="https://interviewbit.com/"
                className="text-blue-500 underline"
              >
                InterviewBit
              </Link>{" "}
              - Interview questions and curated problems.
            </li>
            <li>
              <Link
                to="https://www.hackerrank.com/domains/tutorials/10-days-of-javascript"
                className="text-blue-500 underline"
              >
                HackerRank - 10 Days of Javascript
              </Link>{" "}
              - Brush up your JavaScript skills.
            </li>
            <li>
              <Link
                to="https://www.pramp.com/"
                className="text-blue-500 underline"
              >
                Pramp
              </Link>{" "}
              - Practice mock interviews with peers.
            </li>
            <li>
              <Link
                to="https://www.topcoder.com/"
                className="text-blue-500 underline"
              >
                TopCoder
              </Link>{" "}
              - Competitive programming and problem-solving.
            </li>
            <li>
              <Link
                to="https://www.educative.io/courses/grokking-the-coding-interview"
                className="text-blue-500 underline"
              >
                Grokking the Coding Interview
              </Link>{" "}
              - Learn coding patterns to ace coding interviews.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default InterviewPreparation;
