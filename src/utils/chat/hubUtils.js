import axios from "axios";
import { updateScrollbar, intersected, intersectedCleared } from "./settings";

const urlBase = process.env.NEXT_PUBLIC_BACKEND_URL + "/api";
const apiCaller = axios.create({
  baseURL: urlBase,
  headers: {
    "Content-Type": "application/json",
  },
});

//twitter
var twitterArray;
const TWITTER_TO_DISPLAY = 4;
var twitterStartIndex = 0;
var twitterItemElArray = [];
function buildTwitter() {
  var twitterContainerEl = document.getElementById("twitter");
  if (!!twitterContainerEl) {
    for (let twitter_item of twitterArray) {
      var twitterItemEl = document.createElement("a-plane");
      twitterContainerEl.appendChild(twitterItemEl);
      twitterItemEl.setAttribute("raycaster-listen");
      twitterItemEl.classList.add("clickable");
      twitterItemEl.classList.add("nocollision");
      twitterItemEl.classList.add("twitter_item");
      twitterItemEl.setAttribute("width", 2.8);
      twitterItemEl.setAttribute("height", 0.7);
      twitterItemEl.setAttribute("color", "#AA44BB");
      twitterItemEl.setAttribute("material", "shader: flat; repeat: 1 1");
      twitterItemEl.setAttribute("src", "#tweet-img");

      var twitterItemDateEl = document.createElement("a-text");
      twitterItemEl.appendChild(twitterItemDateEl);
      twitterItemDateEl.setAttribute("value", twitter_item.created_at);
      twitterItemDateEl.setAttribute("wrap-count", 80);
      twitterItemDateEl.setAttribute("baseline", "top");
      twitterItemDateEl.setAttribute("x-offset", -0.15);
      twitterItemDateEl.setAttribute("width", 2.7);
      twitterItemDateEl.setAttribute("align", "right");
      twitterItemDateEl.setAttribute("position", { x: 1.4, y: -0.27, z: 0.01 });
      twitterItemDateEl.setAttribute("color", "#AAEEFF");

      var twitterItemTextEl = document.createElement("a-text");
      twitterItemEl.appendChild(twitterItemTextEl);
      twitterItemTextEl.setAttribute("value", twitter_item.full_text);
      twitterItemTextEl.setAttribute("wrap-count", 60);
      twitterItemTextEl.setAttribute("baseline", "top");
      twitterItemTextEl.setAttribute("x-offset", 0.05);
      twitterItemTextEl.setAttribute("width", 2.7);
      twitterItemTextEl.setAttribute("position", { x: -1.4, y: 0.3, z: 0.01 });
    }
    twitterItemElArray = document.getElementsByClassName("twitter_item");
    buildTwitterListeners();
    updateScrollbar(
      0,
      TWITTER_TO_DISPLAY,
      twitterItemElArray,
      { x: 0, y: 1.1 },
      { x: 0, y: -0.8 }
    );
  }
}
function scrollTwitterUp() {
  if (twitterStartIndex > 0) {
    updateScrollbar(
      (twitterStartIndex -= 1),
      TWITTER_TO_DISPLAY,
      twitterItemElArray,
      { x: 0, y: 1.1 },
      { x: 0, y: -0.8 }
    );
  } else {
    updateScrollbar(
      (twitterStartIndex = Math.max(
        twitterItemElArray.length - TWITTER_TO_DISPLAY,
        0
      )),
      TWITTER_TO_DISPLAY,
      twitterItemElArray,
      { x: 0, y: 1.1 },
      { x: 0, y: -0.8 }
    );
  }
}
function scrollTwitterDown() {
  if (
    twitterStartIndex + TWITTER_TO_DISPLAY - 1 <
    twitterItemElArray.length - 1
  ) {
    updateScrollbar(
      (twitterStartIndex += 1),
      TWITTER_TO_DISPLAY,
      twitterItemElArray,
      { x: 0, y: 1.1 },
      { x: 0, y: -0.8 }
    );
  } else {
    updateScrollbar(
      (twitterStartIndex = 0),
      TWITTER_TO_DISPLAY,
      twitterItemElArray,
      { x: 0, y: 1.1 },
      { x: 0, y: -0.8 }
    );
  }
}

function buildTwitterListeners() {
  let scrollTwitterUpEl = document.getElementById("scrollTwitterUp")
  if (!!scrollTwitterUpEl) {
    scrollTwitterUpEl.addEventListener("click", scrollTwitterUp);
    scrollTwitterUpEl.addEventListener("raycaster-intersected", intersected, false);
    scrollTwitterUpEl.addEventListener(
      "raycaster-intersected-cleared",
      intersectedCleared,
      false
    );
  }
  let scrollTwitterDownEl = document.getElementById("scrollTwitterDown")
  if (!!scrollTwitterDownEl) {
    scrollTwitterDownEl.addEventListener("click", scrollTwitterDown);
    scrollTwitterDownEl.addEventListener("raycaster-intersected", intersected, false);
    scrollTwitterDownEl.addEventListener(
      "raycaster-intersected-cleared",
      intersectedCleared,
      false
    );
  }

}

//nft
var nft;
function buildNft() {
  var nftContainerEl = document.getElementById("nft");
  if (!!nftContainerEl) {
    var nftItemAmountEl = document.createElement("a-text");
    nftContainerEl.appendChild(nftItemAmountEl);
    nftItemAmountEl.setAttribute("value", nft.floorPrice);
    nftItemAmountEl.setAttribute("wrap-count", 15);
    nftItemAmountEl.setAttribute("baseline", "top");
    nftItemAmountEl.setAttribute("x-offset", 0.05);
    nftItemAmountEl.setAttribute("width", 3);
    nftItemAmountEl.setAttribute("align", "center");
    nftItemAmountEl.setAttribute("position", { x: 0, y: -1.45, z: 0.01 });
    nftItemAmountEl.setAttribute("color", "#AAEEFF");

    var nftItemImageEl = document.createElement("a-image");
    nftContainerEl.appendChild(nftItemImageEl);
    nftItemImageEl.setAttribute("src", nft.image);
    nftItemImageEl.setAttribute("width", 3);
    nftItemImageEl.setAttribute("height", 3);
    nftItemImageEl.setAttribute("position", { x: 0, y: 0.25, z: 0.01 });
    buildNftListeners();
  }
}

function buildNftListeners() { }

var gifImgIndex = 0;
var gifImgArray = ["#gif-img1", "#gif-img2", "#gif-img3", "#gif-img4"];
function startGif() {
  let bigScreenImgEl = document.getElementById("bigScreenImg")
  if (!!bigScreenImgEl) {
    bigScreenImgEl.setAttribute("src", gifImgArray[gifImgIndex]);
    if (gifImgIndex < gifImgArray.length - 1) gifImgIndex++;
    else gifImgIndex = 0;
  }
}

export async function startHub() {
  let sceneEl = document.querySelector('a-scene');
  if (!!sceneEl) {
    //get and start tweets
    apiCaller
      .get("/test/tweets/Solarity_XR")
      .then((data) => {
        twitterArray = data.data.data;
        //build twitter only after get success
        buildTwitter();
      })
      .catch((err) => {
        twitterArray = [
          { created_at: "no data", full_text: "no data" },
          { created_at: "no data", full_text: "no data" },
          { created_at: "no data", full_text: "no data" },
          { created_at: "no data", full_text: "no data" },
          { created_at: "no data", full_text: "no data" },
          { created_at: "no data", full_text: "no data" },
        ];
      });

    //get and start nft
    const data = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd")
    var data_json = await data.json();
    if(!!data_json) {
      nft = {
        floorPrice: data_json.solana.usd,
        image: "/images/experience/hub/solarity_logo.png",
      };
    } else {
      nft = {
        floorPrice: 'no Data',
        image: "/images/experience/hub/solarity_logo.png",
      };
    }
    // nft = data.data.dao;
    //build nft only after get success
    buildNft();

    const gifInterval = setInterval(function () {
      startGif();
      let sceneEl = document.querySelector('a-scene');
      if (!sceneEl)
        clearInterval(gifInterval);
    }, 500);
  }
}
