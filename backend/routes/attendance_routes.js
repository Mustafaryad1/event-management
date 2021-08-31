const router = require('express').Router();
const attendanceController = require('../controllers/attendance_controllers');

const passport = require('passport');

router.post('',
            passport.authenticate('jwt', { session: false }),
            attendanceController.addAttendance);

router.get('/event/:id',
            passport.authenticate('jwt', { session: false }),
            attendanceController.getEventAttendance);

module.exports = router;