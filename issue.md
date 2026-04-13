# ISSUE: Implementasi API Get Current User

## Deskripsi
Buat endpoint API untuk mengambil data user yang sedang login berdasarkan token yang dikirim melalui header Authorization.

---

## Spesifikasi API

Buat endpoint `GET /api/users/current` untuk mendapatkan data user yang sedang login.

Header yang dibutuhkan adalah `Authorization` dengan format `Bearer <token>`, di mana token adalah token yang tersimpan di tabel `session`.

Response sukses mengembalikan data berisi id, name, email, dan created_at dari user yang bersangkutan. Response error mengembalikan `{ error: "unauthorized" }`.

---

## Struktur Folder

Di dalam folder `src/`, pastikan terdapat dua folder yaitu `routes/` dan `service/`. Folder `routes/` hanya berisi definisi routing, sedangkan folder `service/` berisi semua logic aplikasi. Penamaan file mengikuti format `user-route.ts` dan `user-service.ts`.

---

## Tahapan Implementasi

1. Buat fungsi di `user-service.ts` yang menerima token dari header, lalu cari token tersebut di tabel `session`. Jika token tidak ditemukan, lempar error unauthorized. Jika ditemukan, ambil `user_id` dari hasil pencarian tersebut, kemudian ambil data user dari tabel `users` berdasarkan `user_id` tersebut dan kembalikan datanya.
2. Tambahkan route `GET /api/users/current` di `user-route.ts`. Di dalam handler, ambil nilai header `Authorization`, pisahkan kata `Bearer` untuk mendapatkan token, lalu panggil fungsi dari service. Jika berhasil kembalikan data user, jika gagal kembalikan response error unauthorized.
3. Pastikan router sudah terdaftar di file utama aplikasi.
4. Lakukan testing manual menggunakan Postman atau curl dengan mengirimkan header Authorization yang valid maupun yang tidak valid untuk memastikan response sesuai spesifikasi.

---

## Checklist

- [x] Fungsi get current user sudah ditambahkan di `user-service.ts`
- [x] Route `GET /api/users/current` sudah ditambahkan di `user-route.ts`
- [x] Router sudah terdaftar di file utama aplikasi
- [ ] Testing dengan token valid mengembalikan data user
- [ ] Testing tanpa token atau token tidak valid mengembalikan error unauthorized