describe("Testing Two Numbers", function() {
	
    it("Add Numbers", function() {
    	var rslt;
    	syncLoop(5, function(loop){
    	    setTimeout(function(){
    		    var i = loop.iteration();
    		    console.log(i);
    		    loop.next();
    	    }, 1000);
    	}, function(){
    		rslt=true;
    	    console.log('done');
    	  /*  expect(rslt).toBe(true);*/
    	});
    });
    
});