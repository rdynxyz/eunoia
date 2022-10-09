
function kirim(){
    var namaAwal = document.forms["contactForm"]["namaAwal"].value;
    var namaAkhir = document.forms["contactForm"]["namaAkhir"].value;
    let alpha = /^[a-zA-Z]+$/;


    if (namaAwal == "" || namaAkhir == ""){
        alert ("name must be filled!");
        return false;
    }
    if (namaAwal.match(alpha) && namaAkhir.match(alpha)){
        alert (`halo, ${namaAwal}`);
    }
    else{
        alert ("Alpha only cuy!");
    }
}