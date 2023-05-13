alert("Happy Mother's Day Mama Cherry!")
alert("from: Your family")
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
