class User{
    constructor(user){
        this.user = user;
        this.userEvents = [];
    }
}

class Event{
    constructor(eventCategory, eventName, eventTime){
        this.eventCategory = eventCategory;
        this.eventName = eventName;
        this.eventTime = eventTime;
    }
}

class EventRecommender {
    constructor() {
    // All main properties should go here.
        this.AllEvents = [];
        this.AllUsers = [];
    }

    addEvent(eventCategory, eventName, eventTime) {
    // Adds a new Event to the System
        const convertDate = new Date(eventTime);
        //converting Date
        const eventObj = new Event(eventCategory, eventName, convertDate);
        //create new event obj using event class
        this.AllEvents.push(eventObj);
        //adding the new event obj into the event array
    }

    addUser(userName) {
    // Adds a new User to the System
        const userObj = new User(userName);
        //create new user obj using user class
        this.AllUsers.push(userObj);
        //adding new user obj to user array
    }

    saveUserEvent(user, event){
    // Allow users to save events to a personal Events array.
        const eventToAdd = this.AllEvents.find(eventN => eventN.eventName === event);
        //finding the event obj in the event array and storing it into a variable
        const userIndex = this.AllUsers.findIndex(userN => userN.user === user);
        //finding the user's obj index in the users obj array 
        this.AllUsers[userIndex].userEvents.push(eventToAdd);
        //pushing the event obj into the user's obj's event array by using the found index of the user's obj in AllUsers array
    }

    deleteUser(user) {
    // Deletes a User from the system
        const userIndex = this.AllUsers.findIndex(userN => userN.user === user);
        //finding the user's obj index in the user obj array
        this.AllUsers.splice(userIndex, 1);
        //removing 1 element starting from userIndex #
    }
   
    deleteEvent(array,eventName) {
    // Deletes the Event from any event array
    const eventIndex = array.findIndex(eventN => eventN.eventName === eventName);
    //finding the event obj index in the event obj array
    array.splice(eventIndex, 1);
    //removing 1 element starting from eventIndex #
    }

    findEventsByDate(date){
    // Returns all events on a given date
        let availableEvents = [];
        //empty array to put avaiable events in
        const givenDate = new Date(date);
        //converting user chosen date
        for(let i=0;i<this.AllEvents.length;i++){
        //loop to go thru all events in AllEvents array
            if(this.AllEvents[i].eventTime.getTime() === givenDate.getTime()){
            //see if time of event matches user given time
                availableEvents.push(this.AllEvents[i]);
                //pushing event objs that matches time into avaibleEvents array
            }
        }
        return availableEvents;
    }
    
    findEventsbyCategory(category){
    // Returns all events in a given category
        let availableEvents = [];
        //empty array to put events that matches the user given category
        for(let i=0;i<this.AllEvents.length;i++){
        //loop to go thru all events in AllEvents array
            if(this.AllEvents[i].eventCategory === category){
            //see if category of event matches user given category
                availableEvents.push(this.AllEvents[i]);
                //pushing event objs that matches category into avaibleEvents array
            }
        }
        return availableEvents;
    }
}

/*
Want List:
    1. Find events by Date and Category
    2. Delete duplicate events
    3. Username has to be unique (to avoid duplication and adding events/user deletion complications)
*/

// const eventR = new EventRecommender();
// eventR.addEvent("horror","vampire night1", "May 6, 2020");
// eventR.addEvent("horror","vampire night2", "May 8, 2020");
// eventR.addEvent("pop","popsigner1", "May 8, 2020");
// eventR.addEvent("pop","popsigner2", "May 9, 2020");
// // eventR.addUser("Christian");
// // eventR.addUser("James");
// // eventR.saveUserEvent("James", "popsigner");
// // console.log(eventR.AllEvents);
// // console.log(eventR.AllUsers);
// // console.log(eventR.AllUsers[1].userEvents);
// // eventR.deleteUser("Christian");
// // console.log(eventR.AllUsers);
// // eventR.deleteEvent("popsigner");
// // console.log(eventR.AllEvents);
// // console.log(eventR.findEventsByDate("May 8, 2020"));
// console.log(eventR.findEventsbyCategory("pop"));


module.exports = { EventRecommender, User, Event};