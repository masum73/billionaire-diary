const loadData = () => {
    fetch('./data/AllBillionaires.json')
    .then(res => res.json())
    .then(data => displayData(data.slice(0,15)))
}

const displayData = (data) => {
    //console.log(data);

    const tableBody = document.getElementById('tbody');
    let serial = 1;
    tableBody.innerHTML = '';
    data.forEach(billionaire => {
        //console.log(billionaire.countryOfCitizenship);
        //console.log(billionaire.personName);
       // console.log(billionaire.industries);
        //console.log(billionaire.rank);
        //console.log(billionaire);

        const {countryOfCitizenship, personName, rank , finalWorth } = billionaire;
        tableBody.classList.add('text');
        
        tableBody.innerHTML += `
        <tr>
            <th scope="row">${serial++}</th>
            <td>${countryOfCitizenship}</td>
            <td>${personName}</td>
            <td>${billionaire.industries[0]}</td>
            <td>${rank}</td>
            <td>@${finalWorth}</td>
        </tr>
        `
    });

}

// load tech industry button data 

const loadTechIndustry = () => {
    fetch('./data/ByIndustryTechnology.json')
    .then(res => res.json())
    .then(data => displayTechIndustry(data.slice(0,15)))
}

const displayTechIndustry = (multipleIndustry) => {
    console.log(multipleIndustry);
    const tableBody = document.getElementById('tbody');
    let serial = 1;
    tableBody.innerHTML = '';
    multipleIndustry.forEach(singleIndustry => {

        const {countryOfCitizenship, personName, rank , finalWorth } = singleIndustry;
        tableBody.classList.add('text')
        
        tableBody.innerHTML += `
        <tr>
            <th scope="row">${serial++}</th>
            <td>${countryOfCitizenship}</td>
            <td>${personName}</td>
            <td>${singleIndustry.industries[0]}</td>
            <td>${rank}</td>
            <td>@${finalWorth}</td>
        </tr>
        `
    });
    

}