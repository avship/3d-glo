const formValidation = () => {
  const digitsFilter = (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  };
  const messageFilter = (e) => {
    e.target.value = e.target.value.replace(/[^А-Яа-яёЁ \-]/, "");
  };
  const emailInputChecker = (e) => {
    e.target.value = e.target.value.replace(/[^\w@\.\-\_\!\~\*]/, "");
  };
  const phoneInputChecker = (e) => {
    e.target.value = e.target.value.replace(/[^\d\-\(\)\+]/, "");
  };
  const calcInputs = document.querySelectorAll(".calc-block input");
  const form2Message = document.querySelector("#form2-message");
  const emailInputs = document.querySelectorAll(".form-email");
  const phoneInputs = document.querySelectorAll(".form-phone");

  calcInputs.forEach((item) => {
    item.addEventListener("input", digitsFilter);
  });
  form2Message.addEventListener("input", messageFilter);
  emailInputs.forEach((item) => {
    item.addEventListener("input", emailInputChecker);
  });
  phoneInputs.forEach((item) => {
    item.addEventListener("input", phoneInputChecker);
  });
  console.log(calcInputs);
};

export default formValidation;
