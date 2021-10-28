let timeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "80%",
        scrub: 1
    }
});
let timeLine2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "60%",
        scrub: 1
    }
});
let timeLineBox = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "80%",
        scrub: 1
    }
});

timeLine.fromTo(".sliding-text", {y:0}, {y:-100});
timeLine2.fromTo(".logo", { scale:6 }, { scale: 1, top: "1.5rem", left: "5rem", x: "50%", y: "50%" });
timeLineBox.fromTo(".square", { left: "70%" }, { left: "100%", opacity: 0, rotation: 90 });

let timeLine3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end: "210%",
        scrub: 1,
        pin: true,
        pinSpacing: false
    }
});