//arrays use []
//objects user {}
let petSalon = {
    name:"The Fashion Pet",  //1st attribute
    address:"Ave University 768",//2nd attibute
    //pet:["pet1","pet2","pet3"],
    hours:{
        open: "9:00 AM",
        close: "6:00 PM"
    },
    Cost:{
        Small: "$25.00",
        Medium: "$50.00",
        Large: "$75.00"
    },
    //anomyous object for an array
    pets:[]
}
//constructor function
//<----------Parameters/ local variables-------------------->

function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    //attribute= parameters
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
}

//creating objects
function init(){
let scooby = new Pet("Scooby",50,"male","Dane","Grooming","Shaggy","555-555-5555");
let scrappy = new Pet("Scrappy",50,"male","Dane","Grooming","Shaggy","555-555-5555");
let roger = new Pet("roger",50,"male","Dane","Grooming","Shaggy","555-555-5555");

    petSalon.pets.push(scooby,scrappy,roger);
    console.log(petSalon.pets)
    //calling the function
    displayInfo();
    displayNumberOfPets();
    

}
window.onload=init;

function displayInfo(){
document.getElementById("info").innerHTML=`Welcome to the ${petSalon.name} family.  We are open from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}
function displayNumberOfPets(){
    document.getElementById("number-pets").innerHTML=`There are ${petSalon.pets.length} pets registered.`;
}
function register(){
    let petName=document.getElementById("txtPetName").value;
    let age=document.getElementById("txtAge").value;
    let gender=document.getElementById("txtGender").value;
    let breed=document.getElementById("txtBreed").value;
    let service=document.getElementById("selService").value;
    let owner=document.getElementById("txtOwner").value;
    let phone=document.getElementById("txtPhone").value;
    console.log(petName,age,gender,breed,service,owner,phone);
    //create the object
    let newPet = new Pet(petName,age,gender,breed,service,owner,phone)
    console.log(newPet);
    //push the object
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
    displayNumberOfPets();
    clearInputs();

}
function test(){
    console.log("This is a test");
}


function clearInputs(){
    document.getElementById("txtPetName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("selService").value="";
    document.getElementById("txtOwner").value="";
    document.getElementById("txtPhone").value="";

}

//call the displayinfo function
//displayInfo();

//To use a FOR loop and alert to display ther number of 'PETS' in the array above named 'pets'
/*for(let i=0; i<petSalon.pets.length; i++) {/*
    document.write(petSalon.pets[i].name);
}
alert(` Number of pets: ${petSalon.pets.length} `)*/
//To call the function
//displayInfo();
//displayNumberOfPets();

/* {


            name: "Scooby",
            age: 50,
            breed: "Dane",
            gender: "Male",
            service:"Grooming",
            owerName: "Shaggy",
            conatctPhone: "619-630-0604"
        },
        {
            name: "Scrappy",
            age: 40,
            breed: "Mixed",
            gender: "Male",
            service:"Vaccine",
            owerName: "Shaggy",
            conatctPhone: "619-630-0604"
        },
        {
            name: "Speedy Gonzales",
            age: 80,
            breed: "Mixed",
            gender: "Male",
            service:"Nails",
            owerName: "Bugs Bunny",
            conatctPhone: "619-630-0604"
        },
        {
            name: "Speedy Gonzales",
            age: 80,
            breed: "Mixed",
            gender: "Male",
            service:"Nails",
            owerName: "Bugs Bunny",
            conatctPhone: "619-630-0604"
        }
    ]

}*/
//for(let i=0;i<petSalon.pets.length;i++)
   
//console.log(petSaloon.Cost.Medium) ---- to see a specific object in the console
//console.log(petSaloon.pets[2]); ---to find a specific object in an array i.e. position 2.  
//console.log(petSalon.pets);