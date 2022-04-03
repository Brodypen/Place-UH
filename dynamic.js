// function onTileHovered(x, y, item) {
//   const pos = document.getElementById("pos");
//   pos.innerText = "(" + (x + 0) + "," + (y + 0) + ")";
//   pos.style.left = x * 64 + "px";
//   pos.style.top = y * 256 + "px";
//   //const a = document.getElementsByTagName("a");
//   //new.reddit.com/r/place/?cx=1001&amp%3Bcy=0&amp%3Bpx=20&cy=170&px=6
//   item.href =
//     "https://new.reddit.com/r/place/?cx=" +
//     (x + 0) +
//     "&amp;cy=" +
//     (y + 0) +
//     "&amp;px=7";

//   //alert(item.href);
// }
let htmlElements = document.getElementsByTagName("a");

// Use a regular for-loop
//alert(htmlElements.length);
//alert(htmlElements[0].onmouseover);
for (let i = 0; i < 22; i++) {
  // Print the current element
  for (let j = 0; j < 20; j++) {
    console.log(htmlElements[0].onmouseover);
    htmlElements[i * 20 + j].onmouseover = //onTileHovered(j, i, this);
      function () {
        const pos = document.getElementById("pos");
        pos.innerText = "(" + (j + 392) + "," + (i + 298) + ")";
        pos.style.left = j * 16 + 16 + "px";
        pos.style.top = i * 16 - 6 + "px";
        htmlElements[i * 20 + j].target = "_blank";
        //const a = document.getElementsByTagName("a");
        //new.reddit.com/r/place/?cx=1001&amp%3Bcy=0&amp%3Bpx=20&cy=170&px=6
        htmlElements[i * 20 + j].href =
          "https://new.reddit.com/r/place/?cx=" +
          (j + 392) +
          "&amp%3Bcy=" +
          (i + 298) +
          "&amp%3Bpx=7&cy=" +
          (i + 298) +
          "&px=4";
        //   "https://new.reddit.com/r/place/?cx=" +
        //   (j + 392) +
        //   "&amp;cy=" +
        //   (i + 298) +
        //   "&amp;px=7";
        //https://new.reddit.com/r/place/?cx=1312&amp%3Bcy=298&amp%3Bpx=7&cy=698&px=331
        //https://new.reddit.com/r/place/?cx=392&amp%3Bcy=298&amp%3Bpx=7&cy=298&px=29
      };
  }
}
