var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Maky Apartment", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKLt0FUN49Ifd1m02fftF3biWtPziYZ6AwSCdi0no0nb2-sslug",
        description: "Due to its long and rich history of religious and cultural diversity, Sarajevo is sometimes called the 'Jerusalem of Europe' or 'Jerusalem of the Balkans'.[2] It is the only major European city which has a mosque, Catholic church, Orthodox church and synagogue within the same neighborhood.[10] A regional center in education, the city is also home to the Balkans' first institution of tertiary education in the form of an Islamic polytechnic called the Saraybosna Osmanlı Medrese, today part of the University of Sarajevo."
    },
    {
        name: "Maky Apartment 2", 
        image: "https://t-ec.bstatic.com/images/hotel/max1024x768/664/66478107.jpg",
        description: "Due to its long and rich history of religious and cultural diversity, Sarajevo is sometimes called the 'Jerusalem of Europe' or 'Jerusalem of the Balkans'.[2] It is the only major European city which has a mosque, Catholic church, Orthodox church and synagogue within the same neighborhood.[10] A regional center in education, the city is also home to the Balkans' first institution of tertiary education in the form of an Islamic polytechnic called the Saraybosna Osmanlı Medrese, today part of the University of Sarajevo."
    },
    {
        name: "Mala Drenija Apartment", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLf-2ZP_Z2zUIpezxPI-_POamlrQHFPAoBIyFbNd2slzCHE3jFRw",
        description: "Due to its long and rich history of religious and cultural diversity, Sarajevo is sometimes called the 'Jerusalem of Europe' or 'Jerusalem of the Balkans'.[2] It is the only major European city which has a mosque, Catholic church, Orthodox church and synagogue within the same neighborhood.[10] A regional center in education, the city is also home to the Balkans' first institution of tertiary education in the form of an Islamic polytechnic called the Saraybosna Osmanlı Medrese, today part of the University of Sarajevo."
    }
    ]

function seedDB(){
Campground.remove({}, function(err){
    if(err){
        console.log(err);
    } else{
    console.log("removed campground");
    }
});
data.forEach(function(seed){
   Campground.create(seed, function(err, campground){
       if(err){
           console.log(err);
       } else {
           console.log("added a campground");
           Comment.create(
               {
                   text: "This place was great, but I wish there was water at night",
                   author: "Homer"
               }, function(err, comment){
                   if(err){
                       console.log(err);
                   } else{
                   campground.comments.push(comment);
                   campground.save();
                   console.log("created new comment");
                   }
               });
               
       }
   }); 
});
}

module.exports = seedDB;