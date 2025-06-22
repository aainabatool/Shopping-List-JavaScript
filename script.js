const list = document.querySelector("ol");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const inputValue = input.value;
  input.value = ""; // Clear input
  input.focus();    // Focus again

  const listItem = document.createElement("li");
  const itemSpan = document.createElement("span");
  const deleteBtn = document.createElement("button");

  itemSpan.textContent = inputValue;
  deleteBtn.textContent = "Delete";

  listItem.appendChild(itemSpan);
  listItem.appendChild(deleteBtn);
  list.appendChild(listItem);

  deleteBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });
});
