define([
        "dojo/_base/declare",
        "dojo/request"], function(declare,request){
	return declare("quakes.EarthQuake",[],{
		_lastSevenDaysQuakesUrl:"http://www.earthquakescanada.nrcan.gc.ca/api/earthquakes/latest/7d.json",
		_latestSevenDaysData:"",
		constructor: function(){
			var quakeApiDeferred;
			
			quakeApiDeferred = request.get(this._lastSevenDaysQuakesUrl);
			
			quakeApiDeferred.then(function(data){
				this._latestSevenDaysData = data;
			},function(error){
				console.log(error);
			});
		},
		lookupLatestQuake: function(){
			return {solution_id:"1"};
		}
	});
});