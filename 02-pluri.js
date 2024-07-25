async function gettingData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        populateTable(data);  
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function populateTable(data) {
    const tableBody = document.querySelector('#data-table-body');
    // tableBody.style.margin = '10px'
    tableBody.style.backgroundColor='#e0e0e0'

    tableBody.innerHTML = ''; 

    data.forEach((each) => {
        const tableRow = document.createElement('tr');
        // tableRow.style.margin = '20px 10px';

        
        const idCell = document.createElement('td');
        idCell.textContent = each.id;
        idCell.classList.add('cell-style');
        tableRow.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = each.name;
        nameCell.classList.add('cell-style');
        tableRow.appendChild(nameCell);

        const userNameCell = document.createElement('td');
        userNameCell.textContent = each.username;
        userNameCell.classList.add('cell-style');
        tableRow.appendChild(userNameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = each.email;
        emailCell.classList.add('cell-style');
        tableRow.appendChild(emailCell);

        const addressCell = document.createElement('td');
        addressCell.textContent = `${each.address.street}, ${each.address.city}`;
        addressCell.classList.add('cell-style');
        tableRow.appendChild(addressCell);

        const phoneCell = document.createElement('td');
        phoneCell.textContent = each.phone;
        phoneCell.classList.add('cell-style');
        tableRow.appendChild(phoneCell);

        const websiteCell = document.createElement('td');
        websiteCell.textContent = each.website;
        websiteCell.classList.add('cell-style');
        tableRow.appendChild(websiteCell);

        const companyCell = document.createElement('td');
        companyCell.textContent = `${each.company.name}, ${each.company.catchPhrase}`;
        companyCell.classList.add('cell-style');
        tableRow.appendChild(companyCell);

    tableBody.appendChild(tableRow)

    })


    // let me create 8 cells in the tableRow

    // const cell = document.createElement('td');
    // const cell2 = document.createElement('td');
    // const cell3 = document.createElement('td');
    // const cell4 = document.createElement('td');
    // const cell5 = document.createElement('td');
    // const cell6 = document.createElement('td');
    // const cell7 = document.createElement('td');
    // const cell8 = document.createElement('td');

    // tableRow.appendChild(cell);
    // tableRow.appendChild(cell2);
    // tableRow.appendChild(cell3);
    // tableRow.appendChild(cell4);
    // tableRow.appendChild(cell5);
    // tableRow.appendChild(cell6);
    // tableRow.appendChild(cell7);
    // tableRow.appendChild(cell8);


    // data.forEach((each) = {
    // const tableRow = document.createElement('tr')
        
    // })



    // data.forEach((teacher) => {
    //     const tableCell = document.createElement('td')
    //     tableCell.textContent = teacher.id;
    //     tableCell.textContent = teacher.name;
    //     tableCell.textContent = teacher.username;
    //     tableCell.textContent = teacher.email;
    //     tableCell.textContent = teacher.address;
    //     tableCell.textContent = teacher.phone;
    //     tableCell.textContent = teacher.website;
    //     tableCell.textContent = teacher.company;
    // })

    // data.forEach(teacher => {
    //     const idCell = document.createElement('td');
    //         idCell.textContent = teacher.id;
    //         row.appendChild(idCell);
    //     )
    // });
}

gettingData();  
