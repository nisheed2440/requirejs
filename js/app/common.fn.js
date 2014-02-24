var FNF = FNF || {};
FNF.CommonClass = function(){
	
	/*
	 * Private variable declarations 
	 */
	var _this            = this; //instance variable

	/*
	 * Public variable declarations 
	 */
	
	this.isTablet = false;
	this.isMobile = false;
	this.isDesktop= false ;
	
	/*
	 * Private function definitions  
	 */
	
	var _setDeviceType = function(mobi,tablet,desktop){
		if(typeof mobi === 'boolean' && typeof tablet === 'boolean' && typeof desktop === 'boolean'){
			_this.isTablet = tablet;
			_this.isMobile = mobi;
			_this.isDesktop= desktop;
			return true;
		}
		return false;
	}
	
	/*
	 * Public function definitions
	 */
	this.loadAsyncCSS = function(url){
	    var link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = url;
	    document.getElementsByTagName("head")[0].appendChild(link);
	}
	
	this.updateDeviceType = function(){
		if(typeof Modernizr === 'object'){
			//xs
			if(Modernizr.mq('only screen and (max-width: 767px)')){
				_setDeviceType(true,false,false);
			}
			
			/* sm */
			if(Modernizr.mq('only screen and (min-width: 768px) and (max-width: 991px)')){
				_setDeviceType(true,false,false);
			}
			
			/* md */
			if(Modernizr.mq('only screen and (min-width : 991px) and (max-width : 1199px)')){
				_setDeviceType(false,true,false);
			}
			
			/* lg */
			if(Modernizr.mq('only screen and (min-width : 1200px)')){
				_setDeviceType(false,false,true);
			}
		}
	}
	
	this.init = function(){
		Modernizr.addTest('highresdisplay', function(){ 
			if (window.matchMedia) { 
				var mq = window.matchMedia("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
				if(mq && mq.matches) {
					return true;
				} 
		    }
			
			return false;
		});
	}
	
	return this.init();
		
	
	
}