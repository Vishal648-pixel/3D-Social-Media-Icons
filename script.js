const icons = document.querySelectorAll("ul li a");
const tooltips = ["YouTube", "WhatsApp", "Instagram", "Facebook"];

icons.forEach((icon, index) => {
  icon.addEventListener("mouseenter", () => {
    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    tooltip.innerText = tooltips[index];
    icon.appendChild(tooltip);
  });

  icon.addEventListener("mouseleave", () => {
    const tooltip = icon.querySelector(".tooltip");
    if (tooltip) tooltip.remove();
  });

  icon.addEventListener("click", (e) => {
    e.preventDefault();
    icon.classList.add("clicked");
    setTimeout(() => icon.classList.remove("clicked"), 400);
  });
});
