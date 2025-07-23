 // ===== Object Literal + Filter/Map for Table =====
  const employees = [
    { name: 'Alice', position: 'Manager', salary: 90000 },
    { name: 'Bob', position: 'Developer', salary: 75000 },
    { name: 'Charlie', position: 'Designer', salary: 65000 }
  ];

  const renderTable = (data) => {
    const tbody = document.querySelector('#employeeTable tbody');
    tbody.innerHTML = data.map(emp => `
      <tr>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>${emp.salary}</td>
      </tr>
    `).join('');
  };

  renderTable(employees);

  document.getElementById('searchInput').addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = employees.filter(emp => emp.name.toLowerCase().includes(value));
    renderTable(filtered);
  });

