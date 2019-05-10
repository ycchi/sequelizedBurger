// // import connection
// const connection = require('./connection');

// // create a function that reads from the burgers table
// // SELECT * FROM cats
// const findAll = () => {
//    return new Promise((resolve, reject) => {
//       connection.query(`SELECT * FROM burgers`, function(err, dbBurgerData) {
//          if(err) {
//             // this will throw to a .catch()
//             return reject(err);
//          }
//          // this will throw to a .then()
//          return resolve(dbBurgerData);
//       });
//    });
// };

// //findbyID
// const findById = burgerId => {
//    // create a new Promise
//    return new Promise((resolve, reject) => {
//      connection.query('SELECT * FROM burgers WHERE id = ?', [burgerId], function(err, dbBurgerData) {
//        if (err) {
//          // this will throw to a .catch()
//          return reject(err);
//        }
//        // this will throw to a .then()
//        return resolve(dbBurgerData);
//      });
//    });
//  };

// // insertOne()
// const create = burgerDataObj => {
//    return new Promise((resolve, reject) => {
//       connection.query(`INSERT INTO burgers SET ?`, [burgerDataObj], function(err, dbBurgerData) {
//          if(err) {
//             // this will throw to a .catch()
//             return reject(err);
//          }
//          // this will throw to a .then
//          return resolve(dbBurgerData);
//       })
//    })
// }


// // updateOne()
// // update burgers (set value of devoured to true or false)
// const update = (devouredValue, burgerId) => {
//    return new Promise((resolve, reject) => {

//       // set devouredValue to boolean true/false
//       devouredValue = (devouredValue === "true")
//          ? true: false;

//       connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devouredValue, burgerId], function (err, dbBurgerData) {
//          if (err) {
//             return reject(err);
//          }
//          else if (dbBurgerData.changedRows === 0) {
//             return reject({message: "Error: check ID.." + devouredValue})
//          }
//          else {
//             return resolve(dbBurgerData)
//          }
//       })
//    })
// }

// const remove = (burgerId) => {
//    return new Promise((resolve, reject) => {
//       // remove burger given an id
//       connection.query("DELETE FROM burgers WHERE id = ?", [burgerId], function(err, dbBurgerData){
//          if(err) {
//             return reject(err);
//          }
//          else if (dbBurgerData.affectedRows === 0) {
//             return reject({ message: "You probably have the wrong ID" });
//           }
//           else {
//             return resolve(dbBurgerData);
//           }    
//       });
//    });
// }


// // export all of the functions as methods of an object
// module.exports = {
//    findAll,
//    findById,
//    create,
//    update,
//    remove
// }



module.exports = function(sequelize, DataTypes) {
   var Burger = sequelize.define("Burger", {
     burger_name: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
         len: [1]
       }
     },
     devoured: {
       type: DataTypes.BOOLEAN,
       allowNull: false,
     }
   });
   return Burger;
 };
 