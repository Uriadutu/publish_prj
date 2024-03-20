//https://api.telegram.org/bot7065568975:AAEZrkJlRperOjJyp_CYVclsSC1mBjqYcL0/getUpdates
// Nama%3A%0Asssss%0AEmail%3A%0Asssss%0APesan%3A%0Asssss

function kirimPesan(){
    const nama = document.getElementById('nama');
    const email = document.getElementById('email');
    const pesan = document.getElementById('pesan');
    const format = "Nama%3A"+ " " + nama.value + "%0APesan%3A"+ " " + pesan.value;

    const token = "7065568975:AAEZrkJlRperOjJyp_CYVclsSC1mBjqYcL0";
    const grub = "-4102541919";

    $.ajax({
      url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grub}&text=${format}&parse_mode=html`,
      method: "POST",
    });
}