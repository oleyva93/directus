const UserController = require("./controllers/user.controller");

module.exports = {
  id: "me",
  handler: (router, options) => {
    const { isAuthenticated, resolveUsers } = new UserController(options);

    router.get("/get-users", [isAuthenticated], resolveUsers);
  },
};
