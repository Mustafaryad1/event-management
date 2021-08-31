const bcrypt = require('bcrypt');
const logger = require('./logger');
const  responseHelper = require('./responseHelper');


class AttendanceDbHelper{

    constructor(mySqlWrapper){

        this.sqlWrapper = mySqlWrapper;
        this.logger = new logger();
        this.responsehelper = new responseHelper;

    }

    addAttendance(event_id, user_id){    

        return new Promise((resolve,reject)=>{
            let self = this;
            let query = `insert into user_attendance(user_id, event_id) value('${user_id}','${event_id}');`
            
            resolve(self.sqlWrapper.query(query));

        });

    }

    getEventAttendance(event_id){
        return new Promise((resolve, reject)=>{
            let query = `select count(*) as attendance_count from user_attendance where event_id='${event_id}';`;
            this.sqlWrapper.query(query).then((result,err)=>{
                if(err){
                    reject(err)
                }
            let event = JSON.parse(result.results);
            resolve(event)
            })
        })
    }

    getEvents(){
        return new Promise((resolve, reject)=>{
            let query = `select * from event;`;
            this.sqlWrapper.query(query).then((result,err)=>{
                if(err){
                    reject(err)
                }
            let event = JSON.parse(result.results);
            resolve(event)
            })
        })
    }

    deleteEvent(id){    
        return new Promise((resolve,reject)=>{
            let self = this;
            let query = `delete from event where id=${id};`
            resolve(self.sqlWrapper.query(query));

        });

    }

}
module.exports = AttendanceDbHelper
