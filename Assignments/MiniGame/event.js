class TicketType{
    constructor(type,price){
      this.type = type;
      this.price = price;
    }
}

class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = []
    }

    addAvailableTickets(type, price){
        const priceObj = new TicketType(type,price);
        this.availableTickets.push(priceObj)
    }

    allTickets(){
        let priceString = "";
        $.each(this.availableTickets, function(index, item){
            priceString+= `<li>${item.type} (${item.price})</li>`;
        })
        return priceString;
    }

    searchTickets(lower,upper){
        console.log(lower+","+upper);
        let priceRangeTickets = "";
        $.each(this.availableTickets, function(index, item){
            if(item.price>=lower && item.price<=upper){
                priceRangeTickets += `<li>${item.type} (${item.price})</li>`;
            }
        })
        if(priceRangeTickets===""){
            priceRangeTickets="<b>No tickets avaiable!</b>"; 
        }
        return priceRangeTickets;
    }
}

const eventObj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");
const eventArray = new Array();

eventArray.push(eventObj1, eventObj2, eventObj3);

$(document).ready(function() {
    let html = "";
    $("#slideRange").slider({
        range: true,
        min: 0, //min range of the slider
        max: 300, //max range of the slider
        values: [0,300], //what are the starting values of the slider
        slide: function(event, ui ) { //displaying the values when changing the slider
            $("#amount").html( `Min $: ${ui.values[0]} Max $$$: ${ui.values[1]}` );
        }
    });
    
    $("#submit").on('click', function(){ //displaying avaiable tix depending on price set from slider
        $("#event").html(""); //reseting the HTML of the element to be empty
        html = ""; //reseting the variable's string to empty
        $.each(eventArray, function(index, item) {//reiterating thru each obj in the event array
            html+=`<li id="${index}">${item.name} - ${item.description}<ul>${item.searchTickets($('#slideRange').slider("values")[0], $('#slideRange').slider("values")[1])}</ul></li>`; 
        });
        $("#event").html(html); //displaying the string variable into HTML of the element
    });

    $("#allTix").on('click', function(){ //displaying all tixs
        $("#event").html(""); //reseting the HTML of the element to be empty
        html = ""; //reseting the variable's string to empty
        $.each(eventArray, function(index, item) {//reiterating thru each obj in the event array
            html+=`<li id="${index}">${item.name} - ${item.description}<ul>${item.allTickets()}</ul></li>`; //adding html strings to the variable
        });
        $("#event").html(html); //displaying the string variable into HTML of the element
    });
});

eventObj1.addAvailableTickets("Human", 299);
eventObj1.addAvailableTickets("Vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)
