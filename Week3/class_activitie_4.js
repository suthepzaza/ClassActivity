const form = document.getElementById("loadUsers");
const statusEl = document.getElementById('status');
  const resultsEl = document.getElementById('results');

  form.addEventListener('click', loadUsers);

  async function loadUsers() {
    // Reset UI state
    resultsEl.innerHTML = '';
    statusEl.innerHTML = '<p class="loading">Loading users…</p>';
    form.disabled = true;

try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const users = await res.json();
      const topFive = users.slice(0, 5);

      statusEl.innerHTML = '';
      resultsEl.innerHTML = topFive.map(user => `
        <div class="user-card">
          <h3>${user.name}</h3>
          <p><span class="label">Email:</span> ${user.email}</p>
          <p><span class="label">Company:</span> ${user.company.name}</p>
          <p><span class="label">City:</span> ${user.address.city}</p>
          <p><span class="label">Phone:</span> ${user.phone}</p>
        </div>
      `).join('');

    } catch (err) {
      statusEl.innerHTML = `
        <p class="error">
          Something went wrong while fetching users. Please check your connection and try again.
        </p>
      `;
      console.error('Fetch error:', err);
    } finally {
      form.disabled = false;
    }
}