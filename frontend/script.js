 const items = [
  { name: "Home made pizza", price: "₹100", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.02 PM.jpeg" },
  { name: "Home made pizza", price: "₹120", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.04 PM.jpeg" },
  { name: "Home made pizza", price: "₹130", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.06 PM.jpeg" },
  { name: "Home made pizza", price: "₹100", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.07 PM.jpeg" },
  { name: "Home made pizza", price: "₹119", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.08 PM (1).jpeg" },
  { name: "Home made pizza", price: "₹110", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.09 PM (1).jpeg" },
  { name: "Home made pizza", price: "₹100", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.39 PM.jpeg" },
  { name: "Home made pizza", price: "₹120", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.41 PM.jpeg" },
  { name: "Home made pizza", price: "₹130", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.57 PM.jpeg" },
  { name: "Home made pizza", price: "₹100", image: "Food.img/WhatsApp Image 2025-05-12 at 11.30.05 PM.jpeg" },
  { name: "Home made pizza", price: "₹119", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.06 PM.jpeg" },
  { name: "Home made pizza", price: "₹110", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.02 PM.jpeg" }
];

const popularItems = [
  { name: "Home made pizza", price: "₹99", image: "Food.img/WhatsApp Image 2025-05-12 at 11.29.30 PM.jpeg" },
  { name: "Tandoori Chicken", price: "₹140", image: "Food.img/tandoori_chicken[1].jpg" },
  { name: "Chili Chicken", price: "₹116", image: "Food.img/chillichicken.jpg" },
  { name: "Rajma Chawal", price: "₹80", image: "Food.img/rajmachawal[1].jpg" },
  { name: "Paneer Tikka", price: "₹130", image: "Food.img/pannertikka.jpeg.jpg" },
  { name: "Paratha Combo", price: "₹90", image: "Food.img/paratha.png" },
  { name: "Veg Biryani", price: "₹110", image: "Food.img/veg_briyani[1].jpg" }
];

function renderItems(itemsArray, container) {
  itemsArray.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width:100%; border-radius:10px;">
      <div class="card-body">
        <h3>${item.name}</h3>
        <p class="price">${item.price}</p>
        <div class="rating">
          ${'<i class="fas fa-star"></i>'.repeat(4)}<i class="far fa-star"></i>
        </div>
        <div class="add-container">
          <button class="add-to-cart"><i class="fas fa-plus"></i></button>
          <button class="rate-item"><i class="fas fa-star"></i> Rate</button>
        </div>
      </div>
    `;

    card.querySelector('.add-to-cart').addEventListener('click', () => {
      alert(`Added ${item.name} to cart!`);
    });

    card.querySelector('.rate-item').addEventListener('click', () => {
      alert(`You rated ${item.name}!`);
    });

    container.appendChild(card);
  });
}

// Render menu items
const menuGrid = document.getElementById('menu-grid');
renderItems(items, menuGrid);

// Render popular items
const popularTrack = document.getElementById('popularTrack');
renderItems(popularItems, popularTrack);

// Scroll buttons
document.getElementById('nextPopularBtn').addEventListener('click', () => {
  popularTrack.scrollBy({ left: 260, behavior: 'smooth' });
});

document.getElementById('prevPopularBtn').addEventListener('click', () => {
  popularTrack.scrollBy({ left: -260, behavior: 'smooth' });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for contacting us!");
  this.reset();
});



// Icons
document.getElementById('search-icon').addEventListener('click', () => {
  alert('Search feature will be available soon!');
});

document.getElementById('cart-icon').addEventListener('click', () => {
  alert('Cart feature will be available soon!');
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("requestModal");
  const openBtn = document.getElementById("popular-request-btn");
  const closeBtn = document.querySelector("#requestModal .close");
  const form = document.getElementById("request-form");

  if (modal && openBtn && closeBtn && form) {
    // Open modal on button click
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    // Close modal on X click
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal when clicking outside content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your request has been submitted.");
      form.reset();
      modal.style.display = "none";
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("requestModal");
  const openBtn = document.getElementById("popular-request-btn");
  const closeBtn = document.querySelector("#requestModal .close");
  const cancelBtn = document.getElementById("cancel-btn");
  const form = document.getElementById("request-form");

  if (modal && openBtn && closeBtn && form) {
    // Open modal on button click
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    // Close modal on X click
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal on Cancel button click
    cancelBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal when clicking outside content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your request has been submitted.");
      form.reset();
      modal.style.display = "none";
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("requestModal");
  const openBtn = document.getElementById("popular-request-btn");
  const closeBtn = document.querySelector("#requestModal .close");
  const cancelBtn = document.getElementById("cancel-btn");
  const form = document.getElementById("request-form");

  if (modal && openBtn && closeBtn && form) {
    // Open modal on button click
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Disable scroll
    });

    // Close modal on X click
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scroll
    });

    // Close modal on Cancel button click
    cancelBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scroll
    });

    // Close modal when clicking outside content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scroll
      }
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your request has been submitted.");
      form.reset();
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scroll
    });
  }
});
const video = document.getElementById("promoVideo");
const playIcon = document.getElementById("playIcon");

playIcon.style.display = "block";

playIcon.addEventListener("click", () => {
  video.play();
  playIcon.style.display = "none";
  video.setAttribute("controls", "true");
});
// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Temporary in-memory data store
let feedbacks = [];
let dishRequests = [];
let contacts = [];

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  contacts.push({ name, email, message });
  console.log('Contact Submission:', { name, email, message });
  res.status(200).json({ message: 'Contact received!' });
});

app.post('/api/feedback', (req, res) => {
  const { name, email, rating, message } = req.body;
  feedbacks.push({ name, email, rating, message });
  console.log('Feedback Submission:', { name, email, rating, message });
  res.status(200).json({ message: 'Feedback received!' });
});

app.post('/api/request-dish', (req, res) => {
  const { name, email, dish } = req.body;
  dishRequests.push({ name, email, dish });
  console.log('Dish Request:', { name, email, dish });
  res.status(200).json({ message: 'Dish request submitted!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Example: contact form submission
document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
    name: this[0].value,
    email: this[1].value,
    message: this[2].value
  };

  const response = await fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  const result = await response.json();
  alert(result.message);
  this.reset();
});






