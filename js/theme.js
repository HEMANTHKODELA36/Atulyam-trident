(function(){"use strict";var Core={initialized:false,initialize:function(){if(this.initialized)return;this.initialized=true;this.build();},build:function(){$.scrollToTop();this.owlCarousel();this.dropdownhover();this.editDropdown();this.flexslider();this.choosenselect();this.masonrygrid();},owlCarousel:function(options){var total=$("div.owl-carousel:not(.manual)").length,count=0;$("div.owl-carousel:not(.manual)").each(function(){var slider=$(this);var defaults={items:4,itemsCustom:false,itemsDesktop:[1199,2],itemsDesktopSmall:[979,1],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:true,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1000,autoPlay:false,stopOnHover:false,navigation:true,navigationText:["<i class=\"icons icon-left\"></i>","<i class=\"icons icon-right\"></i>"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:window,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,transitionStyle:false,addClassActive:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false}
var config=$.extend({},defaults,options,slider.data("plugin-options"));slider.owlCarousel(config).addClass("owl-carousel-init");});},dropdownhover:function(options){if($(window).width()>992){$('.pgl-navbar-main .dropdown-toggle').addClass('disabled');$('.navbar .dropdown').hover(function(){"use strict";$(this).addClass('open').find('.dropdown-menu').first().stop(true,true).delay(250).slideDown();},function(){"use strict";var na=$(this);na.find('.dropdown-menu').first().stop(true,true).delay(100).slideUp('fast',function(){na.removeClass('open');});});}else return;},editDropdown:function(){if($(window).width()<1024){$('.navbar-nav .dropdown').click(function(){$(this).addClass('open').find('.dropdown-menu').first().stop(true,true).show();},function(){$(this).removeClass('open').find('.dropdown-menu').first().stop(true,true).hide();$('.navbar-nav .dropdown > a').click(function(){location.href=this.href;});});}},flexslider:function(options){$('#carousel').flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,itemWidth:148,itemMargin:10,asNavFor:'#slider'});$('#slider').flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,sync:"#carousel"});},choosenselect:function(options){var config={'.chosen-select':{},'.chosen-select-deselect':{allow_single_deselect:true},'.chosen-select-no-single':{disable_search_threshold:10},'.chosen-select-no-results':{no_results_text:'Oops, nothing found!'},'.chosen-select-width':{width:"95%"}}
for(var selector in config){$(selector).chosen(config[selector]);}},masonrygrid:function(options){if($(window).width()<361)return;var $container=$('.masonry-desk');$container.imagesLoaded(function(){$container.masonry();});var $items=document.querySelectorAll('.masonry-item');imagesLoaded($items,function(){$container.masonry({itemSelector:'.masonry-item'});});}};Core.initialize();$(window).load(function(){});})();jQuery(function($){var doAnimations=function(){var offset=$(window).scrollTop()+$(window).height(),$animatables=$('.animatable');if($animatables.size()==0){$(window).off('scroll',doAnimations);}$animatables.each(function(i){var $animatable=$(this);if(($animatable.offset().top+$animatable.height()-20)<offset){$animatable.removeClass('animatable').addClass('animated');}});};$(window).on('scroll',doAnimations);$(window).trigger('scroll');});var a=0;$(window).scroll(function(){var oTop=$('#counter').offset().top-window.innerHeight;if(a==0&&$(window).scrollTop()>oTop){$('.counter-value').each(function(){var $this=$(this),countTo=$this.attr('data-count');$({countNum:$this.text()}).animate({countNum:countTo},{duration:2000,easing:'swing',step:function(){$this.text(Math.floor(this.countNum));},complete:function(){$this.text(this.countNum);}});});a=1;}});