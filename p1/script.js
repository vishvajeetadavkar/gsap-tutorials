gsap.from("#navbar,h3",{
    y:-50,
    opacity:0,
    duration:1
})
gsap.from("#main h1",{
    x:-80,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.5,
})
gsap.from("#main img",{
    rotate:45,
    stagger:.4,
    duration:1,
    opacity:0,
    delay:1,
    x:-100
});