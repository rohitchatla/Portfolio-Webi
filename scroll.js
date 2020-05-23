
const intro=document.querySelector('.about-image');
const video=intro.querySelector('video');
const text=document.getElementById('text');

//end-section
const endsection=document.querySelector('about-area');


//scrollmagic
const controller=new ScrollMagic.Controller();

//scenes
let scene=new ScrollMagic.Scene({

	duration: 2000,
	triggerElement: intro,
	triggerHook: 0 //top,0.5=middle
})
//.addIndicators()
.setPin(intro)
.addTo(controller);


//textanimation
const textani=TweenMax.fromTo(text,2,{opacity:1},{opacity:0});
let scene2=new ScrollMagic.Scene({

	duration: 2000,
	triggerElement: intro,
	triggerHook: 0 //top,0.5=middle
})
.setTween(textani)
.addTo(controller);

//video animation
let accelamount=0.1;
let scrollpos=0;
let delay=0;

//eventlistener
scene.on('update',e => {
	scrollpos=e.scrollPos/1000; //milli to sec conversion by dividing by 1000(as we wanted in sec's)
	//console.log(e);
});

setInterval(() => {
	delay+=(scrollpos-delay)*accelamount;
	//console.log(scrollpos,delay);
	video.currentTime=delay;//scrollpos-(it will pause when not scrolling);
},33.3);