 const productFactory = (title, desc, price) => ({ title, desc, price });
  const products = [
    productFactory('Phone', 'Latest smartphone', 799),
    productFactory('Laptop', 'High-end specs', 1200),
    productFactory('Headphones', 'Noise cancelling', 199)
  ];

  const productContainer = document.getElementById('productCards');
  products.map(product => {
    const div = document.createElement('div');
    div.className = 'col-md-4 mb-3';
    div.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.desc}</p>
          <p class="card-text fw-bold">$${product.price}</p>
        </div>
      </div>
    `;
    productContainer.appendChild(div);
  });
