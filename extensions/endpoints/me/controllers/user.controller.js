const UserServices = require("../services/user.service");
const BaseController = require("./base.controller");

class UserController extends BaseController {
  constructor(options) {
    super(options);
    this.baseService = new UserServices(options);
  }

  resolveUsers = async (req, res, next) => {
    this.baseService.createDrawService(req);
    try {
      const params = {
        limit: 1,
      };
      const response = await this.baseService.getUsers(params);

      return res.json(response);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserController;
