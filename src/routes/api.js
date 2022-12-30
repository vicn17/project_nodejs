import apiController from "../controllers/api/apiController";

export default (app, router) => {
  //* Use loop router for request
  //   apiController.map((item) => {
  //     if (item.method && (item.method = "post")) {
  //       router.post(item.url, item.file);
  //     } else {
  //       router.get(item.url, item.file);
  //     }
  //   });

  router.get("/users", apiController.getAllUsers);

  router.post("/create-user", apiController.createUserAPI);

  router.put("/update-user", apiController.updateUserAPI);

  router.delete("/delete-user/:ur_id", apiController.deleteUserAPI);

  app.use("/api/v1/", router);
};
