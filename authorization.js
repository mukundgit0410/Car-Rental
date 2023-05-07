function auth(req, res){
    apiKeyStatic = 123456789
    apikey = req.headers("x-api-key");
    if(apikey === apiKeyStatic){
        return true
    }else{
        return false
    }
}

module.exports = auth;             


