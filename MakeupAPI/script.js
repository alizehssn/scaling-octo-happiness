//https://makeup-api.herokuapp.com/


///User Selects Which Search Criteria/Tag they are looking for
//Can search using the brand or product(all mascara with tag or all brand with tag or both
//What to Do:
//Create on click function for button
//When Button click if the producttype search request return products that match that parameter,
//when both are clicked return brandnames that contain products that have the product tag
//Both functionality in same button

//Global Variables

const baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json?"

//Function to be Called in On-Click
function pullMakeupProducts() {
    //get input from search bars and append brand=&prdocucttype
    if ("#searchProduct" != null) {
        var searchByProductAnd = $("#searchProduct").val().trim()
    }
    if
    else("#searchProduct" = null) {
        var searchByProduct = $("#searchProduct").val().trim()
    }
    if




}



//SearchBtn On clik:

$("searchBtn").on("click", function() {

})