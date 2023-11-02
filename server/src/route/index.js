import { errHandler, notFound } from "../middleware/handlerError";
import userRouter from "./userRoute";
import categoryRouter from "./categoryRoute";
import productRouter from "./productRoute";
const initRoutes = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/product", productRouter);
  app.use(notFound);
  app.use(errHandler);
  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;
