# ISSUE: Implementasi Tabel Users & API Registrasi

## Deskripsi
Buat tabel `users` di database dan endpoint API untuk registrasi user baru.

---

## Struktur Tabel `users`

Buat migration untuk tabel `users` dengan kolom berikut: id (integer, auto increment, primary key), name (varchar 255, not null), email (varchar 255, not null, unique), password (varchar 255, not null), dan created_at (timestamp, default current timestamp). Password wajib disimpan dalam bentuk hash menggunakan bcrypt, bukan plain text.

---

## Struktur Folder

Di dalam folder `src/`, pastikan terdapat dua folder yaitu `routes/` dan `service/`. Folder `routes/` hanya berisi definisi routing, sedangkan folder `service/` berisi semua logic aplikasi. Penamaan file mengikuti format `user-route.ts` dan `user-service.ts`.

---

## Spesifikasi API

Buat endpoint `POST /api/users` untuk registrasi user baru.

Request body berisi `name`, `email`, dan `password`.

Response sukses mengembalikan `{ data: "ok" }`, sedangkan response error mengembalikan `{ error: "email atau password salah" }`.

---

## Tahapan Implementasi

1. Buat dan jalankan migration tabel `users`.
2. Install dependency bcrypt.
3. Buat `user-service.ts` yang berisi logic validasi input, pengecekan duplikasi email, hashing password, dan menyimpan data ke database.
4. Buat `user-route.ts` yang berisi definisi endpoint `POST /api/users` dan memanggil fungsi dari service.
5. Daftarkan router ke file utama aplikasi.
6. Lakukan testing manual menggunakan Postman atau curl untuk memastikan response sukses dan error sesuai spesifikasi.

---

## Checklist

- [x] Migration tabel `users` sudah dibuat dan dijalankan
- [x] Dependency bcrypt sudah terinstall
- [x] `user-service.ts` sudah dibuat
- [x] `user-route.ts` sudah dibuat
- [x] Router sudah didaftarkan di file utama
- [x] Testing sukses dan error sudah dilakukan
- [x] Password di database tersimpan dalam bentuk hash.