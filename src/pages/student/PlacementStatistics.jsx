import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import "./PlacementStatistics.css"; // Import the CSS file

Chart.register(...registerables); // Register necessary components of Chart.js

function PlacementStatistics(){
  const chartRef = useRef(null); // Reference to the chart instance
  const placedStudents = [
    { rollNo: "10001", name: "Alice", company: "Tech Corp", package: "₹30 LPA" },
    { rollNo: "10002", name: "Bob", company: "Innovate Ltd", package: "₹28 LPA" },
    { rollNo: "10003", name: "Charlie", company: "Data Solutions", package: "₹32 LPA" },
    { rollNo: "10004", name: "David", company: "Web Innovations", package: "₹26 LPA" },
    { rollNo: "10005", name: "Eva", company: "FinTech Inc", package: "₹29 LPA" },
    { rollNo: "10006", name: "Frank", company: "Health Tech", package: "₹27 LPA" },
    { rollNo: "10007", name: "Grace", company: "Cloud Services", package: "₹31 LPA" },
    { rollNo: "10008", name: "Hannah", company: "E-commerce Ltd", package: "₹25 LPA" },
    { rollNo: "10009", name: "Isaac", company: "Cyber Security", package: "₹33 LPA" },
    { rollNo: "10010", name: "Jack", company: "AI Solutions", package: "₹34 LPA" },
    { rollNo: "10011", name: "Kara", company: "Game Studios", package: "₹28 LPA" },
    { rollNo: "10012", name: "Leo", company: "Automotive Inc", package: "₹30 LPA" },
    { rollNo: "10013", name: "Mia", company: "Retail Group", package: "₹29 LPA" },
    { rollNo: "10014", name: "Noah", company: "Logistics Co", package: "₹26 LPA" },
    { rollNo: "10015", name: "Olivia", company: "Construction Ltd", package: "₹30 LPA" },
    { rollNo: "10016", name: "Paul", company: "Telecom Solutions", package: "₹35 LPA" },
    { rollNo: "10017", name: "Quinn", company: "Smart Tech", package: "₹32 LPA" },
    { rollNo: "10018", name: "Ryan", company: "Hospitality Group", package: "₹27 LPA" },
    { rollNo: "10019", name: "Sophie", company: "Real Estate Inc", package: "₹31 LPA" },
    { rollNo: "10020", name: "Tom", company: "Research Lab", package: "₹28 LPA" },
    { rollNo: "10021", name: "Uma", company: "Media Corp", package: "₹29 LPA" },
    { rollNo: "10022", name: "Vera", company: "Travel Agency", package: "₹30 LPA" },
    { rollNo: "10023", name: "Will", company: "Biotech Ltd", package: "₹34 LPA" },
    { rollNo: "10024", name: "Xena", company: "Advertising Co", package: "₹28 LPA" },
    { rollNo: "10025", name: "Yara", company: "Fashion Brand", package: "₹32 LPA" },
  ];

  // Function to calculate package distribution
  const calculatePackageDistribution = () => {
    const ranges = {
      "10-15 LPA": 0,
      "15-20 LPA": 0,
      "20-25 LPA": 0,
      "25-30 LPA": 0,
      "30-35 LPA": 0,
    };

    placedStudents.forEach(student => {
      const packageValue = parseInt(student.package.replace("₹", "").replace(" LPA", ""));
      if (packageValue >= 10 && packageValue < 15) ranges["10-15 LPA"]++;
      else if (packageValue >= 15 && packageValue < 20) ranges["15-20 LPA"]++;
      else if (packageValue >= 20 && packageValue < 25) ranges["20-25 LPA"]++;
      else if (packageValue >= 25 && packageValue < 30) ranges["25-30 LPA"]++;
      else if (packageValue >= 30 && packageValue < 35) ranges["30-35 LPA"]++;
    });

    return ranges;
  };

  const packageDistribution = calculatePackageDistribution();
  const chartData = {
    labels: Object.keys(packageDistribution),
    datasets: [
      {
        label: "Number of Students",
        data: Object.values(packageDistribution),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // 10-15 LPA
          "rgba(54, 162, 235, 0.6)", // 15-20 LPA
          "rgba(255, 206, 86, 0.6)", // 20-25 LPA
          "rgba(75, 192, 192, 0.6)", // 25-30 LPA
          "rgba(153, 102, 255, 0.6)", // 30-35 LPA
        ],
      },
    ],
  };

  // Clean up chart on component unmount
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "3em", fontWeight: "bold", textAlign: "center" }}>
        Placement Statistics
      </h1>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Bar ref={chartRef} data={chartData} options={{ responsive: true }} />
      </div>
      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Roll No</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Company</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Package</th>
          </tr>
        </thead>
        <tbody>
          {placedStudents.map((student) => (
            <tr key={student.rollNo}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.rollNo}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.company}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.package}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PlacementStatistics


// Error Boundary Component
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("Error occurred:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1 style={{ textAlign: "center", color: "red" }}>Something went wrong.</h1>;
//     }

//     return this.props.children; 
//   }
// }

// // Wrap your component with ErrorBoundary in your app
// const Apps = () => (
//     <PlacementStatistics />
// );

// export default Apps;
