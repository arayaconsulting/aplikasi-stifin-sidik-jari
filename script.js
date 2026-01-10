/**
 * DATA STRATEGIS STIFIN - ARAYA CONSULTING
 * Manual Book Pengembangan Diri Berbasis Kecerdasan Genetik
 */
const stifinDescriptions = {
    1: { 
        title: "Thinking Introvert (Ti)",
        intisari: "Kecerdasan logika mendalam yang dikendalikan dari dalam diri. Anda adalah pakar analisis yang mandiri, objektif, dan memiliki standar integritas tinggi terhadap fakta.",
        keywords: "Menalar, Mendalam, Mandiri, Tulang.",
        chemistry: "Tahta (Kekuasaan & Otoritas).",
        study: "Fokus pada struktur, skema logika mendalam, dan mendalami satu bidang keahlian secara spesifik.",
        communication: "Berikan data logis dan hargai kemandiriannya. Jangan mendikte proses kerjanya.",
        successHabit: "Membangun sistem atau standar operasional (SOP) yang presisi dalam setiap pekerjaan.",
        relationship: "Membutuhkan pasangan yang menghargai privasi dan mampu berdiskusi intelektual.",
        positif: "Analitis, disiplin, mandiri, dan pakar di bidangnya.",
        negatif: "Kaku, kurang empati, dan terkadang terlalu kritis.",
        karir: "Ilmuwan, Auditor, Programmer, Analis Data."
    },
    2: { 
        title: "Feeling Ekstrovert (Fe)",
        intisari: "Kecerdasan emosional yang dikemudikan dari luar. Anda adalah pemimpin alami yang hebat dalam persuasi dan mampu menggerakkan massa melalui energi sosial.",
        keywords: "Memimpin, Hubungan, Komunikasi, Pernapasan.",
        chemistry: "Cinta (Penerimaan Sosial).",
        study: "Belajar melalui diskusi, mengajar orang lain, dan lingkungan yang harmonis.",
        communication: "Sentuh perasaannya dahulu, berikan apresiasi tulus, dan bicara dengan nada hangat.",
        successHabit: "Membangun jejaring (networking) dan menjaga silaturahmi secara konsisten.",
        relationship: "Membutuhkan pengakuan, pujian, dan kasih sayang verbal yang rutin.",
        positif: "Komunikatif, empatik, persuasif, dan pandai mengelola tim.",
        negatif: "Terlalu subjektif dan mudah terpengaruh oleh suasana hati (moody).",
        karir: "Politisi, Motivator, Leader, HR Manager."
    },
    3: { 
        title: "Sensing Introvert (Si)",
        intisari: "Kecerdasan panca indra yang dikendalikan dari dalam. Anda adalah praktisi gigih dengan daya tahan fisik luar biasa, mencintai keteraturan dan bukti nyata.",
        keywords: "Mengingat, Gigih, Disiplin, Otot.",
        chemistry: "Harta (Kekayaan & Aset).",
        study: "Repetisi (pengulangan), latihan fisik berulang, dan fokus pada data detail konkret.",
        communication: "Bicaralah berbasis bukti nyata dan langkah demi langkah. Hindari hal abstrak.",
        successHabit: "Menjaga kebugaran fisik dan rutin menginventarisir aset secara berkala.",
        relationship: "Mencari keamanan finansial dan kepastian jangka panjang dalam hubungan.",
        positif: "Sangat teliti, disiplin tinggi, produktif, dan praktis.",
        negatif: "Kaku terhadap perubahan dan terkadang terlalu materialistik.",
        karir: "Atlet, Manajer Operasional, Akuntan, Administrasi."
    },
    4: { 
        title: "Sensing Ekstrovert (Se)",
        intisari: "Kecerdasan fisik yang dikemudikan dari luar. Anda sangat cekatan dan dermawan, senang beraksi nyata di lapangan untuk hasil yang terlihat instan.",
        keywords: "Beraksi, Dermawan, Praktis, Indra.",
        chemistry: "Harta (Kekayaan & Pengakuan).",
        study: "Belajar langsung di lapangan, simulasi, dan praktek nyata (Learning by doing).",
        communication: "To the point pada manfaat praktis dan keuntungan yang bisa segera didapat.",
        successHabit: "Segera mengeksekusi peluang tanpa terlalu banyak berteori di awal.",
        relationship: "Suka memberikan hadiah fisik dan senang petualangan bersama pasangan.",
        positif: "Cekatan, gesit, pandai melihat peluang, dan dermawan.",
        negatif: "Kurang perencanaan jangka panjang dan mudah bosan dengan teori.",
        karir: "Pengusaha, Marketing, Kontraktor, Olahragawan."
    },
    5: { 
        title: "Feeling Introvert (Fi)",
        intisari: "Kecerdasan emosional yang dikendalikan dari dalam. Anda pribadi idealis dengan keyakinan kuat dan bergerak berdasarkan panggilan hati.",
        keywords: "Merasakan, Idealis, Keyakinan, Jantung.",
        chemistry: "Cinta (Kedekatan Emosi).",
        study: "Mencari makna mendalam pelajaran dan butuh suasana tenang tanpa tekanan.",
        communication: "Gunakan pendekatan personal, hargai prinsipnya, jangan singgung perasaan.",
        successHabit: "Menjaga integritas antara kata dan perbuatan sesuai kata hati.",
        relationship: "Sangat setia dan mencari koneksi jiwa yang mendalam (soulmate).",
        positif: "Setia, tulus, prinsip kuat, dan penyayang.",
        negatif: "Sangat sensitif dan cenderung memendam masalah sendiri.",
        karir: "Psikolog, Penulis, Seniman, Konselor, Aktivis."
    },
    6: { 
        title: "Intuiting Ekstrovert (Ie)",
        intisari: "Kecerdasan kreatif yang dikemudikan dari luar. Anda pencipta peluang visioner, haus inovasi, dan pandai merakit ide menjadi konsep besar.",
        keywords: "Mencipta, Peluang, Perubahan, Perut.",
        chemistry: "Kata (Ilmu & Gagasan).",
        study: "Gunakan mind mapping, visualisasi, dan cara-cara baru yang inovatif.",
        communication: "Berikan ruang beride, bicara masa depan, jangan batasi kreativitas.",
        successHabit: "Terus meng-upgrade ilmu dan mencari mentor visioner.",
        relationship: "Butuh pasangan suportif terhadap mimpi besar dan asyik bertukar pikiran.",
        positif: "Sangat kreatif, optimis, visioner, dan membawa perubahan.",
        negatif: "Kurang fokus detail teknis dan mudah berganti fokus ide.",
        karir: "Inovator, Arsitek, Desainer, Pakar Strategi."
    },
    7: { 
        title: "Intuiting Introvert (Ii)",
        intisari: "Kecerdasan kreatif dikendalikan dari dalam. Perancang strategi perfeksionis dengan imajinasi kuat dan mengutamakan kualitas tinggi.",
        keywords: "Membayangkan, Strategis, Kualitas, Otak Kanan.",
        chemistry: "Kata (Ilmu & Kualitas).",
        study: "Menganalisis konsep abstrak, riset mendalam, dan perencanaan jangka panjang.",
        communication: "Bicara level kualitas tinggi. Jangan paksa cepat jika kualitas belum tercapai.",
        successHabit: "Membuat perencanaan jangka panjang yang sangat detail (Master Plan).",
        relationship: "Eksklusif memilih pasangan dan sangat menghargai privasi intelektual.",
        positif: "Strategis, perfeksionis, berwibawa, visi jangka panjang.",
        negatif: "Terlalu tertutup dan sulit dipuaskan (standar terlalu tinggi).",
        karir: "Perencana Strategis, Peneliti, Detektif, Konseptor."
    },
    8: { 
        title: "Thinking Ekstrovert (Te)",
        intisari: "Kecerdasan logika dikemudikan dari luar. Manajer sistem hebat, objektif, tegas, dan sangat fokus pada target efisiensi kerja.",
        keywords: "Mengelola, Sistem, Objektif, Otak Kiri.",
        chemistry: "Tahta (Kekuasaan & Pengelolaan).",
        study: "Mengorganisir bahan belajar ke sistem rapi dan fokus efisiensi waktu.",
        communication: "Bicara langsung hasil (result-oriented), gunakan logika dan otoritas.",
        successHabit: "Mendelegasikan tugas teknis dan fokus kontrol sistem serta keputusan.",
        relationship: "Butuh pasangan logis yang mendukung karir/status sosialnya.",
        positif: "Tegas, objektif, manajerial kuat, fokus hasil.",
        negatif: "Otoriter dan kurang peka terhadap perasaan orang lain.",
        karir: "CEO, Manajer Profesional, Birokrat, Administrator."
    },
    9: { 
        title: "Insting (In)",
        intisari: "Kecerdasan naluri sebagai indera ketujuh. Responsif, generalis (serba bisa), dan memiliki adaptasi sangat cepat.",
        keywords: "Merangkai, Reflek, Berkorban, Otomatis.",
        chemistry: "Bahagia (Ngeklik secara alami).",
        study: "Merangkai bacaan menjadi rangkuman dan mengurai kembali, gunakan latar musik.",
        communication: "Bicara langsung pada poinnya dan berikan suasana santai tanpa tekanan.",
        successHabit: "Rutin melakukan jeda spiritual untuk menajamkan naluri.",
        relationship: "Sangat tulus, tidak suka konflik, mencari kedamaian hubungan.",
        positif: "Sangat jujur, responsif, spiritualis, naluri tajam.",
        negatif: "Temperamental jika tertekan, peragu, dan naif.",
        karir: "Mediator, Jurnalis, Aktivis, Musik, Chef."
    }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0;
let userName = "";
let birthDate = "";
let isScanning = false;

// 1. PENGISIAN TANGGAL LAHIR
function populateDateFields() {
    const d = document.getElementById('day');
    const m = document.getElementById('month');
    const y = document.getElementById('year');
    
    if(!d || !m || !y) return;

    d.innerHTML = '<option value="" disabled selected>Hari</option>';
    m.innerHTML = '<option value="" disabled selected>Bulan</option>';
    y.innerHTML = '<option value="" disabled selected>Tahun</option>';

    for(let i=1; i<=31; i++) {
        const val = String(i).padStart(2,'0');
        d.innerHTML += `<option value="${val}">${i}</option>`;
    }

    const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    months.forEach((mon, i) => {
        const val = String(i+1).padStart(2,'0');
        m.innerHTML += `<option value="${val}">${mon}</option>`;
    });

    const currentYear = new Date().getFullYear();
    for(let i=currentYear; i>=1950; i--) {
        y.innerHTML += `<option value="${i}">${i}</option>`;
    }
}

// 2. LOGIKA NUMEROLOGI & GENERATE ID
function calculateNumerology(dateString) {
    const digits = dateString.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    while (sum > 9) sum = String(sum).split('').reduce((acc, d) => acc + parseInt(d), 0);
    return sum || 9;
}

function generateCertificateID() {
    const year = new Date().getFullYear();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `ARAYA/STIFIN/${year}/${randomNum}`;
}

// 3. HANDLER PEMINDAIAN
function handleScanStart(e) {
    if (e) e.preventDefault();
    if (isScanning) return;
    
    isScanning = true;
    const scanner = document.getElementById('fingerprint-scanner');
    const text = document.getElementById('scan-text');
    
    text.textContent = `Memindai ${fingers[currentFingerIndex]}...`;
    scanner.classList.add('scanning');

    setTimeout(() => {
        scanner.classList.remove('scanning');
        isScanning = false;
        
        if (currentFingerIndex < fingers.length - 1) {
            text.textContent = `${fingers[currentFingerIndex].toUpperCase()} BERHASIL.`;
            document.getElementById('next-finger-button').classList.remove('hidden'); 
        } else {
            text.textContent = "MENGANALISIS POLA...";
            setTimeout(showResult, 1500);
        }
    }, 2000);
}

const scannerElement = document.getElementById('fingerprint-scanner');
if(scannerElement) {
    scannerElement.addEventListener('mousedown', handleScanStart);
    scannerElement.addEventListener('touchstart', handleScanStart);
}

document.getElementById('next-finger-button').addEventListener('click', function() {
    currentFingerIndex++;
    this.classList.add('hidden');
    document.getElementById('scan-text').textContent = `Letakkan ${fingers[currentFingerIndex]} Anda.`;
});

// 4. PENAMPILAN HASIL & PENGISIAN SERTIFIKAT
function showResult() {
    document.getElementById('scan-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    
    const resNum = calculateNumerology(birthDate);
    const data = stifinDescriptions[resNum];

    document.getElementById('result-title').textContent = data.title;
    document.getElementById('result-description').textContent = data.intisari;

    // Fill Certificate Data
    document.getElementById('cert-name').textContent = userName;
    document.getElementById('cert-result').textContent = data.title;
    document.getElementById('cert-intisari').textContent = data.intisari;
    document.getElementById('cert-success').textContent = data.successHabit;
    document.getElementById('cert-relationship').textContent = data.relationship;
    document.getElementById('cert-communication').textContent = data.communication;
    document.getElementById('cert-study').textContent = data.study;
    document.getElementById('cert-positif').textContent = data.positif;
    document.getElementById('cert-negatif').textContent = data.negatif;
    document.getElementById('cert-karir').textContent = data.karir;
    
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('cert-id').textContent = generateCertificateID();
}

// 5. DOWNLOAD PDF (OPTIMASI AGAR TIDAK TERPOTONG)
document.getElementById('download-btn').addEventListener('click', () => {
    const el = document.getElementById('certificate-template');
    el.style.display = 'block';
    
    const opt = {
        margin: [0, 0, 0, 0], // Tanpa margin agar tidak ada sisa kertas putih
        filename: `Sertifikat_STIFIn_${userName}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scale: 2, 
            useCORS: true, 
            logging: false,
            letterRendering: true
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'landscape',
            compress: true
        },
        // Mencegah PDF memotong elemen di tengah (PENTING)
        pagebreak: { mode: 'avoid-all' } 
    };

    html2pdf().set(opt).from(el).save().then(() => {
        el.style.display = 'none';
    });
});

// 6. INITIALIZATION
document.getElementById('user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    userName = document.getElementById('user-name').value;
    birthDate = `${document.getElementById('year').value}-${document.getElementById('month').value}-${document.getElementById('day').value}`;
    document.getElementById('intro-container').classList.add('hidden');
    document.getElementById('scan-container').classList.remove('hidden');
    document.getElementById('scan-text').textContent = `Letakkan ${fingers[0]} Anda.`;
});

document.getElementById('restart-button').addEventListener('click', () => location.reload());

populateDateFields();
window.onload = populateDateFields;
