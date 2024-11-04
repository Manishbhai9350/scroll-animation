const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

const isTrigger2Created = false;

ScrollTrigger.create({
  trigger: ".plus",
  start: "top 50%",
  end: "top -43%",
  scrub: true,
  // pin: true,
  onUpdate: (self) => {
    const progress = self.progress;
    const rotate = (progress - 0.5) * 360;
    gsap.to(".plus", {
      rotate,
      duration: 0,
      ease: "none",
    });
    gsap.to(".line.l-1", {
      width: 20 + progress * 60,
      duration: 0.1,
      ease: "none",
    });
    gsap.to(".line.l-2", {
      height: 20 + progress * 60,
      duration: 0.1,
      ease: "none",
    });
  },
});

ScrollTrigger.create({
  trigger:'.plus',
  start:'top center',
  end:'top -150vh',
  endTrigger:'.info2',
  pin:true,
  onUpdate(self){
    const progess = self.progess
    const scale = 1 + 4 * progess
    // gsap.to('.plus',{scale,ease:"none",duration:0.1})
  }
})

ScrollTrigger.create({
  target:'.info2',
  start:'top top',
  end:'bottom top',
  pin:true,
})


window.onresize = () => {
  console.log('You Resize I Reload')
  window.location.reload()
}