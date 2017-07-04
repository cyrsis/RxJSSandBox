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
	var modelTemplate = Handlebars.compile($("#modelTemplate").html());
	rendered = modelTemplate({models:models});
    $("#modelFilter").html(rendered);

    $model = $("#model");
    
    //render trim filter
	var trimTemplate = Handlebars.compile($("#trimTemplate").html());
	rendered = trimTemplate({trims:trims});
    $("#trimFilter").html(rendered);
	
    $trim = $("#trim");

    //render color filter
	var colorTemplate = Handlebars.compile($("#colorTemplate").html());
	rendered = colorTemplate({colors:colors});
    $("#colorFilter").html(rendered);

	$color = $("#color");
    
    //render feature filter
	var featureTemplate = Handlebars.compile($("#featureTemplate").html());
	rendered = featureTemplate({features:features});
	$("#featureFilter").html(rendered);
    
	//default msg
	$results.html("<i>Use the form to the left to begin your search!</i>");
	
	//search handler	
	$("#searchForm").on("submit", doSearch);
	
	//register partial
	Handlebars.registerPartial("result", $("#resultTemplate").html());
	//main template function
	resultFunc = Handlebars.compile($("#resultsTemplate").html());

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
		var data = {
			totalResults:cars.length,
			results:cars
		};
		$results.html(resultFunc(data));		
	});
	
}