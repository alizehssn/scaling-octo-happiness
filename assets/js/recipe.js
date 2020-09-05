// Spoonacular working login info
//let queryURL = "https://api.spoonacular.com/food/products/search?query=" + itemToSearch + "&apiKey=0ba7a0fdd45c497a8afd81dae904a16c";
//backup api    1db9120bf8854065b69f6e8dba48a42e;
///FIRST SEARCH   by ingredient
//
// var apiKey = "&apiKey=0ba7a0fdd45c497a8afd81dae904a16c";
var apiKey = "&apiKey=1db9120bf8854065b69f6e8dba48a42e";
var recipeArray = [];
var foodObjectItem = {};
renderRecipes();

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
            let buttonEl = $("<button>").addClass("saveButton").attr("data-value", responseItems.id).text("save").attr("data-name", responseItems.title).attr("data-src", responseItems.image);
            mainDiv1.append(middleDiv1, buttonEl, imageEl1);

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
            let titleEl = $("<h3>").text(result2.title);
            let imageEl2 = $("<img>").addClass("pictures2").attr("data-name", result2.id).attr("src", result2.image).attr("style", "width: 300px");
            let pEl2 = $("<p>").html("Calories: " + result2.calories + " Carbs: " + result2.carbs + " Fat: " + result2.fat + " Protein: " + result2.protein);
            let buttonEl = $("<button>").addClass("saveButton").attr("data-value", result2.id).text("save").attr("data-name", result2.title).attr("data-src", result2.image);

            mainDivEl2.append(titleEl, buttonEl, imageEl2, pEl2);
            $("#attachHere2").append(mainDivEl2);
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

    $("#mealFilters").children("input").each(function() {
            if ($(this).prop("checked") === true) {
                params.push($(this).val());
            }
        })
        // if (params2.length >= 1) {
        //     queryURL3 += "&tags=" + params2.join(",");
        // }

    if (params.length >= 1) {
        queryURL3 += "&tags=" + params.join(",");
    }


    $("#intoleranceFilters").children("input").each(function() {
        if ($(this).prop("checked") === true) {
            params3.push($(this).val());
        }
    })

    if (params3.length >= 1) {
        queryURL3 += "&intolerances=" + params3.join(",");
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
            let badgesDiv = $("<div>");
            let about3 = $("<div>").html(recipe.summary);
            let recipeDivEl3 = $("<div>").html($("<h4>").text("Ingredients: "));
            let websiteEl = $("<a>").attr("href", recipe.sourceUrl).attr("target", "_blank").text("Click Here for Full Recipe");
            let buttonEl = $("<button>").addClass("saveButton").attr("data-value", recipe.id).text("save").attr("data-name", recipe.title).attr("data-src", recipe.image);

            if (recipe.vegan === true) {
                let badgesImg = $("<img>").attr("src", "./assets/images/vegan.jpg").attr("style", "width: 100px");
                badgesDiv.append(badgesImg);
            }
            if (recipe.vegetarian === true) {
                let badgesImg = $("<img>").attr("src", "./assets/images/vegetarian.jpg").attr("style", "width: 100px");
                badgesDiv.append(badgesImg);
            }
            if (recipe.glutenFree === true) {
                let badgesImg = $("<img>").attr("src", "./assets/images/glutenFree.jpg").attr("style", "width: 100px");
                badgesDiv.append(badgesImg);
            }
            if (recipe.dairyFree === true) {
                let badgesImg = $("<img>").attr("src", "./assets/images/dairyFree.jpg").attr("style", "width: 100px");
                badgesDiv.append(badgesImg);
            }
            if (recipe.veryHealthy === true) {
                let badgesImg = $("<img>").attr("src", "./assets/images/healthy.jpg").attr("style", "width: 100px");
                badgesDiv.append(badgesImg);
            }


            for (var y = 0; y < recipe.extendedIngredients.length; y++) {
                let smallDivPicture = $("<div>").addClass("smallImages");
                let ingredientsImg3 = $("<p>").text(recipe.extendedIngredients[y].amount.toFixed(2) + " " + recipe.extendedIngredients[y].unit).add($("<img>").attr("src", "https://spoonacular.com/cdn/ingredients_100x100/" + recipe.extendedIngredients[y].image)).add($("<p>").text(recipe.extendedIngredients[y].name));
                smallDivPicture.html(ingredientsImg3);
                recipeDivEl3.append(smallDivPicture);
            }

            mainDiv3.append(title3, buttonEl, imageEl3, badgesDiv, about3, recipeDivEl3, websiteEl);

            $("#attachHere3").append(mainDiv3);
        }

    })
}

//This is for saving the recipes in Local Storage

$(document).on("click", ".saveButton", function(event) {
    event.preventDefault();

    let ulName = $(this).attr("data-name");
    let ulId = $(this).attr("data-value");
    let ulImage = $(this).attr("data-src");

    foodObjectItem = {
        name: ulName,
        id: ulId,
        image: ulImage
    };

    recipeArray.unshift(foodObjectItem);
    localStorage.setItem("Recipes", JSON.stringify(recipeArray));

    renderRecipes();
})

// Renders all the saved recipes from Local Storage
function renderRecipes() {
    recipeArray = JSON.parse(localStorage.getItem("Recipes")) || [];

    if (recipeArray && recipeArray.length >= 1) {
        $("#savedRecipes").empty();
        for (var a = 0; a < recipeArray.length; a++) {
            let listItemDiv = $("<div>").addClass("listItems");
            let newListItem = $("<li>").addClass("foodListItem list-group-item").text(recipeArray[a].name).attr("data-value", recipeArray[a].id).attr("data-number", [a]);
            let listItemImage = $("<img>").attr("src", recipeArray[a].image).attr("style", "width: 400px");
            let priceButton = $("<button>").text("Price Breakdown").addClass("priceButton button success");
            let lineSpacing = $("<br>");
            let nutritionButton = $("<button>").text("Recipe Instructions").addClass("nutritionButton button");
            let equiptmentButton = $("<button>").text("Equiptment Needed").addClass("equipButton button warning").add($("<br><br>"));
            let emptyDiv = $("<div>").addClass("forEquip" + [a]);
            listItemDiv.html(newListItem).append(listItemDiv, listItemImage, lineSpacing, priceButton, nutritionButton, equiptmentButton, emptyDiv);
            $("#savedRecipes").append(listItemDiv);
        }
    } else {
        return;
    }
}

// Click event for price breakdown

$(document).on("click", ".priceButton", function(event) {
    $("#chartContainer").empty();
    event.preventDefault();

    let recipeId = $(this).siblings().attr("data-value").toString();
    let priceURL = "https://api.spoonacular.com/recipes/" + recipeId + "/priceBreakdownWidget?" + apiKey;


    $.ajax({
        url: priceURL,
        method: "GET"
    }).then(function(priceResult) {
        console.log(priceResult);



        // let parsed = JSON.parse(priceResult);
        // console.log(parsed);
        // let priceImage = $("<img>").attr("src", priceResult);

        // $("#priceBreakdown").append(priceResult);

    })

})

$(document).on("click", ".nutritionButton", function(event) {
    event.preventDefault();

    let priceId = $(this).siblings().attr("data-value").toString();
    let nutritionUrl = "https://api.spoonacular.com/recipes/" + priceId + "/analyzedInstructions?" + apiKey;
    let positionAt = $(this).siblings().attr("data-number");


    $.ajax({
        url: nutritionUrl,
        method: "GET"
    }).then(function(nutResponse) {
        console.log(nutResponse);
        $(".forEquip" + positionAt).empty();

        for (var c = 0; c < nutResponse[0].steps.length; c++) {
            let steps = nutResponse[0].steps[c];

            let mainDiv = $("<div>").addClass("mainDiv1");
            let mainDiv2 = $("<div>").addClass("mainDiv1");
            let stepNumber = $("<h5>").text("Step " + steps.number).add($("<hr>"));
            let stepsInstruction = $("<div>").add($("<h6>").html(steps.step));
            let equipDiv = $("<div>").addClass("equip1");
            let ingredDiv = $("<div>").addClass("ingred1");
            mainDiv.append(stepNumber, stepsInstruction, mainDiv2);

            for (d = 0; d < steps.equipment.length; d++) {
                let stepsEquip = steps.equipment[d];
                let testDiv = $("<div>").addClass("tester");
                let equipImg = $("<img>").attr("src", "https://spoonacular.com/cdn/equipment_100x100/" + stepsEquip.image).addClass("test").add($("<p>").addClass("pClass").text(stepsEquip.name));
                testDiv.html(equipImg);

                mainDiv.append(testDiv);
                $(".forEquip" + positionAt).append(mainDiv);
            }

            for (var e = 0; e < steps.ingredients.length; e++) {
                let stepsIngrd = steps.ingredients[e];
                console.log(stepsIngrd, "hi")

                let testDiv2 = $("<div>").addClass("tester");
                let ingredImg = $("<img>").attr("src", "https://spoonacular.com/cdn/ingredients_100x100/" + stepsIngrd.image).addClass("test").add($("<p>").addClass("pClass").text(stepsIngrd.name));

                testDiv2.html(ingredImg);
                mainDiv.append(testDiv2);
                $(".forEquip" + positionAt).append(mainDiv2);

            }



            // mainDiv.append(equipDiv);

        }
    })
})

$(document).on("click", ".equipButton", function(event) {
    event.preventDefault();

    let equipId = $(this).siblings().attr("data-value").toString();
    let equipUrl = "https://api.spoonacular.com/recipes/" + equipId + "/equipmentWidget.json?" + apiKey;
    let positionAt = $(this).siblings().attr("data-number");
    $(".forEquip" + positionAt).empty();


    $.ajax({
        url: equipUrl,
        method: "GET"
    }).then(function(equipResult) {
        console.log(equipResult);

        for (var b = 0; b < equipResult.equipment.length; b++) {
            let eResults = equipResult.equipment[b];
            let equipDiv = $("<div>").addClass("equipDiv");
            var equipImg = $("<img>").addClass("smallEquip").attr("src", "https://spoonacular.com/cdn/equipment_100x100/" + eResults.image).add($("<p>").addClass("forEquip").text(eResults.name));
            equipDiv.html(equipImg);
            $(".forEquip" + positionAt).append(equipDiv);

        }

    })


})