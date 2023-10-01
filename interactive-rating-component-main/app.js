const ratingContainer = document.querySelector(".container.rating");
const thankYouContainer = document.querySelector(".container.thank-you");
const numberButtons = document.querySelectorAll(".btn-number");
const form = document.querySelector("form");
const selectedNum = document.querySelector("#selected-number");
let rate = 0;

thankYouContainer.style.display = "none";

//design of selected state. Not works on mobile.
const resetAllNumberBtns = () => {
    for (const btn of numberButtons) {
        btn.classList.remove("selected")
        btn.classList.add("default");
    }
};

const onClickingNumberBtn = function () {
    resetAllNumberBtns();
    this.classList.add("selected");
    this.classList.remove("hover");
    rate = this.defaultValue;
};

const onMouseOver = function () {
    if (this.classList.contains("selected")) return;

    this.classList.add("hover");
}

const onMouseOut = function () {
    this.classList.remove("hover");
}

for (const btn of numberButtons) {
    btn.classList.add("default");
    btn.addEventListener("click", onClickingNumberBtn);
    btn.addEventListener("mouseover", onMouseOver);
    btn.addEventListener("mouseout", onMouseOut);
}

const onClickingSubmitBtn = function () {
    if (rate === 0) {
        return;
    }

    ratingContainer.style.display = "none";
    thankYouContainer.style.display = "inline";
    selectedNum.innerText = `You selected ${rate} out of 5`;
}

form.addEventListener("submit", e => {
    e.preventDefault();
    onClickingSubmitBtn();
});



