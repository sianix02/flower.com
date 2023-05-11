alert("Hey!")
alert("Just wanna know you are doing just fine.")
alert("Don't Overthink it!")
alert("You deserve this gift!")
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};