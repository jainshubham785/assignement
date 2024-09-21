const presidents = [
  {
    name: "Joe Biden",
    image: "./asset/donald.jpeg",
    term: "2021-Present",
    details: "46th President of the United States.",
  },
  {
    name: "Donald Trump",
    image: "./asset/donald.jpeg",
    term: "2017-2021",
    details: "45th President of the United States.",
  },
  {
    name: "Barack Obama",
    image: "./asset/donald.jpeg",
    term: "2009-2017",
    details: "44th President of the United States.",
  },
  {
    name: "George W. Bush",
    image: "./asset/donald.jpeg",
    term: "2001-2009",
    details: "43rd President of the United States.",
  },
  {
    name: "Bill Clinton",
    image: "./asset/donald.jpeg",
    term: "1993-2001",
    details: "42nd President of the United States.",
  },
  {
    name: "George Bush",
    image: "./asset/donald.jpeg",
    term: "1989-1993",
    details: "41st President of the United States.",
  },
  {
    name: "Ronald Reagan",
    image: "./asset/donald.jpeg",
    term: "1981-1989",
    details: "40th President of the United States.",
  },
  {
    name: "Jimmy Carter",
    image: "./asset/donald.jpeg",
    term: "1977-1981",
    details: "39th President of the United States.",
  },
  {
    name: "Gerald Ford",
    image: "./asset/donald.jpeg",
    term: "1974-1977",
    details: "38th President of the United States.",
  },
  {
    name: "Richard Nixon",
    image: "./asset/donald.jpeg",
    term: "1969-1974",
    details: "37th President of the United States.",
  },
];

const tabs = [
  { name: "Mumbai", content: "News content for Mumbai..." },
  { name: "New Delhi", content: "News content for New Delhi..." },
  { name: "Bengaluru", content: "News content for Bengaluru..." },
  { name: "Hyderabad", content: "News content for Hyderabad..." },
  { name: "Chennai", content: "News content for Chennai..." },
  { name: "Ahmedabad", content: "News content for Ahmedabad..." },
  { name: "Pune", content: "News content for Pune..." },
  { name: "Noida", content: "News content for Noida..." },
  { name: "Gurgaon", content: "News content for Gurgaon..." },
  { name: "Jaipur", content: "News content for Jaipur..." },
];

let currentSlide = 0;
const slider = document.querySelector(".slider");
let slideWidth = 0;

listPresident(presidents);

function listPresident(presidents) {
  presidents.forEach((president) => {
    const presidentElement = createPresidentElement(president);
    slider.appendChild(presidentElement);
  });

  const totalSlides = presidents.length;
  slideWidth = document.querySelector(".president").offsetWidth + 10;
  slider.style.width = `${totalSlides * slideWidth}px`;
}

function createPresidentElement(president) {
  const presidentDiv = document.createElement("div");
  presidentDiv.classList.add("president");

  presidentDiv.innerHTML = `
    <h3>${president.name}</h3>
    <img src="${president.image}" alt="${president.name}">
    <p>${president.term}</p>
    <div class="details">
      <p>${president.details}</p>
    </div>
  `;

  return presidentDiv;
}

function moveSlide(direction) {
  const totalSlides = document.querySelectorAll(".president").length;
  currentSlide += direction;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function createTabs() {
  const tabButtonsContainer = document.getElementById("tab-buttons");
  const tabContentContainer = document.getElementById("tab-content");

  tabs.forEach((tab, index) => {
    const button = document.createElement("button");
    button.classList.add("tab-button");
    button.textContent = tab.name;
    button.onclick = function (event) {
      openTab(event, tab.name);
    };
    if (index === 0) button.classList.add("active");
    tabButtonsContainer.appendChild(button);

    const contentDiv = document.createElement("div");
    contentDiv.id = tab.name;
    contentDiv.classList.add("tab-content");
    contentDiv.innerHTML = `<h2>${tab.name} News</h2><p>${tab.content}</p>`;
    if (index === 0) contentDiv.style.display = "block";
    else contentDiv.style.display = "none";
    tabContentContainer.appendChild(contentDiv);
  });
}

function openTab(event, cityName) {
  const tabContent = document.querySelectorAll(".tab-content");
  const tabButtons = document.querySelectorAll(".tab-button");

  tabContent.forEach((content) => (content.style.display = "none"));

  tabButtons.forEach((button) => button.classList.remove("active"));

  document.getElementById(cityName).style.display = "block";
  event.currentTarget.classList.add("active");
}

window.onload = createTabs;
