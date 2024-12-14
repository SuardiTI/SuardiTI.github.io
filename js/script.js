document.addEventListener("DOMContentLoaded", function () {
  // Efek transisi saat halaman dimuat
  const main = document.querySelector("section");
  main.style.opacity = 0;
  setTimeout(() => {
    main.style.transition = "opacity 1s";
    main.style.opacity = 1;
  }, 250);

  //toggle ikon pada saat mode mobile
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

});

//untuk alert form
document.getElementById("form").addEventListener("submit", function (event) {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var nomor = document.getElementById("nomor").value;

  // Cek apakah field 'name' kosong
  if (nama === "") {
    alert("Nama harus diisi!");
    event.preventDefault(); // Mencegah form untuk dikirim
    return;
  }

  // Cek apakah field 'email' kosong
  if (email === "") {
    alert("Email harus diisi!");
    event.preventDefault(); // Mencegah form untuk dikirim
    return;
  }

  // Cek apakah field 'nomor' kosong
  if (nomor === "") {
    alert("Nomor harus diisi!");
    event.preventDefault(); // Mencegah form untuk dikirim
    return;
  }

  // jika terisi semua maka akan dikirim
  alert("Form berhasil dikirim!");
});
