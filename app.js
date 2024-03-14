const container = document.querySelector(".main-container");
const errorContainer = document.querySelector(".error");
const blur = document.querySelector(".blur");
const errorText = document.querySelector(".error-txt");

function addAstronauts(amount, name) {
  for (let i = 0; i < amount; i++) {
    const delay = Math.random() * 2;
    const astronaut = document.createElement("div");
    astronaut.classList.add("astronaut");
    astronaut.style.animationDelay = `${delay}s`;

    astronaut.innerHTML = `
        <img src="IMG/astronaut.png" class="astronaut-img" alt="">
        <div class="name-container">
          <p class="name-txt">
          ${name[i]}
          </p>
        </div>
      `;

    container.appendChild(astronaut);
  }
}
async function fetchData() {
  try {
    const response = await fetch("https://api.open-notify.org/astros.json/");
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    console.log(response.ok);
    const data = await response.json();
    const people = data.people;
    addAstronauts(
      people.length,
      people.map((astronaut) => astronaut.name)
    );
  } catch (error) {
    errorContainer.classList.remove("hide");
    blur.classList.remove("hide");
    errorText.textContent = error.message;
  }
}

fetchData();

// console console 2
