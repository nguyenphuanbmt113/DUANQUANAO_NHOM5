import { errHandler, notFound } from "../middleware/handlerError";
import userRouter from "./userRoute";
import categoryRouter from "./categoryRoute";
const initRoutes = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/category", categoryRouter);
  app.use(notFound);
  app.use(errHandler);
  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;
