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
	$("#modelFilter").html(nunjucks.render('model.html', {models:models}));

    $model = $("#model");

    //render trim filter
	$("#trimFilter").html(nunjucks.render('trim.html', {trims:trims}));

    $trim = $("#trim");

    //render color filter
	$("#colorFilter").html(nunjucks.render('color.html', {colors:colors}));

	$color = $("#color");

    //render feature filter
	$("#featureFilter").html(nunjucks.render('feature.html', {features:features}));

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
		
		$results.html(nunjucks.render('results.html', data));

	});

}
