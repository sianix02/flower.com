alert("I know lisud")
alert("pero laban ugma")
alert("good luck poh!")
alert("future cadet officer1")
alert("ito flowers")
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
