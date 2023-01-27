//script that sets css for the sliding div 

const currentDiv = document.querySelector(".section_projects");
let offset = currentDiv.offsetTop;
const body = document.querySelector("body");
let parent = currentDiv.offsetParent;

while (parent !== body) {
  offset += parent.offsetTop;
  parent = parent.offsetParent;
}
console.log(offset);

const divSliding = document.querySelector(".section_projects.second");
const topValue = offset;
console.log(topValue);

divSliding.style.top = `${topValue}px`;

//Load, Append and Animate in to view New Page Content
let nextPageLink;
let currentPageUrl = window.location.href;

$(".section_projects").addClass("first");

// Add class current-menu-link to the Parent of the current menu item (Needed for Collection Lists)
// *** NB Need to check if this is cross browser compliant ***

$(".filternavigation-link:has(.w--current)").addClass("current-menu-link");

// Only complete test for previous siblings if there is a current page in the Projects Nav
if ($(".current-menu-link").length) {
} else {
  $(".filternavigation-link:first-of-type").addClass("current-menu-link");
}

// On link click
$(".filternavigation-link > a:not(.w--current)").on("click", function (e) {
  e.preventDefault();
  //window.scrollTo(0, 0);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  nextPageLink = $(this).attr("href");

  const previousSiblings = (elem) => {
    // create an empty array
    const siblings = [];
    // loop through previous siblings until `null`
    while ((elem = elem.previousElementSibling)) {
      // push sibling to array
      siblings.push(elem);
    }
    return siblings;
  };

  const currentItem = document.querySelector(
    ".filternavigation-wrapper .current-menu-link"
  );
  // get all previous siblings

  const siblings = previousSiblings(currentItem);

  // Get index of current link clicked.
  var clickedPos = $(".filternavigation-wrapper a").index(this);

  clickedPos = clickedPos + 1;
  let prevSibs = siblings.length;

  //console.log ("clickedPos" + clickedPos);
  //console.log ("prevSibs" + prevSibs);

  // Adjust Clicked Position if a secondary meny exists
  if ($(".project-archive-navigation-heading").length) {
    clickedPos = clickedPos - 4;
  }
  /*
   console.log ("clickedPos" + clickedPos);
    console.log ("prevSibs" + prevSibs);
    */

  // Slide either left or right

  if (clickedPos <= prevSibs) {
    $.ajax({
      url: nextPageLink,
      success: function (response) {
        let element = $(response).find(".section_projects").addClass("second");
        $(".section_projects-wrapper").append(element);
      },
      complete: function () {
        pageTransition("fromLeft");
      },
    });
  } else {
    $.ajax({
      url: nextPageLink,
      success: function (response) {
        let element = $(response).find(".section_projects").addClass("second");
        $(".section_projects-wrapper").append(element);
      },
      complete: function () {
        pageTransition("fromRight");
      },
    });
  }
});

function pageTransition(slideDirection) {
  console.log(slideDirection);
  /* Slide from right */
  let x1 = "110vw";
  let x2 = "-110vw";

  if (slideDirection == "fromLeft") {
    /* Slide from left */
    x1 = "-110vw";
    x2 = "110vw";
  }

  $("html").addClass("animating");
  let tl = gsap.timeline({
    paused: false,
    onComplete: updatePage,
  });
  tl.from(".section_projects.second", {
    x: x1,
    delay: 0.2,
    duration: 0.8,
    ease: "power2.out",
  });

  tl.to(
    ".section_projects.first",
    {
      x: x2,
      delay: 0.2,
      duration: 0.8,
      ease: "power2.out",
    },
    0
  );
}

function updatePage() {
  window.location = nextPageLink;
}

//Select animation for Ideas Page
let projectSettings = gsap.utils.toArray("#g-button");
projectSettings.forEach((projectSettings) => {
  let topiclist = projectSettings.querySelector("#g-content");
  let arrowNarrow = projectSettings.querySelector("#arrow");
  let navMenu = document.querySelector("#nav-menu");
  let topicSection = document.querySelector("#topics-section");
  //assign as variable topics-section
  let tl = gsap.timeline({ paused: true });

  tl.to(
    topiclist,
    { duration: 0.5, autoAlpha: 1, height: "auto", ease: "ease.out" },
    0
  ).to(arrowNarrow, { duration: 0.5, rotate: 270, ease: "ease.out" }, 0);

  //start timeline resting in reversed state
  tl.reverse();

  projectSettings.addEventListener("click", () => {
    //toggle reversed property of my timeline
    tl.reversed(!tl.reversed());
  });

  navMenu.addEventListener("mouseover", () => {
    if (topiclist.offsetHeight === 0) {
    } else {
      tl.reverse();
    }
  });

  topicSection.addEventListener("mouseover", () => {
    if (topiclist.offsetHeight === 0) {
    } else {
      tl.reverse();
    }
  });
});
