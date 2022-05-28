'use strict';

// MENDEFINISIKAN SEMUA SELECTOR YANG INGIN DIMANIPULASI
// # untuk id SELECTOR
// . untuk class SELECTOR

const regisForm = document.querySelector('#regis_submit');
const regisSection = document.querySelector('#regis_section');
const regisSuccess = document.querySelector('#regis_success');
const username = document.querySelector('input[name="username"]');
const email= document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const gender = document.getElementsByClassName('gender');


// Fungsi submitRegis

const submitRegis = function(e){

    /* method preventDefault untuk cancel default action.
     misal saat submit form secara default browser akan menuju ke link yang didefinisikan
     pada "action" di <form action="" >
     namun jika link tidak didefinisikan maka otomatis akan mengarah link yang sedang dibuka + query params pada browser
     yang berisi data sensitif misal password
    */
    e.preventDefault();

    // mengambil value dari querySelector yang sudah didefinisikan di atas.

    const uname_val = username.value
    const email_val = email.value
    const pass_val = password.value

    // deklarasi variabel kosong menggunakan keyword "let" yang nantinya bisa diubah/diisi. 
    // const atau konstanta adalah nilai tetap yang sekali diberikan value tidak bisa diubah
    let gender_val = ""

    // iterasi untuk mencari radio button yang dicentang
    // pertama mengambil HTML collection dari class gender
    // class gender didefinisikan pada 2 radio button
    // sehingga class gender memiliki 2 item yang dapat di-looping

    for(let i=0; i<gender.length;i++){
        console.log(gender[i])
        // mengecek apakah dari item yang di-looping terdapat hasil:
        // checked = true 
        // maka gender akan di-set sesuai value dari radio button yang dipilih
        if(gender[i].checked === true){
            gender_val = gender[i].value
        }
    }

    //saat di-submit jika semua field terisi makan akan muncul pesan sukses

    if(uname_val !== "" && email_val !== "" && pass_val !== "" ){
        console.log(uname_val, email_val, pass_val);
        regisSection.classList.add("hide");
        regisSuccess.innerHTML = `
            <h3>Akun kamu berhasil terdaftar! Username: <span class="red">${uname_val}</span> dan kelamin kamu ${gender_val}</h3>
            <h4>Klik di sini untuk kembali ke <a href="/" >Home</a></h4>
        `;
    }else{
        // double validation jika ada field yang tidak terisi/kosong maka muncul error
        regisSuccess.innerHTML = `
            <h3 class="red">Gagal Regitrasi! Semua Field harus diisi!</h3>
        `;
    }
}

// saat form di-submit, akan menjalankan fungsi submitRegis

regisForm.addEventListener('submit', submitRegis);