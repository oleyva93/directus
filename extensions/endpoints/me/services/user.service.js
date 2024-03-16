class UserServices {
  constructor(options) {
    this.services = options.services;
    this.logger = options.logger;
  }

  createUserService = ({ schema, accountability }) => {
    const { ItemsService } = this.services;
    this.queries = new ItemsService("user", {
      schema: schema,
      accountability: accountability,
    });
  };

  getUsers = async (params) => {
    try {
      const { limit } = params;
      const response = await this.queries.readByQuery({
        limit: limit,
        sort: ["-date"],
      });

      return response;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = BaseServices;
