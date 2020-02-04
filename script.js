// nav
const navBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

navBtn.addEventListener("click", () => {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    navBtn.classList.remove("open");
    nav.classList.add("closed");

  } else {
    nav.classList.remove("closed");
    navBtn.classList.add("open");
    nav.classList.add("open");
  }
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      navBtn.classList.remove("open");
    }
  });
});


// form
const form = document.querySelector(".contact-form");
const userName = document.querySelector(".contact-form__name");
const mail = document.querySelector(".contact-form__mail");
const message = document.querySelector(".contact-form__message");

form.addEventListener("submit", e => {
  checkInputs();
  const contactsRows = document.querySelectorAll(".contact-form__row");
  contactsRows.forEach(row => {
    if (row.classList.contains("error")) {
      e.preventDefault();
    }
  });
});

const checkInputs = () => {
  const userNameValue = userName.value.trim();
  const emailValue = mail.value.trim();
  const messageValue = message.value.trim();

  if (userNameValue === "") {
    setErrorFor(userName, "Name cannot be blank...");
  } else {
    setSuccessFor(userName);
  }

  if (emailValue === "") {
    setErrorFor(mail, "Email cannot be blank...");
  } else if (!isMailValid(emailValue)) {
    setErrorFor(mail, "Please provide a valid email");
  } else {
    setSuccessFor(mail);
  }

  if (messageValue === "") {
    setErrorFor(message, "Message cannot be blank...");
  } else {
    setSuccessFor(message);
  }
};

const setErrorFor = (input, msg) => {
  const inputContainer = input.parentElement;
  const errorContainer = inputContainer.querySelector(".contact-form__info");
  inputContainer.className = "contact-form__row error";
  errorContainer.textContent = msg;
};

setSuccessFor = input => {
  const inputContainer = input.parentElement;
  inputContainer.className = "contact-form__row success";
};

const isMailValid = email => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};


// footer year
const today = new Date()
const year = today.getFullYear()
document.querySelector('.footer__copyright .year').textContent = year