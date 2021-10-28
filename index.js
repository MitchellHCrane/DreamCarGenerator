const carImages = [
  "https://carsalesbase.com/wp-content/uploads/2020/07/US-sports-car-sales-Chevrolet_Corvette.jpg",

  "https://www.goodcarbadcar.net/wp-content/uploads/2019/07/2019-audi-r8-onlocation.jpg",

  "https://www.electrive.com/wp-content/uploads/2018/01/porsche-918-spyder-symbolic-picture.png",

  "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/mx-5-2018-836_1.jpg?itok=gJNLp5qF",

  "https://cdn.carbuzz.com/gallery-images/1600/539000/800/539843.jpg",

  "https://cdn.carbuzz.com/gallery-images/840x560/652000/700/652718.jpg",

  "https://www.cnet.com/a/img/iJhmFqL6NXpQjYbSTSCNJlboyso=/1200x675/2020/04/28/865f7257-6d47-4692-9478-aca801b2aff1/s209-promo.jpg",

  "https://i1.wp.com/d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/motor/2017/07/10/107152/2017-Ford-GT-white-main.jpg",

  "https://www.carscoops.com/wp-content/uploads/2016/06/2017-nissan-gt-r-0.jpg",

  "https://www.supercars.net/blog/wp-content/uploads/2020/07/2019-Bugatti-Chiron-Sport-110-ans-Bugatti-003-1080.jpg",

  "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/720s_0_0.jpg?itok=k1cnEmuJ",

  "https://images6.alphacoders.com/845/thumb-1920-845041.jpg",
];

const quotes = [
  "Nice ride!",
  "I like the color!",
  "That is one quick car!",
  "Take it for a spin!",
  "Dream big!",
  "0-60 in how many seconds?",
  "Nice Whip!",
  "Take it to the track",
];

const image = document.querySelector("img");
const imgButton = document.getElementById("genBtn");
const div = document.getElementById("resetBtn");
const resetBtn = document.createElement("button");
const createH3 = document.createElement("h3");
const h3Div = document.querySelector("#createH3");
console.log(h3Div);

function generateDreamVehicle(array) {
  let randomImg = Math.floor(Math.random() * array.length);
  let ranQuote = Math.floor(Math.random() * quotes.length);
  
  h3Div.innerHTML = quotes[ranQuote];
  image.setAttribute("src", array[randomImg]);

  resetBtn.innerHTML = "Reset";
  div.appendChild(resetBtn);

  resetBtn.onclick = function cont() {
    document.getElementById("resetBtn").style.display = "inline";
    resetBtn.parentNode.removeChild(resetBtn);
    h3Div.innerHTML = "";
    image.setAttribute("src", "");
    clearReset();
  };
}

function clearReset() {
  resetBtn.innerHTML = "";
}

imgButton.addEventListener("click", () => generateDreamVehicle(carImages));
