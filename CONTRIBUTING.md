Ada beberapa cara yang bisa kamu lakukan untuk berkontribusi ke website WRI. Mulai dari hal sederhana dengan cara membuka issue apabila kamu menemukan masalah yang ada di website WRI, menulis sebuah artikel, memberbaiki bug, ataupun menambahkan fitur baru.

Website ini sebagian besar dibuat menggunakan [Astro](https://astro.build), [Svelte](https://svelte.dev) untuk bagian yang membutuhkan user interaction, dan menggunakan [TailwindCSS](https://tailwindcss.com) untuk styling.

Apabila kamu ingin berkontribusi seperti memperbaiki bug atau menambahkan fitur baru, kamu perlu beberapa hal terlebih dahulu.

- [NodeJS](https://nodejs.org)
- [PNPM](https://pnpm.io)
- [Git](https://git-scm.com)
- Text Editor seperti [VSCode](https://code.visualstudio.com)

Apabila kamu sudah punya ke-empat hal diatas, kamu bisa mulai melakukan development dengan cara fork lalu clone repository ini.

Jalankan command dibawah untuk memulai dev server.

```bash
pnpm dev
```

Apabila dirasa sudah cukup, kamu bisa commit pekerjaan kamu. Jangan lupa membuat branch khusus terlebih dahulu sebelum melakukan commit.

Pastikan commit kamu sebisa mungkin mengikuti aturan [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) agar lebih mudah dibaca oleh kontributor lainnya.

### Kontribusi Artikel

Apabila kamu ingin menulis artikel untuk website WRI, sebagian besar caranya sama seperti diatas termasuk kebutuhan yang harus kamu install terlebih dahulu.

Perbedaannya ada pada file yang akan kamu kerjakan. Semua artikel ada di dalam directory `src/content/articles`. Kamu bisa mulai dengan membuat file markdown baru dengan judul pendek yang kamu inginkan (kalo masih belum familiar sama markdown, kamu bisa cek [markdowntutorial.com](https://www.markdowntutorial.com/)), pastikan semuanya menggunakan huruf lowercase dan menggunakan karakter `-` sebagai separator.

Kamu harus mengisi beberapa field yang ada di dalam _frontmatter_ seperti contoh dibawah ini:

```yaml
title: judul artikel kamu
description: deskripsi singkat dari artikel kamu
image: gambar cover artikel
author: nama kamu
github: username github akun kamu
linkedin: username dari akun linkedin kamu
date: tanggal kamu menulis artikel
tags:
  - bebas
  - diisi
  - apa
```

Selanjutnya bebas deh kamu mau nulis apa, usahakan masih relevan dengan teknologi ya
