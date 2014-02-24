requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['modernizr.min','jquery.min', 'app/common.fn'],function(){
	
	//Create an instance of the common functions
	fnfInstance = new FNF.CommonClass();
	
	/*
	 * Modernizr will be availabe now
	 * Use it to test the media queries and optionally 
	 * load them into the page head
	 */
	fnfInstance.updateDeviceType();
	
	$(window).resize(function(){
		fnfInstance.updateDeviceType();
	});
	
	if(fnfInstance.isMobile === true){
		fnfInstance.loadAsyncCSS('mobile.css');
	}
	
	if(fnfInstance.isTablet === true){
		fnfInstance.loadAsyncCSS('tablet.css');
	}
	
	if(fnfInstance.isDesktop === true){
		fnfInstance.loadAsyncCSS('desktop.css');
	}
	
});