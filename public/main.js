let inspirationButton = document.getElementById("inspirationBtn");
let signUpButton = document.getElementById("sign-up");

const getInspire = () => {
  axios.get("http://localhost:5432/api/inspire/")
    .then(res => {
      const data = res.data;
      alert(data);
    })
    .catch(error => {
      console.error(error);
    });
};

const signUp = () => {
  const emailInput = document.querySelector(".email-sign-up input[type='text']");
  const email = emailInput.value;

  if (isValidEmail(email)) {
    axios.post("http://localhost:5432/api/sign-up/", { email })
      .then(res => {
        const data = res.data;
        alert(data);
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    alert("Invalid email address.");
  }
};

inspirationButton.addEventListener('click', getInspire);

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  signUp();
});

function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

const ratingStars = document.querySelectorAll('.rating-stars span');
const ratingDisplay = document.getElementById('rating');
const submitBtn = document.getElementById('submit-btn');
const trailNameInput = document.getElementById('trail-name');
const trailList = document.getElementById('trail-list');

let selectedRating = 0;
let trailRatings = {};

ratingStars.forEach(star => {
    star.addEventListener('click', function () {
        selectedRating = parseInt(this.getAttribute('data-rating'));

      
        ratingStars.forEach(s => {
            if (parseInt(s.getAttribute('data-rating')) <= selectedRating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });

      
        ratingDisplay.textContent = selectedRating;
    });
});

submitBtn.addEventListener('click', function () {
    const trailName = trailNameInput.value.trim().toUpperCase();

    if (trailName && selectedRating > 0) {
        if (!trailRatings[trailName]) {
            
            trailRatings[trailName] = {
                totalRating: selectedRating,
                ratingsCount: 1,
            };

            
            const listItem = document.createElement('li');
            listItem.id = `trail-${trailName}`;
            listItem.textContent = `${trailName}: ${(selectedRating).toFixed(2)} star${selectedRating > 1 ? 's' : ''}`;

            
            trailList.appendChild(listItem);
        } else {
            
            trailRatings[trailName].totalRating += selectedRating;
            trailRatings[trailName].ratingsCount++;

            
            const averageRating = trailRatings[trailName].totalRating / trailRatings[trailName].ratingsCount;

            
            const listItem = document.getElementById(`trail-${trailName}`);
            listItem.textContent = `${trailName}: ${averageRating.toFixed(2)} star${averageRating !== 1 ? 's' : ''}`;
        }


        trailNameInput.value = '';
        selectedRating = 0;
        ratingDisplay.textContent = '0';
        ratingStars.forEach(star => star.classList.remove('active'));
    } else {
        alert('Please enter a trail name and select a rating.');
    }
});

  