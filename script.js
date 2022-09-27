var loading = gsap.timeline();
loading
.to("#bubble",{
    width: "20px",
    height: "20px",
    backgroundColor : "#dadada",
    ease: Power1.easeInOut,
    duration: .5
})
.to("#bubble1",{
    width: "80px",
    height: "80px",
    backgroundColor : "#dadada6d",
    ease: Power1.easeInOut,
    duration: .5
})
.to(".loader1",{
    top: "-100%",
    backgroundColor : "#dadada6d",
    duration: 1,
    opacity: 0,
})
ScrollTrigger.create({
    onUpdate: function myfuck(dets) {
        gsap.to(".loader", {
            width: Math.floor(dets.progress * 100) + '%'
        })
    }
})
var clrconwidth = document.querySelector(".clrcon").getBoundingClientRect().width;
gsap.to(".clrcon", {
    scrollTrigger: {
        trigger: "#two",
        start: "top 100%",
        end: "top 50%",
        scrub: 5,
    },
    rotate: "720deg",
    ease: Power1.easeInOut,
    top: -1*clrconwidth,
    duration: 2,
    delay: 2
})

gsap.to("#fcircle", {
    scrollTrigger: {
        trigger: "#two",
        start: "5% 75%",
        end: "20% 50%",
        scrub: 2,
    },
    duration: 4,
    rotate: 270,
    // ease:Expo.easeIn
})
gsap.to("#scircle", {
    scrollTrigger: {
        trigger: "#two",
        start: "5% 75%",
        end: "20% 50%",
        scrub: 2,
    },
    duration: 4,
    rotate: 410,
})

gsap.to("#tcircle", {
    scrollTrigger: {
        trigger: "#two",
        start: "5% 75%",
        end: "5% 20%",
        scrub: 2,
    },
    duration: 4,
    rotate: -440,
})
gsap.to("#innercircle",{
    scrollTrigger:{
        trigger:"#two",
        start:"5% 75%",
        // end:"20% 50%",
        end: "5% 20%",
        scrub:2,
        // markers: true
    },
    duration:2,
    rotate:-460,
    scale:3,
    ease:Expo.easeIn
})
gsap.to("#innercircle i",{
    scrollTrigger:{
        trigger:"#two",
        start:"5% 75%",
        // end:"20% 50%",
        end: "5% 20%",
        scrub:2,
        // markers: true
    },
    duration:2,
    rotate:-460,
    scale: .4,
    opacity:1,
    ease:Expo.easeIn
})


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#three",
        start: "center center",
        // end:"20% 50%",
        scrub: 2,
        pin: true,
        // markers:true

    }
})
tl.from("#three #photo", {
    y: 300,
    duration: 1,
    opacity: 0,
    rotate: -460,
    // rotate: "720deg",
    // top: "50%",
    // ease: Power3
})
var photuswhidth = document.querySelector(".photus").getBoundingClientRect().width;

tl.to(".photus", {
    left: "60%",

})
tl.to(".abc", {
    left: -1*photuswhidth,
    ease:"power1"
})

// tl.to("#photo", {
//     left: -1*photuswhidth,
//     ease:"power1"
// })
// tl.to(".photus", {
//     left: -1*photuswhidth,
//     ease:"power1"
// })

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#four",
        start: "center center",
        pin: true,
        scrub: 3
    }
})
tl2.to(".poster", {
    y: -40,
    stagger: .2,
    opacity: 1

}, "a")
tl2.to(".poster", {
    y: 0,
    stagger: .2,
    delay: .5,
    opacity: 0

}, "a")

tl2.to("h1 span", {
    y: -80,
    stagger: .2
}, "a")
tl2.to("h1 span", {
    y: 0,
    stagger: .2
}, "a")

document.querySelectorAll(".fntxt h2").forEach(element => {
    element.addEventListener("mousemove", function (dets) {
        gsap.to(".img-1", {

            x: dets.target.dataset.index * -100 + "%",
            ease: Expo.easeOut,
            duration: 1.5,
            opacity: 1
        })
    })
    element.addEventListener("mouseleave", function (dets) {
        gsap.to(".img-1", {
            opacity: 0
        })
    })

});





document.querySelector("#fullscreenmenu i")
    .addEventListener("click", function () {
        document.querySelector("#fullscreenmenu").style.top = "-150%"
    })


document.querySelector("#menu")
    .addEventListener("click", function () {
        document.querySelector("#fullscreenmenu").style.top = "-0%"
    })


document.querySelectorAll("#flinks a")
    .forEach(function (el){
        el.addEventListener("mouseover",function(dets){
            gsap.to(".fphotu",{
               x: dets.target.dataset.index*-100+"%",
                ease: Expo.easeInOut,
                duration: 1
            })
        });
    })