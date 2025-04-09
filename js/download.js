function download() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(el => {
        el.removeAttribute('contenteditable');
    });

    const header = document.querySelector('header').cloneNode(true);
    const homeSection = document.getElementById('home').cloneNode(true);
    const educationSection = document.getElementById('education').cloneNode(true);
    const portfolioSection = document.getElementById('portfolio').cloneNode(true);
    const skillsSection = document.getElementById('skills').cloneNode(true);
    const contactSection = document.getElementById('contact').cloneNode(true);
    const footerSection = document.querySelector('footer').cloneNode(true);

    const iconEditor = homeSection.querySelector('#icon-editor');
    if (iconEditor) {
        iconEditor.remove();
    }

    const imageUploadInput = homeSection.querySelector('#image-upload');
    if (imageUploadInput) {
        imageUploadInput.remove();
    }

    const changeImageIcon = homeSection.querySelector('#change-image-icon');
    if (changeImageIcon) {
        changeImageIcon.removeAttribute('onclick');
    }

    const inputElements = skillsSection.querySelectorAll('input');
    inputElements.forEach(input => {
        input.remove();
    });

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website</title>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="styles/style.css"/>
    </head>
    <body>
    ${header.outerHTML}${homeSection.outerHTML}${educationSection.outerHTML}${portfolioSection.outerHTML}${skillsSection.outerHTML}${contactSection.outerHTML}${footerSection.outerHTML}
    </body>
    </html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'home_section.html';
    link.click();

    URL.revokeObjectURL(link.href);
}
