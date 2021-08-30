const config = require('dotenv').config();
const  mysql = require('mysql');
const parsed = require('dotenv').config().parsed



class MySQlWrapper{

    constructor(){

        this.connection = mysql.createConnection({

            host:parsed.db_host,

            user:parsed.user,

            password:parsed.password,

            database:parsed.database

        });

    }


    query(queryString){

        return  new Promise((resolve,reject)=>{

            try

            {

                var self = this;

                this.connection.query(queryString,function(error,results,fields){

                    if(error){

                        console.log('err',error);

                        reject(self.createResponseObject(error,null));

                    }

                     resolve(self.createResponseObject(error,results));

                });   

            }

            catch(ex){

                console.log('ex',ex);

                reject(self.createResponseObject(ex,null));

            }
         });

    }

    close(){

        return new Promise((resolve,reject)=>{

            this.connection.end( err =>{

                if(err){

                    return reject(err);

                }

                resolve();

            });

        });

       

    }

 

    createResponseObject(error,results){

        return {

            error: error,

            results: results === undefined ? null : results === null ? null : JSON.stringify(results)

           }

    }

 

}

module.exports = MySQlWrapper