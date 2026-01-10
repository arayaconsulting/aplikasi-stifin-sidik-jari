// Data Lengkap sesuai permintaan Anda
const stifinDescriptions = {
    1: { title: "Thinking Introvert (Ti)", intisari: "Fokus pada logika mendalam dan kemandirian.", keywords: "Menalar, Mendalam, Mandiri.", chemistry: "Tahta.", study: "Skema logika.", positif: "Analitis, objektif.", negatif: "Kaku, dingin.", karir: "Ilmuwan, Auditor." },
    2: { title: "Feeling Ekstrovert (Fe)", intisari: "Pemimpin yang persuasif dan komunikatif.", keywords: "Memimpin, Hubungan.", chemistry: "Cinta.", study: "Diskusi kelompok.", positif: "Empati, komunikatif.", negatif: "Subjektif, baper.", karir: "Politisi, Motivator." },
    3: { title: "Sensing Introvert (Si)", intisari: "Pekerja keras yang gigih dan disiplin.", keywords: "Mengingat, Gigih.", chemistry: "Harta.", study: "Menghafal & drill.", positif: "Teliti, stamina kuat.", negatif: "Kaku, materialis.", karir: "Atlet, Administrasi." },
    4: { title: "Sensing Ekstrovert (Se)", intisari: "Praktis, cekatan, dan suka beraksi.", keywords: "Beraksi, Dermawan.", chemistry: "Harta.", study: "Praktek lapangan.", positif: "Mudah bergaul, gesit.", negatif: "Boros, bosan teori.", karir: "Pengusaha, Marketing." },
    5: { title: "Feeling Introvert (Fi)", intisari: "Idealis dengan prinsip yang sangat teguh.", keywords: "Merasakan, Keyakinan.", chemistry: "Cinta.", study: "Mencari makna.", positif: "Setia, tulus.", negatif: "Sensitif, memendam.", karir: "Penulis, Psikolog." },
    6: { title: "Intuiting Ekstrovert (Ie)", intisari: "Pencipta peluang yang visioner.", keywords: "Mencipta, Peluang.", chemistry: "Kata.", study: "Mind mapping.", positif: "Kreatif, optimis.", negatif: "Kurang detail.", karir: "Inovator, Arsitek." },
    7: { title: "Intuiting Introvert (Ii)", intisari: "Perancang strategi yang perfeksionis.", keywords: "Membayangkan, Kualitas.", chemistry: "Kata.", study: "Analisis konsep.", positif: "Strategis, visi kuat.", negatif: "Eksklusif, tertutup.", karir: "Detektif, Peneliti." },
    8: { title: "Thinking Ekstrovert (Te)", intisari: "Manajer sistem yang sangat efisien.", keywords: "Mengelola, Objektif.", chemistry: "Tahta.", study: "Sistem teratur.", positif: "Tegas, tertarget.", negatif: "Otoriter.", karir: "CEO, Birokrat." },
    9: { title: "Insting (In)", intisari: "Responsif, naluri tajam, dan serba bisa.", keywords: "Reflek, Otomatis.", chemistry: "Bahagia.", study: "Merangkai bacaan.", positif: "Jujur, spiritualis.", negatif: "Temperamental.", karir: "Mediator, Jurnalis." }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0;
let userName = "";
let birthDate = "";
let isScanning = false;

// DOM
const introContainer = document.getElementById('intro-container');
const scanContainer = document.getElementById('scan-container');
const resultContainer = document.getElementById('result-container');
const userForm = document.getElementById('user-form');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const fingerprintScanner = document.getElementById('fingerprint-scanner');
const scanText = document.getElementById('scan-text');
const nextFingerButton = document.getElementById('next-finger-button');

function populateDateFields() {
    const d = document.getElementById('day'), m = document.getElementById('month'), y = document.getElementById('year');
    for(let i=1; i<=31; i++) d.innerHTML += `<option value="${String(i).padStart(2,'0')}">${i}</option>`;
    ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"].forEach((mon,i) => {
        m.innerHTML += `<option value="${String(i+1).padStart(2,'0')}">${mon}</option>`;
    });
    for(let i=new Date().getFullYear(); i>=1950; i--) y.innerHTML += `<option value="${i}">${i}</option>`;
}

function calculateNumerology(dateString) {
    const digits = dateString.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    while (sum > 9) sum = String(sum).split('').reduce((acc, d) => acc + parseInt(d), 0);
    return sum || 9;
}

function startScan() {
    if (isScanning) return;
    isScanning = true;
    scanText.textContent = `Sedang memindai ${fingers[currentFingerIndex]} Anda...`;
    fingerprintScanner.classList.add('scanning');
    nextFingerButton.classList.add('hidden'); 

    setTimeout(() => {
        fingerprintScanner.classList.remove('scanning');
        isScanning = false;
        if (currentFingerIndex < fingers.length - 1) {
            scanText.textContent = `${fingers[currentFingerIndex]} sudah dipindai.`;
            nextFingerButton.classList.remove('hidden'); 
        } else {
            scanText.textContent = "Menganalisis...";
            setTimeout(showResult, 2000);
        }
    }, 2000);
}

function showResult() {
    scanContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    const resNum = calculateNumerology(birthDate);
    const data = stifinDescriptions[resNum];

    resultTitle.textContent = `Hasil: ${data.title}`;
    resultDescription.textContent = data.intisari;

    // Isi Sertifikat
    document.getElementById('cert-name').textContent = userName;
    document.getElementById('cert-result').textContent = data.title;
    document.getElementById('cert-intisari').textContent = data.intisari;
    document.getElementById('cert-keywords').textContent = data.keywords;
    document.getElementById('cert-chemistry').textContent = data.chemistry;
    document.getElementById('cert-study').textContent = data.study;
    document.getElementById('cert-positif').textContent = data.positif;
    document.getElementById('cert-negatif').textContent = data.negatif;
    document.getElementById('cert-karir').textContent = data.karir;
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID');
}

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    userName = document.getElementById('user-name').value;
    birthDate = `${document.getElementById('year').value}-${document.getElementById('month').value}-${document.getElementById('day').value}`;
    introContainer.classList.add('hidden');
    scanContainer.classList.remove('hidden');
    scanText.textContent = `Letakkan ${fingers[currentFingerIndex]} Anda.`;
});

fingerprintScanner.addEventListener('mousedown', startScan);
fingerprintScanner.addEventListener('touchstart', startScan);

nextFingerButton.addEventListener('click', () => {
    currentFingerIndex++;
    nextFingerButton.classList.add('hidden');
    scanText.textContent = `Letakkan ${fingers[currentFingerIndex]} Anda.`;
});

document.getElementById('download-btn').addEventListener('click', () => {
    const el = document.getElementById('certificate-template');
    el.style.display = 'block';
    html2pdf().from(el).set({ filename: `STIFIn_${userName}.pdf`, html2canvas: { scale: 2 }, jsPDF: { orientation: 'landscape' } }).save().then(() => el.style.display='none');
});

document.getElementById('restart-button').addEventListener('click', () => location.reload());
document.addEventListener('DOMContentLoaded', populateDateFields);
