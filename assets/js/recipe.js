// Spoonacular working login info
//let queryURL = "https://api.spoonacular.com/food/products/search?query=" + itemToSearch + "&apiKey=0ba7a0fdd45c497a8afd81dae904a16c";
//
///
//



$("#submitButton").on("click", function(event) {
    event.preventDefault();

    let itemToSearch = $("#searchBar").val();


    searchItem(itemToSearch);
})

function searchItem(itemToSearch) {
    console.log(itemToSearch);

    let queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + itemToSearch + "&apiKey=0ba7a0fdd45c497a8afd81dae904a16c";



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);



    })
}