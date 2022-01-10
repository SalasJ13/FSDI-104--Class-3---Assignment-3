
let saloon={
    name:"The Fashion Pet",
    address:{
        street:"Av. Palm",
        number:"262",
        zip:"23456",
        city:"San Diego",
        state:"California"
    },
    hours:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[]
}
//name, age, gender, breed, service, owner name, contact phone
function displayInfo(){
    //display the information of the pet saloon address on the footer
    document.getElementById("footer-info").innerHTML=`
    <p>${saloon.address.street} ${saloon.address.number}, ZIP code: ${saloon.address.zip}</p>
    <p>${saloon.address.city}, ${saloon.address.state}</p>
    `;
}
displayInfo();

//clase 2
function Pet(petName, age, gender, breed, service, owner, phone){
    this.name = petName;
    this.age = age;
    this.breed =  breed;
    this.gender = gender;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
}

function checkInput(variable, id, isValid)
{
    if(variable.length<1)
    {
        document.getElementById(id).classList.add("error");
        return false;
    }
    else
    {
        document.getElementById(id).classList.remove("error");
        return true && isValid;
    }
}

function showPetsCards(){
    document.getElementById("petList").innerHTML = '';
    for(let i = 0; i<saloon.pets.length; i++)
    {
        document.getElementById("petList").innerHTML += createCard(saloon.pets[i]);
    }
}


//Cambiar a una tabla que muestre los registros
function createCard(pet){
    return `
    <div id="${pet.id}" class="card my-card">
    <table> 
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Breed</th>
    <th>Gender</th>
    <th>Services</th>
    <th>Owner</th>
    <th>Phone</th>
    <th>Option</th>
    </tr>
    <tr>
    <td>${pet.name}</td>
    <td>${pet.age}</td>
    <td>${pet.breed}</td>
    <td>${pet.gender}</td>
    <td>${pet.service}</td>
    <td>${pet.owner}</td>
    <td>${pet.phone}</td>
    <td> <button class="btn btn-warning" onclick="deletePet(${pet.id});">Delete</button></td>
    </tr>
    </table>   
    </div>
    `;
}



function getInfo(){
    let isValid = true;

    let petName = document.getElementById("txtPetName").value;
    //cuando tengo un error en los datos q se ingresen el recuadro va a cambiar de color usando las considciones
    isValid = checkInput(petName, "txtPetName", isValid);

    let age = document.getElementById("nbAge").value;
    isValid = checkInput(age, "nbAge", isValid);
    
    let gender = document.getElementById("dlGender").value;
    isValid = checkInput(gender, "dlGender", isValid);

    let breed = document.getElementById("dlBreed").value;
    isValid = checkInput(breed, "dlBreed", isValid);

    let service = document.getElementById("dlServices").value;
    isValid = checkInput(service, "dlServices", isValid);

    let owner = document.getElementById("txtOwner").value;
    isValid = checkInput(owner, "txtOwner", isValid);

    let phone = document.getElementById("pnOwner").value;
    isValid = checkInput(phone, "pnOwner",isValid);

    //llamar al constructor
    if(isValid == true)
    {
        //declarar el objeto
        let pet = new Pet(petName, age, gender, breed, service, owner, phone);
        saloon.pets.push(pet);
        console.log(pet);
        document.getElementById("petInfo").reset();
        showPetsCards();
    }





}

function displayPetNames(){
    
}