// Spoonacular working login info
//let queryURL = "https://api.spoonacular.com/food/products/search?query=" + itemToSearch + "&apiKey=0ba7a0fdd45c497a8afd81dae904a16c";
//
///
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
    // let checkbox1 = $("#checkbox1").val();
    // console.log(checkbox1);






    searchItem();
})

function searchItem() {

    let queryURL3 = "https://api.spoonacular.com/recipes/random?&number=5&apiKey=0ba7a0fdd45c497a8afd81dae904a16c";
    let params = [];
    $("#dietFilters").find("input").each(function() {
            if ($(this).prop("checked") === true) {
                params.push($(this).val())
            }
            // console.log($(this).val());
        })
        // console.log(params.join(","));
    queryURL3 += "&tags=" + params.join(",");
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
            let imageEl3 = $("<img>").attr("src", recipe.image).attr("style", "width: 300px");
            let about3 = $("<div>").html(recipe.summary);


            mainDiv3.append(title3, imageEl3, about3);


            $("#attachHere3").append(mainDiv3);



        }






    })
}