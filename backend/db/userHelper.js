const bcrypt = require('bcrypt');
const logger = require('./logger');
const  responseHelper = require('./responseHelper');


class UserDbHelper{


    constructor(mySqlWrapper){

        this.sqlWrapper = mySqlWrapper;
        this.logger = new logger();
        this.responsehelper = new responseHelper;

    }

 

    registerUser(username,password){    

        return new Promise((resolve,reject)=>{

            let self = this;

            bcrypt.genSalt(10).then((salt,err)=>{

                if(err){

                    this.logger.logError(err,'registerUser');

                    reject(err);

                }

 
                

                  bcrypt.hash(password,salt).then((hash,err)=>{

                        if(err){

                            this.logger.logError(err,'registerUser');

                            reject(err);

                        }

                        let query = `insert into users(username, password, role) value('${username}','${hash}','user');`

                        resolve(self.sqlWrapper.query(query));

                  });

            }).catch(err=>{

                this.logger.logError(err,'registerUser');

            });

        });

    }

    getUser(username){
        return new Promise((resolve, reject)=>{
            let query = `select * from users where username ='${username}';`;
            this.sqlWrapper.query(query).then((result,err)=>{
                if(err){
                    reject(err)
                }
            let user = JSON.parse(result.results);
            resolve(user)
            })
        })
    }

    isAuthenticated(username,password){

        return new Promise((resolve, reject)=>{

            this.logger.logToConsole(username,'isAuthenticated');

            let query = `select * from users where username ='${username}';`;

            let self = this;

            this.sqlWrapper.query(query).then((result,err)=>{

                if(err){

                    self.logger.logError(err,'isAuthenticated:sqlWrapper');

                    reject(err);

                }

                let user = JSON.parse(result.results);

               

                //compare password
                console.log(password)
                bcrypt.compare(password,user[0].password).then((result,err)=>{

                    if(err){

                        self.logger.logError(err,'isAuthenticated:bcrypt');

                        reject(err);

                    }

                    resolve({authenticated:result,user:user[0]});

                }).catch(ex=>{

                    self.logger.logError(err,'isAuthenticated:bcrypt>catch');

                    reject(ex);

                });

               

            }).catch(ex=>{

                self.logger.logError(ex,'isAuthenticated:main>catch');

                var obj = this.responsehelper.rejectReponse(ex,null);

                console.log(obj);

                reject(obj);

            });

        });

    }
}
module.exports = UserDbHelper