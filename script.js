// Booking ke WhatsApp
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const motor = document.getElementById("motor").value;
  const tanggal = document.getElementById("tanggal").value;
  const keluhan = document.getElementById("keluhan").value;

  const pesan = `Halo Bengkel Cemerlang! Saya ${nama} ingin booking service untuk motor ${motor} pada tanggal ${tanggal}.%0A%0AKeluhan: ${keluhan}`;
  const nomorWA = "6281234567890"; // Ganti dengan nomor WhatsApp bengkel kamu

  window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
});

// Navbar Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Animasi muncul saat scroll
const animatedElements = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

animatedElements.forEach(el => observer.observe(el));
