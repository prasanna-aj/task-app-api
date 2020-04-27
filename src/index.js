const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//   // console.log(req.method, req.path);
//   // next();
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   // if (
//   //   req.method === "GET" ||
//   //   req.method === "POST" ||
//   //   req.method === "PATCH" ||
//   //   req.method === "DELETE"
//   // ) {
//   res.status(503).send("Server Maintanence, Please visit us later. ");
//   // }
// });

//FILES UPLOAD TO EXPRESS

const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    // cb(new Error("File must be a PDF"));
    // cb(undefined, true);
    // cb(undefined, false);
    // if (!file.originalname.endsWith(".pdf"))
    if (!file.originalname.match(/\.(doc|docx)/)) {
      return cb(new Error("Upload Only Word"));
    }
    cb(undefined, true);
  },
});
// const errorMiddleware = (req, res, next) => {
//   throw new Error("From my middleware");
// };
app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//without handler new request-> run route handler
//with handler new request->do something->run route handler

app.listen(port, () => {
  console.log("Server is up on Port", port);
});

// const bcrypt = require("bcryptjs");

// const myfunction = async () => {
//   const password = "Red12345";
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare("red12345", hashedPassword);
//   console.log(isMatch);
// };

// const jwt = require("jsonwebtoken");

// const myfunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "prasanna", {
//     expiresIn: "7 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "prasanna");
//   console.log(data);
// };

// myfunction();

//toJSON WORKING

// const pet = {
//   name: "Hal",
// };
// pet.toJSON = function () {
//   return {};
// };
// console.log(JSON.stringify(pet));

//

// const main = async () => {
//   // const task = await Task.findById("5ea554599595ca2510ec08a5");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById("5ea55326e24d9a3574b48dfa");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };
// main();
