// gsap marquee
const init = () => {
  const marquee = document.querySelector('[wb-data="marquee"]');
  if (!marquee) {
    return;
  }
  const duration = parseInt(marquee.getAttribute("duration"), 10) || 5;
  const marqueeContent = marquee.firstChild;
  if (!marqueeContent) {
    return;
  }

  const marqueeContentClone = marqueeContent.cloneNode(true);
  marquee.append(marqueeContentClone);

  let tween;

  const playMarquee = () => {
    let progress = tween ? tween.progress() : 0;
    tween && tween.progress(0).kill();
    const width = parseInt(
      getComputedStyle(marqueeContent).getPropertyValue("width"),
      10
    );
    const gap = parseInt(
      getComputedStyle(marqueeContent).getPropertyValue("column-gap"),
      10
    );
    const distanceToTranslate = -1 * (gap + width);

    tween = gsap.fromTo(
      marquee.children,
      { x: 0 },
      { x: distanceToTranslate, duration, ease: "none", repeat: -1 }
    );
    tween.progress(progress);
    console.log({ width });
  };
  playMarquee();

  function debounce(func) {
    var timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(
        () => {
          func();
        },
        500,
        event
      );
    };
  }

  window.addEventListener("resize", debounce(playMarquee));

  // console.log({ marquee, marqueeContent });
};

document.addEventListener("DOMContentLoaded", init);

//
//____________________________________________________
//

//accordions gsap animation
let accordions = gsap.utils.toArray(".accordion");
accordions.forEach((accordion) => {
  let answer = accordion.querySelector(".accordion_answer");
  let arrow = accordion.querySelector(".accordion_arrow");

  //assign as variable
  let tl = gsap.timeline({ paused: true });

  tl.to(
    answer,
    { duration: 0.75, autoAlpha: 1, height: "auto", ease: "ease.in" },
    0
  ).to(arrow, { duration: 0.75, rotate: 180, ease: "ease.in" }, 0);

  //start timeline resting in reversed state
  tl.reverse();

  accordion.addEventListener("click", () => {
    //toggle reversed property of my timeline
    tl.reversed(!tl.reversed());
  });
});

//logo Animation

ScrollTrigger.batch(".about_client_logowrapper", {
  onEnter: (elements) => {
    gsap.from(elements, {
      autoAlpha: 0,
      y: 50,
      stagger: 0.4,
    });
  },
});

//
//____________________________________________________
//

//adding a class to active circle | Tab
let tabarr = document.querySelectorAll(".link-href");
let tabsproject = [...tabarr];
function hidealltabs() {
  for (let i = 0; i < tabsproject.length; i++) {
    tabsproject[i].classList.remove("active");
  }
}

for (let i = 0; i < tabsproject.length; i++) {
  tabsproject[i].addEventListener("click", (e) => {
    hidealltabs();
    tabsproject[i].classList.add("active");
  });
}
