---
title: 'Markdown: Sintaks Dasar'
date: 2021-02-15T19:04:50.843Z
draft: false
description: Cara penulisan dan contoh penggunaan sintaks-sintaks dasar Markdown.
tags:
  - Markdown
  - md
image: /img/markdown-mark.svg
img_desc: Logo markdown
---

## Tinjauan

Pada pembahasan sebelumnya tentang [pengenalan Markdown](/blog/markdown-pengenalan/) telah jelaskan tentang apa itu `Markdown`, cara kerja dan alasan kenapa kita harus menggunakannya. Sekarang kita akan membahas tentang sintaks-sintaks dasar `Markdown` dimulai dari cara penulisannya sampai kepada contoh penggunaannya.

Daftar sintaks-sintaks berikut ini disebut sebagai sintaks dasar karena sintaks-sintaks tersebut pertama kali dibuat oleh penciptanya, John Gruber dan sintaks-sintaks tersebut didukung oleh hampir semua aplikasi `Markdown`.

## 1. Judul *(Heading)*

Untuk membuat judul atau *heading*, kita bisa menggunakan tanda pagar `#` yang ditempatkan di depan kata atau kalimat. Jumlah tanda pagar tersebut harus sesuai dengan level/tingkat *heading*-nya.

Misalnya, untuk membuat *heading* level tiga `<h3>`, maka kita harus meletakkan tiga tanda pagar di depan kata/kalimat tersebut (mis., `### Header 3`).

{{< table >}}
| `Markdown`               | `HTML`                     | Tampilan                 |
| ------------------------ | -------------------------- | ------------------------ |
| `# Heading Level 1`      | `<h1>Heading Level 1</h1>` | <h1>Heading Level 1</h1> |
| `## Heading Level 2`     | `<h2>Heading Level 2</h2>` | <h2>Heading Level 2</h2> |
| `### Heading Level 3`    | `<h3>Heading Level 3</h3>` | <h3>Heading Level 3</h3> |
| `#### Heading Level 4`   | `<h4>Heading Level 4</h4>` | <h4>Heading Level 4</h4> |
| `##### Heading Level 5`  | `<h5>Heading Level 5</h5>` | <h5>Heading Level 5</h5> |
| `###### Heading Level 6` | `<h6>Heading Level 6</h6>` | <h6>Heading Level 6</h6> |
{{< /table >}}
**Catatan**: Sama seperti format html, level *heading* di `Markdown` hanya sampai 6.

Selain menggunakan tanda pagar `#` kita juga dapat menggunakan tanda `==` untuk heading level 1 dan `--` untuk heading level 2. Contohnya:

```md {linenos=true}
Heading 1
=========

Lorem ipsum dolor sit amet consectetur adipisicing elit.

Heading 2
--------

Lorem ipsum dolor sit amet consectetur adipisicing elit.
```

{{< result >}}
<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet consectetur adipisicing elit.

<h2>Heading Level 2</h2>

Lorem ipsum dolor sit amet consectetur adipisicing elit.
{{< /result >}}

## 2. Paragraf

Untuk membuat paragraf, kita bisa menggunakan baris kosong untuk memisahkan satu atau beberapa baris teks. Contohnya;

```md {linenos=true}
Di sebuah laut yang dalam, terdapat sebuah kerajaan Duyung.

Raja Duyung mempunyai tujuh putri yang cantik-cantik.

Raja Duyung sangat menyayangi ketujuh anaknya.
```

Hasilnya akan terlihat seperti berikut;
{{< result >}}
Di sebuah laut yang dalam, terdapat sebuah kerajaan Duyung.

Raja Duyung mempunyai tujuh putri yang cantik-cantik.

Raja Duyung sangat menyayangi ketujuh anaknya.
{{< /result >}}

## 3. Memformat Teks

`Markdown` mendukung pemformatan text seperti **menebalkan** *(bold)* atau *memiringkan* *(italic)* suatu text.

Untuk menebalkan suatu kata/kalimat, kita perlu menambahkan dua tanda bintang `**` atau dua tanda garis bawah *(underscore)* `__` di awal dan di akhir kata/kalimat, sementara untuk memiringkan kata/kalimat, kita hanya perlu menggunakan satu tanda bintang `*` atau satu tanda garis bawah *(underscore)* `__`  di awal dan di akhir kata/kalimat teks tersebut Contohnya;

```md {linenos=true}
teks biasa — **teks tebal** — *teks miring* — ***teks tebal dan miring***

teks biasa — __teks tebal__ — _teks miring_ — ___teks tebal dan miring___
```

hasilnya:

{{< result >}}
teks biasa — **teks tebal** — *teks miring* — ***teks tebal dan miring***

teks biasa — __teks tebal__ — _teks miring_ — ___teks tebal dan miring___
{{< /result >}}

{{< table >}}
| `Markdown`                    | `HTML`                                            | Hasil                                           |
| ----------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| `teks biasa`                  | `<p>teks biasa</p>`                               | <p>teks biasa</p>                               |
| `**teks tebal**`              | `<strong>teks tebal</strong>`                     | <strong>teks tebal</strong>                     |
| `*teks miring*`               | `<em>teks miring</em>`                            | <em>teks miring</em>                            |
| `***teks tebal dan miring***` | `<em><strong>teks tebal dan miring</strong></em>` | <em><strong>teks tebal dan miring</strong></em> |
{{< /table >}}

## 4. *Blockquote*

Untuk membuat *blockquote*, kita harus menambahkan tanda `>` (lebih besar) di depan suatu paragraf.

contoh:

```md {linenos=true}
> Hai.. Ini adalah blockquote
```

Akan dirender menjadi:
{{< result >}}
> Hai.. Ini adalah blockquote
{{< /result >}}

### 4.1 *Blockquote* dengan multi paragraf

Kita dapat membuat *blockquotes* dengan multi paragraf dengan menambahkan tanda `>` pada baris kosong antar paragraf.

contoh:

```md {linenos=true}
> Lorem ipsum dolor sit amet consectetur adipisicing elit.
> 
> Illo praesentium autem nemo omnis ducimus ab officiis! Ad odio minima in.
```

Akan dirender menjadi:

{{< result >}}
> Lorem ipsum dolor sit amet consectetur adipisicing elit.
>
> Illo praesentium autem nemo omnis ducimus ab officiis! Ad odio minima in.
{{< /result >}}

### 4.2 *Blockquote* yang bersarang

Untuk membuat *blockquote* dalam *blockquote* (bersarang) kita harus menambahkan tanda `>>` di depan paragraf yang kita inginkan.

contoh:

```md {linenos=true}
> Lorem ipsum dolor sit amet consectetur adipisicing elit.
>
>> Illo praesentium autem nemo omnis ducimus ab officiis! Ad odio minima in.
```

Akan dirender menjadi:

{{< result >}}
> Lorem ipsum dolor sit amet consectetur adipisicing elit.
>
>> Illo praesentium autem nemo omnis ducimus ab officiis! Ad odio minima in.
{{< /result >}}

### 4.3 *Blockquote* dengan elemen lainnya

Kita bisa juga dapat menambahkan elemen lainnya ke dalam *blockquote*. Contohnya

```md {linenos=true}
> ### Judul Quote
>
> - Poin 1
> - Poin 2
>
> Apa yang **Anda** pikirkan tentang *hal ini*?
```

hasilnya;

{{< result >}}
> ### Judul Quote
>
> - Poin 1
> - Poin 2
>
> Apa yang **Anda** pikirkan tentang *hal ini*?
{{< /result >}}

**Catatan**: Tidak semua elemen bisa digunakan dalam blockquote.

## 5. Daftar *(List)*

Sama seperti di html, di `Markdown` kita juga dapat menggunakan daftar atau *list* baik yang berurutan *(ordered list)* maupun tidak *(unordered list)*.

### 5.1 *Ordered List*

Untuk membuat daftar berurutan *(ordered list)*, kita harus menambahkan angka diikuti dengan titik pada tiap baris item. Nomor tersebut tidak harus berurutan, tetapi harus dimulai dengan nomor satu.

contoh;

```md {linenos=true}
Menggunakan nomor berurutan:
1. Pertama
2. Kedua
3. Ketiga

Menggunakan nomor 1 semuanya:
1. Pertama
1. Kedua
1. Ketiga

Menggunakan nomor acak (harus dimulai dari 1):
1. Pertama
8. Kedua
5. Ketiga
```

maka akan dirender menjadi berikut;

{{< result >}}
Menggunakan nomor berurutan:
1. Pertama
2. Kedua
3. Ketiga

Menggunakan nomor 1 semuanya:
1. Pertama
1. Kedua
1. Ketiga

Menggunakan nomor acak (harus dimulai dari 1):
1. Pertama
8. Kedua
5. Ketiga
{{< /result >}}

### 5.2 *Unordered List*

Untuk membuat daftar yang tidak berurutan, kita harus menambahkan tanda hubung `-`, tanda bintang `*`, atau tanda tambah `+` pada tiap baris item.

```md {linenos=true}
Menggunakan -
- Pertama
- Kedua
- Ketiga

Menggunakan *
* Pertama
* Kedua
* Ketiga

Menggunakan +
+ Pertama
+ Kedua
+ Ketiga
```

{{< result >}}
Menggunakan -
- Pertama
- Kedua
- Ketiga

Menggunakan *
* Pertama
* Kedua
* Ketiga

Menggunakan +
+ Pertama
+ Kedua
+ Ketiga
{{< /result >}}

### 5.3 Daftar Bertingkat

Jika kita ingin membuat daftar bertingkat di `Markdown` maka kita harus menggunakan indentasi. Contoh;

```md {linenos=true}
Ordered List:
1. Pertama
   1. Pertama dari Pertama
   2. Kedua dari Pertama
      1. Pertama dari Kedua yang pertama

         Ini paragraf urutan pertama dari Kedua yang pertama.

Unordered List:
- Pertama
  - Pertama dari Pertama
  - Kedua dari Pertama
    - Pertama dari Kedua yang pertama

      Ini paragraf urutan pertama dari Kedua yang pertama.

Gabungan
1. Pertama
   - Pertama dari Pertama
     1. Pertama dari Pertama yang pertama
     2. kedua dari Pertama yang pertama
```

{{< result >}}
Ordered List:
1. Pertama
   1. Pertama dari Pertama
   2. Kedua dari Pertama
      1. Pertama dari Kedua yang pertama

         Ini paragraf urutan pertama dari Kedua yang pertama.

Unordered List:
- Pertama
  - Pertama dari Pertama
  - Kedua dari Pertama
    - Pertama dari Kedua yang pertama

      Ini paragraf urutan pertama dari Kedua yang pertama.

Gabungan
1. Pertama
   - Pertama dari Pertama
     1. Pertama dari Pertama yang pertama
     2. kedua dari Pertama yang pertama
{{< /result >}}

## 5. Kode

Untuk menunjukkan kata/kalimat adalah sebuah kode, maka kita harus mengapit kata/kalimat tersebut dengan tanda petik *backtick* (umumnya terletak di samping kiri tombol angka 1) `` ` ``.

```md {linenos=true}
`kode program`
```

{{< result >}}
<p><p><code>kode program</code></p></p>
{{< /result >}}

## 6. Garis Horizontal

Membuat garis horizontal di `Markdown` dapat dilakukan dengan menggunakan tiga atau lebih tanda bintang `***`, tanda hubung `---`, atau garis bawah `___`.

```md {linenos=true}
Lorem ipsum dolor sit amet.

---

Lorem ipsum dolor sit amet.

***

Lorem ipsum dolor sit amet.

___

Lorem ipsum dolor sit amet.
```

**Catatan**: Untuk menjamin kompabilitas, sebaiknya kita meletakkan baris kosong sebelum dan sesudah garis horizontal.

{{< result >}}
Lorem ipsum dolor sit amet.

---

Lorem ipsum dolor sit amet.

***

Lorem ipsum dolor sit amet.

___

Lorem ipsum dolor sit amet.
{{< /result >}}

## 7. Tautan

Untuk membuat tautan atau *link*, kita harus mengapit teks tautan dalam tanda kurung siku, `[]` lalu diikuti dengan alamat URL-nya di dalam tanda kurung `()`.

```md {linenos=true}
Selamat datang di [Raziq Tech](https://raziq.tech).
```

{{< result >}}
Selamat datang di [Raziq Tech](https://raziq.tech).
{{< /result >}}

Kita juga dapat menambahkan judul atau *title* untuk *tooltips* yang akan muncul saat pengguna mengarahkan kursor ke tautan.

```md {linenos=true}
Selamat datang di [Raziq Tech](https://raziq.tech "Link Raziq Tech").
```

{{< result >}}
Selamat datang di [Raziq Tech](https://raziq.tech "Link Raziq Tech").
{{< /result >}}

Jika kita ingin membuat link dengan hanya URL-nya saja maka kita harus mengapit alamat URL tersebut dengan tanda kurung sudut *(angle brackets)* `< >`.

```md {linenos=true}
<https://raziq.tech>
```

{{< result >}}
<https://raziq.tech>
{{< /result >}}

## 8. Gambar

Menyisipkan gambar di `Markdown` dapat dilakukan dengan cara yang hampir sama dengan membuat tautan hanya tinggal menambahkan tanda seru `!` di depannya saja. Nantinya teks yang berada dalam kurung siku akan berfungi sebagai *alternative text* yang akan ditampilkan ketika gambarnya gagal dimuat.

```md {linenos=true}
syntax:
[![alt text gambar](url_gambar)](url_link)

contoh:
![Logo Raziq Tech](/icons/icon-192x192.png)
```

{{< result >}}
![Logo Raziq Tech](/icons/icon-192x192.png)
{{< /result >}}

Sama seperti membuat tautan kita juga dapat menambahkan judul atau *title* untuk *tooltips*.

```md {linenos=true}
syntax:
[![alt text gambar](url_gambar "Title gambar")](url_link)

contoh:
![Logo Raziq Tech](/icons/icon-192x192.png "Ini logo Raziq Tech")
```

{{< result >}}
![Logo Raziq Tech](/icons/icon-192x192.png "Ini logo Raziq Tech")
{{< /result >}}

Untuk menambahkan link ke gambar, kita bisa melakukan dengan cara;

```md {linenos=true}
syntax:
[![alt text gambar](url_gambar "Title gambar")](url_link)

contoh:
[![Logo Raziq Tech](/icons/icon-192x192.png "Ini logo Raziq Tech")](https://raziq.tech)
```

{{< result >}}
[![Logo Raziq Tech](/icons/icon-192x192.png "Ini logo Raziq Tech")](https://raziq.tech)
{{< /result >}}

## 9. *Escaping Characters*

Untuk menampilkan karakter yang sebenarnya digunakan untuk memformat teks dalam dokumen `Markdown` (mis., karakter `*`, `#` dll) kita harus menambahkan garis miring terbalik *(backslash)* `\` di depan karakter tersebut.

Contohnya, jika kita ingin menampilkan tanda bintang `*` di depan kalimat, maka kita harus menambahkan tanda garis miring terbalik *(backslash)* `\` di depan kalimat tersebut. Jika tidak maka, `Markdown` akan memformatnya menjadi sebuah daftar tak berurutan *(unordered list)*.

```md {linenos=true}
* Diawali tanpa *(backslash)* `\`.

\* Diawali dengan *(backslash)* `\`.
```

{{< result >}}
* Diawali tanpa *(backslash)* `\`.

\* Diawali dengan *(backslash)* `\`.
{{< /result >}}

Kita dapat menggunakan garis miring terbalik *(backslash)* untuk melakukan *Escaping Characters* pada karakter berikut.

| Karakter| Nama                                      |
|---------| ----------------------------------------- |
| `\`     | garis miring terbalik *(backslash)*       |
| `` ` `` | tanda petik *(backtick)*                  |
| `*`     | tanda bintang *(asterisk)*                |
| `_`     | garis bawah *(underscore)*                |
| `{}`    | kurung kurawal *(curly braces)*           |
| `[]`    | tanda kurung siku *(brackets)*            |
| `<>`    | tanda kurung sudut *(angle brackets)*     |
| `()`    | tanda kurung *(parentheses)*              |
| `#`     | tanda pagar *(pound sign)*                |
| `+`     | tanda tambah *(plus sign)*                |
| `-`     | tanda minus/hubung *(minus/hyphens sign)* |
| `.`     | titik *(dot)*                             |
| `!`     | tanda seru *(exclamation mark)*           |
| `|`     | *(pipe)*                                  |

## 10. HTML

Banyak aplikasi `Markdown` yang memungkinkan kita untuk menggunakan tag `HTML` dalam teks berformat `Markdown`. Ini berguna jika kita ingin melakukan pemformatan elemen yang tidak diakomodasi oleh sintaks `Markdown`. Untuk menggunakan tag `HTML` dalam dokumen `Markdown` kita dapat langsung menuliskan tag `HTML` ke dalam file tersebut.

```md {linenos=true}
ini **teks tebal**, <em>teks miring</em> dan <u>teks dengan garis bawah</u>
```

{{< result >}}
ini **teks tebal**, <em>teks miring</em> dan <u>teks dengan garis bawah</u>
{{< /result >}}

Untuk alasan keamanan, tidak semua aplikasi `Markdown` mendukung tag `HTML` dalam dokumen `Markdown`. Beberapa aplikasi hanya mendukung sebagian dari tag `HTML`.

Kita tidak dapat menggunakan sintaks `Markdown` di dalam tag `HTML` tingkat blok. Misalnya;

```md {linenos=true}
<p>italic and **bold**</p>
```

## Referensi

1. [*Basic Syntax | Markdown Guide* oleh Matt Cone dan kontributor](https://www.markdownguide.org/basic-syntax/); Diakses pada 15 Februari 2021
2. [*Daring Fireball: Markdown Syntax Documentation* oleh John Gruber](https://daringfireball.net/projects/markdown/syntax); Diakses pada 15 Februari 2021
