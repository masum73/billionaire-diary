const loadData = async () => {
    const URL = `https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/AllBillionaires.json`;
    try {
        const res = await fetch(URL);
        const data = await res.json();
        //console.log(data.slice(0,30));
        displayData(data.slice(0, 30));
    } catch (error) {
        console.log(error);
    }
};

/*   const setInnerHtml = (data) => {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    let serial = 1;
    // let totalField = document.getElementById('total');
    // let amount = 0;
    data.forEach((billionaire) => {
      const { person, countryOfCitizenship, industries, position, finalWorth } =
        billionaire;
      tbody.innerHTML += `
          <tr data-bs-toggle="modal" data-bs-target="#billionairesDetails">
          <th scope="row">${serial++}</th>
          <td>${person.name}</td>
          <td>${countryOfCitizenship}</td>
          <td>${industries}</td>
          <td>${position}</td>
          <td>$${finalWorth}</td>
        </tr>
          `;
          // amount += finalWorth;
        });
        // totalField.innerText = '$'+ amount.toFixed(2);
  
        // tbody.addEventListener('click', (e) => {
        //   console.log(e.target.parentNode);
        // })
  }; */

const displayData = (data) => {
    const tableBody = document.getElementById('tbody');
    let serial = 1;
    tableBody.innerHTML = '';
    data.forEach(billionaire => {
        const { personName, countryOfCitizenship, rank, industries, finalWorth, state } = billionaire;
        tableBody.classList.add('text');
        //console.log(billionaire.naturalId);
        tableBody.innerHTML += `
        <tr data-bs-toggle="modal" data-bs-target="#billionairesDetails">
            <th scope="row">${serial++}</th>
            <td>${personName}</td>
            <td>${countryOfCitizenship}</td>
            <td>${industries[0]}</td>
            <td>${rank}</td>
            <td>$${finalWorth}</td>
            <td>${state ? state : 'Not found'}</td>
        </tr>
        `
    });

}

document.getElementById("technology-btn").addEventListener("click", async () => {
        const URL = `https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/ByIndustryTechnology.json`;
        try {
            const res = await fetch(URL);
            const data = await res.json();
            displayData(data.slice(0, 30));
        } catch (error) {
            console.log(error);
        }
    });

document.getElementById("state-btn").addEventListener("click", async () => {
    const URL = `https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/ByStateTexas.json`;
    try {
        const res = await fetch(URL);
        const data = await res.json();
        displayData(data.slice(0, 30));
    } catch (error) {
        console.log(error);
    }
});