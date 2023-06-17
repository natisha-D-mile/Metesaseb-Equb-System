let isDone = false; //Game on...Z Winner isn't known yet

let userName = document.getElementById("fname");
let amount = document.getElementById("amount");
let table = document.getElementById("table-data");
let register = document.getElementById("register");
let form = document.getElementById("form");
let money; // to fix the deposit money. Holds the value of the amt entered by the 1st user

const userNames = [];
const amounts = [];

let i = 0; //index. Tracks the users' data

amount.addEventListener("input", () => {
  if (i === 0) {
    money = amount.value;
    // console.log("money=" + money);
  }
}); 

let sum = 0;
let total = document.getElementById("tot-Mon");

form.addEventListener("submit", function (refr) {
  refr.preventDefault(); //to control the auto-refresh
  if (isDone === false && amount.value === money) {
                                                // same as !isDone  //===strict equality, checks z type too // records the amount that's input
    document.getElementById("amount_error").classList.add("hidden");

    var row = document.createElement("tr");

    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    col1.innerHTML = userName.value;
    col2.innerHTML = amount.value;

    userNames[i] = userName.value; //helps while generating the lottery, for the random no. [Tiny-backend]
    amounts[i] = amount.value;

    i++;
    sum += Number(amount.value);
    total.innerHTML = sum;

    row.appendChild(col1); //[Tiny-frontend]
    row.appendChild(col2);

    table.appendChild(row); //sent to the html

    userName.value = "";
  } else if (amount.value != money) {
    document.getElementById("amount_error").classList.remove("hidden");
  }
});

const check_winner_btn = document.getElementById("generate-btn");
let winner_msg_place = document.getElementById("display");

check_winner_btn.addEventListener("click", function () {
  if (isDone === false && userNames[0] !== undefined) {
    isDone = true;                                                            //Game over; Our winner is known

    winner_msg_place.style.background = "rgba(20, 110, 20, 0.8)";
    winner_msg_place.style.boxShadow = "-2px 6px 10px 15px lightgreen";
    let rand = Math.floor(Math.random() * i);

    var msg_for_winner_header = document.createElement("p");
    var msg_for_winner = document.createElement("p");

    msg_for_winner_header.innerHTML = `<marquee> Congrats!!! </marquee>`;
    msg_for_winner.innerHTML = `
   <b> Winner's Name: </b>  &nbsp; ${userNames[rand]} <br> 
   <b> Amount Won: </b>     &nbsp; ${Number(amounts[0]) * amounts.length}
     `;

    msg_for_winner_header.style.background = "rgba(34, 33, 33, 0.473)";
    msg_for_winner_header.style.marginTop = "40px";
    msg_for_winner.style.background = "rgba(34, 33, 33, 0.473)";
    msg_for_winner.style.paddingLeft = "100px";

    winner_msg_place.appendChild(msg_for_winner_header);
    winner_msg_place.appendChild(msg_for_winner);
    check_winner_btn.classList.add("hidden");
    register.disabled = true;
  }
});

function reloadPage() {
  location.reload();
}

