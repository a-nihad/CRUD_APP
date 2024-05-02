import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./routes/userRoute.js";
import AppError from "./utils/appError.js";
import globalErrorHandler from "./controllers/errorController.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", router);

// Error Handling Unhandled Routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`), 404);
});

// Global Error Handling Middleware
app.use(globalErrorHandler);

export default app;
