var express = require('express');
var router = express.Router();

const UserController = require('../controller/userController')
const SemesterController = require('../controller/semesterController')
const CourseController = require('../controller/courseController')

                            /* User API */

/* GET: get all users*/
router.get('/', UserController.findAll)

/* GET: get an user by id */
router.get('/:userid', UserController.findbyId);

/* POST: add a new user uses the body*/
router.post('/', UserController.create)

/* PUT: update an user by mail, uses the body*/
router.put('/:userid', UserController.update)

/* DELETE: deletes an user by mail*/
router.delete('/:userid', UserController.delete)


                            /* Semester API */

/* GET: get all semesters*/
router.get('/:userid/semesters', SemesterController.findAll)

/* GET: get a semester by id */
router.get('/:userid/semesters/:semesterId', SemesterController.findbyId);

                            /* Course API*/
/* GET: get all courses*/
router.get('/semesters/courses', CourseController.findAll)

module.exports = router;
