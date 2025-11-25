import express, { Response } from "express";
import cors from "cors";
import { router } from "./routes";
import { sequelize } from "./models";
import { corsOptions } from "./config/cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router)

const PORT = 8080;

sequelize.sync().then(() => {
  console.log('데이터베이스 동기화 성공');
}).catch(err => {
  console.error('데이터베이스 동기화 실패:', err);
});

app.listen(PORT, () => {
    console.log("server running");
});

export default app;