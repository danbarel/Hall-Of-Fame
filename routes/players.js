var express = require("express");
var router  = express.Router();
var Player = require("../models/player");
var middleware = require("../middleware");


//INDEX - show all campgrounds
router.get("/", function(req, res){
    // Get all players from DB
    Player.find({}, function(err, allPlayers){
       if(err){
           console.log(err);
       } else {
          res.render("players/index",{players:allPlayers});
       }
    });
});

//CREATE - add new player to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to player array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newPlayer = {name: name, image: image, description: desc, author:author}
    // Create a new player and save to DB
    Player.create(newPlayer, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to players page
            console.log(newlyCreated);
            res.redirect("/players");
        }
    });
});

//NEW - show form to create new player
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("players/new"); 
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    //find the player with provided ID
    Player.findById(req.params.id).populate("comments").exec(function(err, foundPlayer){
        if(err){
            console.log(err);
        } else {
            console.log(foundPlayer)
            //render show template with that player
            res.render("players/show", {player: foundPlayer});
        }
    });
});

// EDIT PLAYER ROUTE
router.get("/:id/edit", middleware.checkPlayerOwnership, function(req, res){
    Player.findById(req.params.id, function(err, foundPlayer){
        res.render("players/edit", {player: foundPlayer});
    });
});

// UPDATE PLAYER ROUTE
router.put("/:id",middleware.checkPlayerOwnership, function(req, res){
    // find and update the correct player
    Player.findByIdAndUpdate(req.params.id, req.body.player, function(err, updatedPlayer){
       if(err){
           res.redirect("/players");
       } else {
           //redirect somewhere(show page)
           res.redirect("/players/" + req.params.id);
       }
    });
});

// DESTROY PLAYER ROUTE
router.delete("/:id",middleware.checkPlayerOwnership, function(req, res){
   Player.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/players");
      } else {
          res.redirect("/players");
      }
   });
});


module.exports = router;

