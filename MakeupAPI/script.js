// //https://makeup-api.herokuapp.com/


//Functionality:
//When user selects check boxes those values if checked are stored as productTag
//User can search by products,brands, or both
//the results are displayed to the user






$("#searchBy").on("click", function(event) {
    event.preventDefault();
    searchMakeup();
})








function searchMakeup() {
    //Setting BaseUrl for API & Blank Arrays for Parameters
    let baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json?"
    let productTag = [];
    let productBrand = [];
    let productType = [];
    //Setting the Product Tags from CheckBox HTML
    $("#makeupFilters").children("input").each(function() {
        if ($(this).prop("checked") === true) {
            productTag.push($(this).val());
            console.log(productTag)
        }
    })

    baseUrl += "product_tags=" + productTag.join(",");
    console.log(baseUrl)
        //Setting Search Parameter for Product Type
    $("#productType").children("option").each(function() {
        if ($(this).prop("selected") === true) {
            productType.push($(this).val());
            console.log(productType)
        }
    })
    baseUrl += "&product_type=" + productType
    console.log(baseUrl)

    //Setting Search Brand Type
    productBrand = $("#productBrand").val();
    console.log(productBrand)
    if (productBrand != 0) {
        baseUrl += "&brand=" + productBrand
        console.log(baseUrl)
    }

    // let resultsLength = $("#selectResultsQ").val();

    //AJAX Call

    $.ajax({
        url: baseUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        $("#resultsContainer").empty();
        if (response.length === 0) {
            let divEl = $("<div>").text("No Results :(");
            $("#resultsContainer").append(divEl)
        }
        for (var i = 0; i < response.length; i++) {
            $.each(response.i, function() {

            })
            let brand = $("<h1>").text("Brand: " +
                response[i].brand);
            let img = $("<img>").attr("src", response[i].image_link).addClass("work-feature-block-image");
            let prod = $("<h2>").text(response[i].product_type)
            let cat = $("<p>").text(response[i].category);
            let link = $("<p>").text("link: " +
                response[i].product_link);
            let matchedTags = $("<li>").text(response[i].tag_list);

            $("#resultsContainer").append(brand, img, prod, cat, link, matchedTags)
        }



    })



}