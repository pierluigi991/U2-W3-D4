const key = "tJHigIi0HOP6Sh8CKsFx1vy2DV8jU8evXCxsQWHcOX7yRL5YC3WahPEO";
const url = "https://api.pexels.com/v1/search?query=mare";

const load = document.getElementById("btn-load");
const svgElement = document.getElementById("svg");

load.addEventListener("click", (event) => {
  event.preventDefault();
  fetchImages();
});

async function fetchImages() {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: key,
      },
    });

    if (response.ok) {
      const data = await response.json();
      displayImages(data.photos);
    } else {
      console.error("Error", response.statusText);
    }
  } catch (error) {
    console.error("Errore fetch:", error);
  }
}

// function displayImages(photos) {
//   if (svgElement) {
//     svgElement.remove();
//   }

//   photos.forEach((photo) => {
//     const img = document.createElement("img");
//     img.innerHTML = `
//       <img src="${photo.src.mare}" class="img-fluid">
//     `;

//     if (svgElement.parentElement) {
//       svgElement.parentElement.appendChild(img);
//     } else {
//       document.body.appendChild(img);
//     }
//   });
// }
