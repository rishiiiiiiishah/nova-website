var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    crsr.style.transform = "scale(15)";
    crsr.style.border = "5px solid #fff";
    crsr.style.backgroundColor = "transparent"; 
  });
});


gsap.to("#nav",{
backgroundColor:"#000",
duration:0.5,
height:"120px",
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
}
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70vh",
        scrub:2
    }
})

gsap.from("#aboutus img,#about-us",{
    x:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
scrub:3
    }
})


gsap.from(".card",{
    x:50,
    opacity:0,
    duration:1,
    stagger:0.4,    
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
scrub:3
    }
})

gsap.from("#colonn1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colonn1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:1
    }
})

gsap.from("#colon2", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colonn1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:1
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // makers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})
