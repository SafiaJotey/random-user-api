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
  .route('/all')
  /**
   * @api {get} /user/all 
   * @apiDescription get all random user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   
   * @apiSuccess {Object[]} get all random user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(userControllers.getAllrandomUser);
router
  .route('/random')
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
router
  .route('/save')
  /**
   * @api {post} /user/save 
   * @apiDescription save an user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   
   * @apiSuccess {Object[]} save  an user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(userControllers.saveAuser);
router
  .route('/delete/:id')
  /**
   * @api {delete} /user/delete/:id 
   * @apiDescription delete an user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   
   * @apiSuccess {Object[]} delete an random user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */

  .delete(userControllers.deleteUser);

router
  .route('/update/:id')
  /**
   * @api {patch} /update update an user
   * @apiDescription update an user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} update an user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */

  .patch(userControllers.updateAUser);

module.exports = router;
