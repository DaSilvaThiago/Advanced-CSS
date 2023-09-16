import { hobbies } from "./hobbies.js";

const p = document.createElement('p');
document.body.appendChild(p);

//forEach()
    const showHobbies = () =>{
        hobbies.forEach((hobby)=>{
            p.innerHTML += `Hello, i'am a hobby ${hobby.title} !</br>`;
        })
    }
    //show in console
    hobbies.forEach(function(hobby){
        console.log(`Hobby "${hobby.title}" say hi!`);
    });


//map()
    const catalog = hobbies.map(function(hobby){
        return `The Amazing world of the ${hobby.title}`;
    })

    catalog.forEach((hobby)=>{
        p.innerHTML += `${hobby}</br>`;
    })
    //to show in console
    console.log(catalog);


//filter()
    const dHobbies = hobbies.filter(function(hobby){
        return hobby.title[0] === 'S';
    })

    dHobbies.forEach((hobby) => {
        p.innerHTML += `${hobby.title} </br>`;
    })
    //to show in console
    console.log(dHobbies);


//findIndex()





//to show forEach in html
showHobbies();