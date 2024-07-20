const tournamentSelect = document.querySelector("#tournament");
const cardsElement = document.getElementById("cards");
const eventList = document.querySelector("#eventlist");
const fieldList = document.querySelector("#fieldlist");

const tournaments = [
    {
      id: "15",
      name: "Clinica ADESCA Ahuachapan",
      datestart: "5",
      dateend: "2",
      numteams: 2
    },
    {
      id: "10",
      name: "Clinica ADESCA Santa Ana",
      datestart: "3",
      dateend: "1",
      numteams: 5
    },
    {
      id: "12",
      name: "Clinica ADESCA Ataco",
      datestart: "2",
      dateend: "5",
      numteams: 2
    },
    {
      id: "7",
      name: "Clinica ADESCA Juayua",
      datestart: "2",
      dateend: "1",
      numteams: 0
    }
  ];

  const fields = [
    {
      name: "Adesca 1",
      openhours: "Mon - Sat 6:30 - 05:00 PM",
      adress: "Ahuachapan, El Salvador",
      phone: "+(503)2445-265",
      averagerating: 5.0,
      ages: "Pediatrician, children only",
      imgurl: "images/adesca.jpg"
    },
    {
      name: "Adesca Anexo 2",
      openhours: "Mon - Fri 19:00 - 23:30 PM",
      adress: "Santa ana, 2 Stret out",
      phone: "+(503) 452-8965",
      averagerating: 4.5,
      ages: "all ages",
      imgurl: "images/adesca.jpg"
    },
    {
      name: "Adesca Anexo 3",
      openhours: "Mon - Sun 19:00 - 22:00 PM",
      adress: "Ataco. #2-8 Central",
      phone: "+(503)78-9684",
      averagerating: 5.0,
      ages: "all ages",
      imgurl: "images/hour.jpg"
    },

];

function createboxSelectList() {
  tournaments.forEach(t => {
    optElement = document.createElement("option");
    optElement.setAttribute("value", t.id);
    optElement.innerText = t.name

    tournamentSelect?.appendChild(optElement);
  });
}

createboxSelectList();

function createFieldCards() {
  fields.forEach(f => {
    if (f.averagerating > 4.3){
      const card = document.createElement("section");
      card.classList.add("card");
      const title = document.createElement("h3");
      title.innerText = f.name;
      card.appendChild(title);

      const img = document.createElement("img");
      img.setAttribute("src", f.imgurl);
      img.setAttribute("alt", "A MEDIC CLINIC");
      card.appendChild(img);
      
      const desc = document.createElement("div");
      desc.innerHTML = `
      <p>🕒${f.openhours}</p>
      <p>📍${f.adress}</p>
      <p>📞${f.phone}</p>
      <p>${f.averagerating}⭐</p>
      <p>${f.ages}</p>`
      card.appendChild(desc);

      cardsElement?.appendChild(card)
    }
  });
}

createFieldCards();

function createEventsTable() {
  tournaments.forEach(t => {
    const row = document.createElement("tr");
    const header = document.createElement("th");
    const code = document.createElement("td");
    const datestart = document.createElement("td");
    const dateend = document.createElement("td");
    const numteams = document.createElement("td");

    header.innerText = t.name;
    code.innerText = t.id;
    datestart.innerText = t.datestart;
    dateend.innerText = t.dateend;
    numteams.innerText = t.numteams;


    row.appendChild(header);
    row.appendChild(code);
    row.appendChild(datestart);
    row.appendChild(dateend);
    row.appendChild(numteams);

    eventList?.appendChild(row);
  });
}

createEventsTable()

function createFieldsTable() {
  fields.forEach(f => {
    const row = document.createElement("tr");
    const header = document.createElement("th");
    const openhours = document.createElement("td");
    const address = document.createElement("td");
    const phone = document.createElement("td");
    const rating = document.createElement("td");
    const ages = document.createElement("td");

    header.innerText = f.name;
    openhours.innerText = f.openhours;
    address.innerText = f.adress;
    phone.innerText = f.phone;
    rating.innerText = f.averagerating;
    ages.innerText = f.ages;


    row.appendChild(header);
    row.appendChild(openhours);
    row.appendChild(address);
    row.appendChild(phone);
    row.appendChild(rating);
    row.appendChild(ages);
    
    fieldList?.appendChild(row);
  });
}

createFieldsTable();