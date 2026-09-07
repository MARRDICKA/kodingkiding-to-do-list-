const btnJudul = document.getElementById("tombol-ubah-judul");

btnJudul.addEventListener("click", function(){
    const judulUtama = document.getElementById("judul-dashboard");
    judulUtama.textContent = "Dashboard Super Aktif";
    judulUtama.style.color = "#33b945";
});

const btnKartu = document.getElementById("tombol-ubah-kartu");

btnKartu.addEventListener("click", function(){
    const semuaKartu = document.getElementsByClassName("kartu-notifikasi");

    for (let i = 0; i < semuaKartu.length; i++) {
        semuaKartu[i].style.backgroundColor = "#f3b7d4";
        semuaKartu[i].style.borderLeftColor = "#ff0101";
        
    }
});

const btnTeks = document.getElementById("tombol-ubah-teks");

btnTeks.addEventListener("click", function() {
    const semuaParagraf = document.getElementsByTagName("p");

    for (let i = 0; i < semuaParagraf.length; i++) {
        semuaParagraf[i].style.fontStyle = "italic";
        semuaParagraf[i].style.color = "#4b0caf"
    }
});
    
const btnPanel = document.getElementById("tombol-ubah-panel");

btnPanel.addEventListener("click", function(){
    const panel = document.querySelector(".panel-kontrol");

    panel.style.border = "3px dashed #b7ec08";
    panel.style.backgroundColor = "#2b6eb1";
});

const btnTombolGaya = document.getElementById("tombol-ubah-tombol");

btnTombolGaya.addEventListener("click", function(){
    const semuaTombol = document.querySelectorAll(".tombol-aksi");

    semuaTombol.forEach(function(tombol) {
        tombol.style.backgroundColor = "#61d569";
        tombol.style.borderRadius = "20px";
    });
});