---
title: 'Markdown: Sintaks Tambahan'
date: 2021-02-18T18:21:32.502Z
draft: false
description: Sintaks-sintaks tambahan dalam Markdown
tags:
  - Markdown
  - md
image: /img/markdown/markdown-mark.svg
img_desc: "Logo Markdown oleh [Dustin Curtis](https://github.com/dcurtis) dari [markdown-mark Repository](https://github.com/dcurtis/markdown-mark)"
---

## Tinjauan

Sintaks-sintaks dasar `Markdown` sebenarnya cukup untuk digunakan dalam pemformatan elemen yang sederhana, tapi terkadang sintaks-sintaks tersebut dirasa belum cukup bagi sebagian orang. Pada akhirnya beberapa orang dan organisasi mengambil inisiatif untuk menambahkan beberapa sintaks-sintaks tambahan pemformatan seperti; tabel, blok kode, penyorotan sintaks dan lainnya ke dalam sintaks `Markdown`.

Sintaks-sintaks tambahan tersebut tidak dibuat/ditetapkan oleh pembuat aslinya atau suatu badan standarisasi sehingga masing-masing orang/organisasi dapat membuat sintaksnya masing-masing. Ini berakibat pada, sintaks-sintaks tambahan tersebut adakalanya hanya didukung oleh sebagian aplikasi `Markdown` saja. Jadi, penting untuk memastikan bahwa sintaks-sintaks tambahan yang akan kita gunakan didukung oleh aplikasi `Markdown` yang kita gunakan.

## 1. Tabel

Kita dapat membuat elemen *header* tabel dengan menggunakan tiga atau lebih tanda hubung/minus `---` dan tanda garis vertikal/lurus *(pipe)* `|` untuk memisahkan setiap kolom. Contoh;

```md {linenos=true}
| Heading Kolom 1 | Heading Kolom 2 |
| --------------- | --------------- |
| Baris 1 Kolom 1 | Baris 1 Kolom 2 |
| Baris 2 Kolom 1 | Baris 2 Kolom 2 |
| Baris 3 Kolom 1 | Baris 3 Kolom 2 |
```

{{< result >}}
| Heading Kolom 1 | Heading Kolom 2 |
| --------------- | --------------- |
| Baris 1 Kolom 1 | Baris 1 Kolom 2 |
| Baris 2 Kolom 1 | Baris 2 Kolom 2 |
| Baris 3 Kolom 1 | Baris 3 Kolom 2 |
{{< /result >}}

### 1.1 Perataan *(Alignment)*

Untuk mengatur perataan *(Alignment)* teks dalam suatu kolom pada tabel kita dapat menggunakan tanda titik dua `:`. Contohnya; untuk rata kiri `:---`, rata kanan `---:` dan rata tengah `:---:`.

```md {linenos=true}
| Rata kiri   | Rata tengah | Rata kanan  |
| :---------- | :---------: | ----------: |
| Lorem       | Ipsum       | dolor       |
| sit         | amet        | consectetur |
| adipisicing | ametssa     | conitetur   |
```

{{< result >}}
| Rata kiri   | Rata tengah | Rata kanan  |
| :---------- | :---------: | ----------: |
| Lorem       | Ipsum       | dolor       |
| sit         | amet        | consectetur |
| adipisicing | ametssa     | conitetur   |
{{< /result >}}

### 1.2 Memformat Teks dalam Tabel

Kita dapat memformat teks di dalam tabel seperti menebalkan, memiringkan, membuat tautan dsb.

```md {linenos=true}
| Heading Kolom 1            | Heading Kolom 2 |
| -------------------------- | --------------- |
| **tebal**                  | *miring*        |
| [link](https://raziq.tech) | `kode`          |
```

{{< result >}}
| Heading Kolom 1            | Heading Kolom 2 |
| -------------------------- | --------------- |
| **tebal**                  | *miring*        |
| [link](https://raziq.tech) | `kode`          |
{{< /result >}}

Untuk menampilkan karakter garis vertikal/lurus *(pipe)* `|` dalam tabel kita harus menggunakan kode karakter HTML `&#124;`.

```md {linenos=true}
| Heading Kolom 1        | Heading Kolom 2        |
| ---------------------- | ---------------------- |
| Baris 1 &#124; Kolom 1 | Baris 1 &#124; Kolom 2 |
```

{{< result >}}
| Heading Kolom 1        | Heading Kolom 2        |
| ---------------------- | ---------------------- |
| Baris 1 &#124; Kolom 1 | Baris 1 &#124; Kolom 2 |
{{< /result >}}

## 2. Blok Kode

Kita dapat membuat blok kode dengan menggunakan tiga tanda kutip *(backticks)* ` ``` ` atau tiga tanda gelombang *(tilde)* `~~~` pada baris sebelum dan sesudah blok kode.

~~~md {linenos=true}
```
{
  "name": "Budi",
  "id": "BUDI123",
  "age": 25
}
```
~~~

{{< result >}}
```
{
  "name": "Budi",
  "id": "BUDI123",
  "age": 25
}
```
{{< /result >}}

## 2.1 Penyorotan Sintaks *(Syntax Highlighting)*

Untuk menambahkan fitur penyorotan sintaks *(syntax highlighting)* pada suatu blok kode kita harus menuliskan nama sintaks yang akan kita gunakan setelah tiga tanda kutip *(backticks)* ` ``` ` atau tiga tanda gelombang *(tilde)* `~~~`  sebelum kita menuliskan kodenya.

Contoh; untuk membuat penyorotan sintaks JSON maka kita perlu menuliskannya seperti berikut;

~~~md {linenos=true}
```json
{
 "name": "Budi",
 "id": "BUDI123",
 "age": 25
}
```
~~~

{{< result >}}
<pre class="chroma"><code class="language-json" data-lang="json"><span class="p">{</span>
 <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"Budi"</span><span class="p">,</span>
 <span class="nt">"id"</span><span class="p">:</span> <span class="s2">"BUDI123"</span><span class="p">,</span>
 <span class="nt">"age"</span><span class="p">:</span> <span class="mi">25</span>
<span class="p">}</span>
</code></pre>
{{< /result >}}

**Catatan**: Sebelum menggunakan fitur penyorotan sintaks *(syntax highlighting)* pastikan bahwa aplikasi `Markdown` yang kita gunakan mendukung sintaks tersebut.

## 3. Catatan Kaki *(Footnote)*

Untuk membuat referensi catatan kaki, kita dapat menggunakan tanda sisipan `^` dan pengenal di dalam tanda kurung siku `[]` (mis., `[^1]`). Pengenal tersebut bisa berupa angka atau kata, tetapi tidak boleh berisi spasi atau tab. Pengenal hanya menghubungkan referensi catatan kaki dengan catatan kaki itu sendiri.

Untuk menambahkan catatan kaki, kita dapat menggunakan tanda sisipan `^` dan pengenalnya di dalam tanda kurung siku `[]` lalu diikuti tanda titik dua `:` dan spasi kemudian teks catatannya (mis., `[^1]: Ini catatan kaki`). Kita tidak perlu meletakkan catatan kaki di akhir dokumen. Kita dapat meletakkannya di mana saja kecuali di dalam elemen seperti; daftar *(list)*, *blockquote*, dan tabel dsb.

```md {linenos=true}
`Markdown` adalah bahasa markup ringan dengan sintaksis pemformatan teks sederhana.[^1]
Tujuan dari desain utamanya adalah keterbacaan. [^catatanPanjang]


[^1]: "Markdown". 2013-12-04. Diarsipkan dari versi asli tanggal 2004-04-02.

[^catatanPanjang]: Markdown Syntax "Daring Fireball – Markdown – Syntax". 2013-06-13.

    *A Markdown-formatted document should be publishable as-is, as plain text,
    without looking like it’s been marked up with tags or formatting instructions.*
```

{{< result >}}
`Markdown` adalah bahasa markup ringan dengan sintaksis pemformatan teks sederhana.<sup id="fnref:1"><a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a></sup> Tujuan dari desain utamanya adalah keterbacaan. <sup id="fnref:2"><a href="#fn:2" class="footnote-ref" role="doc-noteref">2</a></sup>

<section class="footnotes" role="doc-endnotes">
  <hr>
  <ol>
    <li id="fn:1" role="doc-endnote">
      <p>
        “Markdown”. 2013-12-04. Diarsipkan dari versi asli tanggal 2004-04-02.
        <a href="#fnref:1" class="footnote-backref" role="doc-backlink">↩︎</a>
      </p>
    </li>
    <li id="fn:2" role="doc-endnote">
      <p>Markdown Syntax “Daring Fireball – Markdown – Syntax”. 2013-06-13.</p>
      <p>
        <em>A Markdown-formatted document should be publishable as-is, as plain
        text, without looking like it’s been marked up with tags or formatting
        instructions.</em>
        <a href="#fnref:2" class="footnote-backref" role="doc-backlink">↩︎</a>
      </p>
    </li>
  </ol>
</section>
{{< /result >}}

## 4. ID Judul *(Heading IDs)*

ID pada suatu judul *(heading)* dapat kita tentukan sendiri dengan menuliskan nama ID-nya di antara tanda kurung kurawal `{}` pada baris yang sama dengan judul *(heading)* tersebut. Contoh;


```md {linenos=true}
### Judul {#judul-mantap}
```

Dalam format HTML bentuknya adalah seperti berikut:

```html
<h3 id="judul-mantap">Judul</h3>
```

{{< result >}}

### Judul {#judul-mantap}

{{< /result >}}

## 5. Daftar definisi *(Definition List)*

Daftar definisi dapat dibuat dengan cara; mengetikkan nama istilah di baris pertama. kemudian pada baris berikutnya, mengetikkan tanda titik dua `:` diikuti dengan spasi dan definisinya. Contoh:

```md {linenos=true}
Istilah Pertama
: Ini definisi dari istilah pertama.

Istilah Kedua
: Ini definisi dari istilah kedua.
: Ini definisi lainnya dari istilah kedua.
```

Dalam format HTML bentuknya adalah seperti berikut:

```html {linenos=true}
<dl>
    <dt>Istilah Pertama</dt>
    <dd>Ini definisi dari istilah pertama.</dd>
    <dt>Istilah Kedua</dt>
    <dd>Ini definisi dari istilah kedua.</dd>
    <dd>Ini definisi lainnya dari istilah kedua.</dd>
</dl>
```

{{< result >}}
Istilah Pertama
: Ini definisi dari istilah pertama.

Istilah Kedua
: Ini definisi dari istilah kedua.
: Ini definisi lainnya dari istilah kedua.
{{< /result >}}

**Catatan**: Antar daftar istilah harus dipisahkan baris kosong.

## 6. Teks Tercoret *(Strikethrough)*

Untuk membuat suatu teks tercoret kita harus menambahkan dua tanda gelombang *(tilde)* `~~` sebelum dan sesudah teks tersebut. Contoh;

```md {linenos=true}
Matahari terbit dari ~~barat~~ timur.
```

{{< result >}}
Matahari terbit dari ~~barat~~ timur.
{{< /result >}}

## 7. Daftar tugas *(Task List)*

Untuk membuat item daftar tugas *(task list)* kita harus menambahkan tanda `- [ ]` sebelum daftar item. Sementara untuk membuat item tercentang, ganti spasi dengan huruf `x` yang berada di antara tanda kurung siku tersebut (contoh; `- [x]`).

```md {linenos=true}
- [x] Bangun Pagi
- [ ] Mandi
- [ ] Sarapan
```

{{< result >}}

- [x] Bangun Pagi
- [ ] Mandi
- [ ] Sarapan
{{< /result >}}

## 8. Emoji

Ada dua cara untuk menambahkan emoji ke dokumen `Markdown`; pertama *copy* dan *paste* emoji ke dalam dokumen `Markdown` atau kedua dengan menggunakan *shortcode* emoji di antara tanda titik dua `:` (mis., <code>\:joy\:</code> nantinya akan diformat menjadi 😂).

Kita bisa menggunakan [emojipedia](https://emojipedia.org/) untuk mencari emoji yang ingin kita salin ke dokumen atau [daftar emoji *shortcode*](https://gist.github.com/rxaviers/7360908) jika ingin menggunakan emoji *shortcode*.

## 9. Penautan URL Otomatis

Banyak aplikasi `Markdown` yang secara otomatis mengubah teks URL menjadi tautan. Contohnya ketika kita menuliskan link berikut;

```md {linenos=true}
https://raziq.tech
```

Secara otomatis akan diformat seperti berikut;

```html
<a href="https://raziq.tech">https://raziq.tech</a>
```

{{< result >}}
https://raziq.tech
{{< /result >}}

Jika kita tidak ingin suatu teks URL ditautkan secara otomatis, kita harus mengapit URL tersebut dengan tanda kutip *(backtick)* `` ` ``. Contoh;

```md {linenos=true}
`https://raziq.tech`
```

Maka akan diformat menjadi seperti berikut:

```html
<code>https://raziq.tech</code>
```

{{< result >}}
`https://raziq.tech`
{{< /result >}}

**Catatan:** Cara ini sebenarnya hanya menyiasati agar URL ditampilkan sebagai elemen *code* `<code>` bukan link *anchor* `<a>`.

## Referensi

1. [*Extended Syntax | Markdown Guide* oleh Matt Cone dan kontributor](https://www.markdownguide.org/extended-syntax/); Diakses pada 18 Februari 2021
