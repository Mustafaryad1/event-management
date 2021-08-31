module.exports = (req,res,next)=> {
    try{
        console.log(req.user)
       if (req.user.role !== 'admin') {
        return res.status(401).json({
         error: "You don't have enough permission to perform this action"
        });
       }
       next()
    }catch(err){
       next(err);
    }

}
