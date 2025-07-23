// ===== Factory Method with Arrow Functions =====
  const userFactory = (first, last, phone, email) => ({
    firstName: first,
    lastName: last,
    phone: phone,
    email: email,
    isValid: () =>
      first.trim() !== '' && last.trim() !== '' &&
      /^[0-9]{10}$/.test(phone) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  });

  document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = userFactory(
      document.getElementById('firstName').value,
      document.getElementById('lastName').value,
      document.getElementById('phone').value,
      document.getElementById('email').value
    );
    alert(user.isValid() ? '✅ Valid User!' : '❌ Invalid details!');
  });

