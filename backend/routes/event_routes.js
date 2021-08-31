const router = require('express').Router();
const eventController = require('../controllers/event_controllers');
const isAdmin = require('../middleware/isAdmin')

const passport = require('passport');

router.post('',
            passport.authenticate('jwt', { session: false }),
            isAdmin,
            eventController.addEvent);

router.get('/list',
            passport.authenticate('jwt', { session: false }),
            // isAdmin,
            eventController.getEvents);

router.get('/:id',
           passport.authenticate('jwt', { session: false }),
        //    isAdmin,
           eventController.getEvent);

router.delete('/:id',
              passport.authenticate('jwt', { session: false }),
              isAdmin,
              eventController.deleteEvent);

router.put('/:id',
              passport.authenticate('jwt', { session: false }),
              isAdmin,
              eventController.updateEvent);

module.exports = router;
