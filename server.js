import express, { response } from "express";
import recordsRouter from "./routes/recordRouters.js";
import usersRouter from "./routes/usersRouter.js";
import ordersRouter from "./routes/ordersRouters.js";
const app = express();
const port = process.env.PORT || 5001;

/** EXPRESS MIDDLEWARE */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/** ENDPOINTS */
app.use("/users", usersRouter);
app.use("/orders", ordersRouter);
app.use("/api", recordsRouter);

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

app.listen(port, () => {
  console.log(`server's up & running at http://localhost:${port}`);
});
