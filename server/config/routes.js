const main = require("./../controllers/main");

module.exports = (app)=>{
    app.get("/main", main.index),
    app.post("/main", main.create),
    app.post("/main/:id", main.create_rating),
    app.get("/main/:id", main.show),
    app.put("/main/:id", main.update)
    
}