const bcrypt = require('bcrypt');
const { query } = require('express');
const logger = require('./logger');
const  responseHelper = require('./responseHelper');


class EventDbHelper{

    constructor(mySqlWrapper){

        this.sqlWrapper = mySqlWrapper;
        this.logger = new logger();
        this.responsehelper = new responseHelper;

    }

    addEvent(name, description, date){    

        return new Promise((resolve,reject)=>{
            let self = this;
            let query = `insert into event(name, description, dateOfEvent) value('${name}','${description}','${date}');`
            
            resolve(self.sqlWrapper.query(query));

        });

    }

    getEvent(id){
        return new Promise((resolve, reject)=>{
            let query = `select * from event where id ='${id}';`;
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
            }).catch(err=>{
                console.log(err)
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

    updateEvent(id, name, description, dateOfEvent){    
        return new Promise((resolve,reject)=>{
            let self = this;
            let query = `update  event set name='${name}', description='${description}', dateOfEvent='${dateOfEvent}' where id=${id};`
            resolve(self.sqlWrapper.query(query));

        });

    }

}
module.exports = EventDbHelper
