function checkDevice() {
  const deviceMessage = document.getElementById("device-message");
  const mainContent = document.querySelector(".main");

  if (window.innerWidth < 1024) {
    deviceMessage.style.display = "flex";
    mainContent.classList.add("hide-content");
  } else {
    deviceMessage.style.display = "none";
    mainContent.classList.remove("hide-content");
  }
}
window.onload = checkDevice;
window.onresize = checkDevice;

function smoothScroll() {
  const lenis = new Lenis({
    duration: 1.9,
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
smoothScroll();

function cursorAnimation() {
  const isTouchDevice = "ontouchstart" in window;
  const createCursorFollower = () => {
    const $el = document.querySelector(".cursor-follower");

    window.addEventListener("mousemove", (e) => {
      const { target, x, y } = e;

      const isTargetLinkOrBtn = target?.closest("button");

      gsap.to($el, {
        x: x - 6,
        y: y - 5,
        duration: 1,
        ease: "power4",
        opacity: isTargetLinkOrBtn ? 0 : 1,
        // transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
      });
    });

    document.addEventListener("mouseleave", (e) => {
      gsap.to($el, {
        duration: 1,
        opacity: 0,
      });
    });
  };

  if (!isTouchDevice) {
    createCursorFollower();
  }
}
cursorAnimation();

function marqueCapsuleOnImageHover() {
  document.querySelectorAll(".work-container .img1").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      document.querySelector(".cursor-follower .circle-1").style.opacity = 1;
      document.querySelector(".cursor-follower .circle-1").style.scale = 1;
      document.querySelector(".cursor-follower").style.backgroundColor =
        "transparent";
    });
    con.addEventListener("mouseleave", function (dets) {
      document.querySelector(".cursor-follower .circle-1").style.opacity = 0;
      document.querySelector(".cursor-follower .circle-1").style.scale = 0.5;
      document.querySelector(".cursor-follower").style.backgroundColor =
        "#d9ff06";
    });
  });

  document.querySelectorAll(".work-container .img2").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      document.querySelector(".cursor-follower .circle-2").style.opacity = 1;
      document.querySelector(".cursor-follower").style.backgroundColor =
        "transparent";
    });
    con.addEventListener("mouseleave", function (dets) {
      document.querySelector(".cursor-follower .circle-2").style.opacity = 0;
      document.querySelector(".cursor-follower").style.backgroundColor =
        "#d9ff06";
    });
  });

  document.querySelectorAll(".work-container .img3").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      document.querySelector(".cursor-follower .circle-3").style.opacity = 1;
      document.querySelector(".cursor-follower").style.backgroundColor =
        "transparent";
    });
    con.addEventListener("mouseleave", function (dets) {
      document.querySelector(".cursor-follower .circle-3").style.opacity = 0;
      document.querySelector(".cursor-follower").style.backgroundColor =
        "#d9ff06";
    });
  });

  document.querySelectorAll(".work-container .img4").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      document.querySelector(".cursor-follower .circle-4").style.opacity = 1;
      document.querySelector(".cursor-follower").style.backgroundColor =
        "transparent";
    });
    con.addEventListener("mouseleave", function (dets) {
      document.querySelector(".cursor-follower .circle-4").style.opacity = 0;
      document.querySelector(".cursor-follower").style.backgroundColor =
        "#d9ff06";
    });
  });
}
marqueCapsuleOnImageHover();

function imagesOnHover() {
  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var different = 0;
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().bottom;
      different = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector(".img-container"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, different * 0.5),
      });
    });
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector(".img-container"), {
        opacity: 0,
        ease: Power3,
        // duration: 0.5,
      });
    });
  });

  document.querySelectorAll(".con").forEach(function (con) {
    var rotate = 0;
    var different = 0;
    con.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - con.getBoundingClientRect().bottom;
      different = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(con.querySelector(".con-img-container"), {
        opacity: 1,
        ease: Power3,
        top: diff + diff / 2,
        left: dets.clientX - con.getBoundingClientRect().top + diff / 3,
        rotate: gsap.utils.clamp(-20, 20, different * 0.5),
      });
    });
    con.addEventListener("mouseleave", function (dets) {
      gsap.to(con.querySelector(".con-img-container"), {
        opacity: 0,
        ease: Power3,
        // duration: 0.5,
      });
    });
  });
  document.querySelectorAll(".con-1").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      document.querySelector(".page4-before").style.backgroundColor = "#FFD7E7";
    });
    con.addEventListener("mouseleave", function (dets) {
      document.querySelector(".page4-before").style.backgroundColor = "#ffffff";
    });
  });
  document.querySelectorAll(".con-2").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      document.querySelector(".page4-before").style.backgroundColor = "#BAC4E2";
    });
    con.addEventListener("mouseleave", function (dets) {
      document.querySelector(".page4-before").style.backgroundColor = "#ffffff";
    });
  });
}
imagesOnHover();

function marqueAnimation() {
  window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        repeat: -1,
        duration: 10,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 180,
        duration: 0.8,
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(0%)",
        repeat: -1,
        duration: 10,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 0,
        duration: 0.8,
      });
    }
  });
  gsap.to(".move-container", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 2,
    ease: "none",
  });
}
marqueAnimation();

function menuHover() {
  document.querySelectorAll(".list-1").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      gsap.to(".list-1 a", {
        transform: "translateY(-100%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
    con.addEventListener("mouseleave", function (dets) {
      gsap.to(".list-1 a", {
        transform: "translateY(0%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
  });

  document.querySelectorAll(".list-2").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      gsap.to(".list-2 a", {
        transform: "translateY(-100%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
    con.addEventListener("mouseleave", function (dets) {
      gsap.to(".list-2 a", {
        transform: "translateY(0%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
  });

  document.querySelectorAll(".list-3").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      gsap.to(".list-3 a", {
        transform: "translateY(-100%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
    con.addEventListener("mouseleave", function (dets) {
      gsap.to(".list-3 a", {
        transform: "translateY(0%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
  });

  document.querySelectorAll(".list-4").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      gsap.to(".list-4 a", {
        transform: "translateY(-100%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
    con.addEventListener("mouseleave", function (dets) {
      gsap.to(".list-4 a", {
        transform: "translateY(0%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
  });

  document.querySelectorAll(".list-5").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      gsap.to(".list-5 a", {
        transform: "translateY(-100%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
    con.addEventListener("mouseleave", function (dets) {
      gsap.to(".list-5 a", {
        transform: "translateY(0%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
  });

  document.querySelectorAll(".list-6").forEach(function (con) {
    con.addEventListener("mousemove", function (dets) {
      gsap.to(".list-6 a", {
        transform: "translateY(-100%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
    con.addEventListener("mouseleave", function (dets) {
      gsap.to(".list-6 a", {
        transform: "translateY(0%)",
        duration: 0.3,
        ease: "sine.out",
      });
    });
  });
}
menuHover();

function allScrollTriggers() {
  gsap.from(".page3 h1 span", {
    y: "100%",
    opacity: 0,
    delay: 1,
    ease: Power4,
    stagger: 0.08,
    duration: 0.8,
  });

  // ScrollTrigger for menu scale down

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      start: "60% 50%",
      end: "60% 50%",
      // markers: true,
      scrub: 1,
    },
  });
  tl.to(".menu ul", {
    scale: 0.8,
    marginTop: "-1.8vw",
    marginRight: "-1.5vw",
    ease: "circ.out",
    duration: 0.8,
  });

  // ScrollTrigger for about me text reveal animation

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".round",
      start: "5% 50%",
      end: "5% 50%",
      // markers: true,
    },
  });
  tl2.from(".heading-container h1 span", {
    y: "100%",
    opacity: 0,
    ease: "circ.out",
    stagger: 0.1,
    duration: 1,
  });

  // ScrollTrigger for featured work text reveal animation

  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".round",
      start: "70% 50%",
      end: "70% 50%",
      // markers: true,
    },
  });
  tl6.from(".txt-container h1 span", {
    y: "100%",
    opacity: 0,
    ease: Power4,
    stagger: 0.1,
    duration: 0.5,
  });

  // ScrollTrigger for work bottom text reveal animation

  let tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page5",
      start: "75% 50%",
      end: "75% 50%",
      // markers: true,
    },
  });
  tl8.from(".page4-bottom-content h4 span", {
    y: "100%",
    opacity: 0,
    ease: Power4,
    stagger: 0.1,
    duration: 1,
  });

  // ScrollTrigger for where we thrive text reveal animation

  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1",
      start: "5% 50%",
      end: "5% 50%",
      // markers: true,
    },
  });
  tl5.from(".txt-reveal h1 span", {
    y: "100%",
    opacity: 0,
    ease: Power4,
    stagger: 0.1,
    duration: 0.5,
  });

  // ScrollTrigger for clients we call family text reveal animation

  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page7",
      start: "30% 50%",
      end: "30% 50%",
      // markers: true,
    },
  });
  tl4.from(".txt-con h1 span", {
    y: "100%",
    opacity: 0,
    ease: Power4,
    stagger: 0.1,
    duration: 0.5,
  });

  // ScrollTrigger for latest news text reveal animation

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4-before",
      start: "-40% 50%",
      end: "-40% 50%",
      // markers: true,
    },
  });
  tl3.to(".family h1 span", {
    y: "-100%",
    ease: "circ.out",
    stagger: 0.1,
    duration: 1,
  });
}
allScrollTriggers();
