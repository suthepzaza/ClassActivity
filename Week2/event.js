const form = document.querySelector("#eventht");
const input = document.querySelector("#task");
const list = document.querySelector("#list");
const count = document.querySelector("#task-count");
const clearCompleted = document.querySelector("#clear-completed");

const updateCount = () => {
  const remaining = list.querySelectorAll(".task:not(.done)").length;
  //count.textContent = ${remaining} task${remaining === 1 ? "" : "s"} left;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const item = document.createElement("li");
  item.className = "task";
  item.innerHTML = 
    //<input class="complete" type="checkbox">
    //<span class="task-text"></span>
    <button class="delete" type="button">×</button>;
  item.querySelector(".task-text").textContent = text;
  //item.querySelector(".complete").setAttribute("aria-label", Mark ${text} complete);
  //item.querySelector(".delete").setAttribute("aria-label", Delete ${text});
  list.append(item);

  input.value = "";
  input.focus();
  updateCount();
});

//One listener handles clicks for every current and future task.
list.addEventListener("click", (event) => {
  const task = event.target.closest(".task");
  if (!task) return;

  if (event.target.matches(".delete")) {
    task.remove();
  } else {
    const checkbox = task.querySelector(".complete");
    if (!event.target.matches(".complete")) checkbox.checked = !checkbox.checked;
    task.classList.toggle("done", checkbox.checked);
  }
  updateCount();
});

clearCompleted.addEventListener("click", () => {
  list.querySelectorAll(".task.done").forEach((task) => task.remove());
  updateCount();
});