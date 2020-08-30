
$(".hamburger").on("click", function(){
    $(".hamburger").toggleClass("active");
    $(".menu__container_mobile").toggleClass("show");
});

gsap.registerPlugin(ScrollTrigger);


var tl = gsap.timeline({duration:0.1});
tl.from(".hero__image", {x:100, ease:"sine.in"})
    .from(".hero__heading", {x:-100, ease:"sine.in"}, "-=0.5")
    .from(".hero__text", {x:100, ease:"sine.in"}, "-=0.5" )
    .from(".hero__stores img", {y:50, ease:"sine.in", stagger:{
        each:0.1,
        from:"back"
    }
                               }, "-=0.3");


var tl2 = gsap.timeline({duration:0.1,
                         scrollTrigger:{
                             trigger:".description_1",
                             toggleActions: "restart reset resume reset"
                             }
                        });
tl2.from(".hero-mockup_1 .hero-mockup__image-box", {y:20, ease:"sine.in"})
    .from(".description_1 .description__heading", {x:50, ease:"sine.in"})
    .from(".description_1 .description__text", {x:-50, ease:"sine.in"}, "-=0.3")
    .from(".description_1 .description__separator", {x:-50, ease:"sine.in"}, "-=0.1");

var tl3 = gsap.timeline({duration:0.1,
                         scrollTrigger:{
                             trigger:".description_2",
                             toggleActions: "restart none resume reset"
                         }
                        });
tl3.from(".hero-mockup_2 .hero-mockup__image-box", {y:20, ease:"sine.in"})
    .from(".description_2 .description__heading", {x:-50, ease:"sine.in"})
    .from(".description_2 .description__text", {x:50, ease:"sine.in"}, "-=0.3")
    .from(".description_2 .description__separator", {x:50, ease:"sine.in"}, "-=0.1");

var tl4 = gsap.timeline({duration: 0.1,
                         scrollTrigger:{
                             trigger:".description_3",
                             toggleActions: "restart reset resume reset"
                             }
                        });
tl4.from(".hero-mockup_3 .hero-mockup__image-box", {y:20, ease:"sine.in"})
    .from(".description_3 .description__heading", {x:50, ease:"sine.in"})
    .from(".description_3 .description__text", {x:-50, ease:"sine.in"}, "-=0.3")
    .from(".description_3 .description__separator", {x:-50, ease:"sine.in"}, "-=0.1");

var tl5 = gsap.timeline({
    duration: 0.1,
     scrollTrigger:{
        trigger:".plans",
        toggleActions: "restart reset resume reset"
        }
});
tl5.from(".plans__heading", {y:50, ease:"sine.in"})
    .from(".plans__pitch", {y:30, ease:"sine.in"}, "-=0.3");

if ($(window).width() > 992){
    var tl8 = gsap.timeline({
         duration: 0.1,
     scrollTrigger:{
        trigger:".plans__cards",
        toggleActions: "restart reset resume reset"
        }
    });

tl8.from(".plans__cards article", {y:-40, ease:"back", stagger:0.7, duration:1 });



gsap.utils.toArray(".card").forEach(card => {
 let tl = gsap.timeline({ paused: true });

    tl.to(card, { scale: 1.1, ease:"sine.inOut", duration:1 });

  card.addEventListener("mouseenter", () => tl.play() );
  card.addEventListener("mouseleave", () => tl.reverse() );
});
}

    gsap.utils.toArray(".feature").forEach(feature => {
  let blob = feature.querySelector(".blob"),
      tl = gsap.timeline({ paused: true });

    tl.to(blob, { scale: 1.4, ease:"rough", duration:2 });

  feature.addEventListener("mouseenter", () => tl.play() );
  feature.addEventListener("mouseleave", () => tl.reverse() );
});

var btn = document.querySelector(".cta__button"),
    tl6 = gsap.timeline({ paused: true }),
    tl7 = tl6.from(btn, {x:3, ease:"sine", duration:0.3}).from(btn, {x:-3, ease:"sine", duration:0.3}).repeat(-1);

btn.addEventListener("mouseenter", () => tl7.play());
btn.addEventListener("mouseleave", () => tl7.pause());

var tl9 = gsap.timeline({
    duration: 0.1,
     scrollTrigger:{
        trigger:".cta",
        toggleActions: "restart reset resume reset"
        }
    });
tl9.from(".cta__heading", {y:-30})
    .from(".cta__button", {y:20}, "-=0.5");

var v = document.getElementById("sn_video");
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement:"#sn_video", duration:300})
    .addTo(controller)
    .on("enter", function(){
        v.play();
    })
    .on("leave", function(){
        v.pause();
    });
