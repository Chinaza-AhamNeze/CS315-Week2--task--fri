// Additional student batches to append on each click
const additionalBatches = [
    [
        { id: 204, name: "George Clark", grade: "B" },
        { id: 205, name: "Hannah Abbott", grade: "A-" }
    ],
    [
        { id: 206, name: "Ian Malcolm", grade: "A" },
        { id: 207, name: "Julia Roberts", grade: "B+" }
    ],
    [
        { id: 208, name: "Kevin Bacon", grade: "A+" },
        { id: 209, name: "Laura Croft", grade: "A-" }
    ]
];

let clickCount = 0;
const maxClicks = 3;

const button = document.getElementById('add-btn');
const tableBody = document.getElementById('table-body');

button.addEventListener('click', () => {
    if (clickCount < maxClicks) {
        const batch = additionalBatches[clickCount];
        
        batch.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
            `;
            tableBody.appendChild(row);
        });

        clickCount++;

        // Disable button after 3 clicks
        if (clickCount === maxClicks) {
            button.disabled = true;
            button.innerText = "No More Students to Add";
        }
    }
});