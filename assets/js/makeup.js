// //https://makeup-api.herokuapp.com/


//Functionality:
//When user selects check boxes those values if checked are stored as productTag
//User can search by products,brands, or both
//the results are displayed to the user

//Setting the Global Variable for the Result Container
const resultsContainer = document.querySelector("#resultsContainer")


//On click event to initiate the searchMakeup Function
$("#searchBy").on("click", function(event) {
    event.preventDefault();
    searchMakeup();
})


//Function To search the API and set HTML

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
        } else {
            //Setting innerHTML elements if results are availble 
            response.forEach(response => {
                let brand = response.name;
                let img = response.image_link;
                let prod = response.product_type;
                let cat = response.category;
                let link = response.product_link
                let matchedTags = response.tag_list;

                let firstDiv = $("<div class=work-feature-block row>")
                let secondDiv = $("<div class= columns medium-7>")
                secondDiv.appendChild("img", img).addClass("work-feature-block-image")
                let thirdDiv = $("<div class = columns medium-5>")
                thirdDiv.appendChild("h2", brand).addClass("work-feature-block-header")
                thirdDiv.appendChild("p", prod)
                thirdDiv.appendChild("p", cat)




            })

        }



    })



}