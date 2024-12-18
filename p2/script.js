gsap.from("#page1 #box1", {
    duration:1,
    delay:1,
    rotation:360,
    
})
gsap.from("#page2 #box2",{
    duration:1,
    delay:1,
    rotation:360,
    scrollTrigger:{
        trigger:"#page2 #box2",
        scroller:"body",
        start:"top 60%",
        end :"top 20%",
        scrub:true,
        markers:true,
    }
});
