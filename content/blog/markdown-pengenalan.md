---
title: "Markdown: Pengenalan"
date: 2021-02-11T06:11:05.798Z
draft: false
description: Pengenalan tentang apa itu Markdown, cara kerja dan kenapa kita harus menggunakannya.
tags:
    - Markdown
    - md
image: /img/markdown-mark.svg
img_desc: "Logo Markdown oleh [Dustin Curtis](https://github.com/dcurtis) dari [markdown-mark Repository](https://github.com/dcurtis/markdown-mark)"
---

## A. Apa Itu Markdown ?

Berbicara tentang `Markdown` sebenarnya kita berbicara tentang dua hal; pertama tentang sebuah sintaks *markup* dan kedua tentang sebuah perangkat lunak.

Jika berbicara tentang sintaks maka, `Markdown` adalah sekumpulan sintaks *markup* yang memungkinkan kita untuk memformat suatu elemen dalam dokumen teks. Sementara jika berbicara tentang perangkat lunak maka, `Markdown` adalah sebuah perangkat lunak yang dapat mengubah dokumen dengan sintaks tadi menjadi dokumen `HTML` atau format lainnya.

![John Gruber dan Aaron Swartz](/img/John_and_Aaron.jpg "John Gruber *(kiri)* dan Aaron Swartz *(kanan)*")

Sumber gambar: Wikimedia [^1] [^2]

`Markdown` dibuat oleh John Gruber dan Aaron Swartz (untuk sintaksisnya) pada tahun 2004 dan saat ini menjadi salah satu bahasa *markup* paling populer di dunia.

## B. Cara Kerja Markdown

Banyak dari kita mungkin terbiasa menulis dokumen dengan menggunakan editor jenis `WYSIWYG` *(what you see is what you get)* misalnya; Microsoft Word, Libre Office dsb. Editor tersebut memungkinkan kita memformat suatu kata/kalimat hanya dengan menekan tombol (atau *shortcut keyboard*) dan perubahannya bisa langsung terlihat di layar. Sementara, jika kita menggunakan `Markdown` maka, kita harus menuliskan suatu sintaks jika ingin memformat kata/kalimat yang diinginkan. Misalnya, untuk membuat suatu kata/kalimat menjadi miring *(italic)* maka, kita harus menambahkan tanda bintang `*` di awal dan di akhir kata/kalimat tersebut (mis; `*teks*`). [^3]

![Dokumen Markdown di VSCode](/img/markdown-preview.png "Sebuah dokumen `Markdown` yang sedang dibuka di VSCode <br>*sebelah kiri menunjukkan dokumen `Markdown` dan sebelah kanan adalah tampilan pratinjau dari dokumen tersebut*")

Dokumen Markdown umumnya berupa dokumen teks sederhana *(plain text)* sehingga dapat dibaca/tulis dengan mudah menggunakan teks editor yang paling sederhana sekalipun seperti Notepad. Jika kita menginginkan editor yang memiliki fitur lebih lengkap seperti pratinjau dokumen, *syntax highlighting*, dsb kita bisa menggunakan editor yang lebih *advance* seperti `VSCode`, `Atom` dsb. Bahkan, sekarang ini telah banyak teks editor *online* yang mendukung pembuatan dan pengeditan file `Markdown` secara langsung di *browser*.

![Proses](/img/markdown-process.png "Proses penghubahan dokumen `Markdown` hingga dapat ditampilkan di *browser*")

Secara garis besar jika kita ingin menggunakan `Markdown` untuk memformat dokumen maka kita harus;

1. Membuat sebuah dokumen dengan teks editor kemudian menyimpannya sebagai teks sederhana *(plain text)* dengan ekstensi `.md` atau `.markdown`.
2. Menggunakan sintaks-sintaks `Markdown` untuk melakukan pemformatan.
3. Menggunakan aplikasi `Markdown` untuk mem-*parsing* atau menguraikan dokumen tadi menjadi file `HTML` (umumnya) atau file lainnya seperti `PDF`.

## C. Kenapa Harus Menggunakan Markdown?

### 1. Sintaksnya Sederhana

Menurut John Gruber, sintaks `Markdown` dibuat dengan tujuan...

> *... to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.*
>
> ***Terjemahan***:... membuatnya  dapat dibaca semaksimal mungkin. Idenya adalah bahwa dokumen dengan format `Markdown` harus dapat diterbitkan sebagaimana adanya, sebagai teks biasa, tanpa terlihat seperti telah ditandai dengan *tag* atau instruksi pemformatan. [^4]

Jadi, tujuan utama sintaks `Markdown` dibuat adalah ***kesederhanaan*** dan ***keterbacaan***. Kita ambil contoh, untuk membuat tampilan berikut:

{{< result >}}
# Raziq Tech

## Selamat datang

**Hai!** ***Kamu*** *sedang* berada di [Raziq Tech Site](https://raziq.tech).
{{< /result >}}

Jika menggunakan HTML maka, kita harus menuliskan kodenya seperti berikut:

```html {linenos=true}
<h1>Raziq Tech</h1>
<h2>Selamat datang</h2>
<p><strong>Hai!</strong> <em><strong>Kamu</strong></em> <em>sedang</em> berada di <a href="https://raziq.tech">Raziq Tech Site</a>.</p>
```

Sementara jika menggunakan `Markdown` kita hanya perlu menulisnya seperti berikut:

```md {linenos=true}
# Raziq Tech

## Selamat datang

**Hai!** ***Kamu*** *sedang* berada di [Raziq Tech Site](https://raziq.tech).
```

Dari perbandingan di atas dapat terlihat bahwa sintaks `Markdown` dapat terbaca dan ditulis dengan lebih mudah dibanding HTML. Hal ini tentunya akan meningkatkan kecepatan kita saat menulis/membaca dokumen dengan menggunakan sintaks `Markdown`.

### 2. Bebas digunakan

`Markdown` adalah perangkat lunak *free* yang tersedia dengan lisensi *open source* BSD. [^5]

### 3. Banyak digunakan dimana-mana

Jika kita biasa *berselancar* di GitHub atau GitLab maka kita akan menemui bahwa hampir sebagian besar repositori yang ada di sana menggunakan `Markdown` untuk membuat dokumentasinya. Bahkan situs web seperti Reddit dan aplikasi chat seperti; Discord, Facebook, Telegram, WhatsApp dsb. menggunakan Markdown untuk memformat teks.

Karena semakin meluasnya implementasi `Markdown` maka kita sekarang-pun dapat menggunakannya untuk membuat buku, bahkan konten halaman web.

### 4. Independen

Independen disini maksudnya adalah bahwa penggunaan `Markdown` tidak tergantung pada suatu *platform* atau aplikasi tertentu untuk dapat bekerja. Hal ini disebabkan karena file *Markdown* hanyalah sebuah file teks biasa *(plain text)* dan hampir semua *platform* baik Windows, Linux dan Unix pasti mendukungnya.

## D. Sintaks-sintaks Markdown

Sintaksis `Markdown` sayangnya tidak memiliki sebuah standarisasi tetap. Akibatnya, muncul berbagai varian sintaks lainnya yang disebut *flavors* seperti; `CommonMark`, `GitHub Flavored Markdown` (`GFM`), `php Markdown Extra`, `R Markdown` dan lainnya.

Sintaks-sintaks dalam `Markdown` umumnya, terbagi menjadi dua yaitu;

1. Sintaks dasar
   Sintaks ini dibuat oleh John Gruber dan didukung oleh hampir semua aplikasi `Markdown`.
2. Sintaks tambahan *(extended)*
   Sintaks ini muncul sebagai upaya untuk melengkapi kekurangan-kekurangan yang ada dalam sintaks dasar, sayangnya sintaks tambahan hanya didukung oleh sebagian aplikasi `Markdown`.

Tabel berikut ini menunjukkan pembagian sintaks-sintaks `Markdown`.

{{< table >}}
| Sintaks Dasar               | Sintaks Tambahan                      |
| --------------------------- | ------------------------------------- |
| Judul *(heading)*           | Tabel                                 |
| Paragraf                    | Blok kode                             |
| Penekanan teks *(Emphasis)* | Catatan kaki                          |
| *Blockquote*                | ID Judul *(Heading IDs)*              |
| Daftar                      | Daftar definisi *(definition lists)*  |
| Kode                        | Teks tercoret *(strikethrough)*       |
| Garis horizontal            | Daftar tugas *(tasks list)*           |
| Tautan                      | Emoji                                 |
| Gambar                      | Tautan URL Otomatis                   |
| *Escaping Characters*       |                                       |
| HTML                        |                                       |
{{< /table >}}

Lebih lanjut sintaks-sintaks dasar akan dibahas [disini](/blog/markdown-sintaks-dasar/) dan sintaks-sintaks tambahan [disini](/blog/markdown-sintaks-tambahan/)

## Kesimpulan

1. `Markdown` adalah sekumpulan sintaks *markup* yang memungkinkan kita untuk memformat dokumen teks kemudian mengubahnya menjadi dokumen `HTML` atau dokumen lainnya dengan menggunakan aplikasi `Markdown`.
2. Keuntungan menggunakan `Markdown` antara lain; sintaksnya sederhana, bebas digunakan, penggunaannya luas dan independen (tidak tergantung pada suatu *platform* atau aplikasi).
3. Sintaks Markdown terbagi menjadi dua yaitu: [sintaks dasar](/blog/markdown-sintaks-dasar/) dan [sintaks tambahan](/blog/markdown-sintaks-tambahan/).

## Referensi

[^1]: [*Foto John Gruber* oleh Randy Stewart](https://commons.wikimedia.org/wiki/File:John_Gruber,_2009_(cropped).jpg) dengan lisensi [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) via Wikimedia Commons; Diakses pada 11 Februari 2021
[^2]: [*Foto Aaron Swartz* oleh Fred Benenson](https://commons.wikimedia.org/wiki/File:Aaron_Swartz_profile.jpg) dengan lisensi [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) via Wikimedia Commons; Diakses pada 11 Februari 2021
[^3]: [*Getting Started | Markdown Guide* oleh Matt Cone dan kontributor](https://www.markdownguide.org/getting-started/); Diakses pada 11 Februari 2021
[^4]: [*Markdown* oleh John Gruber](https://daringfireball.net/projects/markdown/); Diakses pada 11 Februari 2021
[^5]: [*Markdown: License* oleh John Gruber](https://daringfireball.net/projects/markdown/license); Diakses pada 11 Februari 2021
