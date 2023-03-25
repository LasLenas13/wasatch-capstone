let inspirationButton = document.getElementById("inspirationBtn");
let signUpButton = document.getElementById("sign-up");

const getInspire = () => {
  axios.get("http://localhost:5150/api/inspire/")
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
    axios.post("http://localhost:5150/api/sign-up/", { email })
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



  