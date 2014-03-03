require(['doh/runner',
        'quakes/earthquake'], function(doh, EarthQuake){
	doh.register("earthquake tests",[{
	 name: "earthquake module exists",
	 runTest: function(){
		 var earthquake = new EarthQuake();
		 this.exists = !!earthquake;
		 doh.assertTrue(this.exists, "Earthquakes don't exist!");
	 }
	},
	{
		name: "latest earthquake exists",
		runTest: function(){
			var earthquake = new EarthQuake();
			latestQuake = earthquake.lookupLatestQuake();
			doh.assertTrue(earthquake.lookupLatestQuake().solution_id, "there is no solution_id");
		}
	}]);
});