// Data untuk hasil STIFIn (berdasarkan numerologi)
const stifinDescriptions = {
    1: { title: "Thinking introvert" },
    2: { title: "Feeling ekstrovert" },
    3: { title: "Sensing introvert" },
    4: { title: "Sensing ekstrovert" },
    5: { title: "Feeling introvert" },
    6: { title: "Intuiting ekstrovert" },
    7: { title: "Intuiting introvert" },
    8: { title: "Thinking ekstrovert" },
    9: { title: "Insting" }
};

// Variabel Kontrol
let userName = "";
let birthDate = "";
let bloodType = "";

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
const scanLoadingText = document.getElementById('scan-loading-text');

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
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = String(i).padStart(2, '0');
        option.textContent = i;
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

function startScanAnimation() {
    // Memastikan scan hanya berjalan sekali
    if (fingerprintScanner.classList.contains('scanning')) return;
    
    scanLoadingText.textContent = "Sedang memproses...";
    fingerprintScanner.classList.add('scanning');
    
    setTimeout(showResult, 7000);
}

function showResult() {
    scanContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    const numerologyNumber = calculateNumerology(birthDate);
    const stifinResult = stifinDescriptions[numerologyNumber].title;

    resultTitle.textContent = `Hasil Kepribadian STIFIn Anda: ${stifinResult}`;
    resultDescription.textContent = "Untuk penjelasan lebih detail dari kepribadian tersebut, akan dijelaskan dalam sesi bersama Mas Ali Mahfud.";
}

function restartApp() {
    resultContainer.classList.add('hidden');
    introContainer.classList.remove('hidden');
    userForm.reset();
    fingerprintScanner.classList.remove('scanning');
}

// Event Listeners
userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    userName = userNameInput.value;
    const day = daySelect.value;
    const month = monthSelect.value;
    const year = yearSelect.value;
    
    if (!day || !month || !year) {
        alert("Mohon lengkapi tanggal lahir Anda.");
        return;
    }
    
    birthDate = `${year}-${month}-${day}`;
    bloodType = bloodTypeSelect.value;
    
    introContainer.classList.add('hidden');
    scanContainer.classList.remove('hidden');
    scanLoadingText.textContent = "Silakan letakkan jari Anda di area ini.";
});

fingerprintScanner.addEventListener('mousedown', startScanAnimation);
fingerprintScanner.addEventListener('touchstart', startScanAnimation);

restartButton.addEventListener('click', restartApp);

document.addEventListener('DOMContentLoaded', populateDateFields);
