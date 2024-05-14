const addButton = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");

addButton.addEventListener("click", () => {
    
    const value = input.value;

    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    span.textContent = value;
    deleteButton.textContent = "Delete";
    
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);

    input.value = "";

    input.focus();
});

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter")
    {
        e.preventDefault();
        const value = input.value;

        const listItem = document.createElement("li");
        const span = document.createElement("span");
        const deleteButton = document.createElement("button");

        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
        });

        span.textContent = value;
        deleteButton.textContent = "Delete";
    
        listItem.appendChild(span);
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);

        input.value = "";

        input.focus();
    }
});
