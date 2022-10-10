
function kirim(){
    var namaAwal = document.forms["contactForm"]["namaAwal"].value;
    var namaAkhir = document.forms["contactForm"]["namaAkhir"].value;
    var email = document.forms["contactForm"]["email"].value;
    var telp = document.forms["contactForm"]["telp"].value;
    var subjek = document.forms["contactForm"]["subjek"].value;
    
    let alpha = /^[a-zA-Z]+$/;


    const name = localStorage.getItem("Name")

    if (namaAwal == "" || namaAkhir == ""){
        alert ("Name must be filled!");
        return false;
    }

    if (namaAwal.match(alpha) && namaAkhir.match(alpha)){
        alert (`halo, ${namaAwal}`);
    }   else{
        alert ("Please enter alphabet in names form.");
    }
}