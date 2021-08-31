const {mySqlWrapper, AttendanceDbHelper} = require('../db')


const sqlWrapper = new mySqlWrapper();
const attendance = new AttendanceDbHelper(sqlWrapper);


const addAttendance = (req,res)=>{
    const object = req.body;
    attendance.addAttendance(object.event_id, req.user._id).then(result=>{
        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
}


const getEventAttendance = (req,res)=>{
    const event_id = req.params.id;
    console.log(event_id)
    attendance.getEventAttendance(event_id).then(result=>{
        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
}


module.exports = {addAttendance, getEventAttendance}