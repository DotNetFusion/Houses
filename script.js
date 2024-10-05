document.addEventListener("DOMContentLoaded", function() {
    // Image gallery
    const imageContainer = document.getElementById("image-container");

    if (imageContainer) {
        // Load 21 images (house1.jpg to house21.jpg)
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
    } else {
        console.error("Image container not found.");
    }

    // Location image
    const locationImage = document.getElementById("location-image");
    if (locationImage) {
        locationImage.onclick = function() {
            window.open("https://maps.app.goo.gl/h8EDzw74QLMTZEfV6", "_blank");
        };
    } else {
        console.error("Location image not found.");
    }

    // Modal close event
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("closeModal");
    
    if (modal && closeModalButton) {
        // Close modal on "X"
        closeModalButton.onclick = function() {
            modal.style.display = "none";
        };

        // Close modal when clicking outside of the image
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    } else {
        console.error("Modal or close button not found.");
    }
});

// Open modal function
function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    
    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = src;
    } else {
        console.error("Modal or modal image not found.");
    }
}
