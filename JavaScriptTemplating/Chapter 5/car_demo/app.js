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
	
	var models = carSearchModule.getModels();
	var trims = carSearchModule.getTrims();
	var colors = carSearchModule.getColors();
    var features = carSearchModule.getFeatures();
    
	var rendered;
	
    //render model filter
	dust.render('model', {models:models}, function(err, result) {
		$("#modelFilter").html(result);
	});

    $model = $("#model");
    
    //render trim filter
	dust.render('trim', {trims:trims}, function(err, result) {
		$("#trimFilter").html(result);
	});
	
    $trim = $("#trim");

    //render color filter
	dust.render('color', {colors:colors}, function(err, result) {
		$("#colorFilter").html(result);
	});

	$color = $("#color");
    
    //render feature filter
	dust.render('feature', {features:features}, function(err, result) {
		$("#featureFilter").html(result);
	});
    
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
		var data = {
			totalResults:cars.length,
			results:cars
		};
		dust.render('results', data, function(err, result) {
			$results.html(result);
		});

	});
	
}