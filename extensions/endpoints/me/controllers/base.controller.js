/**
 * Base controller class for handling authentication middleware.
 */
class BaseController {
  /**
   * Creates a new instance of BaseController.
   * @param {Object} options - The directus options object.
   */
  constructor(options) {
    this.options = options;
  }

  /**
   * Middleware to check if user is authenticated.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   * @returns {Function} - The next middleware function or an error response.
   */
  isAuthenticated = async (req, res, next) => {
    if (req.accountability?.user == null) {
      res.status(403);
      return res.send(`You don't have permission to access this.`);
    }

    return next();
  };
}

module.exports = BaseController;
