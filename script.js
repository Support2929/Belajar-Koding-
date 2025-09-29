document.addEventListener('DOMContentLoaded', () => {
    // --- DATABASE SOAL ---
    const questions = {
        javascript: [
            { desc: "Menampilkan alert 'Hello, World!'", code: "alert('Hello, World!');", mentor: "Fungsi `alert()` menampilkan kotak dialog popup sederhana di browser. Bagus untuk debugging cepat." },
            { desc: "Membuat variabel `nama` dan menampilkannya di konsol.", code: "let nama = \"JavaScript\";\nconsole.log(nama);", mentor: "`let` adalah cara modern untuk mendeklarasikan variabel yang nilainya bisa berubah. `console.log` adalah alat penting untuk developer." },
            { desc: "Membuat konstanta untuk nilai PI.", code: "const PI = 3.14;", mentor: "Gunakan `const` untuk variabel yang nilainya tidak akan pernah berubah. Ini membantu mencegah bug." },
            { desc: "Struktur kondisi 'if' untuk memeriksa angka.", code: "let angka = 10;\nif (angka > 5) {\n  console.log('Besar');\n}", mentor: "Blok `if` menjalankan kode di dalamnya hanya jika kondisi yang diberikan bernilai `true`." },
            { desc: "Loop 'for' untuk menghitung dari 0 sampai 2.", code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}", mentor: "Loop `for` adalah cara klasik untuk mengulang blok kode sebanyak jumlah tertentu." },
            { desc: "Membuat fungsi `tambah`.", code: "function tambah(a, b) {\n  return a + b;\n}", mentor: "Fungsi memungkinkan Anda untuk membungkus kode yang dapat digunakan kembali. Ini adalah dasar dari pemrograman terstruktur." },
            { desc: "Membuat array `buah`.", code: "const buah = ['apel', 'mangga', 'jeruk'];", mentor: "Array digunakan untuk menyimpan daftar nilai. Anda bisa mengaksesnya dengan indeks, contoh: `buah[0]`." },
            { desc: "Membuat objek `orang`.", code: "const orang = {\n  nama: 'Budi',\n  umur: 22\n};", mentor: "Objek digunakan untuk menyimpan data dalam pasangan kunci-nilai (key-value). Sangat berguna untuk data terstruktur." },
            { desc: "Menggunakan arrow function.", code: "const sapa = () => {\n  console.log('Halo!');\n};", mentor: "Arrow function adalah sintaks yang lebih ringkas untuk menulis fungsi di JavaScript modern." },
            { desc: "Event listener untuk sebuah tombol.", code: "button.addEventListener('click', () => {\n  console.log('Tombol diklik!');\n});", mentor: "`addEventListener` adalah cara untuk membuat halaman web menjadi interaktif dengan merespons aksi pengguna." }
        ],
        python: [
            { desc: "Mencetak teks 'Hello, Python!' ke konsol.", code: "print('Hello, Python!')", mentor: "Fungsi `print()` adalah cara paling dasar untuk menampilkan output di Python." },
            { desc: "Membuat variabel untuk menyimpan nama.", code: "nama = \"Guido\"", mentor: "Python bersifat dinamis, Anda tidak perlu mendeklarasikan tipe data variabel secara eksplisit." },
            { desc: "Struktur kondisi 'if' dengan indentasi.", code: "if umur > 17:\n    print(\"Dewasa\")", mentor: "Indentasi (spasi di awal baris) sangat penting di Python. Itu adalah cara Python mengelompokkan blok kode." },
            { desc: "Loop 'for' untuk iterasi pada list.", code: "for buah in ['apel', 'pisang']:\n    print(buah)", mentor: "Loop `for` di Python sangat elegan untuk melakukan iterasi pada item-item dalam sebuah sekuens." },
            { desc: "Membuat fungsi `tambah`.", code: "def tambah(a, b):\n    return a + b", mentor: "Fungsi di Python didefinisikan dengan keyword `def`. Ini membantu membuat kode yang modular." },
            { desc: "Membuat List (mirip array).", code: "angka = [1, 2, 3, 4, 5]", mentor: "List di Python bersifat dinamis, Anda bisa menambah atau menghapus item dengan mudah." },
            { desc: "Membuat Dictionary (mirip objek).", code: "data = {\"nama\": \"Siti\", \"kota\": \"Jakarta\"}", mentor: "Dictionary menyimpan data dalam format key-value, sangat efisien untuk pencarian data." },
            { desc: "Mengimpor modul `math` dan menggunakannya.", code: "import math\nprint(math.pi)", mentor: "Python memiliki pustaka standar yang luas. `import` adalah cara Anda untuk menggunakan fungsionalitas dari modul lain." },
            { desc: "Menggunakan f-string untuk format teks.", code: "print(f\"Halo, {nama}!\")", mentor: "F-string (diperkenalkan di Python 3.6) adalah cara modern dan mudah dibaca untuk menyisipkan variabel ke dalam string." },
            { desc: "Loop 'while' untuk iterasi.", code: "n = 3\nwhile n > 0:\n    print(n)\n    n = n - 1", mentor: "Loop `while` akan terus berjalan selama kondisinya benar. Jangan lupa mengubah variabel kondisi agar loop bisa berhenti." }
        ],
        php: [
            { desc: "Mencetak teks dengan 'echo'.", code: "<?php\n  echo 'Hello, PHP!';\n?>", mentor: "Semua kode PHP harus berada di dalam tag `<?php ... ?>`. `echo` adalah perintah paling umum untuk output." },
            { desc: "Membuat variabel yang selalu diawali tanda '$'.", code: "$nama = \"Rasmus\";", mentor: "Di PHP, semua nama variabel, tidak peduli tipe datanya, harus diawali dengan tanda dolar ($)." },
            { desc: "Menggabungkan string dengan operator titik (.).", code: "echo \"Halo, \" . $nama;", mentor: "Berbeda dari banyak bahasa lain, PHP menggunakan titik (.) untuk menggabungkan string." },
            { desc: "Membuat array numerik.", code: "$buah = array('apel', 'pisang', 'mangga');", mentor: "Fungsi `array()` adalah cara klasik untuk membuat array. Anda juga bisa menggunakan sintaks singkat `[...]`." },
            { desc: "Membuat array asosiatif (key-value).", code: "$data = array(\"nama\" => \"Andi\", \"umur\" => 25);", mentor: "Array asosiatif sangat kuat di PHP, mirip seperti objek di JavaScript atau dictionary di Python." },
            { desc: "Struktur kondisi 'if'.", code: "if ($umur > 18) {\n  echo \"Anda dewasa.\";\n}", mentor: "Struktur `if` di PHP mirip dengan bahasa C atau JavaScript, menggunakan kurung kurawal untuk blok kode." },
            { desc: "Loop 'foreach' untuk iterasi array.", code: "foreach ($buah as $b) {\n  echo $b;\n}", mentor: "`foreach` adalah cara paling mudah dan aman untuk melakukan iterasi pada setiap elemen dalam sebuah array." },
            { desc: "Membuat fungsi sederhana.", code: "function sapa($nama) {\n  return \"Halo, \" . $nama;\n}", mentor: "Fungsi di PHP didefinisikan dengan keyword `function`. Ini membantu mengorganisir kode Anda." },
            { desc: "Menyertakan file lain dengan `include`.", code: "include 'header.php';", mentor: "`include` dan `require` sangat penting untuk memecah website Anda menjadi komponen-komponen yang dapat digunakan kembali." },
            { desc: "Mengakses data form POST.", code: "$username = $_POST['username'];", mentor: "`$_POST` adalah salah satu Superglobals di PHP, sebuah array asosiatif yang berisi data yang dikirim melalui metode HTTP POST." }
        ],
        html: [
            { desc: "Membuat elemen paragraf untuk menampilkan teks biasa.", code: "<p>Ini adalah sebuah paragraf.</p>", mentor: "Tag `<p>` (Paragraf) adalah salah satu elemen paling dasar dan umum digunakan untuk mengelompokkan teks." },
            { desc: "Membuat judul utama halaman.", code: "<h1>Judul Paling Penting</h1>", mentor: "Tag heading dari `<h1>` (paling penting) hingga `<h6>` (kurang penting) digunakan untuk mendefinisikan hierarki judul pada halaman Anda." },
            { desc: "Membuat tautan (hyperlink) ke situs web lain.", code: '<a href="https://www.google.com">Kunjungi Google</a>', mentor: "Tag `<a>` (Anchor) membutuhkan atribut `href` (Hypertext Reference) untuk menentukan tujuan link." },
            { desc: "Menampilkan gambar pada halaman web.", code: '<img src="logo.png" alt="Logo Perusahaan">', mentor: "Tag `<img>` bersifat self-closing. Atribut `src` adalah sumber gambar dan `alt` (teks alternatif) penting untuk aksesibilitas." },
            { desc: "Membuat daftar tak berurutan (unordered list).", code: "<ul>\n  <li>Item pertama</li>\n  <li>Item kedua</li>\n</ul>", mentor: "`<ul>` mendefinisikan list-nya, dan setiap `<li>` (List Item) adalah satu item di dalam daftar tersebut." },
            { desc: "Menggunakan `<div>` sebagai kontainer generik.", code: '<div class="artikel">\n  <h2>Judul Artikel</h2>\n  <p>Isi artikel...</p>\n</div>', mentor: "`<div>` adalah elemen blok yang sering digunakan untuk mengelompokkan elemen lain untuk styling atau layout." },
            { desc: "Membuat input teks dalam sebuah form.", code: '<input type="text" name="username">', mentor: "Elemen `<input>` sangat serbaguna. Atribut `type` menentukan jenis input, seperti `text`, `password`, `email`, dll." },
            { desc: "Membuat tombol yang dapat diklik.", code: '<button>Klik Saya</button>', mentor: "Tag `<button>` digunakan untuk membuat tombol interaktif yang dapat memicu aksi, biasanya dengan JavaScript." },
            { desc: "Membungkus elemen-elemen form dalam tag `<form>`.", code: '<form action="/submit">\n  <input type="text">\n  <button>Kirim</button>\n</form>', mentor: "Tag `<form>` penting untuk mengelompokkan input yang akan dikirim ke server. Atribut `action` menentukan URL tujuan." },
            { desc: "Menambahkan komentar yang tidak akan ditampilkan browser.", code: '', mentor: "Komentar sangat berguna untuk meninggalkan catatan bagi diri sendiri atau developer lain di dalam kode." }
        ],
        css: [
            { desc: "Memberi warna biru pada semua elemen paragraf `<p>`.", code: "p {\n  color: blue;\n}", mentor: "Ini adalah 'rule' CSS. `p` adalah selector, `color` adalah property, dan `blue` adalah value. Ini menargetkan semua paragraf." },
            { desc: "Mengubah ukuran font untuk seluruh halaman.", code: "body {\n  font-size: 16px;\n}", mentor: "Menerapkan gaya pada `body` adalah cara umum untuk menetapkan gaya dasar yang akan diwarisi oleh elemen lain." },
            { desc: "Memberi warna latar pada elemen dengan class 'container'.", code: ".container {\n  background-color: #f0f0f0;\n}", mentor: "Selector class (diawali dengan titik `.`) memungkinkan Anda menerapkan gaya pada elemen HTML mana pun yang memiliki atribut `class='container'`." },
            { desc: "Membuat border solid hitam di sekitar semua `<div>`.", code: "div {\n  border: 1px solid black;\n}", mentor: "Properti shorthand `border` menetapkan lebar, gaya, dan warna border dalam satu baris." },
            { desc: "Membuat sudut elemen dengan class 'card' menjadi melengkung.", code: ".card {\n  border-radius: 8px;\n}", mentor: "`border-radius` memberikan tampilan yang lebih modern dan lembut pada elemen kotak." },
            { desc: "Mengatur jarak di dalam (padding) dan di luar (margin) elemen.", code: ".box {\n  padding: 10px;\n  margin: 15px;\n}", mentor: "Padding adalah ruang di dalam border, sedangkan Margin adalah ruang di luar border. Ini adalah inti dari Box Model CSS." },
            { desc: "Mengubah elemen menjadi 'Flexbox' untuk tata letak.", code: ".flex-container {\n  display: flex;\n  justify-content: center;\n}", mentor: "Flexbox adalah model tata letak yang kuat untuk menyusun, meratakan, dan mendistribusikan ruang antar item dalam sebuah container." },
            { desc: "Memberi gaya pada link saat kursor mouse berada di atasnya.", code: "a:hover {\n  color: red;\n  text-decoration: underline;\n}", mentor: "Pseudo-class `:hover` memungkinkan Anda membuat halaman web yang interaktif dengan mengubah gaya saat interaksi pengguna." },
            { desc: "Membuat transisi yang mulus untuk perubahan warna.", code: "button {\n  transition: background-color 0.3s ease;\n}", mentor: "Properti `transition` membuat perubahan properti (seperti pada `:hover`) terlihat mulus dan animasi, bukan instan." },
            { desc: "Menerapkan gaya yang berbeda untuk layar kecil (desain responsif).", code: "@media (max-width: 600px) {\n  body {\n    font-size: 14px;\n  }\n}", mentor: "Media Queries adalah pilar dari Desain Web Responsif, memungkinkan Anda membuat situs yang terlihat bagus di semua perangkat." }
        ],
        bash: [
            { desc: "Menampilkan teks 'Halo Bash!' ke terminal.", code: 'echo "Halo Bash!"', mentor: "Perintah `echo` adalah alat dasar untuk mencetak teks atau nilai variabel ke standar output di terminal." },
            { desc: "Membuat variabel NAMA dan menampilkannya.", code: 'NAMA="Dunia"\necho "Halo, $NAMA"', mentor: "Di Bash, variabel dipanggil menggunakan tanda dolar ($). Ingat, tidak boleh ada spasi di sekitar tanda sama dengan (=)." },
            { desc: "Struktur kondisi 'if' untuk membandingkan string.", code: 'if [ "$NAMA" == "Dunia" ]; then\n  echo "Nama cocok"\nfi', mentor: "Spasi di dalam kurung siku `[ ... ]` sangat penting. Tanda kutip ganda di sekitar variabel mencegah error jika variabel kosong." },
            { desc: "Loop 'for' untuk mengulang angka 1 sampai 3.", code: 'for i in {1..3}; do\n  echo "Nomor $i"\ndone', mentor: "Brace expansion `{1..3}` adalah cara ringkas untuk membuat urutan angka atau string untuk perulangan." },
            { desc: "Membuat dan memanggil fungsi sederhana.", code: 'sapa() {\n  echo "Ini dari fungsi!"\n}\nsapa', mentor: "Fungsi membantu mengelompokkan perintah yang dapat digunakan kembali, membuat skrip Anda lebih terstruktur." },
            { desc: "Membaca input dari pengguna dan menyimpannya di variabel.", code: 'echo "Siapa namamu?"\nread nama_pengguna\necho "Halo, $nama_pengguna"', mentor: "Perintah `read` menjeda skrip dan menunggu pengguna mengetik sesuatu lalu menekan Enter." },
            { desc: "Menggunakan loop 'while' untuk menghitung mundur.", code: 'n=3\nwhile [ $n -gt 0 ]; do\n  echo "$n..."\n  n=$((n-1))\ndone', mentor: "Loop `while` akan terus berjalan selama kondisi di dalam `[ ... ]` bernilai benar. `-gt` artinya 'greater than'." },
            { desc: "Membuat array dan mengakses elemennya.", code: 'FILES=("laporan.txt" "data.csv" "gambar.jpg")\necho ${FILES[0]}', mentor: "Bash menggunakan array berbasis nol, jadi elemen pertama diakses dengan indeks `[0]`." },
            { desc: "Loop 'for' untuk setiap item dalam array.", code: 'for FILE in "${FILES[@]}"; do\n  echo "Memproses $FILE"\ndone', mentor: 'Sintaks `"${FILES[@]}"` adalah cara aman untuk mengulang setiap elemen dalam array, bahkan yang mengandung spasi.' },
            { desc: "Kondisi 'case' sebagai alternatif if-elif-else.", code: 'BUAH="apel"\ncase $BUAH in\n  "apel") echo "Buah ini merah.";;\n  "pisang") echo "Buah ini kuning.";;\nesac', mentor: "Struktur `case` sangat berguna ketika Anda perlu memeriksa satu variabel terhadap banyak kemungkinan nilai." }
        ],
        c: [
            { desc: "Program C dasar untuk mencetak teks.", code: '#include <stdio.h>\n\nint main() {\n  printf("Halo C!");\n  return 0;\n}', mentor: "Fungsi `main()` adalah titik awal eksekusi setiap program C. `#include <stdio.h>` memasukkan library standar untuk input-output." },
            { desc: "Deklarasi variabel integer untuk menyimpan angka.", code: 'int angka = 10;', mentor: "Di C, Anda harus mendeklarasikan tipe data (seperti `int` untuk integer) sebelum nama variabel." },
            { desc: "Menggunakan kondisi 'if' untuk logika percabangan.", code: 'if (angka > 5) {\n  printf("Lebih besar dari 5");\n}', mentor: "Blok kode di dalam `if` hanya akan dieksekusi jika kondisi di dalam kurung `()` bernilai benar." },
            { desc: "Loop 'for' untuk melakukan iterasi sebanyak 3 kali.", code: 'for (int i = 0; i < 3; i++) {\n  printf("%d\\n", i);\n}', mentor: "Struktur `for` terdiri dari inisialisasi, kondisi, dan increment. `%d` adalah penentu format untuk mencetak integer." },
            { desc: "Membuat fungsi `tambah` yang menerima dua integer dan mengembalikan hasilnya.", code: 'int tambah(int a, int b) {\n  return a + b;\n}', mentor: "Fungsi membantu memecah masalah besar menjadi bagian-bagian kecil yang dapat dikelola dan digunakan kembali." },
            { desc: "Deklarasi sebuah array integer.", code: 'int nilai[5] = {80, 90, 75, 100, 85};', mentor: "Array adalah kumpulan data dengan tipe yang sama. Di C, ukurannya tetap. `nilai[0]` akan memberikan `80`." },
            { desc: "Menggunakan loop 'while' untuk iterasi.", code: 'int i = 0;\nwhile (i < 3) {\n  printf("%d\\n", i);\n  i++;\n}', mentor: "Loop `while` akan terus berjalan selama kondisinya benar. Jangan lupa untuk menaikkan nilai `i` agar loop berhenti." },
            { desc: "Deklarasi pointer yang menunjuk ke alamat variabel.", code: 'int var = 20;\nint *ip = &var;', mentor: "Pointer menyimpan alamat memori dari variabel lain. `*ip` akan mengakses nilai (`20`), sedangkan `ip` berisi alamat." },
            { desc: "Mendefinisikan sebuah 'struct' untuk mengelompokkan data.", code: 'struct Mahasiswa {\n  char nama[50];\n  int nim;\n};', mentor: "Struct adalah tipe data komposit yang memungkinkan Anda menggabungkan beberapa variabel menjadi satu unit." },
            { desc: "Menggunakan `scanf` untuk mendapatkan input dari pengguna.", code: 'int umur;\nprintf("Masukkan umur Anda: ");\nscanf("%d", &umur);', mentor: "`scanf` membaca input yang diformat dari keyboard. Simbol `&` diperlukan untuk memberikan alamat memori variabel." }
        ],
        cpp: [
            { desc: "Program C++ dasar untuk mencetak teks.", code: '#include <iostream>\n\nint main() {\n  std::cout << "Halo C++!";\n  return 0;\n}', mentor: "C++ menggunakan stream (`std::cout`) untuk operasi output, yang lebih fleksibel daripada `printf` di C." },
            { desc: "Deklarasi variabel string menggunakan library string.", code: '#include <string>\nstd::string nama = "Budi";', mentor: "Kelas `std::string` menyediakan banyak fungsi berguna untuk memanipulasi teks, membuatnya lebih aman dan mudah." },
            { desc: "Menggunakan kondisi 'if' untuk membandingkan string.", code: 'if (nama == "Budi") {\n  std::cout << "Halo Budi!";\n}', mentor: "Berbeda dengan C, membandingkan string di C++ semudah menggunakan operator `==`." },
            { desc: "Loop 'for' sederhana untuk iterasi.", code: 'for (int i = 0; i < 3; ++i) {\n  std::cout << i << std::endl;\n}', mentor: "`std::endl` tidak hanya menyisipkan baris baru tetapi juga membersihkan buffer output. `\\n` seringkali lebih cepat." },
            { desc: "Membuat fungsi 'void' yang tidak mengembalikan nilai.", code: 'void sapa() {\n  std::cout << "Halo!";\n}', mentor: "Gunakan tipe `void` jika sebuah fungsi melakukan suatu aksi tetapi tidak perlu mengembalikan sebuah nilai." },
            { desc: "Menggunakan `vector`, sebuah array dinamis.", code: '#include <vector>\nstd::vector<int> angka = {10, 20, 30};', mentor: "`std::vector` adalah wadah sekuensial yang dapat mengubah ukurannya secara otomatis. Jauh lebih fleksibel daripada array C-style." },
            { desc: "Loop 'for' berbasis jangkauan (range-based for loop).", code: 'for (int n : angka) {\n  std::cout << n << std::endl;\n}', mentor: "Ini adalah cara modern dan lebih aman untuk mengulang setiap elemen dalam sebuah wadah seperti `vector`." },
            { desc: "Mendefinisikan sebuah 'class' dasar.", code: 'class Mobil {\npublic:\n  std::string merek;\n  int tahun;\n};', mentor: "Class adalah inti dari Pemrograman Berorientasi Objek (OOP) di C++, menggabungkan data (atribut) dan fungsi (metode)." },
            { desc: "Membuat objek (instance) dari sebuah class.", code: 'Mobil mobilSaya;\nmobilSaya.merek = "Toyota";\nmobilSaya.tahun = 2025;', mentor: "Setelah class didefinisikan, Anda dapat membuat variabel (objek) dari tipe class tersebut dan mengakses anggotanya." },
            { desc: "Menggunakan `std::cin` untuk mendapatkan input dari pengguna.", code: 'int umur;\nstd::cout << "Masukkan umur: ";\nstd::cin >> umur;', mentor: "`std::cin` adalah stream input standar di C++, digunakan untuk membaca data dari keyboard." }
        ],
        csharp: [
            { desc: "Mencetak teks ke konsol di C#.", code: 'Console.WriteLine("Halo C#!");', mentor: "Method `Console.WriteLine` digunakan untuk menampilkan output ke konsol, secara ot
