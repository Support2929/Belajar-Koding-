document.addEventListener('DOMContentLoaded', () => {

    // --- DATABASE SOAL ---
    const questions = {
        html: [
            { desc: "Membuat elemen paragraf untuk menampilkan teks biasa.", code: "<p>Ini adalah sebuah paragraf.</p>", mentor: "Tag `<p>` adalah elemen dasar untuk teks. Pastikan selalu ada tag penutup `</p>`." },
            { desc: "Membuat judul utama halaman.", code: "<h1>Judul Paling Penting</h1>", mentor: "Gunakan `<h1>` hanya sekali per halaman untuk judul utama. Ini penting untuk SEO." },
            { desc: "Membuat tautan (hyperlink) ke situs web lain.", code: '<a href="https://www.google.com">Kunjungi Google</a>', mentor: "Atribut `href` sangat penting, tanpa itu link tidak akan berfungsi." },
            { desc: "Menampilkan gambar pada halaman web.", code: '<img src="logo.png" alt="Logo Perusahaan">', mentor: "Atribut `alt` wajib diisi untuk aksesibilitas, ini membantu pengguna tuna netra." },
            { desc: "Membuat daftar tak berurutan (unordered list).", code: "<ul>\n  <li>Item pertama</li>\n  <li>Item kedua</li>\n</ul>", mentor: "`<ul>` untuk listnya, `<li>` untuk setiap item di dalamnya. Perhatikan indentasi agar rapi." }
        ],
        css: [
            { desc: "Memberi warna biru pada semua elemen paragraf.", code: "p {\n  color: blue;\n}", mentor: "`p` adalah selector, `color` adalah properti, dan `blue` adalah nilainya. Jangan lupa titik koma." },
            { desc: "Memberi warna latar pada elemen dengan class 'container'.", code: ".container {\n  background-color: #f0f0f0;\n}", mentor: "Gunakan titik `.` untuk memilih class. Nama class di CSS harus sama persis dengan di HTML." },
            { desc: "Membuat sudut elemen dengan class 'card' menjadi melengkung.", code: ".card {\n  border-radius: 8px;\n}", mentor: "Nilai `px` (piksel) menentukan seberapa melengkung sudutnya. Semakin besar, semakin bulat." },
            { desc: "Mengatur jarak di dalam (padding) dan di luar (margin) elemen.", code: ".box {\n  padding: 10px;\n  margin: 15px;\n}", mentor: "Ingat, `padding` untuk ruang di dalam border, `margin` untuk ruang di luar border." },
            { desc: "Memberi gaya pada link saat kursor mouse berada di atasnya.", code: "a:hover {\n  color: red;\n}", mentor: "Pseudo-class `:hover` sangat bagus untuk memberikan feedback visual kepada pengguna." }
        ],
        javascript: [
            { desc: "Menampilkan pesan 'Halo Dunia' di konsol browser.", code: "console.log('Halo Dunia');", mentor: "`console.log` adalah teman terbaik developer untuk debugging. Biasakan menggunakannya." },
            { desc: "Membuat variabel `nama` dan mengisinya dengan sebuah string.", code: "let nama = \"Budi\";", mentor: "Gunakan `let` untuk variabel yang nilainya bisa berubah. Gunakan tanda kutip untuk string." },
            { desc: "Membuat fungsi `sapa` yang menampilkan pesan Halo.", code: "function sapa() {\n  console.log(\"Halo!\");\n}", mentor: "Fungsi adalah blok kode yang bisa digunakan kembali. Ini adalah konsep dasar pemrograman." },
            { desc: "Membuat sebuah array berisi tiga nama buah.", code: "let buah = [\"Apel\", \"Mangga\", \"Jeruk\"];", mentor: "Array digunakan untuk menyimpan banyak nilai dalam satu variabel. Indeks dimulai dari 0." },
            { desc: "Mengambil elemen dengan id 'judul' dari HTML.", code: "document.getElementById('judul');", mentor: "Ini adalah cara paling umum untuk menghubungkan JavaScript dengan elemen spesifik di HTML Anda." }
        ]
    };

    // --- SELEKSI SEMUA ELEMEN DOM ---
    const btnLearn = document.getElementById('btnLearn');
    const btnTyping = document.getElementById('btnTyping');
    const learnSection = document.getElementById('learnSection');
    const typingSection = document.getElementById('typingSection');

    // Elemen Belajar
    const mentorText = document.getElementById('mentorText');
    const languageSelectLearn = document.getElementById('languageSelectLearn');
    const levelDiv = document.getElementById('levelDiv');
    const levelSelect = document.getElementById('levelSelect');
    const questionDiv = document.getElementById('questionDiv');
    const questionDescription = document.getElementById('questionDescription');
    const questionCode = document.getElementById('questionCode');
    const answerInput = document.getElementById('answerInput');
    const btnCheck = document.getElementById('btnCheck');
    const feedback = document.getElementById('feedback');

    // Elemen Tes Kecepatan
    const languageSelectTyping = document.getElementById('languageSelectTyping');
    const startCodingTestBtn = document.getElementById('startCodingTestBtn');
    const codingTestSetup = document.getElementById('codingTestSetup');
    const codingTestActive = document.getElementById('codingTestActive');
    const timerDisplay = document.getElementById('timer');
    const levelIndicator = document.getElementById('level-indicator');
    const codingChallengeText = document.getElementById('codingChallengeText');
    const typingInput = document.getElementById('typingInput');
    const resultsScreen = document.getElementById('resultsScreen');
    const finalSpeed = document.getElementById('finalSpeed');
    const finalAccuracy = document.getElementById('finalAccuracy');
    const finalLevels = document.getElementById('finalLevels');
    const finalErrors = document.getElementById('finalErrors');
    const tryAgainBtn = document.getElementById('tryAgainBtn');

    let currentLanguage = '';
    let currentLevel = -1;
    let timerInterval = null;
    
    // --- FUNGSI UTAMA ---

    function init() {
        populateLanguageSelects();
        addEventListeners();
    }

    function populateLanguageSelects() {
        const languages = Object.keys(questions);
        languageSelectLearn.innerHTML = '<option value="">-- Pilih Bahasa --</option>';
        languageSelectTyping.innerHTML = '<option value="">-- Pilih Bahasa --</option>';
        languages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.textContent = lang.charAt(0).toUpperCase() + lang.slice(1); // Capitalize
            languageSelectLearn.appendChild(option.cloneNode(true));
            languageSelectTyping.appendChild(option);
        });
    }

    function addEventListeners() {
        // Navigasi Tab
        btnLearn.addEventListener('click', () => switchTab('learn'));
        btnTyping.addEventListener('click', () => switchTab('typing'));

        // Mode Belajar
        languageSelectLearn.addEventListener('change', handleLanguageChange);
        levelSelect.addEventListener('change', handleLevelChange);
        btnCheck.addEventListener('click', checkAnswer);

        // Mode Tes Kecepatan
        languageSelectTyping.addEventListener('change', () => {
            startCodingTestBtn.disabled = languageSelectTyping.value === '';
        });
        startCodingTestBtn.addEventListener('click', startTypingTest);
        tryAgainBtn.addEventListener('click', resetTypingTest);
    }

    function switchTab(tab) {
        if (tab === 'learn') {
            learnSection.classList.remove('hidden');
            typingSection.classList.add('hidden');
            btnLearn.classList.add('active');
            btnTyping.classList.remove('active');
        } else {
            typingSection.classList.remove('hidden');
            learnSection.classList.add('hidden');
            btnTyping.classList.add('active');
            btnLearn.classList.remove('active');
        }
    }

    // --- LOGIKA MODE BELAJAR ---

    function handleLanguageChange(e) {
        currentLanguage = e.target.value;
        questionDiv.classList.add('hidden');
        feedback.textContent = '';
        feedback.className = '';
        if (currentLanguage) {
            levelSelect.innerHTML = '<option value="">-- Pilih Level --</option>';
            questions[currentLanguage].forEach((_, index) => {
                levelSelect.innerHTML += `<option value="${index}">Level ${index + 1}</option>`;
            });
            levelDiv.classList.remove('hidden');
            mentorText.textContent = `Bagus! Anda memilih ${currentLanguage.toUpperCase()}. Sekarang pilih levelnya.`;
        } else {
            levelDiv.classList.add('hidden');
            mentorText.textContent = 'Selamat datang! Pilih bahasa pemrograman dan level untuk memulai.';
        }
    }

    function handleLevelChange(e) {
        const selectedLevel = e.target.value;
        if (selectedLevel !== '') {
            currentLevel = parseInt(selectedLevel, 10);
            displayQuestion(currentLanguage, currentLevel);
        } else {
            currentLevel = -1;
            questionDiv.classList.add('hidden');
        }
    }
    
    function displayQuestion(lang, level) {
        const q = questions[lang][level];
        questionDescription.textContent = q.desc;
        questionCode.textContent = q.code;
        mentorText.textContent = q.mentor;
        questionDiv.classList.remove('hidden');
        answerInput.value = '';
        feedback.textContent = '';
        feedback.className = '';
        answerInput.focus();
    }

    function checkAnswer() {
        if (currentLanguage === '' || currentLevel === -1) return;

        const correctAnswer = questions[currentLanguage][currentLevel].code.trim();
        const userAnswer = answerInput.value.trim();

        if (userAnswer === correctAnswer) {
            feedback.textContent = '✅ Benar! Kode Anda cocok.';
            feedback.className = 'correct';
            mentorText.textContent = '🎉 Kerja bagus! Anda telah menguasai konsep ini. Silakan lanjut ke level berikutnya!';
        } else {
            feedback.textContent = '❌ Salah! Periksa kembali spasi, tanda baca, dan huruf besar/kecil.';
            feedback.className = 'wrong';
            mentorText.textContent = '💡 Hampir benar! Coba perhatikan lagi setiap detail kode.';
        }
    }

    // --- LOGIKA MODE TES KECEPATAN ---
    
    function startTypingTest() {
        codingTestSetup.classList.add('hidden');
        resultsScreen.classList.add('hidden');
        codingTestActive.classList.remove('hidden');

        const selectedLang = languageSelectTyping.value;
        const challenges = questions[selectedLang].map(q => q.code);
        let currentChallengeIndex = 0;
        let timeLeft = 60;
        let totalChars = 0;
        let totalErrors = 0;

        const loadChallenge = () => {
            if (currentChallengeIndex >= challenges.length) {
                finishTest(); // Selesai lebih awal
                return;
            }
            codingChallengeText.textContent = challenges[currentChallengeIndex];
            levelIndicator.textContent = `Level ${currentChallengeIndex + 1}/${challenges.length}`;
            typingInput.value = '';
            typingInput.focus();
        };
        
        typingInput.addEventListener('input', () => {
            const currentChallenge = challenges[currentChallengeIndex];
            const typedText = typingInput.value;
            if (typedText === currentChallenge) {
                totalChars += currentChallenge.length;
                currentChallengeIndex++;
                loadChallenge();
            }
        });

        const finishTest = () => {
            clearInterval(timerInterval);
            codingTestActive.classList.add('hidden');
            resultsScreen.classList.remove('hidden');

            const cpm = totalChars; // Karakter Per Menit (karena tes 1 menit)
            finalSpeed.textContent = cpm;
            finalLevels.textContent = currentChallengeIndex;
            // Logika akurasi dan error bisa ditambahkan di sini jika diperlukan
            finalAccuracy.textContent = 'N/A';
            finalErrors.textContent = 'N/A';
        };

        timerInterval = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            if (timeLeft <= 0) {
                finishTest();
            }
        }, 1000);

        loadChallenge();
    }

    function resetTypingTest() {
        clearInterval(timerInterval);
        resultsScreen.classList.add('hidden');
        codingTestSetup.classList.remove('hidden');
        languageSelectTyping.value = '';
        startCodingTestBtn.disabled = true;
        timerDisplay.textContent = '01:00';
    }

    // --- INISIALISASI APLIKASI ---
    init();
});
        
