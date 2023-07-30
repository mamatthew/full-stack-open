import express from "express";
import diagnosesRouter from "./api/diagnoses";
import patientsRouter from "./api/patients";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = 3001;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientsRouter);

// app.use(function (_req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   next();
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
