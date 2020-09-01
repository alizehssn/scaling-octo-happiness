// Spoonacular working login info
//let queryURL = "https://api.spoonacular.com/food/products/search?query=" + itemToSearch + "&apiKey=0ba7a0fdd45c497a8afd81dae904a16c";
//
///FIRST SEARCH   by ingredient
//

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
    console.log("his");
    let queryURL1 = "https://api.spoonacular.com/recipes/findByIngredients?&number=5&apiKey=0ba7a0fdd45c497a8afd81dae904a16c";
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

    })


}



//
//SECOND SEARCH BAR which is BY NUTRIENTS
//
$("#submitButton").on("click", function(event) {
    event.preventDefault();

    let itemToSearch2 = $("#searchBar").val();


    searchItem(itemToSearch2);
})

function searchItem(itemToSearch2) {
    console.log(itemToSearch2);

    let queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + itemToSearch2 + "&apiKey=0ba7a0fdd45c497a8afd81dae904a16c";



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);



    })
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
    let queryURL3 = "https://api.spoonacular.com/recipes/random?&number=5&apiKey=0ba7a0fdd45c497a8afd81dae904a16c";
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


    $("#mealFilters").children("input").each(function() {
        if ($(this).prop("checked") === true) {
            params2.push($(this).val());
        }
    })

    if (params2.length >= 1) {
        queryURL3 += "&type=" + params2.join(",");
    }

    $("#intoleranceFilters").children("input").each(function() {
        if ($(this).prop("checked") === true) {
            params3.push($(this).val());
        }
    })

    if (params3.length >= 1) {
        queryURL3 += "&intolerances=" + params3.join(",");
    }


    console.log(queryURL3);


    // $.ajax({
    //     url: queryURL3,
    //     method: "GET"
    // }).then(function(response3) {
    //     console.log(queryURL3);
    //     console.log(response3);

    //     for (var x = 0; x < response3.recipes.length; x++) {
    //         let recipe = response3.recipes[x];
    //         let mainDiv3 = $("<div>").addClass("mainDiv3");
    //         let title3 = $("<h3>").text(recipe.title);
    //         let imageEl3 = $("<img>").attr("src", recipe.image).attr("style", "width: 300px");
    //         let about3 = $("<div>").html(recipe.summary);

    //         mainDiv3.append(title3, imageEl3, about3);

    //         $("#attachHere3").append(mainDiv3);
    //     }

    // })
}