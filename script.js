// Simple form submission simulation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMsg").innerText = "✅ Message sent successfully!";
  this.reset();
});
