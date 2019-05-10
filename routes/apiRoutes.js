// import burger model
const db = require("../models")

module.exports = app => {
   // render html via handlebar
   app.get("/", function(req, res) {
      db.Burger.findAll()
         .then(dbBurgerData => {
            res.render("index", {burgerData: dbBurgerData})
         })
         .catch(err => {
            console.log(err);
            res.json(err)
         })
   })

   // get all burgers
   app.get("/api/burgers", function(req, res) {
      db.Burger.findAll()
         .then(dbBurgerData => res.json(dbBurgerData))
         .catch(err => {
            console.log(err);
            res.json(err);
         });
   });

   app.post("/api/burgers", function(req, res) {

      db.Burger.create(req.body)
         .then(dbBurgerData => res.json(dbBurgerData))
         .catch(err => {
            console.log(err);
            res.json(err);
         });
   });

   // get a burger by its id
  app.get("/api/burgers/:id", function(req, res) {
   db.Burger.findAll({
      where: {
        id: req.params.id
      }
   })
     .then(dbBurgerData => res.json(dbBurgerData))
     .catch(err => {
       console.log(err);
       res.json(err);
      });
   });

   // PUT/update a burger's devoured state to true/false by id
  app.put("/api/burgers/:id", function(req, res) {
   db.Burger.update({devoured: req.body.devoured}, {where: {id: req.params.id}})
     .then(dbBurgerData => res.json(dbBurgerData))
     .catch(err => {
       console.log(err);
       res.json(err);
       });
   });

   // delete/remove a burger 
   app.delete("/api/burgers/:id", function(req, res) {
      db.Burger.destroy({
         where: {
           id: req.params.id
         }
      })
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
        });
   });

};