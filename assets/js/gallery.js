var pswpElement = document.querySelectorAll(".pswp")[0];

// build items array
var items = [
  {
    name: "chairs",
    images: [
      {
        src: "./images/mision.jpeg",
        w: 600,
		h: 400,
		title: "Silla de ruedas modelo 324345. Podés comprarla en el siguiente link: sarasda"
      },
      {
        src: "https://placekitten.com/600/400",
        w: 600,
        h: 400,
      },
    ],
  },
  {
    name: "medical",
    images: [
      {
        src: "https://placekitten.com/1200/900",
        w: 1200,
        h: 900,
      },
    ],
  },
];

// define options (if needed)
var options = {
  // optionName: 'option value'
  // for example:
  index: 0, // start at first slide
};

// Initializes and opens PhotoSwipe

$(".features > li").on("click", function () {
  const key = $(this).attr("data-name");
  const category = items.find((x) => x.name === key);
  const gallery = new PhotoSwipe(
    pswpElement,
    PhotoSwipeUI_Default,
    category.images,
    options
  );
  gallery.init();
});
