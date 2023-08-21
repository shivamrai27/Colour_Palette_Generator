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
const renderColorPalette = () => {
    const hex = singleHexColorGenerator();
    console.log(hex);
}

generateBtnEl.addEventListener('click', renderColorPalette);