const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;
const cors = require("cors");
const exp = require("constants");
const nodemailer = require("nodemailer");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const filepath = path.join(__dirname, "DB.json");

const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
};

const writeDataToFile = (data) => {
  try {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

const saveUsers = (users) => {
  fs.writeFileSync(USERS_DB, JSON.stringify(users, null, 2));
};

app.get("/", (req, res) => {
  res.send("Backend server Up!");
});

app.get("/signup", (req, res) => {
  res.send("signup page is working");
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail", // use "gmail" or any other supported email service
  auth: {
    user: "srijanraha595@gmail.com", // Replace with your email
    pass: "eytd dqex edlz dlnn",  // Replace with your email password or app-specific password
  },
});

// Routes
app.get("/", (req, res) => {
  res.send("Backend server Up!");
});

// Endpoint to send email
app.post("/send-email", async (req, res) => {
  const { email, title, date } = req.body;

  const mailOptions = {
    from: "abcd", // Sender address
    to: email, // Recipient address
    subject: `Reminder for Event: ${title}`,
    text: `You have an upcoming event: ${title} scheduled for ${new Date(date).toLocaleString()}.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.post("/signup", (req, res) => {
  const newdata = req.body;
  console.log(newdata);
  const role = newdata.role;
  const roleKey = `${role}s`;
  const existingData = readDataFromFile();

  console.log(existingData);
  existingData[roleKey].push(newdata);
  //   console.log(req.body);
  writeDataToFile(existingData);

  res.status(201).json({ message: "User signed up successfully", role });
});

app.post("/job", (req, res) => {
  const newdata = req.body;
  console.log(newdata);
  const existingData = readDataFromFile();
  // console.log(existingData);
  existingData["activeJobs"].push(newdata);
  //   console.log(req.body);
  writeDataToFile(existingData);

  res.status(201).json({ message: "Job posted successfully" });
});

app.post("/login", (req, res) => {
  const newdata = req.body;
  console.log(newdata);
  const role = newdata.role;
  const roleKey = `${role}s`;
  const existingData = readDataFromFile();
  const DBdata = existingData[roleKey];
  for (let i = 0; i < DBdata.length; i++) {
    if (
      DBdata[i].email == newdata.email &&
      DBdata[i].password == newdata.password
    ) {
      res.status(200).json({ message: "User logged in successfully", role });
      return;
    }
  }
  res.status(401).json({ message: "Invalid Credentials" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
