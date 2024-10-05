// Dynamically load images from the "images" folder
document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("image-container");

    // Load 10 images (house1.jpg to house10.jpg)
    for (let i = 1; i <= 21; i++) {
        const img = document.createElement("img");
        img.src = `images/house${i}.jpg`;
        img.alt = `House Image ${i}`;
        imageContainer.appendChild(img);

        // Add click event to open modal with the image
        img.onclick = function() {
            openModal(this.src);
        };
    }

    // Add click event to location image
    const locationImage = document.getElementById("location-image");
    locationImage.onclick = function() {
        window.open("https://maps.app.goo.gl/h8EDzw74QLMTZEfV6", "_blank");
    };
});

// Open modal function
function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = src;
}

// Close modal on clicking "X" or outside the image
document.getElementById("closeModal").onclick = function() {
    document.getElementById("modal").style.display = "none";
};

document.getElementById("modal").onclick = function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
};

console.log("Gallery and location redirection loaded!");
