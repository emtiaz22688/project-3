let placesData = [];

// প্রথমে API থেকে ডেটা আনা
async function fetchPlaces() {
  try {
    const response = await fetch("places.json"); // ← লোকাল json ফাইল
    placesData = await response.json();
    renderPlaces(placesData);
  } catch (error) {
    document.getElementById("results").innerHTML = "ডেটা লোড করতে সমস্যা হয়েছে!";
  }
}

// সার্চ ফাংশন
function searchPlaces() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = placesData.filter(place => place.name.toLowerCase().includes(query));
  renderPlaces(filtered);
}

// ডেটা দেখানো
function renderPlaces(places) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (places.length === 0) {
    resultsDiv.innerHTML = "<p>কোনো জায়গা পাওয়া যায়নি।</p>";
    return;
  }

  places.forEach(place => {
    resultsDiv.innerHTML += `
      <div class="card">
        <h3>${place.name}</h3>
        <p><strong>অবস্থান:</strong> ${place.location}</p>
        <p>${place.description}</p>
        <img src="${place.image}" alt="${place.name}">
      </div>
    `;
  });
}

// পেজ লোড হলে সব জায়গা দেখানো
fetchPlaces();


if(email === "admin@gmail.com" && password === "23456"){
    window.location.href = "./mean.html";  
}



/*secound section end*/

function goToIndex() {
    window.location.href = "reast.html"; // এই লিঙ্কে যাবে
  }





