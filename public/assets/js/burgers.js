$(document).ready(function() {

   // bind event listener to form submit
   $("#burger-form").on("submit", function(e) {
 
     e.preventDefault();
 
     // package up form data for req.body purposes
     const burgerData = {
       burger_name: $("#name-input").val().trim()
     };
     
   

     $.ajax({
       url: "/api/burgers",
       method: "POST",
       data: burgerData // req.body
     })
     .then(function() {
       // reload the page
       location.reload();
     })
     .catch(err => console.log(err));
 
   });
 
   // update burger devoured status
   $(".update-burger").on("click", function() {
     // read back burger's id and devoured status
     const burgerId = $(this).attr("data-id");
     const devoured = $(this).attr("data-devoured")
 
     $.ajax({
       url: `/api/burgers/${burgerId}`,
       method: "PUT",
       data: {
         devoured: devoured
       } // req.body
     })
     .then(() => location.reload())
     .catch(err => console.log(err));
   });
 
   $(".delete-burger").on("click", function() {
     // get burger's id
     const burgerId = $(this).attr("data-id");
 
     $.ajax({
       url: `/api/burgers/${burgerId}`,
       method: "DELETE"
     })
     .then(() => location.reload())
     .catch(err => console.log(err));
   });
 
 });