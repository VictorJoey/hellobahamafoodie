const lightgrey = "#FBF9F6";
const white = "#ffffff";
const green = "#FFFF00 ";
const lightblue = "#dae9f6";
const yellow = "#FDC600";

let heroSectionWave = document.getElementById("hero-section-wave");

if (document.body.contains(heroSectionWave)) {
  var myWave = wavify(heroSectionWave, {
    height: 124,
    bones: 3,
    amplitude: 40,
    color: white,
    speed: 0.25,
  });
}

// // HOME SAUCY CHOICES SECTIONS

let homeSauceSectionWaveTop = document.getElementById("home-sauce-section-wave-top");
let homeSauceSectionWaveBottom = document.getElementById("home-sauce-section-wave-bottom");

if (document.body.contains(homeSauceSectionWaveTop)) {
  var myWave = wavify(homeSauceSectionWaveTop, {
    height: 48,
    bones: 4,
    amplitude: 40,
    color: white,
    speed: 0.1,
  });
}

if (document.body.contains(homeSauceSectionWaveBottom)) {
  var myWave = wavify(homeSauceSectionWaveBottom, {
    height: 48,
    bones: 4,
    amplitude: 40,
    color: white,
    speed: 0.1,
  });
}

// // SIGN UP SECTION

let SignUpSectionWave = document.getElementById("sign-up-section-wave");
let SignUpSectionWaveWhite = document.getElementById("sign-up-section-wave-white");

if (document.body.contains(SignUpSectionWave)) {
  var myWave = wavify(SignUpSectionWave, {
    height: 100,
    bones: 3,
    amplitude: 80,
    color: green,
    speed: 0.07,
  });
}

if (document.body.contains(SignUpSectionWaveWhite)) {
  var myWave = wavify(SignUpSectionWaveWhite, {
    height: 100,
    bones: 3,
    amplitude: 80,
    color: white,
    speed: 0.07,
  });
}

// // Recipes
let getinspiredSauceSectionWaveTop = document.getElementById("getinspired-sauce-section-wave-top");
let getinspiredSauceSectionWaveBottom = document.getElementById("getinspired-sauce-section-wave-bottom");

if (document.body.contains(getinspiredSauceSectionWaveTop)) {
  var myWave = wavify(getinspiredSauceSectionWaveTop, {
    height: 48,
    bones: 3,
    amplitude: 40,
    color: yellow,
    speed: 0.06,
  });
}

if (document.body.contains(getinspiredSauceSectionWaveBottom)) {
  var myWave = wavify(getinspiredSauceSectionWaveBottom, {
    height: 48,
    bones: 4,
    amplitude: 40,
    color: white,
    speed: 0.07,
  });
}

// // BETTER WORLD SAUCY CHOICES SECTIONS

let betterworldSauceSectionWaveTop = document.getElementById("betterworld-sauce-section-wave-top");
let betterworldSauceSectionWaveBottom = document.getElementById("betterworld-sauce-section-wave-bottom");

if (document.body.contains(betterworldSauceSectionWaveTop)) {
  var myWave = wavify(betterworldSauceSectionWaveTop, {
    height: 48,
    bones: 4,
    amplitude: 40,
    color: lightgrey,
    speed: 0.07,
  });
}

if (document.body.contains(betterworldSauceSectionWaveBottom)) {
  var myWave = wavify(betterworldSauceSectionWaveBottom, {
    height: 48,
    bones: 4,
    amplitude: 40,
    color: white,
    speed: 0.07,
  });
}

// // PRODUCT DETAIL SLIDER

let productdetailSauceSectionWaveTop = document.getElementById("productdetail-sauce-section-wave-top");
let productdetailSauceSectionWaveBottom = document.getElementById("productdetail-sauce-section-wave-bottom");

if (document.body.contains(productdetailSauceSectionWaveTop)) {
  var myWave = wavify(productdetailSauceSectionWaveTop, {
    height: 48,
    bones: 3,
    amplitude: 40,
    color: lightblue,
    speed: 0.07,
  });
}

if (document.body.contains(productdetailSauceSectionWaveBottom)) {
  var myWave = wavify(productdetailSauceSectionWaveBottom, {
    height: 48,
    bones: 3,
    amplitude: 40,
    color: white,
    speed: 0.07,
  });
}

// // WAVES TRANSITIONS

let pageTransitionWave = document.getElementById("waves-page-transition");

if (document.body.contains(pageTransitionWave)) {
  var myWave = wavify(pageTransitionWave, {
    height: 160,
    bones: 3,
    amplitude: 40,
    color: white,
    speed: 2,
  });
}

// // WAVES TRANSITIONS

let pageTransitionWaveVision = document.getElementById("vision-section-wave-top");

if (document.body.contains(pageTransitionWaveVision)) {
  var myWave = wavify(pageTransitionWaveVision, {
    height: 40,
    bones: 3,
    amplitude: 40,
    color: white,
    speed: 0.07,
  });
}
