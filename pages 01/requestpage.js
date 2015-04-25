function request(name,score, fee,company, item, dropoff){
        this.name = name;
        this.score = score;
        this.fee = fee;
        this.company = company;
        this.item = item;
        this.dropoff = dropoff;
        this.priority = priority;
    }
    var test = new request("Jack Wines", 2300, 125, "Sayles-Hill, Carleton College", "Strawberry Nana Smoothie", "Myers Hall, Room 340", 75);
    var a1 = new request("John doe", 12, 6, "sayles", "chicken queso", "libe", 12);
    var a2 = new request("johnny ", 5, 2, "subway", "pickles", "cassat", -5);
    var a3 = new request("Aaaa", 5, 3, "Pizza Hut", "fat pizza", "musser", 12345);
    var array = [test, a1, a2, a3];

    function compare(a,b) {
        if (a.priority < b.priority)
            return 1;
        if (a.priority > b.priority)
            return -1;
        return 0;
    }
    array.sort(compare);
    
    for(i = 0; i < array.length; i++){
        addToPage(array[i]);
    }

    function addToPage(r){
        document.getElementById("list").innerHTML += '<li class="request" onclick=requested();>'+
                '<div class="rprice">'+
                '<p align="right"><span class="bolder">Delivery Fee:</span><br><strong> $'+ r.fee +'</strong></p>'+
                '</div>'+
                '<div class="rname">'+
                '<p align="left"><span class="bolder">'+r.name+ '</span> -'+ r.score + '</p>' +
                '</div>' +
                '<div class="rcompany">'+
                '<p align="left"><span class="bolder">Dropoff Location:</span>'+ r.dropoff +'</p>'+
                '</div>'+
                '<div class="ritem">'+
                '<p align="left"><span class="bolder">Pickup Location:</span>'+r.company+'</p>'+
                '</div>'+
                '<div class="rdropoff">'+
                '<p align="left"><span class="bolder">Comments:</span><br>'+ r.item +'</p>'+
                '</div>'+
            '</li>'
    }

    function requested(){
        //if we want to do something when clicking a box, it goes here. 
    }