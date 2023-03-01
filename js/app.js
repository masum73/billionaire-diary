const loadData = async () => {
    const URL = `https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/AllBillionaires.json`;
    try {
        const res = await fetch(URL);
        const data = await res.json();
        displayData(data.slice(0, 30));
    } catch (error) {
        console.log(error);
    }
};

const displayData = (data) => {
    const tableBody = document.getElementById('tbody');
    let serial = 1;
    tableBody.innerHTML = '';
    data.forEach(billionaire => {
        const { personName, countryOfCitizenship, rank, industries, finalWorth, state } = billionaire;
        tableBody.classList.add('text');
        tableBody.innerHTML += `
        <tr data-bs-toggle="modal" data-bs-target="#billionairesDetails">
            <th scope="row">${serial++}</th>
            <td>${personName}</td>
            <td>${countryOfCitizenship}</td>
            <td>${industries}</td>
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