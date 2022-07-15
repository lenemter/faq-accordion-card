function close_all(exception) {
    const active_accordion_items = document.querySelectorAll(".accordion > .item.active");
    for (const item of active_accordion_items) {
        if (item != exception) {
            item.classList.remove("active");
            const content = item.querySelector(".content");
            content.style.maxHeight = null;
        }
    }
}

const accordion_items = document.querySelectorAll(".accordion > .item");
for (const item of accordion_items) {
    const label = item.querySelector(".label");
    const content = item.querySelector(".content");
    label.onclick = () => {
        close_all(exception = item);
        item.classList.toggle("active")

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";

        }
    }
}