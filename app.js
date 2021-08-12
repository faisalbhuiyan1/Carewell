window.addEventListener("load", (event) => {
  // hide box on mount
  Array.from(document.getElementsByClassName("box")).map(
    (e) => (e.style.display = "none")
  );
});

function submit(e) {
  const name = e.target.name === "cool" ? "COOL" : "RAD";
  Array.from(document.getElementsByClassName("box")).map((e) => {
    e.style.display = "block";
    e.innerHTML = name;
  });
}
