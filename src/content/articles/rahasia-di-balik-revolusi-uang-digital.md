---
title: "Bitcoin & Blockchain: Rahasia di Balik Revolusi Uang Digital"
description: Penasaran kenapa Bitcoin dan blockchain jadi perbincangan seru? Yuk, cari tahu bagaimana Bitcoin memudahkan transaksi tanpa perantara bank dan kenapa teknologi blockchain begitu menarik di dunia keuangan digital.
image: "/assets/articles/e50e574a-e193-4bf5-88e6-894d74b89387.webp"
author: Petrus Tyang Agung Rosario
github: https://github.com/petrusthelastking
linkedin: https://www.linkedin.com/in/petrus-rosario-69b149260/
date: 2025-02-21
tags:
  - blockchain
  - bitcoin
  - web3
  - smart-contract
---

Bayangkan jika Anda bisa mengirim uang kepada teman atau keluarga di belahan dunia mana pun tanpa harus melalui bank atau lembaga keuangan lainnya. Bitcoin hadir untuk merevolusi cara kita melakukan transaksi secara online dengan menghilangkan pihak ketiga. Mari kita bahas lebih dalam mengenai bagaimana Bitcoin bekerja, berdasarkan ide-ide yang dijelaskan dalam dokumen asli "Bitcoin: A Peer-to-Peer Electronic Cash System" oleh Satoshi Nakamoto.

## Kenapasih Bitcoin Diciptakan oleh Satoshi Nakamoto ?
Di dunia transaksi digital tradisional, bank dan lembaga keuangan bertindak sebagai perantara. Mereka memastikan bahwa uang yang Anda kirim benar-benar sampai ke tujuan dan transaksi tidak disalahgunakan. Namun, ada beberapa masalah:

- Biaya Transaksi dan Mediasi: Setiap transaksi harus melalui proses verifikasi yang rumit dan mahal.
- Risiko Reversibilitas: Uang yang dikirim melalui bank bisa jadi tidak final karena bisa dibatalkan atau disengketakan.
- Privasi yang Terbatas: Data pribadi Anda harus disimpan dan dikelola oleh pihak ketiga, yang bisa menimbulkan masalah privasi.

Bitcoin dirancang untuk mengatasi semua masalah tersebut dengan mengandalkan teknologi kriptografi—di mana kepercayaan tidak lagi bergantung pada institusi, melainkan pada bukti matematika dan konsensus jaringan.  

## Transaksi Bitcoin: Dari Tanda Tangan Digital ke Rantai Blok
A. Transaksi Sebagai Rantai Tanda Tangan
Dalam Bitcoin, sebuah "koin" tidak seperti koin fisik yang bisa dipegang, melainkan berupa sebuah rangkaian tanda tangan digital. Setiap kali Anda mengirim Bitcoin:

- Tanda Tangan Digital: Anda menggunakan kunci privat Anda untuk menandatangani transaksi. Tanda tangan ini membuktikan bahwa Anda benar-benar pemilik Bitcoin yang akan dikirim.
- Rantai Kepemilikan: Transaksi yang terjadi membentuk sebuah rantai; setiap transaksi mengacu pada transaksi sebelumnya. Ini membantu penerima memastikan bahwa Bitcoin yang diterima benar-benar sah dan tidak pernah dipakai dua kali (double-spending).

B. Menghindari Double-Spending
Masalah double-spending adalah kekhawatiran utama dalam sistem uang digital. Cara Bitcoin mengatasinya adalah dengan:

- Publikasi Transaksi: Semua transaksi diumumkan ke seluruh jaringan, sehingga setiap node (komputer yang terhubung) bisa memeriksa apakah Bitcoin tersebut sudah pernah digunakan sebelumnya.
- Pencatatan Secara Berurutan: Karena transaksi dicatat dalam urutan yang tidak bisa diubah, kita bisa melihat transaksi mana yang terjadi lebih dulu. Jika ada yang mencoba menggunakan Bitcoin yang sama dua kali, transaksi kedua akan dianggap tidak valid.
![image](https://hackmd.io/_uploads/BJi8On4cke.png)
Pendekatan inilah yang membuat Bitcoin menjadi sistem uang digital yang aman tanpa perlu perantara.

## Sistem Timestamp dan Pembentukan Rantai Blok (Blockchain)
A. Apa itu Timestamp Server?
![image](https://hackmd.io/_uploads/r1rGYh4ckx.png)
Bayangkan Anda membuat sebuah buku harian digital di mana setiap entri dicatat dengan cap waktu (timestamp) dan ditautkan ke entri sebelumnya. Dalam Bitcoin:

- Hash dan Timestamp: Transaksi dikelompokkan ke dalam blok. Setiap blok mendapatkan cap waktu dengan cara menghitung hash dari seluruh transaksi di dalamnya.
- Rantai yang Tidak Bisa Diubah: Setiap blok juga memuat hash dari blok sebelumnya. Ini berarti jika seseorang ingin mengubah satu transaksi di blok awal, mereka harus mengubah semua blok sesudahnya, yang secara komputasi menjadi mustahil.

b. Kenapa Ini Penting?
Sistem ini memberikan dua manfaat utama:
- Kronologi yang Terjamin: Urutan transaksi yang tercatat secara kronologis menjamin bahwa tidak ada yang bisa mengubah urutan tanpa harus menghitung ulang seluruh blok.
- Pertahanan dari Manipulasi: Semakin banyak blok yang ditambahkan setelah sebuah transaksi, semakin sulit untuk mengubah transaksi tersebut karena harus menulis ulang bukti kerja (proof-of-work) untuk semua blok berikutnya.

Ini adalah inti dari bagaimana Bitcoin menjaga integritas data transaksi tanpa memerlukan otoritas pusat. 

## Proof-of-Work: Menjaga Keamanan dan Konsensus
![image](https://hackmd.io/_uploads/SJW-qnV9yl.png)

A. Mekanisme Proof-of-Work (PoW)
Proof-of-work adalah proses di mana para penambang (miner) berusaha menemukan nilai unik—disebut nonce—yang bila digabungkan dengan data di dalam blok, menghasilkan hash yang memenuhi kriteria tertentu (misalnya, hash yang diawali dengan sejumlah nol). Proses ini:

- Membutuhkan Waktu dan Daya Komputasi: Karena harus mencoba banyak kombinasi, proses ini menghabiskan sumber daya (listrik dan waktu).
- Membuktikan "Kerja": Hasilnya, setiap blok yang ditambahkan ke blockchain memiliki bukti bahwa seseorang telah bekerja keras untuk menciptakannya.

B. Dampak Proof-of-Work
- Mencegah Penipuan: Jika ada yang mencoba membuat transaksi palsu atau mengubah transaksi lama, mereka harus menghitung ulang proof-of-work untuk blok tersebut dan semua blok berikutnya—sesuatu yang hampir tidak mungkin dilakukan.
- Konsensus Jaringan: Node di jaringan selalu memilih rantai yang memiliki bukti kerja terbanyak (rantai terpanjang) sebagai yang valid, sehingga terjadi konsensus tanpa perlu otoritas pusat.

Dengan sistem PoW, jaringan Bitcoin mampu menjaga keamanan dan keabsahan transaksi secara otomatis. 

##  Jaringan Peer-to-Peer dan Cara Kerja Konsensus
A. Desentralisasi yang Menguatkan Sistem
Tidak ada satu entitas pun yang mengendalikan Bitcoin. Semua komputer (node) yang terhubung dalam jaringan bekerja sama dengan cara:

- Menyebarkan Transaksi: Begitu transaksi terjadi, informasi tersebut disebarkan ke seluruh jaringan, sehingga semua node memiliki data yang sama.
- Penambangan dan Validasi: Setiap node bisa mengumpulkan transaksi yang belum dikonfirmasi dan berpartisipasi dalam proses penambangan untuk menambahkan blok baru ke rantai.
- Menerima Rantai Terpanjang: Node selalu menyinkronkan diri dengan rantai blok terpanjang (yang mengandung bukti kerja terbanyak), sehingga jaringan selalu mencapai konsensus meskipun ada perbedaan sementara.

B. Mengatasi Konflik (Fork)
Kalau ada dua blok yang dibuat hampir bersamaan:

- Kedua Blok Sementara Tersimpan: Node mungkin menerima kedua versi, namun mereka akan bekerja pada blok pertama yang diterima.
- Rantai yang Lebih Panjang Menang: Begitu blok berikutnya ditambahkan ke salah satu rantai, seluruh node akan beralih ke rantai yang lebih panjang dan konsisten, mengabaikan cabang yang lebih pendek.

Mekanisme ini memastikan bahwa walaupun terjadi kebingungan sesaat, pada akhirnya jaringan selalu kembali ke satu versi riwayat transaksi. 

## Insentif Ekonomi dan Keamanan Jaringan
A. Penghargaan untuk Penambang
Untuk mendorong partisipasi dan menjaga keamanan jaringan, Bitcoin memberikan imbalan kepada para penambang berupa:

- Block Reward: Setiap kali seorang penambang berhasil menemukan nonce yang tepat dan menyelesaikan blok, mereka mendapatkan sejumlah Bitcoin baru. Ini adalah cara distribusi Bitcoin secara desentralisasi.
- Biaya Transaksi: Selain itu, penambang juga memperoleh biaya transaksi yang dibayar oleh pengguna saat mengirim Bitcoin.

B. Mengapa Insentif Ini Penting?
Insentif tersebut memastikan bahwa:

- Jaringan Selalu Aktif: Para penambang termotivasi untuk terus mendukung jaringan, karena mereka mendapatkan keuntungan dari proses penambangan.
- Keamanan Terjaga: Seorang penyerang harus memilih antara mendapatkan imbalan secara jujur atau mencoba merusak sistem. Dengan insentif yang menarik, lebih menguntungkan untuk tetap bermain sesuai aturan.

Insentif inilah yang membantu menjaga integritas jaringan Bitcoin dalam jangka panjang. 

## Mengelola Data: Menghemat Ruang Penyimpanan dengan Merkle Tree
![image](https://hackmd.io/_uploads/Bk46nhE9kg.png)

A. Konsep Merkle Tree
Untuk mencegah ukuran data yang terus bertambah (karena setiap transaksi dicatat), Bitcoin menggunakan struktur data yang disebut Merkle Tree:

- Menggabungkan Transaksi: Semua transaksi dalam satu blok di-hash bersama sehingga hanya root hash yang disimpan dalam header blok.
- Mengurangi Data yang Disimpan: Dengan cara ini, hanya sedikit data yang perlu disimpan secara permanen, sedangkan transaksi detailnya dapat dipadatkan.

b. Manfaatnya
- Efisiensi Penyimpanan: Ukuran blockchain tetap manageable meskipun telah berjalan selama bertahun-tahun.
- Kemudahan Verifikasi: Pengguna yang hanya ingin memverifikasi transaksi (dengan metode SPV) tidak perlu mengunduh seluruh isi blok, cukup header dan bukti dari Merkle Tree.

Cara ini membantu menjaga agar sistem Bitcoin tidak membengkak secara tidak terkendali dari sisi penyimpanan data. 

## Verifikasi Pembayaran Sederhana (SPV)
![image](https://hackmd.io/_uploads/SkSu6nNcye.png)


Tidak semua orang ingin atau mampu menjalankan node penuh yang menyimpan seluruh riwayat blockchain. Untuk itu, Bitcoin menyediakan metode Simplified Payment Verification (SPV):

- Hanya Menyimpan Header Blok: Pengguna SPV hanya mendownload header dari setiap blok, yang jauh lebih ringan.
- Bukti Transaksi dengan Merkle Branch: Dengan bantuan struktur Merkle Tree, pengguna dapat memverifikasi bahwa transaksi tertentu ada dalam blok tanpa harus mendownload semua data transaksi.
- Keamanan yang Cukup: Metode ini aman asalkan mayoritas jaringan adalah node jujur, meskipun tidak sekuat menjalankan node penuh.

SPV memungkinkan pengguna dengan perangkat terbatas tetap bisa bertransaksi dan memverifikasi keabsahan transaksi dengan mudah. 

## Menggabungkan dan Memecah Nilai Transaksi
![image](https://hackmd.io/_uploads/rkXFph4q1x.png)

A. Bagaimana Transaksi Dikelola?
Bitcoin dirancang agar fleksibel dalam hal nilai transaksi. Prosesnya meliputi:

- Kombinasi Input: Jika Anda memiliki beberapa transaksi kecil, mereka dapat digabungkan menjadi satu input agar jumlah yang akan dikirim mencukupi.
- Pemisahan Output: Setelah transaksi dilakukan, jika ada kelebihan, Bitcoin akan "memberikan kembalian" ke alamat pengirim. Jadi, transaksi bisa terdiri dari satu atau beberapa input dan output.

B. Keunggulan Proses Ini
- Efisiensi: Anda tidak perlu membuat transaksi terpisah untuk setiap sen yang dikirim.
- Fleksibilitas: Sistem ini mendukung transaksi dengan nilai besar maupun kecil, tanpa membuat proses verifikasi menjadi terlalu rumit.

Cara kerja ini membuat Bitcoin lebih praktis dan mudah diadaptasi oleh berbagai pengguna. 

## Privasi dan Anonimitas
![image](https://hackmd.io/_uploads/rJL0ahE5ye.png)

A. Menjaga Identitas Pengguna
Walaupun semua transaksi dicatat di blockchain yang bersifat publik, identitas pengguna tetap terlindungi melalui:

- Penggunaan Kunci Publik: Setiap transaksi hanya menampilkan alamat kunci publik, bukan identitas asli seperti nama atau nomor identitas.
- Penggunaan Kunci Baru: Dianjurkan agar setiap transaksi menggunakan sepasang kunci baru. Hal ini membuat jejak transaksi menjadi sulit untuk dilacak secara keseluruhan.

B. Keterbatasan dan Tantangan
- Penggabungan Input: Jika beberapa transaksi digabungkan, bisa jadi informasi tersebut menunjukkan bahwa transaksi berasal dari orang yang sama. Namun, ini masih jauh dari mengungkap identitas pribadi secara langsung.
- Analisis Blockchain: Walaupun data transaksi bisa dianalisis, tidak ada data pribadi yang langsung terkait dengan transaksi tersebut.

Pendekatan ini memberikan keseimbangan antara transparansi (untuk verifikasi) dan privasi bagi pengguna. 

## Analisis Risiko dan Perhitungan Keamanan
A. Model Matematis di Balik Keamanan
Dokumen asli menjelaskan bagaimana kemungkinan serangan (misalnya, mencoba membuat rantai alternatif untuk menggandakan Bitcoin) dihitung secara matematis. Konsepnya adalah:

- Random Walk dan Gambler’s Ruin: Jika seorang penyerang memiliki persentase daya komputasi yang lebih kecil dibandingkan seluruh jaringan, maka peluang mereka untuk mengejar dan menyalip rantai jujur menurun secara eksponensial seiring bertambahnya jumlah blok konfirmasi.
- Konfirmasi yang Cukup: Misalnya, jika transaksi sudah memiliki 6 konfirmasi (6 blok setelahnya), kemungkinan serangan menjadi sangat kecil.

B. Contoh Perhitungan
Dokumen menyajikan contoh perhitungan dengan nilai probabilitas tertentu (misalnya, q = 0.1 atau 0.3) untuk menunjukkan betapa cepatnya peluang keberhasilan serangan menurun seiring bertambahnya blok. Dengan pendekatan ini, kita bisa merasa lebih aman bahwa transaksi yang sudah mendapatkan beberapa konfirmasi benar-benar final.
![image](https://hackmd.io/_uploads/SyzKRnE5yx.png)
![image](https://hackmd.io/_uploads/rkq90hN9yl.png)
![image](https://hackmd.io/_uploads/S1ssA2N51g.png)
![image](https://hackmd.io/_uploads/HkFnA3Vckl.png)
### Converting to C code...
![image](https://hackmd.io/_uploads/BJvxyTVq1l.png)
### Running some results, we can see the probability drop off exponentially with z.
![image](https://hackmd.io/_uploads/rJOXka45ye.png)
### Solving for P less than 0.1%...
![image](https://hackmd.io/_uploads/HycuyTVc1e.png)


Pendekatan matematis ini memberikan dasar kuat bahwa selama mayoritas daya komputasi dipegang oleh node jujur, serangan akan hampir tidak mungkin berhasil. 

## Kesimpulan: Bitcoin sebagai Inovasi Finansial Masa Depan

Bitcoin membuka babak baru dalam sistem keuangan digital dengan:

- Menghilangkan Perantara: Transaksi dilakukan secara langsung antar pengguna tanpa perlu bank atau lembaga keuangan lain.
- Menggunakan Teknologi Blockchain: Setiap transaksi dicatat secara terdesentralisasi, aman, dan transparan.
- Mengandalkan Proof-of-Work: Mekanisme ini menjamin bahwa setiap blok transaksi valid dan tidak mudah diubah.
- Menyediakan Insentif Ekonomi: Penghargaan blok dan biaya transaksi menjaga partisipasi aktif dari para penambang serta keamanan jaringan.
- Menjaga Privasi Pengguna: Meskipun transaksi bersifat publik, identitas tetap terlindungi dengan penggunaan kunci publik dan metode enkripsi.

Secara keseluruhan, Bitcoin tidak hanya menghadirkan cara baru untuk melakukan pembayaran secara digital, tetapi juga menawarkan sebuah sistem yang terbuka, aman, dan efisien. Inovasi ini mengundang kita untuk melihat uang dan transaksi digital dengan cara yang lebih modern, tanpa harus mengorbankan keamanan atau privasi.
