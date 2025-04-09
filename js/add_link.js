function openEditor(element) {
    const iconEditor = document.getElementById('icon-editor');
    const linkInput = document.getElementById('link-input');
    const saveButton = document.getElementById('save-link');
    const deleteButton = document.getElementById('delete-icon');
    
    if (element.href === "#" || element.href === "" || element.href.endsWith("#")) {
        linkInput.value = "";
    } else {
        linkInput.value = element.href;
    }
    
    iconEditor.classList.remove('hidden');

    saveButton.onclick = () => {
        const linkValue = linkInput.value.trim();
        if (linkValue && isValidUrl(linkValue)) {
            const iconType = element.dataset.icon;
            updateLinks(iconType, linkValue);
            iconEditor.classList.add('hidden');
        } else {
            alert("Please enter a valid URL.");
        }
    };

    deleteButton.onclick = () => {
        element.remove();
        iconEditor.classList.add('hidden');
        const iconType = element.dataset.icon;
        const bottomIcon = document.querySelector(`#bottom-social .social-icon[data-icon="${iconType}"]`);
        if (bottomIcon) bottomIcon.remove();
    };
}

function updateLinks(iconType, newLink) {
    const topIcon = document.querySelector(`#top-social .social-icon[data-icon="${iconType}"]`);
    if (topIcon) topIcon.href = newLink;

    const bottomIcon = document.querySelector(`#bottom-social .social-icon[data-icon="${iconType}"]`);
    if (bottomIcon) bottomIcon.href = newLink;
}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        openEditor(icon);
    });
});
