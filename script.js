var t1 = gsap.timeline( {delay: 0.5 });

t1.from("#main nav h2",{
    y:-6,
    duration:0.1,
    opacity:0,
    delay:0.1,
    stagger:1,
})


t1.fromTo(".vid", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power3.out" })
  .fromTo("#overlay1 h1", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2, ease: "power3.out" }, "-=1")
  .fromTo("#overlay1 h2", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2, ease: "power3.out" }, "-=0.5")
  .fromTo("#overlay2 h2", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2, ease: "power3.out" }, "-=0.5");

  gsap.from("#uchiha-image img", {
   opacity: 0,
   y: -100,                        // Animate from -100px (upward movement)
   duration: 1.5,                  // Duration of 1.5 seconds
   ease: "power2.out",             // Smooth easing effect
   scrollTrigger: {
     trigger: "#uchiha-clan",   
     scroller:"body",    // Trigger when #uchiha-clan enters the viewport
     start: "top 50%", 
     scrub:1,            // Start when the top of #uchiha-clan reaches 80% of the viewport height
     toggleActions: "play none none none", // Only play once on scroll

   }
 });

 gsap.from("#uchiha-clan h1", {
   opacity: 0,
   x: 100,                         // Animate from 100px (rightward movement)
   duration: 1.5,                  // Duration of 1.5 seconds
   ease: "power2.out",             // Smooth easing effect
   scrollTrigger: {
     trigger: "#uchiha-clan h1",
     scroller:"body",       // Trigger when #uchiha-clan enters the viewport
     start: "top 50%",    
     end: "bottom 60%",   
   //   scrub:1,          // Start when the top of #uchiha-clan reaches 80% of the viewport height
     toggleActions: "play none none none", // Only play once on scroll
   }
 });

  // Animate the left aside (Madara image) when scrolling
  gsap.from(".aside-left img", { 
     opacity: 0, 
     scale: 0.5, 
     duration: 1.5, 
     ease: "back.out(1.7)", 
     scrollTrigger: {
        trigger: ".aside-left img",
        scroller:"body",
        start: "top 80%",           // Start animation when the top of .aside-left reaches 85% of viewport height
        end: "bottom 60%",     
        scrub: 1,    // End animation when the bottom of .aside-left reaches 60% of viewport height
        toggleActions: "play none none none" // Only play animation when it scrolls into view
     }
  });

  // Animate the left aside (Madara's title) when scrolling
  gsap.from(".aside-left h1", { 
     opacity: 0, 
     x: -100, 
     duration: 1, 
     ease: "power2.out", 
     scrollTrigger: {
        trigger: ".aside-left h1",
        scroller:"body",
        start: "top 80%",           // Start animation when the top of .aside-left reaches 85% of viewport height
        end: "bottom 60%",      
        scrub:1,    // Same trigger as the image for synchronization
        toggleActions: "play none none none"
     }
  });

  // Animate the right aside (Madara's quote) when scrolling
  gsap.from(".aside-right h4 span", {
    opacity: 0,
    x:800,                          // Move in from the right by 500px
    duration: 1,                     // Duration of 1 second for each line
    ease: "power3.out",              // Smooth easing effect
    stagger: 0.3,                    // Stagger each line by 0.2 seconds
    scrollTrigger: {
      trigger: ".aside-right h4",
      scroller: "body",
      start: "top 95%",              // Start animation when top of h4 is 90% in viewport
      end: "bottom 60%",             // End when h4's bottom reaches 60% of viewport
      scrub: 1,     
      // markers:true,                 // Scrub makes the animation tie into scroll speed
      toggleActions: "play none none none"
    }
  });

  // Create a timeline for the entire page3 section
  let page3Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",             // Trigger the timeline when #page3 is in view
      start: "top 80%",              // Animation starts when the top of #page3 is 80% in the viewport
      toggleActions: "play none none none"
    }
  });

  // Add circular image animation to the timeline (rotate + scale)
  page3Timeline.from(".circleAnimation", {
    scale: 0.3,                     // Start smaller
    rotation: 720,                  // Spin the image 720 degrees
    duration: 2,                    // Duration of 2 seconds
    ease: "elastic.out(1, 0.75)",   // Elastic bounce effect
  });

  // Animate the arrows with rotation and movement
  page3Timeline.from(".arrows", {
    opacity: 0,
    x: -100,                        // Move from left to right
    rotation: 360,                  // Spin the arrows
    duration: 1.5,
    ease: "back.out(1.7)",          // Smooth and dynamic easing
  }, "-=1.2");                      // Start this animation slightly before the circle animation ends


  gsap.from(".textContainer h6 span", {
    opacity: 0,
    x:800,                          // Move in from the right by 500px
    duration: 1,                     // Duration of 1 second for each line
    ease: "power3.out",              // Smooth easing effect
    stagger: 0.3,                    // Stagger each line by 0.2 seconds
    scrollTrigger: {
      trigger: ".textContainer h6",
      scroller: "body",
      start: "top 95%",              // Start animation when top of h4 is 90% in viewport
      end: "bottom 60%",             // End when h4's bottom reaches 60% of viewport
      scrub: 1,     
      // markers:true,                 // Scrub makes the animation tie into scroll speed
      toggleActions: "play none none none"
    }
  });

  gsap.to(".imgSection img",{
    width:"100%",
    scrollTrigger:{
        trigger:".imgSection",
        scroll:"body",
        marker:true,
        start:"top 0",
        end:"end -100%",
        pin:true,
        scrub:2
    }
})


gsap.registerPlugin(ScrollTrigger);

// Animate the Hokage List heading
gsap.from("#page4 h1", {
  opacity: 0,
  y: -100,            // Slide in from above
  scale: 0.5,         // Start smaller and scale up
  duration: 1.5,
  ease: "power2.out", // Smooth easing effect
  scrollTrigger: {
    trigger: "#page4 h1", 
    scroll:"body", // Targeting the specific h1 inside #page4
    start: "top 80%",  
    scrub:2,    // Start animation when 80% of the viewport height is reached
    toggleActions: "play none none none" // Only play the animation when it appears
  }
});


gsap.registerPlugin(ScrollTrigger);

// Left-side text (for .elem-part2 h1 and h5)
gsap.from(".elem-part2 h1, .elem-part2 h5", {
  opacity: 0,
  x: -150,            // Slide in from the left
  duration: 1.5,
  ease: "power2.out",  // Smooth easing
  stagger: 0.2,        // Stagger each text element animation by 0.2 seconds
  scrollTrigger: {
    trigger: ".elem",  // Each .elem triggers its text animation
    start: "top 80%",  // Start when the element enters the viewport
    end: "bottom 20%",
    scrub: true,       // Scrub linked to scroll
  }
});

// Right-side text (for h4 inside .elem)
gsap.from(".elem h4", {
  opacity: 0,
  x: 150,             // Slide in from the right
  duration: 1.5,
  ease: "power2.out",  // Smooth easing
  stagger: 0.2,        // Stagger each text element animation by 0.2 seconds
  scrollTrigger: {
    trigger: ".elem",  // Each .elem triggers its text animation
    start: "top 80%",  // Start when the element enters the viewport
    end: "bottom 20%",
    scrub: true,       // Scrub linked to scroll
  }
});


 

  // Animate the Hokage List heading
 
