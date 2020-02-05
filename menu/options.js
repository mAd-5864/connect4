function setBoardLength() {
    const categoryElement = document.querySelector("#sltBoard")
    console.log(categoryElement);
    const categoryValue = categoryElement.options[categoryElement.selectedIndex].value
    console.log(categoryValue);

    JSON.stringify(localStorage.setItem("boardLength", categoryValue))
}