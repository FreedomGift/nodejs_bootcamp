import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline";
import process from "node:process";

// Dapatkan __dirname di ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definisikan folder dan file path
const folderPath = path.join(__dirname, "data");
const filePath = path.join(folderPath, "data.txt");

// Buat folder jika belum ada
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log("Folder telah dibuat");
}

// Buat file data.txt jika belum ada dan isi dengan data survei
if (!fs.existsSync(filePath)) {
  const dataSurvei = `DAFTAR DATA SURVEI PENGELUARAN BELANJA

1. Makanan dan Minuman
   - Beras: Rp 500.000
   - Sayuran: Rp 200.000
   - Buah-buahan: Rp 150.000
   - Daging dan Ikan: Rp 400.000
   - Minuman: Rp 100.000

2. Transportasi
   - Bensin: Rp 300.000
   - Parkir: Rp 50.000
   - Ojek Online: Rp 150.000

3. Tagihan Bulanan
   - Listrik: Rp 250.000
   - Air: Rp 75.000
   - Internet: Rp 300.000
   - Telepon: Rp 100.000

4. Pendidikan
   - SPP Sekolah: Rp 500.000
   - Buku: Rp 150.000
   - Les: Rp 400.000

5. Kesehatan
   - Obat-obatan: Rp 100.000
   - Vitamin: Rp 75.000
   - Checkup: Rp 200.000

6. Hiburan
   - Streaming: Rp 50.000
   - Nonton Bioskop: Rp 100.000
   - Jalan-jalan: Rp 200.000

TOTAL PENGELUARAN BULANAN: Rp 4.350.000
`;

  fs.writeFileSync(filePath, dataSurvei, "utf8");
  console.log("File data.txt telah dibuat dengan data survei pengeluaran belanja");
}

// Append konten tambahan mengenai proyeksi
const proyeksiTambahan = `

PROYEKSI PENGELUARAN 6 BULAN KE DEPAN

Bulan 1: Rp 4.350.000
Bulan 2: Rp 4.500.000 (Estimasi kenaikan 3.4%)
Bulan 3: Rp 4.450.000
Bulan 4: Rp 4.600.000 (Termasuk biaya tak terduga)
Bulan 5: Rp 4.400.000
Bulan 6: Rp 4.550.000

Total Proyeksi 6 Bulan: Rp 26.850.000
Rata-rata per Bulan: Rp 4.475.000

CATATAN:
- Proyeksi dapat berubah sesuai kondisi ekonomi
- Disarankan untuk menyiapkan dana darurat 10-15%
- Pertimbangkan inflasi dan kenaikan harga
`;

fs.appendFileSync(filePath, proyeksiTambahan, "utf8");
console.log("Konten proyeksi tambahan telah ditambahkan");

console.log("Folder Path:", folderPath);
console.log("File Path:", filePath);

// Baca dan tampilkan konten file
console.log("\n=== ISI FILE DATA.TXT ===\n");
const kontenFile = fs.readFileSync(filePath, "utf8");
console.log(kontenFile);
console.log("\n=== AKHIR ISI FILE ===");

// Fungsi untuk menghapus file dengan konfirmasi
function hapusFile() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("\n⚠️  WARNING: FITUR HAPUS FILE ⚠️");
  rl.question(`\nApakah Anda yakin ingin menghapus file "${path.basename(filePath)}"? (ya/tidak): `, (jawaban) => {
    if (jawaban.toLowerCase() === 'ya' || jawaban.toLowerCase() === 'y') {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`\n✓ File "${path.basename(filePath)}" telah berhasil dihapus!`);
      } else {
        console.log(`\n✗ File "${path.basename(filePath)}" tidak ditemukan.`);
      }
    } else {
      console.log(`\n✓ File "${path.basename(filePath)}" tidak jadi dihapus.`);
    }
    rl.close();
  });
}

// Panggil fungsi hapus file
hapusFile();
