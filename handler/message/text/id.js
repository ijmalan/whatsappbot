exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

Sticker Creator:
1. *#sticker*

2. *#sticker* _<Url Gambar>_

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_


Downloader:
1. *#tiktok* _<tiktok url>_

2. *#fb* _<post/video url>_

3. *#ig* _<instagram post url>_

4. *#twt* _<twitter post url>_

Lain-lain:
1. *#translate* _<kode bahasa>_

2. *#resi* _<kurir>_ _<nomer resi>_

3. *#ceklokasi* _Kirim Lokasi anda, terus Reply/Balas dengan Hashtag<#ceklokasi>_

4. *#meme* _<teks atas>_ | _<teks bawah>_

5. *#donasi*

Hope you have a great day!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah beberapa fitur admin grup yang ada pada bot ini!

1. *#kick* @user
Untuk mengeluarkan member dari grup (bisa lebih dari 1).

2. *#promote* @user
Untuk mempromosikan member menjadi Admin grup.

3. *#demote* @user
Untuk demosikan Admin grup.

4. *#tagall*
Untuk mention semua member grup. (Premium Only)

5. *#del*
Untuk menghapus pesan bot (balas pesan bot dengan #del)`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi melalui link berikut:
1. Saweria: https://saweria.co/ijmalan

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
