import { errHandler, notFound } from "../middleware/handlerError";
import userRouter from "./userRoute";
import categoryRouter from "./categoryRoute";
import productRouter from "./productRoute";
import paymentRouter from "./paymentRoute";
import webHookRouter from "./webHookRoute";
const initRoutes = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1/payment", paymentRouter);
  app.use("/api/v1/webhook", webHookRouter);
  app.use(notFound);
  app.use(errHandler);
  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;
