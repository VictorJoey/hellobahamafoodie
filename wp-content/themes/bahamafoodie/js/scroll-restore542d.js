let filtersContainer = document.querySelector("#filters-container");
let filtersPositions = filtersContainer.getBoundingClientRect();

window.onbeforeunload = function () {
    // window.scrollTo `${(filtersPositions.left, filtersPositions.top)}`;
    window.scrollTo(0, 0);
}
