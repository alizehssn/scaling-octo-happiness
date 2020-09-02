// Spoonacular working login info
//let queryURL = "https://api.spoonacular.com/food/products/search?query=" + itemToSearch + "&apiKey=0ba7a0fdd45c497a8afd81dae904a16c";
//backup api    1db9120bf8854065b69f6e8dba48a42e;
///FIRST SEARCH   by ingredient
//
var apiKey = "&apiKey=0ba7a0fdd45c497a8afd81dae904a16c"

$("#submitButton1").on("click", function(event) {
    event.preventDefault();
    let valueOfBar = $("#searchBar1").val().trim();
    if (valueOfBar === "") {
        return;
    }
    console.log(valueOfBar);


    searchByIngredients();
});

function searchByIngredients() {
    $("#attachHere1").empty();
    console.log("his");
    let queryURL1 = "https://api.spoonacular.com/recipes/findByIngredients?&number=5" + apiKey;
    let ingredientParam = [];

    let search1Value = $("#searchBar1").val().trim().toLowerCase().toString();
    ingredientParam = search1Value.split(" ");
    console.log(ingredientParam.length);

    if (ingredientParam.length >= 2) {
        queryURL1 += "&ingredients=" + ingredientParam.join(",+");
    }

    console.log(queryURL1);


    $.ajax({
        url: queryURL1,
        method: "GET"
    }).then(function(response1) {
        console.log(queryURL1);
        console.log(response1);

        for (let i = 0; i < response1.length; i++) {
            let responseItems = response1[i];
            let mainDiv1 = $("<div>").addClass("card mainCard1");
            let middleDiv1 = $("<div>").addClass("card-divider").html(responseItems.title);

            let imageEl1 = $("<img>").addClass("pictures1").attr("src", responseItems.image).attr("data-name", responseItems.id);

            mainDiv1.append(middleDiv1, imageEl1);

            $("#attachHere1").append(mainDiv1);
        }

    })


}



//
//SECOND SEARCH BAR which is BY NUTRIENTS
//
$("#submitButton2").on("click", function(event) {
    event.preventDefault();
    searchByNutrients();
})

function searchByNutrients() {

    let queryURL2 = "https://api.spoonacular.com/recipes/findByNutrients?&number=5" + apiKey + "&maxCarbs=50";

    console.log(queryURL2)

    // $.ajax({
    //     url: queryURL2,
    //     method: "GET"
    // }).then(function(response2) {


    //     console.log(queryURL2);
    //     console.log(response2);



    // })
}




//
//THIRD SEARCH BAR WHICH IS RANDOMLY
//#3


$("#submitButton3").on("click", function(event) {
    event.preventDefault();
    searchRandomly();
})

function searchRandomly() {
    $("#attachHere3").empty();
    let queryURL3 = "https://api.spoonacular.com/recipes/random?&number=5" + apiKey;
    let params = [];
    let params2 = [];
    let params3 = [];
    $("#dietFilters").children("input").each(function() {
        if ($(this).prop("checked") === true) {
            params.push($(this).val());
        }
    })
    if (params.length >= 1) {
        queryURL3 += "&tags=" + params.join(",");
    }

    // $("#mealFilters").children("input").each(function() {
    //     if ($(this).prop("checked") === true) {
    //         params2.push($(this).val());
    //     }
    // })
    // if (params2.length >= 1) {
    //     queryURL3 += "&tags=" + params2.join(",");
    // }

    $("#intoleranceFilters").children("input").each(function() {
        if ($(this).prop("checked") === true) {
            params3.push($(this).val());
        }
    })

    if (params3.length >= 1) {
        queryURL3 += "&tags=" + params3.join(",");
    }
    // console.log(queryURL3);
    $.ajax({
        url: queryURL3,
        method: "GET"
    }).then(function(response3) {
        console.log(queryURL3);
        console.log(response3);

        for (var x = 0; x < response3.recipes.length; x++) {
            let recipe = response3.recipes[x];
            let mainDiv3 = $("<div>").addClass("mainDiv3");
            let title3 = $("<h3>").text(recipe.title);
            let imageEl3 = $("<img>").attr("src", recipe.image).attr("style", "width: 300px").attr("data-name", recipe.id);
            let about3 = $("<div>").html(recipe.summary);
            let recipeDivEl3 = $("<div>").html("Ingredients: ");

            for (var y = 0; y < recipe.extendedIngredients.length; y++) {
                let smallDivPicture = $("<div>").addClass("smallImages");
                let ingredientsImg3 = $("<p>").text(recipe.extendedIngredients[y].amount + recipe.extendedIngredients[y].unit).add($("<img>").attr("src", "https://spoonacular.com/cdn/ingredients_100x100/" + recipe.extendedIngredients[y].image));

                recipeDivEl3.append(smallDivPicture, ingredientsImg3);
            }

            mainDiv3.append(title3, imageEl3, about3, recipeDivEl3);

            $("#attachHere3").append(mainDiv3);
        }

    })
}