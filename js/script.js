"use strict"

fetch("https://jsonplaceholder.typicode.com/users")            
.then((response) => response.json())
.then((data) => {
    let user = data.filter(({company:{name}}) => name === "Johns Group" );
    console.log(user);
})
.catch((error) => console.error(error));