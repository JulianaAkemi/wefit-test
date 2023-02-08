const menu = document.getElementsByClassName("btn-group-vertical")[0];
menu.classList.replace("btn-group-vertical", "btn-group-horizontal");

const header = document.getElementsByClassName("jumbotron")[0];
header.classList.add("bg-secondary", "text-white", "text-right");
header
  .getElementsByClassName("btn-primary")[0]
  .classList.replace("btn-primary", "btn-success");

const rowsList = document.getElementsByClassName("row");
const cardsList = rowsList[2].getElementsByClassName("card");
const animalsCard = cardsList[0];
const tecnologyCard = cardsList[1];
const peopleCard = cardsList[2];
const natureCard = cardsList[3];
natureCard.parentElement.classList.add("order-1");
animalsCard.parentElement.classList.add("order-2");
peopleCard.parentElement.classList.add("order-3");
tecnologyCard.parentElement.classList.add("order-4");
const AnimalsCardButton = animalsCard.getElementsByClassName("btn-primary")[0];
AnimalsCardButton.classList.replace("btn-primary", "btn-success");

const ulItems = document.getElementsByClassName("list-group")[0];
const activeListItem = ulItems.getElementsByClassName("active")[0];
activeListItem.classList.remove("active");
const pushItem = (text) => {
  let listItem = document.createElement("li");
  listItem.innerText = text;
  listItem.classList.add("list-group-item");

  if (text === "Quarto Item") listItem.classList.add("active");

  ulItems.appendChild(listItem);
};
pushItem("Quarto Item");
pushItem("Quinto Item");
