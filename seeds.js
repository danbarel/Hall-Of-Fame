var mongoose = require("mongoose");
var Player = require("./models/player");
var Comment   = require("./models/comment");

// var data = [
//     {
//         name: "Yossi Benayoun", 
//         image: "http://1.bp.blogspot.com/_DdILRucoQ_c/Sahk4wf3VNI/AAAAAAAAAkU/0CI1AVoNv_g/s400/2_1219305191.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     },
//     {
//         name: "Cesc Fabregas", 
//         image: "https://vz.cnwimg.com/thumbc-300x300/wp-content/uploads/2010/06/GettyImages-459417904.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     },
//     {
//         name: "Thierry Henry", 
//         image: "https://cdn.24.co.za/files/Cms/General/d/6118/e13def4751a4458191a69df89d0ca695.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     }
// ]

function seedDB(){
   //Remove all players
   Player.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed players!");
         //add a few players
        // data.forEach(function(seed){
        //     Player.create(seed, function(err, player){
        //         if(err){
        //             console.log(err)
        //         } else {
        //             console.log("added a player");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "One of the best players in the history",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         player.comments.push(comment);
        //                         player.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
    }); 
    //add a few comments
}

module.exports = seedDB;
