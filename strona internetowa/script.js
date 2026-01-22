let draggedItem = null;

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("dragstart", () => {
        draggedItem = item;
    });

    item.addEventListener("dragend", () => {
        draggedItem = null;
    });
});

document.querySelectorAll(".tier-content").forEach(tier => {
    tier.addEventListener("dragover", e => {
        e.preventDefault();
    });

    tier.addEventListener("drop", () => {
        if (draggedItem) {
            tier.appendChild(draggedItem);
        }
    });
});
