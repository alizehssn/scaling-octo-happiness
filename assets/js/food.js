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


//working spponacular url "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?&offset=0&query=" + itemToSearch,



$("#submitButton").on("click", function(event) {
    event.preventDefault();
    itemToSearch = $("#searchBar").val().trim().toLowerCase();

    searchItemCall(itemToSearch);

})

$(document).on("click", ".picture", clickedImage);

function clickedImage(event) {
    event.preventDefault();
    var picId = $(this).attr("data-name");
    secondCall(picId);
}


function searchItemCall() {
    $("#attachHere").empty();

    // Variable to store product search Query


    // Settings for AJAX call to get productID based on product search query
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?&offset=0&query=" + itemToSearch,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "789bb30ccbmsh6de1793eac1b82fp17c715jsnbe37ae77ca15"
        }
    }


    // AJAX call to get productID
    $.ajax(settings).done(function(response) {
        // console.log(settings.url);
        // console.log(response);

        for (var i = 0; i < response.products.length; i++) {
            var topDiv = $("<div>").addClass("card divItem");
            var secondDiv = $("<div>").addClass("card-divider");
            secondDiv.text(response.products[i].title);
            var imageEl = $("<img>");
            if (response.products[i].id) {
                imageEl.attr("data-name", response.products[i].id);
            }
            imageEl.attr("src", response.products[i].image).attr("style", "width: 200px");
            imageEl.addClass("picture");
            topDiv.append(secondDiv, imageEl);
            $("#attachHere").append(topDiv);

        }
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
        $("#attachInfoHere").empty();
        console.log(result);
        // console.log(result.badges)

        var div1 = $("<div>").addClass("card call2Main");
        var div2 = $("<div>").addClass("card-divider call2Heading").text(result.title);
        var brandP = $("<p>").text("Brand: " + result.brand);
        var imageForMain = $("<img>").attr("src", result.images[0]).attr("style", "width: 200px");

        var badgesDiv = $("<div>").addClass("card badges");
        var badgesDiv2 = $("<div>").addClass("card-divider").text("Allergen Info: ");
        var badgesP = $("<p>").addClass("badgesP").text(result.badges);

        var div11 = $("<div>").addClass("card call2Ingredients");
        var div22 = $("<div>").addClass("card-divider").text("Ingredients: ");
        var ingredientsP = $("<p>").text(result.ingredientList);


        div1.append(div2, brandP, imageForMain);
        badgesDiv.append(badgesDiv2, badgesP);
        div11.append(div22, ingredientsP);


        $("#attachInfoHere").append(div1, badgesDiv, div11);





    });
}