import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

function RecruiterFeedback() {
  const feedbacks = [
    {
      company: "Acme Inc.",
      experience: "At Acme Inc., we appreciated the professionalism of the candidates. The interviews were well-structured, allowing us to assess both technical and soft skills effectively. We look forward to collaborating with your institution in the future."
    },
    {
      company: "Globex Corp.",
      experience: "Globex Corp. had a positive experience during the recruitment process. The candidates demonstrated strong problem-solving skills and creativity. We were particularly impressed with their ability to work in teams under pressure."
    },
    {
      company: "Stark Industries",
      experience: "Stark Industries found the quality of candidates to be quite high. The preparation provided by the students was evident, and their passion for technology stood out. We hope to see more collaborations in upcoming recruitment drives."
    },
    {
      company: "Wayne Enterprises",
      experience: "Our experience with the recruitment process at your institution was seamless. The candidates were well-prepared and showed great enthusiasm. We look forward to bringing more of your students on board."
    },
    {
      company: "Initech",
      experience: "Initech had a fruitful recruitment experience. The candidates were not only technically proficient but also had excellent communication skills. We appreciated the diverse range of applicants from your college."
    },
    {
      company: "Initech",
      experience: "Initech had a fruitful recruitment experience. The candidates were not only technically proficient but also had excellent communication skills. We appreciated the diverse range of applicants from your college."
    }
  ];

  return (
    <div className="p-4 flex flex-wrap gap-4 justify-center">
      {feedbacks.map((feedback, index) => (
        <Card 
          key={index} 
          className="rounded-lg shadow-md border border-gray-300 w-full sm:w-1/3 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        >
          <CardHeader>
            <CardTitle className="text-lg font-medium">{feedback.company}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{feedback.experience}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default RecruiterFeedback;
