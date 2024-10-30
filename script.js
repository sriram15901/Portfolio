const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function downloadResume() {
  const resumeURL = 'Sriram_Resume.pdf';  // Update with the correct path to your resume
  const link = document.createElement('a');
  link.href = resumeURL;
  link.download = 'Sriram_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function openModal(pdfUrl) {
  document.getElementById('modal-content').src = pdfUrl; // Set the source of the PDF
  document.getElementById('modal').style.display = 'flex'; // Show the modal
}

function closeModal() {
  document.getElementById('modal').style.display = 'none'; // Hide the modal
  document.getElementById('modal-content').src = ''; // Clear the PDF to stop playing
}
