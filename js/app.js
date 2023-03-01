const loadData = () => {
    fetch('./data/AllBillionaires.json')
        .then(res => res.json())
        .then(data => displayData(data.slice(0, 25)))
}

const displayData = (data) => {
    const tableBody = document.getElementById('tbody');
    let serial = 1;
    tableBody.innerHTML = '';
    data.forEach(billionaire => {
        const { personName, countryOfCitizenship, rank, industries, finalWorth, state } = billionaire;
        tableBody.classList.add('text');
        //console.log(billionaire.naturalId);
        tableBody.innerHTML += `
        <tr>
            <th scope="row">${serial++}</th>
            <td>${personName}</td>
            <td>${countryOfCitizenship}</td>
            <td>${industries[0]}</td>
            <td>${rank}</td>
            <td>$${finalWorth}</td>
            <td>${state ? state : 'Not found'}</td>
            <td><button onclick="openModal('${billionaire.naturalId}')" class="btn bg-white text-dark" data-bs-toggle="modal" data-bs-target="#billionaireDetailModal">Click for Details</button></td>
        </tr>
        `
    });

}

const openModal = (value) => {
    console.log(value);
};

// load state button data 

const loadState = () => {
    fetch('./data/ByStateTexas.json')
        .then(res => res.json())
        .then(data => displayData(data.slice(0, 15)))
}
