function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').toggleClass(osAnimationClass);
          },{
              triggerOnce: false,
              offset: '90%'
        });
  });
}

 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );



  <div class="imp">
  <div class="mod-inline os-animation" data-os-animation="fadeInRight" data-os-animation-delay="0s">
 <div class="row">
 <div class="col-sm-6">
 <h3 data-wow-duration="700ms" data-wow-delay="500ms" class="wow slideInLeft animated" style="font-family:'Ubuntu', serif; font-size:15px; text-align:center;font-color:black;font-weight:bold;">Impact-We Created</h3>
 <img data-wow-duration="700ms" data-wow-delay="500ms" class="wow slideInLeft animated" style="width:500px;height:400px;margin-left:100px;-webkit-filter:grayscale(85%);filter:grayscale(85%);" src="img/impact/2.png">
 </div>
 <div class="col-sm-6">
 <h3 data-wow-duration="700ms" data-wow-delay="500ms" class="wow slideInRight animated" style="font-family:'Ubuntu', serif; font-size:15px; text-align:center;font-color:black;font-weight:bold;">We Worked With</h3>
 <img data-wow-duration="700ms" data-wow-delay="500ms" class="wow slideInRight animated" style="width:500px;height:400px;" src="img/impact/1.png">
 </div>
 </div>
 </div>
 </div>