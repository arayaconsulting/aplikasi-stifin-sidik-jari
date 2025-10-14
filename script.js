// Data STIFIn (berdasarkan numerologi) - Mempertahankan nama STIFIn yang asli
const stifinDescriptions = {
    1: { title: "Thinking Introvert (Ti)" },
    2: { title: "Feeling Ekstrovert (Fe)" },
    3: { title: "Sensing Introvert (Si)" },
    4: { title: "Sensing Ekstrovert (Se)" },
    5: { title: "Feeling Introvert (Fi)" },
    6: { title: "Intuiting Ekstrovert (Ie)" },
    7: { title: "Intuiting Introvert (Ii)" },
    8: { title: "Thinking Ekstrovert (Te)" },
    9: { title: "Insting (In)" }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0;
let userName = "";
let birthDate = "";
let bloodType = "";
let isScanning = false;

// Dapatkan Elemen HTML
const introContainer = document.getElementById('intro-container');
const scanContainer = document.getElementById('scan-container');
const resultContainer = document.getElementById('result-container');
const userForm = document.getElementById('user-form');
const userNameInput = document.getElementById('user-name');
const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');
const bloodTypeSelect = document.getElementById('blood-type');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const restartButton = document.getElementById('restart-button');
const fingerprintScanner = document.getElementById('fingerprint-scanner');
const scanText = document.getElementById('scan-text');
const nextFingerButton = document.getElementById('next-finger-button'); 

// Fungsi Utama
function populateDateFields() {
    // Mengisi opsi hari
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = String(i).padStart(2, '0');
        option.textContent = i;
        daySelect.appendChild(option);
    }
    // Mengisi opsi bulan
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('option');
        option.value = String(i + 1).padStart(2, '0');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    // Mengisi opsi tahun (dari 1950 hingga tahun sekarang)
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1950; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

// Logika Numerologi STIFIn
function calculateNumerology(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    let sum = day + month + year;
    
    function reduceToSingleDigit(number) {
        while (number > 9) {
            number = String(number).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return number;
    }
    
    return reduceToSingleDigit(sum);
}

function startScan() {
    if (isScanning) return;
    
    isScanning = true;
    scanText.textContent = `Sedang memindai **${fingers[currentFingerIndex]}** Anda...`;
    fingerprintScanner.classList.add('scanning');
    nextFingerButton.classList.add('hidden'); 

    setTimeout(() => {
        fingerprintScanner.classList.remove('scanning');
        isScanning = false;

        if (currentFingerIndex < fingers.length - 1) {
            // Tampilkan tombol Lanjutkan setelah scan selesai
            scanText.textContent = `**${fingers[currentFingerIndex]}** sudah dipindai. Lanjutkan ke jari berikutnya.`;
            nextFingerButton.classList.remove('hidden'); 
        } else {
            // Semua jari selesai dipindai, tampilkan hasil
            scanText.textContent = "Semua jari sudah dipindai. Menganalisis...";
            setTimeout(showResult, 2000);
        }
    }, 2000); // Durasi pemindaian per jari (2 detik)
}

function continueToNextFinger() {
    currentFingerIndex++;
    nextFingerButton.classList.add('hidden');
    
    // Perbarui teks untuk jari berikutnya
    if (currentFingerIndex < fingers.length) {
        scanText.textContent = `Silakan letakkan **jari ${fingers[currentFingerIndex]}** Anda.`;
    } 
}

function showResult() {
    scanContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    const numerologyNumber = calculateNumerology(birthDate);
    const stifinResult = stifinDescriptions[numerologyNumber].title;

    // Menampilkan nama pengguna di Hasil Akhir
    resultTitle.textContent = `Hasil STIFIn ${userName}: ${stifinResult}`;
    resultDescription.textContent = `Halo ${userName}, ini adalah hasil tes STIFIn Anda. Untuk penjelasan lebih detail, akan dijelaskan dalam sesi bersama Mas Ali Mahfud.`;
}

function restartApp() {
    resultContainer.classList.add('hidden');
    introContainer.classList.remove('hidden');
    userForm.reset();
    fingerprintScanner.classList.remove('scanning');
    currentFingerIndex = 0;
    isScanning = false;
}

// Event Listeners
userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    userName = userNameInput.value.trim();
    const day = daySelect.value;
    const month = monthSelect.value;
    const year = yearSelect.value;
    
    if (!userName || !day || !month || !year) {
        alert("Mohon lengkapi semua data, termasuk Nama Lengkap.");
        return;
    }
    
    birthDate = `${year}-${month}-${day}`;
    bloodType = bloodTypeSelect.value;
    
    introContainer.classList.add('hidden');
    scanContainer.classList.remove('hidden');
    
    // Inisialisasi proses scan pertama
    scanText.textContent = `Silakan letakkan **${fingers[currentFingerIndex]}** Anda.`;
});

fingerprintScanner.addEventListener('mousedown', startScan);
fingerprintScanner.addEventListener('touchstart', startScan);

nextFingerButton.addEventListener('click', continueToNextFinger);

restartButton.addEventListener('click', restartApp);

document.addEventListener('DOMContentLoaded', populateDateFields);
