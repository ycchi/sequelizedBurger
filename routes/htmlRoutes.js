// import our Burger model
const Burger = require("../routes/apiRoutes");
//const path = require("path");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function(req, res) {

    console.log(res)
    res.render("index", {burgerData: dbBurgerData})



    //res.sendFile(path.join(__dirname, "../index.html"));
    // use burger.findAll
    // Burger
    //   .findAll()
    //   // if we get to resolve()
    //   .then(dbBurgerData => {
    //     res.render("index", {burgerData: dbBurgerData})
    //   })
    //   // if we get to reject()
    //   .catch(err => {
    //     console.log(err);
    //     res.json(err);
    //   });
  });
}