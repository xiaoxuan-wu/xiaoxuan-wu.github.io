//banner
var mySwiper = new Swiper ('#banner', {
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.bannerRight',
      prevEl: '.bannerLeft',
    },
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,//用户操作后是否停止
	},
	effect:'cube'
  }) 
//app
 var mySwiper = new Swiper ('#app', {
	 loop: true, // 循环模式选项
	 slidesPerView : 3,
	 spaceBetween : 20,
	 
	 // 如果需要前进后退按钮
	 navigation: {
	   nextEl: '.appRight',
	   prevEl: '.appLeft',
	 },
	 autoplay: {
	 	delay: 3000,
	 	stopOnLastSlide: false,
	 	disableOnInteraction: false,//用户操作后是否停止
	 },
   })
//other
  var mySwiper = new Swiper ('#other', {
  	 loop: true, // 循环模式选项
  	 slidesPerView : 3,
  	 spaceBetween : 20,
  	 
  	 // 如果需要前进后退按钮
  	 navigation: {
  	   nextEl: '.appRight',
  	   prevEl: '.appLeft',
  	 },
  	 autoplay: {
  	 	delay: 3000,
  	 	stopOnLastSlide: false,
  	 	disableOnInteraction: false,//用户操作后是否停止
  	 },
    }) 
   
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       300,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();


// new WOW().init();