const key = "tJHigIi0HOP6Sh8CKsFx1vy2DV8jU8evXCxsQWHcOX7yRL5YC3WahPEO";
let sea = "mare";
const url = "https://api.pexels.com/v1/search?query=" + sea;
const options = {
  method: "GET",
  headers: {
    Authorization: key,
  },
};

const load = document.getElementById("btn-load");
const scdBtn = document.getElementById("btn-sec-img");

const placeholders = document.getElementsByClassName("bd-placeholder-img");
const cards = document.getElementsByClassName("card");

let images = [];

const getPhotos = async () => {
  try {
    const response = await fetch(url + `search?query=[${query}]`, options);
    const data = await response.json();
    console.log(data);
    images = data.photos;
    setPhotos();
  } catch (error) {
    console.log(error);
  }
};

const setPhotos = () => {
  images.forEach((element, i) => {
    console.log(i);

    placeholders[i].outerHTML = `<img src="${images[i].src.large}" alt="picture of ${query}">`;
  });
};

mainButton.addEventListener("click", () => {
  getPictures();
});
