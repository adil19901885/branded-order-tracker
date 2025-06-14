document.getElementById('trackBtn').addEventListener('click', async () => {
  const orderId = document.getElementById('orderId').value.trim();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (!orderId) {
    resultDiv.innerHTML = '<p>Please enter an Order ID.</p>';
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/orders`);
    if (!response.ok) throw new Error('Failed to fetch orders.');

    const orders = await response.json();
    const order = orders.find(o => o.id.toString() === orderId);

    if (order) {
      const status = order.fulfillment_status || 'Not fulfilled yet';
      resultDiv.innerHTML = `
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Created At:</strong> ${new Date(order.created_at).toLocaleString()}</p>
      `;
    } else {
      resultDiv.innerHTML = '<p>Order not found.</p>';
    }
  } catch (error) {
    resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});
