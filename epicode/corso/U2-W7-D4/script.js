function funcLoadImages(searchKeyword) {
  fetch(`https://api.pexels.com/v1/search?query=${searchKeyword}`, {
    method: "GET",
    headers: {
      Authorization: "zilYFy4tUGgCZj1EAKQ7i6rKXiMIshbnJmVeKQB1hGU7oQGIYokoAxzx"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      const photos = data.photos;
      console.log(" -----------------------------");
      console.log("arrayOfPhotos:", photos);
      console.log(" -----------------------------");

      const row = document.getElementById("row");
      row.innerHTML = "";

      photos.forEach((photo) => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        row.appendChild(col);

        const card = document.createElement("div");
        card.className = "card m-1 shadow-sm";
        col.appendChild(card);

        const imgContainer = document.createElement("div");
        imgContainer.style.position = "relative";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.alt = photo.alt;
        img.style.objectFit = "cover";
        img.style.width = "100%";
        img.style.height = "300px";
        img.src = photo.src.original;
        img.onload = () => hideSpinner(spinner);

        const spinner = document.createElement("div");
        spinner.className = "spinner-border";
        spinner.style.width = "3rem";
        spinner.style.height = "3rem";
        spinner.style.position = "absolute";
        spinner.style.top = "calc(50% - 1.25rem)";
        spinner.style.left = "calc(50% - 1.25rem)";

        imgContainer.appendChild(img);
        imgContainer.appendChild(spinner);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        if (photo.alt) {
          const title = document.createElement("h6");
          title.className = "card-title p-0 my-1";
          title.textContent = photo.alt;
          title.style.whiteSpace = "nowrap";
          title.style.overflow = "hidden";
          title.style.textOverflow = "ellipsis";
          cardBody.appendChild(title);
        }

        if (photo.photographer) {
          const photographer = document.createElement("p");
          photographer.className = "img-photographer p-0 my-1";
          photographer.textContent = `📷 ${photo.photographer}`;
          photographer.style.fontSize = "0.75rem";
          cardBody.appendChild(photographer);
        }

        const cardFooter = document.createElement("div");
        cardFooter.className = "d-flex align-items-end justify-content-between";
        cardBody.appendChild(cardFooter);

        const button = document.createElement("button");
        button.className = "btn btn-secondary hide-button myt-1";
        button.innerText = "Hide";
        button.addEventListener("click", () => hideCard(col));
        cardFooter.appendChild(button);

        if (photo.id) {
          const photoId = document.createElement("div");
          photoId.className = "text-muted";
          photoId.textContent = photo.id;
          photoId.style.fontSize = "0.75rem";
          cardFooter.appendChild(photoId);
        }

        card.appendChild(imgContainer);
        card.appendChild(cardBody);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const searchInput = document.getElementById("search-input");
  const searchKeyword = searchInput.value;

  funcLoadImages(searchKeyword);
});

const loadImages = document.getElementById("load-images");
loadImages.addEventListener("click", () => {
  funcLoadImages("dog");
});

const loadSecondaryImages = document.getElementById("load-secondary-images");
loadSecondaryImages.addEventListener("click", () => {
  funcLoadImages("cat");
});

function hideSpinner(spinner) {
  spinner.style.display = "none";
}
