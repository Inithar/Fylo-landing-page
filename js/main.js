const bgCurvyImg = document.querySelector(".bg-curvy");
const emailInput = document.querySelector(".sign-in__input-email");
const signInBtn = document.querySelector(".sign-in__btn");
const signInMsg = document.querySelector(".sign-in__msg");

const setBgCurvySrc = () => {
  window.innerWidth >= 768
    ? bgCurvyImg.src = "./images/bg-curvy-desktop.svg"
    : bgCurvyImg.src = "./images/bg-curvy-mobile.svg";
};

const chceckEmail = () => {
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailInput.value.match(validRegex)) {
    signInMsg.textContent = "Registration was successful";
    signInMsg.classList.add("sign-in__msg--success");
    signInMsg.classList.remove("sign-in__msg--error");
  } else {
    signInMsg.textContent = "Please enter a valid email address";
    signInMsg.classList.add("sign-in__msg--error");
    signInMsg.classList.remove("sign-in__msg--success");
  }
};

window.addEventListener("resize", setBgCurvySrc);
signInBtn.addEventListener("click", chceckEmail);
