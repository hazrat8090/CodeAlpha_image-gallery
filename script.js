function showCategory(category) {
  document.querySelectorAll(".thumbnail-container").forEach((container) => {
    container.style.display = "none";
  });

  document.getElementById(category).style.display = "flex";
}

function changeImage(element) {
  const newSrc = element.src;
  const currentImage = document.getElementById("currentImage");
  currentImage.src = newSrc;
}
