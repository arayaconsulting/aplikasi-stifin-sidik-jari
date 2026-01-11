/**
 * FULL SCRIPT STIFIn - ARAYA CONSULTING
 * Dioptimalkan untuk Layout Sertifikat Elegan & PDF Anti-Potong
 */

const stifinDescriptions = {
    1: { 
        title: "Sensing Introwert (Si)", 
        intisari: "Kecerdasan fisik yang dikemudikan dari dalam. Anda adalah praktisi yang sangat teliti, disiplin, dan memiliki daya tahan kerja yang luar biasa. Anda sangat menghargai data konkret dan pengalaman nyata.", 
        successHabit: "Menjaga stamina fisik dan ketertiban administrasi aset secara rutin.", 
        relationship: "Mencari stabilitas jangka panjang dan bukti kesetiaan nyata.", 
        communication: "Gunakan instruksi yang praktis, konkret, dan langkah demi langkah.", 
        study: "Latihan fisik berulang (drilling) dan menghafal data detail.", 
        positif: "Teliti, disiplin tinggi, produktif.", 
        negatif: "Kaku, sulit adaptasi, terlalu prosedural.", 
        karir: "Akuntan, Manajer Operasional, Atlet." 
    },
    2: { 
        title: "Sensing Ekstrowert (Se)", 
        intisari: "Kecerdasan fisik yang dikemudikan dari luar. Anda sangat cekatan, gesit, dan pandai melihat peluang bisnis. Anda senang beraksi nyata di lapangan untuk mendapatkan hasil yang terlihat instan.", 
        successHabit: "Segera mengeksekusi peluang tanpa terlalu banyak berteori di awal.", 
        relationship: "Suka memberikan hadiah fisik dan senang petualangan bersama.", 
        communication: "To the point pada manfaat praktis dan keuntungan yang didapat.", 
        study: "Learning by doing dan simulasi langsung di lapangan.", 
        positif: "Cekatan, gesit, dermawan.", 
        negatif: "Impulsif, boros, ceroboh.", 
        karir: "Pengusaha, Marketing, Kontraktor." 
    },
    3: { 
        title: "Thinking Introwert (Ti)", 
        intisari: "Kecerdasan logika yang dikemudikan dari dalam. Anda adalah konseptor yang mandiri, objektif, dan sangat presisi. Anda mampu mengurai masalah rumit menjadi sistem yang logis.", 
        successHabit: "Membangun sistem atau standar kerja (SOP) yang sangat mendetail.", 
        relationship: "Menghargai ruang privasi dan diskusi intelektual yang substansial.", 
        communication: "Berikan data logis dan hargai ruang berpikirnya.", 
        study: "Mendalami struktur dan skema logika secara spesifik.", 
        positif: "Analitis, objektif, pakar.", 
        negatif: "Dingin, terlalu kritis, sinis.", 
        karir: "Ilmuwan, Auditor, Programmer, Analis Data." 
    },
    4: { 
        title: "Thinking Ekstrowert (Te)", 
        intisari: "Kecerdasan logika yang dikemudikan dari luar. Anda adalah manajer sistem yang tegas dan berorientasi pada hasil. Anda hebat dalam mengelola sumber daya dan mengontrol organisasi.", 
        successHabit: "Mendelegasikan tugas teknis untuk fokus pada kontrol sistem.", 
        relationship: "Mencari pasangan logis yang mendukung status sosial dan karir.", 
        communication: "Bicara langsung pada hasil (result-oriented) dan otoritas.", 
        study: "Mengorganisir bahan belajar ke dalam sistem yang efisien.", 
        positif: "Tegas, manajerial kuat, adil.", 
        negatif: "Otoriter, dominan, kurang empati.", 
        karir: "CEO, Manajer Profesional, Administrator." 
    },
    5: { 
        title: "Intuiting Introwert (Ii)", 
        intisari: "Kecerdasan kreatif yang dikemudikan dari dalam. Anda adalah perancang strategi yang perfeksionis dengan imajinasi kuat. Anda selalu memikirkan visi jangka panjang yang berkualitas.", 
        successHabit: "Menyusun Master Plan jangka panjang yang mendetail.", 
        relationship: "Eksklusif dalam memilih teman dan menghargai privasi pikiran.", 
        communication: "Bicara pada standar kualitas tinggi dan hargai risetnya.", 
        study: "Menganalisis konsep abstrak dan riset mandiri.", 
        positif: "Strategis, perfeksionis, visioner.", 
        negatif: "Tertutup, lambat beraksi, perfeksionis ekstrem.", 
        karir: "Peneliti, Detektif, Konseptor, Strategist." 
    },
    6: { 
        title: "Intuiting Ekstrowert (Ie)", 
        intisari: "Kecerdasan kreatif yang dikemudikan dari luar. Anda adalah inovator visioner yang haus akan ide baru. Anda mampu melihat peluang masa depan dan merakitnya menjadi terobosan.", 
        successHabit: "Terus memperbarui ilmu pengetahuan dan mencari mentor visioner.", 
        relationship: "Membutuhkan pasangan yang mendukung mimpi besarnya.", 
        communication: "Berikan ruang untuk beride dan bicarakan visi masa depan.", 
        study: "Mind mapping dan visualisasi gambar.", 
        positif: "Kreatif, optimis, inovatif.", 
        negatif: "Mudah bosan, tidak konsisten, kurang fokus.", 
        karir: "Inovator, Arsitek, Desainer, Pakar Strategi." 
    },
    7: { 
        title: "Feeling Introwert (Fi)", 
        intisari: "Kecerdasan emosi yang dikemudikan dari dalam. Anda adalah pribadi idealis dengan panggilan moral yang kuat. Anda memimpin dengan integritas jiwa dan kelembutan hati.", 
        successHabit: "Menjaga integritas antara perbuatan dan panggilan hati.", 
        relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate).", 
        communication: "Hargai prinsip pribadinya dan gunakan pendekatan personal.", 
        study: "Mencari makna mendalam dalam suasana tenang.", 
        positif: "Setia, tulus, prinsip kuat.", 
        negatif: "Sangat sensitif, mudah tersinggung, memendam kecewa.", 
        karir: "Psikolog, Penulis, Konselor, Aktivis." 
    },
    8: { 
        title: "Feeling Ekstrowert (Fe)", 
        intisari: "Kecerdasan emosi yang dikemudikan dari luar. Anda adalah komunikator persuasif yang sangat empatik. Anda mampu menginspirasi dan menggerakkan banyak orang dengan mudah.", 
        successHabit: "Menjaga hubungan sosial dan jejaring (networking) secara aktif.", 
        relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional.", 
        communication: "Sentuh perasaannya dahulu sebelum masuk ke topik teknis.", 
        study: "Diskusi kelompok dan mengajar kembali kepada orang lain.", 
        positif: "Komunikatif, empatik, persuasif.", 
        negatif: "Subjektif, moody, haus pujian.", 
        karir: "Politisi, Motivator, Leader, HR Manager." 
    },
    9: { 
        title: "Instinct (In)", 
        intisari: "Kecerdasan naluri yang responsif dan adaptif. Anda adalah pribadi yang jujur, tulus, dan mencari keharmonisan. Anda hebat sebagai mediator karena sifat cinta damai Anda.", 
        successHabit: "Rutin melakukan jeda spiritual untuk menajamkan naluri.", 
        relationship: "Sangat tulus, tidak suka konflik, mencari kedamaian.", 
        communication: "Bicara langsung pada poinnya dalam suasana santai.", 
        study: "Merangkai potongan informasi menjadi rangkuman utuh.", 
        positif: "Jujur, responsif, naluri tajam.", 
        negatif: "Peragu, pasif, kurang pendirian.", 
        karir: "Mediator, Jurnalis, Aktivis, Chef." 
    }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0, userName = "", birthDate = "", isScanning = false;

function populateDateFields() {
    const d = document.getElementById('day'), m = document.getElementById('month'), y = document.getElementById('year');
    if(!d || !m || !y) return;
    d.innerHTML = '<option value="" disabled selected>Hari</option>';
    m.innerHTML = '<option value="" disabled selected>Bulan</option>';
    y.innerHTML = '<option value="" disabled selected>Tahun</option>';
    for(let i=1; i<=31; i++) d.innerHTML += `<option value="${String(i).padStart(2,'0')}">${i}</option>`;
    const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    months.forEach((mon, i) => m.innerHTML += `<option value="${String(i+1).padStart(2,'0')}">${mon}</option>`);
    const currentYear = new Date().getFullYear();
    for(let i=currentYear; i>=1950; i--) y.innerHTML += `<option value="${i}">${i}</option>`;
}

function calculateNumerology(dateString) {
    const digits = dateString.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    while (sum > 9) sum = String(sum).split('').reduce((acc, d) => acc + parseInt(d), 0);
    return sum || 9;
}

function handleScanStart(e) {
    if (e) e.preventDefault();
    if (isScanning) return;
    isScanning = true;
    const scanner = document.getElementById('fingerprint-scanner'), text = document.getElementById('scan-text');
    text.textContent = `Memindai ${fingers[currentFingerIndex]}...`;
    scanner.classList.add('scanning');
    setTimeout(() => {
        scanner.classList.remove('scanning');
        isScanning = false;
        if (currentFingerIndex < fingers.length - 1) {
            text.textContent = `${fingers[currentFingerIndex].toUpperCase()} BERHASIL.`;
            document.getElementById('next-finger-button').classList.remove('hidden'); 
        } else {
            text.textContent = "MENGANALISIS DATA STIFIn...";
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

function showResult() {
    document.getElementById('scan-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const resNum = calculateNumerology(birthDate);
    const data = stifinDescriptions[resNum];

    document.getElementById('result-title').textContent = data.title;
    document.getElementById('result-description').textContent = data.intisari;

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
    
    const now = new Date();
    document.getElementById('cert-date').textContent = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const randomId = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('cert-id').textContent = `ARAYA/STIFIn/${now.getFullYear()}/${randomId}`;
}

document.getElementById('download-btn').addEventListener('click', () => {
    const el = document.getElementById('certificate-template');
    el.style.display = 'block';
    
    const opt = {
        margin: 0,
        filename: `Sertifikat_STIFIn_${userName}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true, logging: false, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true }
    };

    html2pdf().set(opt).from(el).save().then(() => { el.style.display = 'none'; });
});

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
