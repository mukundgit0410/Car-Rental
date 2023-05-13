const jwt = require("jsonwebtoken");

function authorization(){
    const token = jwt.sign({name: "Swatantra"}, "jwtprivatekey");
    console.log(token)
    return token;
}

authorization();


module.exports = authorization;