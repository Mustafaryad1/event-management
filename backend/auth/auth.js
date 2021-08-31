const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const {mySqlWrapper, UserDbHelper} = require('../db')
const bcrypt = require('bcrypt');

const sqlWrapper = new mySqlWrapper();
const user = new UserDbHelper(sqlWrapper)

const secret = process.env.secret;

passport.use(
      'signup',
      new localStrategy(
        {
          usernameField: 'username',
          passwordField: 'password'
        },
        async (username, password, done)=>{
          try{
            //get user
            const user_data = await user.registerUser(username, password);
            
            // console.log(user_data)
            return done(null, user_data)
          }catch(err){
            
            done(null,{error:err.error.sqlMessage});
          }
        }
      )
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async (username, password, done) => {
      try {
        const user_data = await user.getUser(username);
        
        if (!user_data.length) {
          return done(null, false, { message: 'user_data not found' });
        }
        
        const validate = await bcrypt.compare(password,user_data[0].password)
        
        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user_data, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: secret,
      jwtFromRequest: ExtractJWT.fromHeader('token')
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);