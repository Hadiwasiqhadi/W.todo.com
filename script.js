// Step 5: Adding WhatsApp Integration

// 1. Update the form event listener to include WhatsApp functionality
form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const studentClass = document.getElementById('class').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  const formData = `Student Name: ${name}\nDate of Birth: ${dob}\nClass: ${studentClass}\nPhone: ${phone}\nEmail: ${email}`;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text(formData, 10, 10);
  doc.save('Admission_Form.pdf');

  // 2. Prepare WhatsApp message link
  const adminNumber = '03442987080'; // Replace with the school admin's WhatsApp number
  const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(formData)}`;

  // 3. Open WhatsApp link
  window.open(whatsappLink, '_blank');

  alert('PDF Created and WhatsApp link opened!');
});

/* Explanation:
- Added a `whatsappLink` using `https://wa.me/` with the admin number.
- Used `encodeURIComponent` to format the form data for URLs.
- `window.open()` opens the WhatsApp chat in a new tab.

Replace `1234567890` with the actual admin's WhatsApp number.
Now your form saves as PDF and opens WhatsApp with the data! */
