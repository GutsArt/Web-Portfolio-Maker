function triggerFileInput(imageType) {
    document.getElementById(`image-upload-${imageType}`).click();
}

function loadImage(event, imageType) {
    const file = event.target.files[0];
    const imgElement = document.getElementById(`${imageType}-img`);

    if (file) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imgElement.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid image file.");
        }
    }
}
