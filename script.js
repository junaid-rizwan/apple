gsap.from(".left",{
    x:-80,
    opacity:0,
    // backgroundColor:"#000",
    duration:5,
    scrollTrigger:{
        trigger:".left",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
    
})

gsap.from(".top",{
    y:-50,
    opacity:0,
    // backgroundColor:"#000",
    duration:5,
    scrollTrigger:{
        trigger:".top",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
    
})
gsap.from(".bottom",{
    y:50,
    opacity:0,
    // backgroundColor:"#000",
    duration:5,
    scrollTrigger:{
        trigger:".top",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
    
})

gsap.from(".contact",{
    x:-80,
    opacity:0,
    // backgroundColor:"#000",
    duration:3,
    // scrollTrigger:{
    //     trigger:".contact",
    //     scroller:"body",
    //     start:"top 60%",
    //     end:"top 58%",
    //     scrub:3
    // }
    
})