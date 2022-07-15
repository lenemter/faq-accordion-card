const accordion_items = document.querySelectorAll(".accordion > .item");

for (const item of accordion_items) {
    item.onclick = () => {
        const label = item.querySelector(".label");
        const content = item.querySelector(".content");

        item.classList.toggle("active");

        if (content.style.maxHeight) {
            content.style.maxHeight = 0;
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";

        }
    }
}