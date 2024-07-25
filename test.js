const person = {
    name: 'Peter',
    height: '5.2',
    age: '27'
}

console.log(Object.keys(person));

["name", "height", "age"]

console.log(Object.values(person));



const formErrorValidation = (formObject) => {

    let errorObj = {};

    if(!formObject?.username){
        errorObj.username = "Username can not be empty";
    }

    if(!formObject?.password){
        errorObj.password = "password can not be empty";

    }else if(formObject.password.length < 8){
        errorObj.password = "password length not complete";
    }
    if(!formObject.email){
        errorObj.email = "email can not be empty";
    }else if(!formObject?.email?.includes("@") && !formObject?.email?.includes(".") ){
        errorObj.email = "email is not valid";

    }

    return errorObj;
} 

const formObject = {
    // username: "Johndoe",
    password: "passw",
    email: "john@gmail.com"
}


console.log(formErrorValidation(formObject));



function transformUptime(apiRes) {
    return apiRes.map((server) => {
        const numericUptime = parseFloat(server.uptime);
        
        if (!isNaN(numericUptime) && numericUptime >= 0) {
            server.uptime = numericUptime < 1 ? numericUptime * 100 + "%" : numericUptime + "%";
        }

        return server;
    });

}