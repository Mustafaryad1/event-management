const {EventDbHelper,mySqlWrapper} = require('../db')
const sqlWrapper = new mySqlWrapper();
const event = new EventDbHelper(sqlWrapper);


const addEvent = (req,res)=>{
    const object = req.body;
    event.addEvent(object.name, object.describtion, object.dateOfEvent).then(restul=>{
        res.send(restul)
        
    }).catch(err=>{
        res.send(err)
    })
}


const getEvent = (req,res)=>{
    const event_id = req.params.id;
    event.getEvent(event_id).then(result=>{
        if(!result?.length){
            res.status(404).send("Not Found")
        }
        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
};


const getEvents = (req,res)=>{
    event.getEvents().then(result=>{
        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
}


const deleteEvent = (req,res)=>{
    const event_id = req.params.id;
    event.deleteEvent(event_id).then(restul=>{
        res.send(restul)
    }).catch(err=>{
        res.send(err)
    })
}

const updateEvent = (req,res)=>{
    const event_id = req.params.id;
    const object = req.body;
    event.updateEvent(event_id,object.name, object.description, object.dateOfEvent).then(restul=>{
        res.send(restul)
    }).catch(err=>{
        res.send(err)
    })
}


module.exports = {addEvent, getEvent, getEvents, deleteEvent, updateEvent}