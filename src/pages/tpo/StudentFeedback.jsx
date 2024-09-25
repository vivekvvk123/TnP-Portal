import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const mockFeedback = [
  {
    studentName: "Alice Johnson",
    feedback: "The placement process was well organized, and the support from TPO was excellent!",
    rating: 4.5,
  },
  {
    studentName: "Bob Smith",
    feedback: "I appreciated the coding tests, but I think more mock interviews would be helpful.",
    rating: 3.5,
  },
  {
    studentName: "Charlie Brown",
    feedback: "Great experience overall! The recruiters were very approachable.",
    rating: 4.8,
  },
  {
    studentName: "Diana Prince",
    feedback: "The job listings were quite relevant to my skills. Thank you for your support!",
    rating: 4.2,
  },
  {
    studentName: "Ethan Hunt",
    feedback: "I found the feedback sessions very insightful and helpful for my preparation.",
    rating: 5.0,
  },
];

function StudentFeedback() {
  return (
    <div className="flex flex-col p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Student Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Feedback</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockFeedback.map((feedback, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{feedback.studentName}</TableCell>
                  <TableCell>{feedback.feedback}</TableCell>
                  <TableCell>{feedback.rating} / 5</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default StudentFeedback;
