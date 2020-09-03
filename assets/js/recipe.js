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

    let queryURL1 = "https://api.spoonacular.com/recipes/findByIngredients?" + apiKey;
    let ingredientParam = [];
    let numberOfRecipes1 = $("#selectRecipes1").val();


    let search1Value = $("#searchBar1").val().trim().toLowerCase().toString();
    ingredientParam = search1Value.split(" ");
    console.log(ingredientParam.length);

    if (ingredientParam.length >= 1) {
        queryURL1 += "&ingredients=" + ingredientParam.join(",+");
    }
    if (numberOfRecipes1) {
        queryURL1 += "&number=" + numberOfRecipes1;
    }

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
    $("#attachHere2").empty();
    let queryURL2 = "https://api.spoonacular.com/recipes/findByNutrients?" + apiKey;

    let carbsMin = $("#carbsMin").val().toString();
    let carbsMax = $("#carbsMax").val().toString();
    let proteinMin = $("#proteinMin").val().toString();
    let proteinMax = $("#proteinMax").val().toString();
    let caloriesMin = $("#caloriesMin").val().toString();
    let caloriesMax = $("#caloriesMax").val().toString();
    let fatMin = $("#fatMin").val().toString();
    let fatMax = $("#fatMax").val().toString();
    let satfatMin = $("#satfatMin").val().toString();
    let satfatMax = $("#satfatMax").val().toString();
    let cholesterolMin = $("#cholesterolMin").val().toString();
    let cholesterolMax = $("#cholesterolMax").val().toString();
    let calciumMin = $("#calciumMin").val().toString();
    let calciumMax = $("#calciumMax").val().toString();
    let fiberMin = $("#fiberMin").val().toString();
    let fiberMax = $("#fiberMax").val().toString();
    let ironMin = $("#ironMin").val().toString();
    let ironMax = $("#ironMax").val().toString();
    let potassiumMin = $("#potassiumMin").val().toString();
    let potassiumMax = $("#potassiumMax").val().toString();
    let sodiumMin = $("#sodiumMin").val().toString();
    let sodiumMax = $("#sodiumMax").val().toString();
    let sugarMin = $("#sugarMin").val().toString();
    let sugarMax = $("#sugarMax").val().toString();
    let vitamincMin = $("#vitamincMin").val().toString();
    let vitamincMax = $("#vitamincMax").val().toString();
    let zincMin = $("#zincMin").val().toString();
    let zincMax = $("#zincMax").val().toString();
    let numberOfRecipes2 = $("#selectRecipes2").val();




    if (carbsMin != undefined && carbsMin != "") {
        queryURL2 += "&minCarbs=" + carbsMin;
    }
    if (carbsMax != undefined && carbsMax != "") {
        queryURL2 += "&maxCarbs=" + carbsMax;
    }
    if (proteinMin != undefined && proteinMin != "") {
        queryURL2 += "&minProtein=" + proteinMin;
    }
    if (proteinMax != undefined && proteinMax != "") {
        queryURL2 += "&maxProtein=" + proteinMax;
    }
    if (caloriesMin != undefined && caloriesMin != "") {
        queryURL2 += "&minCalories=" + caloriesMin;
    }
    if (caloriesMax != undefined && caloriesMax != "") {
        queryURL2 += "&maxCalories=" + caloriesMax;
    }
    if (fatMin != undefined && fatMin != "") {
        queryURL2 += "&minFat=" + fatMin;
    }
    if (fatMax != undefined && fatMax != "") {
        queryURL2 += "&maxFat=" + fatMax;
    }
    if (satfatMin != undefined && satfatMin != "") {
        queryURL2 += "&minSaturatedFat=" + satfatMin;
    }
    if (satfatMax != undefined && satfatMax != "") {
        queryURL2 += "&maxSaturatedFat=" + satfatMax;
    }
    if (cholesterolMin != undefined && cholesterolMin != "") {
        queryURL2 += "&minCholesterol=" + cholesterolMin;
    }
    if (cholesterolMax != undefined && cholesterolMax != "") {
        queryURL2 += "&maxCholesterol=" + cholesterolMax;
    }
    if (calciumMin != undefined && calciumMin != "") {
        queryURL2 += "&minCalcium=" + calciumMin;
    }
    if (calciumMax != undefined && calciumMax != "") {
        queryURL2 += "&maxCalcium=" + calciumMax;
    }
    if (fiberMin != undefined && fiberMin != "") {
        queryURL2 += "&minFiber=" + fiberMin;
    }
    if (fiberMax != undefined && fiberMax != "") {
        queryURL2 += "&maxFiber=" + fiberMax;
    }
    if (ironMin != undefined && ironMin != "") {
        queryURL2 += "&minIron=" + ironMin;
    }
    if (ironMax != undefined && ironMax != "") {
        queryURL2 += "&maxIron=" + ironMax;
    }
    if (potassiumMin != undefined && potassiumMin != "") {
        queryURL2 += "&minPotassium=" + potassiumMin;
    }
    if (potassiumMax != undefined && potassiumMax != "") {
        queryURL2 += "&maxPotassium=" + potassiumMax;
    }
    if (sodiumMin != undefined && sodiumMin != "") {
        queryURL2 += "&minSodium=" + sodiumMin;
    }
    if (sodiumMax != undefined && sodiumMax != "") {
        queryURL2 += "&maxSodium=" + sodiumMax;
    }
    if (sugarMin != undefined && sugarMin != "") {
        queryURL2 += "&minSugar=" + sugarMin;
    }
    if (sugarMax != undefined && sugarMax != "") {
        queryURL2 += "&maxSugar=" + sugarMax;
    }
    if (vitamincMin != undefined && vitamincMin != "") {
        queryURL2 += "&minVitaminC=" + vitamincMin;
    }
    if (vitamincMax != undefined && vitamincMax != "") {
        queryURL2 += "&maxVitaminC=" + vitamincMax;
    }
    if (zincMin != undefined && zincMin != "") {
        queryURL2 += "&minZinc=" + zincMin;
    }
    if (zincMax != undefined && zincMax != "") {
        queryURL2 += "&maxZinc=" + zincMax;
    }
    if (numberOfRecipes2) {
        queryURL2 += "&number=" + numberOfRecipes2;
    }
    console.log(queryURL2);




    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response2) {
        console.log(queryURL2);
        console.log(response2);

        for (var v = 0; v < response2.length; v++) {
            let result2 = response2[v];
            let mainDivEl2 = $("<div>").addClass("mainDiv2");
            let titleEl = $("<p>").text(result2.title);
            let imageEl2 = $("<img>").attr("data-name", result2.id).attr("src", result2.image).attr("style", "width: 300px");
            let pEl2 = $("<p>").html("Calories :" + result2.calories + " Carbs: ")

        }




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
    let queryURL3 = "https://api.spoonacular.com/recipes/random?" + apiKey;
    let params = [];
    let params2 = [];
    let params3 = [];
    let numberOfRecipes3 = $("#selectRecipes3").val()
    console.log(numberOfRecipes3);
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
    if (numberOfRecipes3) {
        queryURL3 += "&number=" + numberOfRecipes3;
    }

    console.log(queryURL3);
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
                smallDivPicture.html(ingredientsImg3);
                recipeDivEl3.append(smallDivPicture);
            }

            mainDiv3.append(title3, imageEl3, about3, recipeDivEl3);

            $("#attachHere3").append(mainDiv3);
        }

    })
}