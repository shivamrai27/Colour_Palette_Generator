const generateBtnEl = document.getElementById('generateBtn');

const singleHexColorGenerator = () => {
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {

        let random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random];
    }
    return hexColor;
}

const colorPalettes = () => {
    let hexPalettes = [];
    for (let i = 0; i < 4; i++) {
        hexPalettes.push(singleHexColorGenerator());
    }
    return hexPalettes;
}
const renderColorPalette = () => {

    const colors_containerEl = document.querySelector(".colors_container")
    colors_containerEl.innerHTML = "";

    const colorPalette = colorPalettes();
    colorPalette.forEach((color, i) => {

        const colorDiv = document.createElement("div");
        colorDiv.id = `color1${i + 1}`;
        colorDiv.style.background = color
        colorDiv.className = 'colorBox'

        const colorTag = document.createElement("p");
        colorTag.id = `color1${i + 1}Tag`
        colorTag.className = "colorTag";
        colorTag.innerHTML = color;
        colorDiv.appendChild(colorTag);

        colors_containerEl.appendChild(colorDiv);

    })
}
renderColorPalette();
generateBtnEl.addEventListener('click', renderColorPalette);