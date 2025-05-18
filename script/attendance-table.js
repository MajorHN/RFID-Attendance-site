fetch("data/attendance-sample.json")
  .then(res => res.json())
  .then(data => {
    const tableBody = document.getElementById('attendance-table');

    data.forEach(entry => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${entry.id}</td>
        <td>${entry.name}</td>
        <td>${entry.date}</td>
        <td>${entry.time}</td>
      `;
      tableBody.appendChild(row);
    });
  });
