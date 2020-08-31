//working api calls
//var queryURL = "https://api.edamam.com/api/food-database/v2/parser?ingr=" + itemToSearch + "&app_id=7540865a&app_key=7f63d5cdf308b10e16a9aab4af834f5f"

//working edamam = var queryURL = "https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=" + itemToSearch + "&app_id=7540865a&app_key=7f63d5cdf308b10e16a9aab4af834f5f"

// fast Secret api= 4eef7f96cdf347e99b6b7d7703eb645b
//fast Secret  client id 8249a3221d6b4446b86a3073312ecd78
//fast Secret  client secret   4eef7f96cdf347e99b6b7d7703eb645b

// var queryURL = "http://api.edamam.com/auto-complete?q=rou&limit=10&app_id=$utbootcamp&app_key=$7540865a"
// var queryURL = "https://api.edamam.com/api/food-database/v2/parser?ingr=" + itemToSearch + "&app_id=7540865a&app_key=7f63d5cdf308b10e16a9aab4af834f5f"

// console.log("this is the item to search", product);
// var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=" + dataGovApi;


var itemToSearch = "";
var dataGovApi = "RAryThnrRzW7VSkMmLXWwwJxFiY1J93myTQtWCDo";

// var spoonApi = "https://media.giphy.com/media/e2nYWcTk0s8TK/giphy.gif"



$("#submitButton").on("click", function(event) {
    event.preventDefault();
    itemToSearch = $("#searchBar").val().trim().toLowerCase();

    searchItemCall(itemToSearch);

})

$(document).on("click", ".picture", clickedImage);

function clickedImage(event) {
    event.preventDefault();
    var picId = $(this).attr("data-name");
    console.log(picId);

    secondCall(picId);
}


function searchItemCall() {
    $("#attachHere").empty();

    // Variable to store product search Query


    // Settings for AJAX call to get productID based on product search query
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?offset=0&number=10&maxCalories=5000&minProtein=0&maxProtein=100&minFat=0&maxFat=100&minCarbs=0&maxCarbs=100&minCalories=0&query=" + itemToSearch,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "789bb30ccbmsh6de1793eac1b82fp17c715jsnbe37ae77ca15"
        }
    }


    // AJAX call to get productID
    $.ajax(settings).done(function(response) {
        console.log(settings.url);
        console.log(response);
        // console.log("ProductID#: " + response.products[0].id);

        // Variable to store productID
        var productID = response.products[0].id;

        // Settings for 2nd AJAX call to get product info using acquired productID

        console.log(productID);
        // AJAX call to get product info


        for (var i = 0; i < response.products.length; i++) {

            var divEl = $("<div>");
            var pEl = $("<p>");

            pEl.text(response.products[i].title);

            divEl.addClass("card divItem");

            var imageEl = $("<img>");
            imageEl.attr("data-name", response.products[i].id);
            imageEl.attr("src", response.products[i].image).attr("style", "width: 200px");
            imageEl.addClass("picture");

            divEl.append(imageEl, pEl);


            $("#attachHere").append(divEl);

        }
        // secondCall(productID);

    });


}


function secondCall(picId) {
    var moreSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/" + picId,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "789bb30ccbmsh6de1793eac1b82fp17c715jsnbe37ae77ca15"
        }
    }

    $.ajax(moreSettings, picId).done(function(result) {

        console.log(result);
        console.log(result.badges)

    });
}