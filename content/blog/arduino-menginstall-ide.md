---
title: 'Arduino: Menginstal Arduino IDE'
date: 2021-03-01T21:03:25.807Z
draft: false
description: Cara menginstal Arduino IDE pada berbagai platform OS.
tags:
    - Arduino
    - IDE
image: /img/arduino/arduino-ide-splash.png
img_desc: 'Tampilan *splash screen* Arduino IDE oleh Martino Facchin dari [Arduino Blog](https://blog.arduino.cc/2015/11/03/arduino-ide-1-6-6-released-and-available-for-download/ "Arduino IDE 1.6.6 released and available for download")'
---

Arduino IDE mendukung berbagai Platform OS seperti; Microsoft Windows, Mac OS X dan Linux sehingga petunjuk penginstalannya akan dibagi berdasarkan platform OS. Saat artikel ini ditulis versi stabil Arduino IDE terbaru adalah 1.8.13.

## Microsoft Windows

1. Unduh Arduino IDE
   
   Kita dapat mengunduh versi terbaru Arduino IDE di halaman [Software Arduino](https://www.arduino.cc/en/software).

   ![Download page](/img/arduino/download-page-win.png "Sebaiknya kita memilih pilihan **Win 7 and Newer** yang berupa *installer* `.exe`")

   Perhatikan bahwa terdapat beberapa pilihan untuk platform Windows, sebaiknya kita memilih *installer* `.exe` (yang ditandai warna merah), agar ketika kita melakukan penginstalan maka, semua kebutuhan yang kita perlukan untuk menggunakan Arduino IDE (termasuk *driver board* Arduino) akan ikut terinstal.

   Jika kita ingin menggunakan Arduino IDE secara *portable* kita dapat mengunduh file `.zip`. Tetapi yang perlu diingat ketika kita menggunakan Arduino IDE secara *portable*, kita perlu menginstal *driver board* Arduino secara manual.

   Khusus untuk pengguna Windows 8.1 dan 10 dapat menginstal Arduino IDE melalui Microsoft App Store.

2. Setujui perjanjian Lisensi

   ![Arduino IDE install process on Windows](/img/arduino/win-install-0.png "Klik tombol *I Agree* untuk memyetujui")

3. Pilih komponen yang akan dipasang

   ![Arduino IDE install process on Windows](/img/arduino/win-install-1.png "Pilih komponen yang akan diinstal kemudian klik tombol *Next*")

   Jika kita tidak yakin akan pilihan mana yang akan kita pilih biarkan saja semua komponen tercentang secara *default*.

4. Pilih direktori folder instalasi

   ![Arduino IDE install process on Windows](/img/arduino/win-install-2.png "Tentukan folder instlasi lalu klik tombol *Install*")

   Sebelum memulai proses penginstalan kita perlu menentukan di folder mana Arduino IDE akan diinstal, sebaiknya tetap di `C:\Program Files (x86)\Arduino`. Jika sudah klik tombol *Install* dan proses penginstalannya akan dimulai.

   ![Arduino IDE install process on Windows](/img/arduino/win-install-3.png "Proses penginstalan akan segera di Mulai")

5. Install Driver
   ![Arduino IDE install process on Windows](/img/arduino/win-install-4.png "Kotak dialog untuk menginstal *driver* Arduino")

   Ketika muncul kotak dialog yang menanyakan apakah ingin menginstal device software *(driver)* Arduino klik *Install*. Kemudian tunggu hingga proses penginstalannya selesai. Jika sudah, klik tombol *Close*.

   ![Arduino IDE install process on Windows](/img/arduino/win-install-5.png "Proses penginstalan selesai *(Complete)*")

## Mac OS X

1. Unduh Arduino IDE

   ![Download page](/img/arduino/download-page-mac.png)

   Kita dapat mengunduh versi terbaru Arduino IDE di halaman [Software Arduino](https://www.arduino.cc/en/software) dalam format `.zip` (lihat yang ditandai warna merah); jika kita menggunakan Safari, file tersebut akan diekstrak secara otomatis. Jika kita menggunakan browser lain, kita mungkin perlu mengekstraknya secara manual..

   ![Arduino IDE install process on Mac](/img/arduino/mac-install-0.png)

2. Salin aplikasi Arduino ke dalam folder Aplikasi *(Applications)*.

   ![Arduino IDE install process on Mac](/img/arduino/mac-install-1.png)

## Linux

### Cara Mudah

Jika kita menggunakan varian Ubuntu atau OS Linux yang mendukung `Snap package` (umumnya telah terinstall secara default pada Ubuntu >= 16.04) maka, kita dapat memasang Arduino IDE dengan cara:

1. Buka Terminal dan ketikkan;

   ```bash {linenos=true}
   sudo snap install arduino
   ```

   Masukkan password jika diminta.

2. Jika berhasil maka akan muncul pemberitahuan bahwa pemasangan telah berhasil.

   ![Arduino IDE Installation Via Snap Package](/img/arduino/ubuntu-install-1.png)

3. Buka menu *launcher* dan jalankan Arduino IDE.

   ![Arduino IDE on Menu Launcher](/img/arduino/ubuntu-install-2.png)

## Referensi

1. [*Install the Arduino software (IDE) on Windows PCs* oleh arduino.cc](https://www.arduino.cc/en/Guide/Windows); Diakses pada 3 Maret 2021
2. [*Install the Arduino software (IDE) on OS X* oleh arduino.cc](https://www.arduino.cc/en/Guide/MacOSX); Diakses pada 3 Maret 2021
3. [*Install the Arduino software (IDE) on Linux* oleh arduino.cc](https://www.arduino.cc/en/Guide/Linux); Diakses pada 3 Maret 2021
