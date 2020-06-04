const pswpElement = document.querySelectorAll(".pswp")[0];

const options = {
  index: 0,
};

const getImages = () => {
  const images = [];
  for (let i = 1; i <= 8; i++) {
    images.push({
      src: `./images/products/${i}.png`,
      w: 500,
      h: 500,
      title: '',
    })
  }
  return images;
};

const openGallery = () => {
  const gallery = new PhotoSwipe(
    pswpElement,
    PhotoSwipeUI_Default,
    getImages(),
    options
  );
  gallery.init();
};

const buttonSelector = document.querySelector("#galleryButton");
buttonSelector.addEventListener("click", openGallery);
