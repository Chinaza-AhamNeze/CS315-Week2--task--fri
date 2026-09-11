// Simulate data loaded via an external script or API
const studentData = [
    { id: 201, name: "Diana Prince", grade: "A+" },
    { id: 202, name: "Evan Wright", grade: "B+" },
    { id: 203, name: "Fiona Gallagher", grade: "A" }
];

// Wait 0.1 second (simulating network rendering delay) then build the table
setTimeout(() => {
    const container = document.getElementById('table-container');
    
    let tableHTML = `
        <table id="grades-table">
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
    `;

    studentData.forEach(student => {
        tableHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
            </tr>
        `;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    container.innerHTML = tableHTML;
}, 100);