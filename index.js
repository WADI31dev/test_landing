console.log("ouesh ! ");

const monbouton = document.getElementById("btn-red")

console.log(monbouton)

monbouton.addEventListener('click', (event) => {
  monbouton.classList.add("btn-yellow");
})
