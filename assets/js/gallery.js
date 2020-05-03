const pswpElement = document.querySelectorAll(".pswp")[0];

const options = {
  index: 0,
};

const categories = {
  chairs: {
    quantity: 4,
    titles: ["Silla 1", "Silla 2", "Silla 3", "Silla 4"],
  },
};

const getImages = (categoryName) => {
  const category = categories[categoryName];
  return category.titles.map((title, idx) => {
    return {
      src: `./images/${categoryName}/${idx + 1}.png`,
      w: 800,
      h: 500,
      title,
    };
  });
};

const showImagesGalleryHandler = (ev) => {
  const categoryName = ev.target.getAttribute("data-category");
  openGallery(categoryName);
};

const openGallery = (categoryName) => {
  const gallery = new PhotoSwipe(
    pswpElement,
    PhotoSwipeUI_Default,
    getImages(categoryName),
    options
  );
  gallery.init();
};

const buttonSelector = document.querySelector(".btn-show-pictures");
buttonSelector.addEventListener("click", showImagesGalleryHandler);
