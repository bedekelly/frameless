const body = document.querySelector("body");
const dropZone = document.querySelector(".dropzone");
const image = document.querySelector("#image");
const range = document.querySelector("#range");
const zoom = document.querySelector("#zoom");

dropZone.addEventListener("dragenter", () => {
  dropZone.classList.add("hovered");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("hovered");
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
});

body.addEventListener("dragover", (event) => {
  event.preventDefault();
});

const onDrop = (event) => {
  console.log(event);
  console.log("Files dropped");
  dropZone.classList.remove("hovered");

  const item = event.dataTransfer.items[0];
  if (item.kind !== "file") {
    console.warn("Dragged non-file item into the window: ", item.getAsString());
    return;
  }

  image.style.display = "initial";
  dropZone.style.display = "none";
  zoom.style.display = "flex";

  const file = item.getAsFile();
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    image.src = reader.result;
  });

  reader.readAsDataURL(file);
  event.preventDefault();
};

function fitZoom() {
  range.value = "50";
  image.style.transform = "none";
}

dropZone.addEventListener("drop", onDrop);
image.addEventListener("drop", onDrop);
body.addEventListener("drop", onDrop);

body.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    image.style.display = "none";
    zoom.style.display = "none";
    dropZone.style.display = "flex";
  }
});

range.addEventListener("input", (event) => {
  const scale = event.target.value * 2;
  image.style.transform = `scale(${scale}%)`;
});
