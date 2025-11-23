import express from "express";
import { router } from "./routes";
import { authMiddleware } from "./middleware/authMiddleware";

const app = express();

app.use(express.json());
app.use("/", router)
app.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: `${req.user}입니다.` });
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log("server running");
});

export default app;