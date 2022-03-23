"use strict"

fetch("https://jsonplaceholder.typicode.com/users")            
.then((response) => response.json())
.then((data) => {
    console.log(data.filter(object => object.company.name === "Johns Group" ));
})
.catch((error) => console.error(error));