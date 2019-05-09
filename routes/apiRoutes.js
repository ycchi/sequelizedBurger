// import burger model
const burgers = require("../models/burgers")

module.exports = app => {
   // get all burgers
   app.get("/api/burgers", function(req, res) {
      burgers.findAll()
         .then(dbBurgerData => res.json(dbBurgerData))
         .catch(err => {
            console.log(err);
            res.json(err);
         });
   });

   app.post("/api/burgers", function(req, res) {

      burgers.create(req.body)
         .then(dbBurgerData => res.json(dbBurgerData))
         .catch(err => {
            console.log(err);
            res.json(err);
         });
   });

   // get a burger by its id
  app.get("/api/burgers/:id", function(req, res) {
   burgers.findById(req.params.id)
     .then(dbBurgerData => res.json(dbBurgerData))
     .catch(err => {
       console.log(err);
       res.json(err);
      });
   });

   // PUT/update a burger's devoured state to true/false by id
  app.put("/api/burgers/:id", function(req, res) {
   burgers.update(req.body.devoured, req.params.id)
     .then(dbBurgerData => res.json(dbBurgerData))
     .catch(err => {
       console.log(err);
       res.json(err);
       });
   });

   // delete/remove a burger 
   app.delete("/api/burgers/:id", function(req, res) {
      burgers.remove(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
        });
   });

};