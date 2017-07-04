var $results;
var $minprice;
var $maxprice;
var $model;
var $trim;
var $color;

$(document).ready(function() {
	
	//cache the results div
	$results = $("#results");

	$minprice = $("#minprice");
	$maxprice = $("#maxprice");
	
	models = carSearchModule.getModels();
	trims = carSearchModule.getTrims();
	colors = carSearchModule.getColors();
    features = carSearchModule.getFeatures();
    
    //render model filter
    var modelForm = '<label for="model">Model</label><select class="form-control" id="model">';
    //add a blank field
    modelForm += "<option></option>";
    for(var i=0, len=models.length; i<len; i++) {
        modelForm += '<option value="'+models[i]+'">'+models[i]+'</option>';
    }
    modelForm += "</select>";
    $("#modelFilter").html(modelForm);
    $model = $("#model");
    
    //render trim filter
    var trimForm = '<label for="trim">Trim</label><select class="form-control" id="trim">';
    //add a blank field
    trimForm += "<option></option>";
    for(var i=0, len=trims.length; i<len; i++) {
        trimForm += '<option value="'+trims[i]+'">'+trims[i]+'</option>';
    }
    trimForm += "</select>";
    $("#trimFilter").html(trimForm);
    $trim = $("#trim");

    //render color filter
    var colorForm = '<label for="trim">Color</label><select class="form-control" id="color">';
    //add a blank field
    colorForm += "<option></option>";
    for(var i=0, len=colors.length; i<len; i++) {
        colorForm += '<option value="'+colors[i]+'">'+colors[i]+'</option>';
    }
    colorForm += "</select>";
    $("#colorFilter").html(colorForm);
    $color = $("#color");
    
    //render feature filter
    var featureForm = '<strong>Features</strong><br/>';
    for(var i=0, len=features.length; i<len; i++) {
        featureForm += '<label><input type="checkbox" class="feature" value="'+features[i]+'"> '+features[i]+'</label><br/>';
    }
    $("#featureFilter").html(featureForm);
    
	//default msg
	$results.html("<i>Use the form to the left to begin your search!</i>");
	
	//search handler	
	$("#searchForm").on("submit", doSearch);
});

function doSearch(e) {
	e.preventDefault();

	console.log("search");
	var filters = {};
	
	if($minprice.val()) filters.minprice = $minprice.val();
	if($maxprice.val()) filters.maxprice = $maxprice.val();
    if($model.val()) filters.model = $model.val();
    if($trim.val()) filters.trim = $trim.val();
    if($color.val()) filters.color = $color.val();
    
    //Credit: http://stackoverflow.com/a/19766067/52160
    var features = $("input.feature:checked").map(function() {
        return this.value;
    }).get();
    if(features.length) filters.features = features;
    
	searcher = carSearchModule.search(filters);
	
	searcher.then(function(results) {
		var totalResult = "<h4>Total Results: "+results.length + "</h4>";
		results.forEach(function(car) {
			var result = "<div class='panel panel-warning'><div class='panel-heading'>";
			result += "<h3 class='panel-title'>" + car.model + " " + car.trim + "</h3></div>";
			result += "<div class='panel-body'>";
            result += "<p class='pull-right'><img class='img-thumbnail' src='"+car.imgUrl+"'></p>";
			result += "<p>The " + car.model + " " + car.trim + " is " + car.color + ". It has the following features:<ul>";
			for(var x=0; x<car.features.length;x++) {
				result += "<li>"+car.features[x]+"</li>";	
			}
			result += "</ul></p></div>";
			result += "<div class='panel-footer'>List Price: $" + car.price + "</div>";
			result += "</div>";
			totalResult += result;
		});
		$results.html(totalResult);
	});
	
}