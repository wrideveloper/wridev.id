---
title: Intro to Cybersecurity and How to Start
description: Gimana sih cara belajar cybersecurity? Artikel ini akan membahas cara belajar cybersecurity, mulai dari pengenalan, pre-requisite, starting point, dan motivasi.
image: https://i.ibb.co/cQS5KBV/vincenzo-malagoli-flfh-Al-Ew-Dq4-unsplash.jpg
author: Fikri Muhammad Abdillah
github: https://github.com/FlaBBB
linkedin: https://www.linkedin.com/in/fikri-muhammad-abdillah-33a794275/
date: 2025-02-19
tags:
  - cyber-security
---

Beberapa temen tanya "bg gimana awal-awal belajar cybersecurity?", "Awal-awal belajar cybersecurity mulai dr mana?", dan banyak lagi. Daripada jawab satu-satu, dan jawabannya engga konsisten, jadi mending ditulis jadi artikel, berhubung juga WRI mau ada club/unit cybersecurity, jadi mungkin artikel ini bisa jadi referensi awal buat temen-temen yang mau belajar cybersecurity.

Sebelumnya aku mau mention [Agus Prasetyo](https://www.linkedin.com/in/agus-prasetyo-6005a9231/) dan [Singgih Wahyu Permana](https://github.com/eeswepe) yang udah ikut bikin artikel ini.

*Disclaimer: artikel ini bertujuan untuk tujuan belajar, jadi kami tidak bertanggung jawab atas tindakan kriminal yang terjadi*

# Intro

Sebelum masuk ke cara belajar cybersecurity, kita harus kenalan sama yang namanya cybersecurity. Jadi secara sederhana, cybersecurity adalah bidang dalam Teknologi Informasi (IT) yang berfokus pada perlindungan sistem komputer, jaringan, dan data dari akses ilegal, kerusakan, pencurian, dan berbagai bentuk serangan cyber lainnya.  Cakupan cybersecurity sangat luas, mencakup berbagai aspek, mulai dari melindungi data pribadi di smartphone kita, mengamankan sistem perbankan online, hingga menjaga infrastruktur kritikal negara dari serangan cyber teroris.

Dengan begitu, ada banyak jalur karier (role path) yang bisa dipilih. Role-role ini dibagi berdasarkan fokus kerjaannya, seperti:

1. **Cyber defense & analysis**
    - Cybersecurity consultants
    - SOC analyst
    - Threat intelligence analyst
2. **Ethical hacking & testing systems**
    - Penetration tester 
    - Security auditor
    - Vulnerability assessor
3. **Governance and risk management**
    - Cyber risk analyst
    - Cybersecurity compliance consultant
    - Chief information security officer (CISO)
4. **Incident response & digital forensics**
    - Incident responder
    - Forensic analyst 
5. **Cybersecurity engineering & operations**
    - Cybersecurity engineer
    - DevSecOps
    - Security Architect

Kalau mau tahu lebih detail tentang tiap role, skill yang perlu dikuasai, dan sertifikasi yang mendukung, bisa cek artikel ini: [5 Cybersecurity Career Paths: A Roadmap to Your First Role](https://www.hackthebox.com/blog/cybersecurity-career-paths).

## Pembagian Tim dalam Cybersecurity
Nah, setelah tahu ada banyak role dalam cybersecurity, mungkin muncul pertanyaan: gimana sih cara kerja mereka di dunia nyata? Soalnya, keamanan itu bukan cuma tanggung jawab satu orang atau satu role aja—harus ada tim yang saling mendukung.

Karena cakupannya yang luas, cybersecurity dibagi ke dalam beberapa tim dengan tugas masing-masing. Merujuk pada [The Infosec Colour Wheel](https://hackernoon.com/introducing-the-infosec-colour-wheel-blending-developers-with-red-and-blue-security-teams-6437c1a07700), ada 7 jenis tim dalam dunia cybersecurity:, terdapat 7 tim pada bidang cybersecurity
![infosec colour wheel](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fce%2Ffb%2Fb2%2Fcefbb22ceb12b7ace8997560f6efa17d.png&f=1&nofb=1&ipt=6ee04604c904a2863c129bcee8e40104b6a5859a6a5222850b1310b549855433&ipo=images)

Dari 7 tim di atas, ada 3 team utama yaitu : **Red Team**, **Blue Team**, dan **Yellow Team**.
![main team](https://miro.medium.com/v2/resize:fit:720/format:webp/1*floZveKhNz7EVpCHitGuuA.png)

1. **Red Team** – Tim penyerang yang tugasnya mencari celah keamanan dengan cara berpikir seperti hacker.
2. **Blue Team** – Tim bertahan yang fokus melindungi sistem dari serangan cyber.
3. **Yellow Team** – Tim pengembang yang memastikan keamanan sudah diterapkan sejak tahap pengembangan software.

Untuk **Green team**, **Orange team**, dan **Purple team** adalah irisan/gabungan dari 2 jenis tim utama.

Mungkin kalian lebih familiar dengan **Red Team** dan **Blue Team**, karena sebagian besar aktivitas cybersecurity ada di dua tim ini. Makanya, kalau dirangkum secara sederhana, sebenarnya dunia cybersecurity itu cuma punya dua tim utama: penyerang (**Red Team**) dan bertahan (**Blue Team**).


# Pre-requisite

Selanjutnya untuk belajar cybersecurity, ada beberapa syarat yang harus terpenuhi terlebih dahulu, yaitu:
1. **Basic IT Knowledge**: Sebelum belajar cybersecurity, sebaiknya sudah memiliki pengetahuan dasar tentang IT, seperti Networking, Operating System, dan Programming.
2. **Ada computer/laptop**: Ya kalo ga ada ntar susah, masa pake termux di hp :v
3. **Niat**: Dan yang terpenting adalah niat, soalnya kalo engga niat ya percuma.

Nah, setelah persiapan diatas sudah siap, selanjutnya kita bisa lanjut dengan pembahasan dibawah.

# Starting Point

## Linux

![image](https://hackmd.io/_uploads/HyZn0IZ5yx.png)

Para pelaku cybersecurity sering banget pakai Linux sebagai [sistem operasi](https://id.wikipedia.org/wiki/Sistem_operasi) mereka. Jadi, rasanya kurang afdhol kalau belum kenal Linux.

Linux sendiri itu sistem operasi, mirip kayak Windows. Tapi, Linux lebih sering dipakai buat server karena nggak butuh lisensi, jadi bisa dipakai gratis. Selain itu, Linux juga open-source, bebas dipakai, dan super customizable. Karena bisa dikustomisasi sesuai kebutuhan dan juga sering di pakai sebagai core dari aplikasi (server), banyak orang di dunia cybersecurity yang suka pakai Linux.

Di linux ada yang namanya [distro](https://id.wikipedia.org/wiki/Distribusi_Linux), distro sendiri merupakan variant linux, setiap variant linux memiliki keunikannya sendiri-sendiri contohnya itu Ubuntu, Debian, Arch-Linux, Kali-Linux, Linux Mint, Fedora, dll. Simple nya linux memiliki macam-macam flavour. Dari berbagai macam ~~flavour~~ distro, jika anda baru memakai linux dan baru belajar cybersecurity, disarankan untuk  memakai distro kali-linux, karena kali-linux sudah pre-installed tools yang berhubungan dengan security, jadi tidak repot untuk install manual lagi.

Nah karena sudah kenal sama linux, selanjutnya kita bisa install linux di laptop. Ada beberapa cara untuk install linux:
### 1. Virtual Machine

Jadi Virtual Machine yang disingkat menjadi VM adalah implementasi perangkat lunak dari sebuah mesin komputer yang dapat menjalankan program sama seperti layaknya sebuah komputer asli ([Wikipedia](https://id.wikipedia.org/wiki/Mesin_virtual)). Singkatnya Virtual Machine adalah OS Emulator, jadi bisa jalanin Windows, Mac, Linux, bahkan android di dalam OS defaultnya.

Virtual Machine ini menggunakan third party apps, apps nya juga bermacam-macam, ada Virtual Box, VM-Ware, dll.

**Kelebihan**:
- Lebih simple saat instalasi.
- Lebih fleksibel dibandingkan dual-boot, bisa menggunakan beberapa OS sekaligus dalam satu waktu

**Kekurangan**:
- Berat, karena ada beberapa OS dalam 1 computer, dan juga kalau pakai virtual machine pasti menggunakan linux GUI, membuatnya banyak memakai resource (RAM, CPU, GPU, dll).

**Tutorial**: https://www.youtube.com/watch?v=sAMnXte56yYa

### 2. WSL (Windows Subsystem Linux)

WSL ini sedikit mirip dengan yang diatas, namun bedanya wsl ini tidak memakai software third-party namun menggunakan fitur tambahan pada windows, jadinya engga perlu install apps tambahan.

**Kelebihan**:
- Lebih ringan dibanding virtual box, karena jika pake wsl tidak perlu memakai GUI, cukup terminal nya saja cukup, itu yang membuat lebih ringan. selain itu WSL itu tidak benar2 menjalankan sistem operasi secara penuh.
- Sudah terintegrasi dengan windows, jadi tidak perlu susah-susah setup untuk integrasi ke windows.
Serangan cyber bisa kena ke siapa aja—bukan cuma perusahaan besar, tapi juga orang biasa. Dengan belajar cybersecurity, kamu nggak cuma bisa melindungi dirimu sendiri dari serangan seperti phishing atau malware, tapi juga bisa bantu orang lain supaya nggak jadi korban kejahatan digital.

**Kekurangan**:
- Hanya support Windows, dengan minimal Windows 10 version 2004.
- Instalasi sedikit lebih rumit.

**Tutorial**: https://github.com/GTekSD/WSL2-kali-setup

### 3. Dual Boot

Yang terakhir ada Dual Boot, Dual Boot ini jadi ada beberapa OS yang terinstall pada hardware (computer/laptop), beda dengan virtual box, Dual Boot ini, OS nya benar-benar terinstall pada hardware, dan masing-masing OS akan memiliki partisi penyimpanannya sendiri, dan juga dalam satu waktu akan hanya bisa menggunakan 1 OS, jadinya untuk satu resource hanya.

**Kelebihan**:
- Jauh lebih ringan dibandingkan memakai virtual machine, karena seluruh resource hanya di fokuskan ke dalam 1 OS saja.

**Kekurangan**: 
- Instalasi lebih rumit
- Tidak se-fleksibel virtual machine maupun WSL.Serangan cyber bisa kena ke siapa aja—bukan cuma perusahaan besar, tapi juga orang biasa. Dengan belajar cybersecurity, kamu nggak cuma bisa melindungi dirimu sendiri dari serangan seperti phishing atau malware, tapi juga bisa bantu orang lain supaya nggak jadi korban kejahatan digital.

**Tutorial**: https://www.youtube.com/watch?v=2vTVA-Nq0bw

## Mengasah Skill

Belajar cybersecurity sendiri merupakan longlife learning dikarenakan bidang ini sendiri memiliki cakupan yang sangat luas didunia IT yang terus berkembang dengan pesat. Oleh karena itu, kita harus terus belajar agar tidak tertinggal.


Untuk belajar cybersecurity sendiri dapat dimulai dengan berbagai macam cara, kurang lebih sebagai berikut:

### Ikut Tutorial

Langkah ini merupakan cara yang paling mudah bagi beginner untuk mulai terjun pada bidang cybersecurity. Tutorial dari channel youtube The Cyber Mentor terutama playlist [The-Cyber-Mentor: Full-Length Hacking Courses](https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47) cukup untuk menjadi starting point. Dalam playlist itu sudah ada penjelasan tentang linux, command dalam linux, dan banyak lagi. Hal yang penting yang jadi catatan yaitu pastikan melihat video disertai dengan praktik, karena cysec sendiri butuh banyak parktik.

### Artikel / Wiki

Bagi yang lebih suka membaca, dapat membaca artikel / wiki tentang cybersecurity. Berikut beberapa list artikel yang dapat kalian jadikan sumber bacaan: 
- [CTF Wiki - Mahaloz](https://ctf-wiki.mahaloz.re/reverse/introduction/)
- [CTF 101](https://ctf101.org/)
- [Hacktricks](https://book.hacktricks.wiki/en/index.html)

### Hands-On Lab

Cara yang paling ampuh buat belajar adalah praktek langsung lewat lab - lab atau soal yang ada pada platform cybersecurity. Berikut platform - platform yang bagus :
- [HackTheBox](https://www.hackthebox.com/)
- [Tryhackme](https://tryhackme.com/)
- [Letsdefend](https://letsdefend.io/)
- [OverTheWire](https://overthewire.org/wargames/)

### Kompetisi

Sudah banyak kompetisi cybersecurity dalam lingkup nasional maupun internasional. Kebanyakan kompetisi yang diadakan dalam format Capture The Flag (CTF). mungkin bagi yang ga tau CTF itu apa, jadi CTF itu,

> Capture the Flag (CTF) in computer security is an exercise in which participants attempt to find text strings, called "flags", which are secretly hidden in purposefully-vulnerable programs or websites. They can be used for both competitive or educational purposes. In two main variations of CTFs, participants either steal flags from other participants (attack/defense-style CTFs) or from organizers (jeopardy-style challenges). A mixed competition combines these two styles.
>
> https://en.wikipedia.org/wiki/Capture_the_flag

jadi singkatnya, ada sebuah string (kata-kata) yang disebut flag dan nantinya di sembunyikan pada setiap challenge (cth: flag{kata-kata-hari-ini}).
bentuknya CTF ini gamifikasi, jadi ada leaderboard yang berisi top peserta, bikin makin terpacu untuk belajar.

CTF sendiri memiliki beberapa tipe:

**1. Jeopardy**

CTF Jeopardy ini adalah tipe dimana peserta akan diberikan beberapa macam problem/masalah di setiap kategori nya, lalu peserta disuruh untuk menyelesaikan problem tersebut (mirip dengan Competitive Programming, tapi di CTF dibagi jadi beberapa kategori)

CTF Jeopardy ini memiliki beberapa kategory challenge, diantaranya:
- Reverse Engineering: Menganalisis program atau file biner untuk memahami cara kerjanya.
- Pwn/Exploitation: Mengeksploitasi kerentanan di program atau sistem untuk mendapatkan akses tertentu.
- Web Exploitation: Menemukan dan mengeksploitasi kerentanan pada aplikasi web seperti XSS, SQLi, dan CSRF.
- Cryptography: Memecahkan tantangan terkait enkripsi dan kriptografi (misalnya, RSA, AES).
- Steganography: Menemukan informasi tersembunyi di dalam file (misalnya, gambar, audio).
- Forensics: Menganalisis artefak digital seperti file dump memori, paket jaringan, atau gambar disk. Kategori Steganography juga sering nyelip di sini.
- Miscellaneous: Tantangan dengan tema unik seperti OSINT (Open Source Intelligence) atau trivia teknis.

Untuk awal mula belajar dengan CTF-Jeopardy, bisa mulai dari platform [PicoCTF](https://play.picoctf.org/practice),
Untuk awal mula bisa belajar di PicoCTF, dan lihat video ini: https://www.youtube.com/watch?v=8ev9ZX9J45A&pp=ygUQY3RmIGludHJvZHVjdGlvbg%3D%3D

Untuk platform belajarnya:
- [PicoCTF](https://play.picoctf.org/practice)
- [CTFLearn](https://ctflearn.com/)
- [247CTF](https://247ctf.com/)

Bisa juga ikut kompetisi online di [ctftime](https://ctftime.org/) tenang aja disini kompetisinya tidak dipungut biaya.

**2. Boot2Root**

Model kompetisi yang lainnya yaitu Boot2root. Untuk boot2root ini seperti simulasi attack server secara langsung, jadi diberikan service (dapat berupa web, ssh, samba, dll) yang dapat di exploitasi, tujuannya yaitu untuk menggunakan celah tersebut untuk masuk ke dalam server, sampai dengan privilege root (paling tinggi).

Untuk sumber belajarnya:
- [HackTheBox](https://www.hackthebox.com/)
- [Tryhackme](https://tryhackme.com/)
- [Hacktricks](https://book.hacktricks.wiki/en/index.html)
- [Vulnhub](https://www.vulnhub.com/)
- [OverTheWire](https://overthewire.org/wargames/)

## Motivasi

Biar engga patah semangat terus berhenti di tengah jalan atau bahkan engga mulai sama sekali, pasti butuh yang namanya motivasi.

Motivasi bisa dari macam-macam, yang paling dasar itu adalah motivasi dari tujuan, kita bisa memiliki tujuan biar semakin termotivasi buat belajar suatu hal. dan juga dengan tujuan kita bisa fokus dengan mempelajari satu hal yang selaras dengan tujuan kita.

Ada beberapa hal yang bisa di jadikan tujuan di sini:

### Melindungi Diri Sendiri & Orang Lain

Serangan cyber bisa kena ke siapa aja—bukan cuma perusahaan besar, tapi juga orang biasa. Dengan belajar cybersecurity, kamu nggak cuma bisa melindungi diri sendiri dari serangan seperti phishing atau malware, tapi juga bisa bantu orang lain supaya nggak jadi korban kejahatan digital.

### Mastering Sided Team

Seperti penjelasan pada intro, terdapat berbagai macam team dalam bidang cybersecurity, untuk yang paling normal itu red team atau blue team, kalian dapat memilih salah satu dari kedua team tersebut untuk dijadikan tujuan.

### Sertifikasi

Selagi mastering side team yang dipilih, anda bisa target sertifikat yang ingin diraih. Disini sertifikat penting, karena untuk masuk kerja atau menerima client, harus punya sertifikat agar dapat dipercaya, dan dianggap lebih professional.

### Jalan-jalan ke luar negeri

Jika anda sering ikut CTF, lalu join team international, akan banyak chance untuk bisa jalan-jalan ke luar negeri, karena Final CTF biasanya di adakan onsite, dan team inter biasanya akan mengakomodasi player nya.

### Uang

Jika motivasi diatas kurang, pasti yang ini bakal langsung tertarik. Jadi cybersecurity ini karena yang mengisi bidang ini bisa di bilang lebih sedikit peminat daripada bidang yang lain, apalagi di indonesia sendiri masih terbilang kekurangan tenaga ahli untuk bidang cybersecurity, jadi masih banyak lowongan kerja nya.

Jika sudah memiliki tujuan (atau belum juga engga apa-apa), anda bisa mencari motivasi tambahan/lain, contohnya:

### Challenge Diri Sendiri

Cybersecurity bukan cuma soal teknis, tapi juga butuh logika, kreativitas, dan cara berpikir yang out of the box. Setiap serangan atau celah keamanan punya pola unik, dan tugas kita adalah menemukan solusi terbaik buat menghadapinya. Kalau kamu suka teka-teki atau tantangan, ini bisa jadi motivasi buat terus belajar!

### Join Komunitas

Belajar cybersecurity itu seperti mendaki gunung yang tinggi. Akan jauh lebih mudah dan menyenangkan jika dilakukan bersama-sama. Dengan bergabung dengan komunitas, kamu tidak sendirian dalam perjalanan ini. Dengan join komunitas kamu bisa sharing ilmu, saling dukung/memotivasi, dan juga bisa dapat peluang (pekerjaaan, relasi, dll).

Di WRI ada komunitas baru, yaitu "WRI Cybersecurity Club", di komunitas ini kamu bisa sharing, tanya-tanya, ngerjain CTF bareng (CTFTime), dll. jadi jangan ragu untuk join. [Join Here!](https://discord.gg/XhDvuDxDSn)