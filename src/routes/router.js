import homeController from "../controllers/web/homeController";

export default (app, router) => {
  //* Use loop router for request
  homeController.map((item) => {
    if (item.method && (item.method = "post")) {
      router.post(item.url, item.file);
    } else {
      router.get(item.url, item.file);
    }
  });

  app.use("/", router);
};
