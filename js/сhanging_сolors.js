const originalMainColor0 = getComputedStyle(document.documentElement).getPropertyValue('--main-color0').trim();

let themeIndex = 0; // Initialization index

document.querySelector('.logo').addEventListener('click', function (event) {
    event.preventDefault(); // Disable default link behavior

    themeIndex = (themeIndex + 1) % 6; // Цикл: 0 → 1 → 2 → 3 → 4 → 5 → 0

    const root = document.documentElement;

    if (themeIndex === 0) {
        root.style.setProperty('--main-color0', originalMainColor0);
        console.log(`--main-color0 восстановлено: ${originalMainColor0}`);
        return;
    }

    // New --main-color0
    const newMainColor = getComputedStyle(root).getPropertyValue(`--main-color${themeIndex}`).trim();
    root.style.setProperty('--main-color0', newMainColor);

    console.log(`--main-color0 (now): ${newMainColor}`);
});

