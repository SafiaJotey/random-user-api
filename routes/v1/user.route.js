const express = require('express');
const userControllers = require('../../controllers/user.controller');

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("tools found with id");
// });

// router.post("/", (req, res) => {
//   res.send("tool added");
// });

router
  .route('/random ')
  /**
   * @api {get} /user/random  
   * @apiDescription get a random user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   
   * @apiSuccess {Object[]} get a random user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(userControllers.getArandomUser);

/**
 * @api {post} /tools save a tool
 * @apiDescription Get all the tools
 * @apiPermission admin
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiParam  {Number{1-}}         [page=1]     List page
 * @apiParam  {Number{1-100}}      [limit=10]  Users per page
 *
 * @apiSuccess {Object[]} all the tools.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
//   .post(toolsControllers.saveATool);

// router
//   .route("/:id")
//   .get(viewCount, limiter, toolsControllers.getToolDetail)
//   .patch(toolsControllers.updateTool)
//   .delete(toolsControllers.deleteTool);

module.exports = router;
