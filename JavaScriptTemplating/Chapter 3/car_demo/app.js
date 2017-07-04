var $results;
var $minprice;
var $maxprice;
var $model;
var $trim;
var $color;

var resultTemplate, resultsTemplate;

$(document).ready(function() {
	
	//cache the results div
	$results = $("#results");

	$minprice = $("#minprice");
	$maxprice = $("#maxprice");
	
	var models = carSearchModule.getModels();
	var trims = carSearchModule.getTrims();
	var colors = carSearchModule.getColors();
    var features = carSearchModule.getFeatures();
    
	var rendered;
	
    //render model filter
	var modelTemplate = $("#modelTemplate").html();
	rendered = new EJS({text:modelTemplate}).render({models:models});
    $("#modelFilter").html(rendered);

    $model = $("#model");
    
    //render trim filter
	var trimTemplate = $("#trimTemplate").html();
	rendered = new EJS({text:trimTemplate}).render({trims:trims});
    $("#trimFilter").html(rendered);
	
    $trim = $("#trim");

    //render color filter
	var colorTemplate = $("#colorTemplate").html();
	rendered = new EJS({text:colorTemplate}).render({colors:colors});
    $("#colorFilter").html(rendered);

	$color = $("#color");
    
    //render feature filter
	var featureTemplate = $("#featureTemplate").html();
	rendered = new EJS({text:featureTemplate}).render({features:features});
	$("#featureFilter").html(rendered);
    
	//get our result and results templates
	resultTemplate = $("#resultTemplate").html();
	resultsTemplate = $("#resultsTemplate").html();
	
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
	
	searcher.then(function(cars) {
		var results = [];
		cars.forEach(function(car) {
			var rendered = new EJS({text:resultTemplate}).render({car:car});
			results.push(rendered);
		});
		
		var rendered = new EJS({text:resultsTemplate}).render({
			totalResults:cars.length,
			results:results});
		
		$results.html(rendered);
		
	});
	
}