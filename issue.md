# ISSUE: Implementasi Tabel Session & API Login

## Deskripsi
Buat tabel `session` di database dan endpoint API untuk login user.

---

## Struktur Tabel `session`

Buat migration untuk tabel `session` dengan kolom berikut: id (integer, auto increment, primary key), token (varchar 255, not null, berisi UUID yang dihasilkan saat user login), user_id (integer, foreign key ke tabel `users`), dan created_at (timestamp, default current timestamp).

---

## Struktur Folder

Di dalam folder `src/`, pastikan terdapat dua folder yaitu `routes/` dan `service/`. Folder `routes/` hanya berisi definisi routing, sedangkan folder `service/` berisi semua logic aplikasi. Penamaan file mengikuti format `auth-route.ts` dan `auth-service.ts`.

---

## Spesifikasi API

Buat endpoint `POST /api/login` untuk login user.

Request body berisi `email` dan `password`.

Response sukses mengembalikan `{ data: "<token yang dihasilkan>" }`, sedangkan response error mengembalikan `{ error: "email atau password salah" }`.

---

## Tahapan Implementasi

1. Buat dan jalankan migration tabel `session`.
2. Install dependency untuk menghasilkan UUID (misalnya library `uuid`).
3. Buat `auth-service.ts` yang berisi logic: cari user berdasarkan email, validasi password menggunakan bcrypt compare, generate UUID sebagai token, simpan token dan user_id ke tabel `session`, lalu kembalikan token tersebut.
4. Buat `auth-route.ts` yang berisi definisi endpoint `POST /api/login` dan memanggil fungsi dari service.
5. Daftarkan router ke file utama aplikasi.
6. Lakukan testing manual menggunakan Postman atau curl untuk memastikan response sukses dan error sesuai spesifikasi.

---

## Checklist

- [x] Migration tabel `session` sudah dibuat dan dijalankan
- [x] Dependency UUID sudah terinstall
- [x] `auth-service.ts` sudah dibuat
- [x] `auth-route.ts` sudah dibuat
- [x] Router sudah didaftarkan di file utama
- [x] Testing sukses dan error sudah dilakukan
- [x] Token yang tersimpan di database berupa UUID