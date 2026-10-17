// ===============================================
// 1. القائمة الجانبية (Sidebar Toggle)
// ===============================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

// ===============================================
// 2. الجزيئات الذهبية المتحركة في الخلفية
// ===============================================
const pCanvas = document.getElementById('particles-canvas');
const pCtx = pCanvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    pCanvas.width = window.innerWidth;
    pCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas, { passive: true });
resizeCanvas();

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * pCanvas.width;
        this.y = Math.random() * pCanvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -Math.random() * 0.6 - 0.2;
        this.opacity = Math.random() * 0.7 + 0.3;
    }
    update() {
        this.y += this.speedY;
        if (this.y < 0) this.reset();
    }
    draw() {
        pCtx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`;
        pCtx.fillRect(this.x, this.y, this.size, this.size);
    }
}

for (let i = 0; i < 70; i++) particles.push(new Particle());

function animateParticles() {
    pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ===============================================
// 3. صور الكواكب والمجرات (مصححة ودقيقة 100%)
// ===============================================
const planetImages = {
    sun: "https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_in_the_X-ray_spectrum_by_Yohkoh.jpg", // الشمس
    mercury: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg", // عطارد
    venus: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg", // الزهرة
    earth: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg", // كوكب الأرض الصحيحة 100%
    mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/Mars_in_true_color.jpg", // المريخ
    jupiter: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg", // المشترى
    saturn: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg", // زحل
    uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg", // أورانوس
    neptune: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full_Disk_%28Voyager_2%29.jpg" // نبتون
};

const galaxyImages = {
    milkyway: "https://upload.wikimedia.org/wikipedia/commons/8/89/Milky_Way_Night_Sky_Black_Background.jpg",
    andromeda: "https://upload.wikimedia.org/wikipedia/commons/c/c1/M31_Calar_Alto_Observatory.jpg",
    sombrero: "https://upload.wikimedia.org/wikipedia/commons/5/5e/M104_ngc4594_sombrero_galaxy_hi-res.jpg",
    whirlpool: "https://upload.wikimedia.org/wikipedia/commons/b/b8/M51_Hubble_Releaz.jpg"
};

// ===============================================
// 4. بيانات الكواكب والمجرات
// ===============================================
const planetData = {
    sun: { name: "الشمس", type: "نجم مركزي", story: "قلب مجموعتنا الشمسية والمصدر الرئيسي للضوء والحرارة. تتكون بشكل رئيسي من الهيدروجين والهيليوم.", day: "27 يوماً", year: "230 مليون سنة", temp: "5,500°C", moons: "0 قمر" },
    mercury: { name: "عطارد", type: "كوكب صخري", story: "أقرب الكواكب للشمس وأصغرها حجماً. يمر بتقلبات حرارية قياسية بين النهار الشديد والليل المتجمد.", day: "59 يوماً", year: "88 يوماً", temp: "430°C", moons: "0 قمر" },
    venus: { name: "الزهرة", type: "كوكب صخري", story: "توأم الأرض في الحجم ولكنه الأكثر حرارة بفعل الاحتباس الحراري الشديد.", day: "243 يوماً", year: "225 يوماً", temp: "465°C", moons: "0 قمر" },
    earth: { name: "الأرض", type: "كوكب صخري (مأهول)", story: "موطن الحياة الوحيد المعروف حتى الآن باحتوائه على الماء السائل والغلاف الجوي الغني.", day: "24 ساعة", year: "365.25 يوماً", temp: "15°C", moons: "1 قمر" },
    mars: { name: "المريخ", type: "كوكب صخري", story: "الكوكب الأحمر الشهير بلون أكسيد الحديد على سطحه ويحتوي على أطول بركان.", day: "24.6 ساعة", year: "687 يوماً", temp: "-60°C", moons: "2 قمر" },
    jupiter: { name: "المشترى", type: "عملاق غازي", story: "أضخم كواكب المجموعة الشمسية. يتميز بالبقعة الحمراء العظيمة وهي عاصفة عملاقة.", day: "9.9 ساعات", year: "11.8 سنة", temp: "-110°C", moons: "95 قمراً" },
    saturn: { name: "زحل", type: "عملاق غازي", story: "لؤلؤة المجموعة الشمسية والمشهور بحلقاته البراقة المكونة من قطع الجليد والصخور.", day: "10.7 ساعات", year: "29.5 سنة", temp: "-140°C", moons: "146 قمراً" },
    uranus: { name: "أورانوس", type: "عملاق ثلجي", story: "الكوكب المائل على جانبه بشكل فريد للغاية بلونه الأزرق المخضر الرائع.", day: "17.2 ساعة", year: "84 سنة", temp: "-195°C", moons: "28 قمراً" },
    neptune: { name: "نبتون", type: "عملاق ثلجي", story: "الكوكب الأزرق الداكن والأبعد في المجموعة الشمسية بأسرع رياح فلكية.", day: "16.1 ساعة", year: "165 سنة", temp: "-200°C", moons: "16 قمراً" }
};

const galaxyData = {
    milkyway: { name: "مجرة درب التبانة (Milky Way)", type: "مجرة حلزونية شريطية", story: "مجرتنا الأم التي تحتضن كوكب الأرض والنظام الشمسي. تحتوي على أكثر من 100 إلى 400 مليار نجم وفي مركزها ثقب أسود هائل.", diameter: "100,000 سنة ضوئية", stars: "100-400 مليار نجم", distance: "نحن بداخلها (0)", core: "Sagittarius A*" },
    andromeda: { name: "مجرة أندروميدا (Andromeda)", type: "مجرة حلزونية عملاقة", story: "أقرب المجرات الكبيرة لمجرتنا وتتجه نحو التصادم مع درب التبانة بعد 4.5 مليار سنة. تحتوي على حوالي ترليون نجم.", diameter: "220,000 سنة ضوئية", stars: "1 ترليون نجم", distance: "2.5 مليون سنة ضوئية", core: "ثقب أسود مضاعف" },
    sombrero: { name: "مجرة الصومعة (Sombrero M104)", type: "مجرة حلزونية غبارية", story: "تشبه القبعة المكسيكية الكلاسيكية بفعل حلقة الغبار الكثيفة المحيطة بنواتها البراقة جداً.", diameter: "50,000 سنة ضوئية", stars: "100 مليار نجم", distance: "31 مليون سنة ضوئية", core: "ثقب أسود هائل" },
    whirlpool: { name: "مجرة الدوارة (Whirlpool M51)", type: "مجرة حلزونية كلاسيكية", story: "أول مجرة تم التعرف على هيكلها الحلزوني في التاريخ، وتتفاعل حركياً مع مجرة صغيرة مجاورة لها.", diameter: "60,000 سنة ضوئية", stars: "100 مليار نجم", distance: "23 مليون سنة ضوئية", core: "مركز نشط بالنجوم" }
};

// ===============================================
// 5. دمج وعرض الصور بدقة
// ===============================================
function renderPlanetVisual(key) {
    const wrapper = document.getElementById('planet-3d-wrapper');
    wrapper.innerHTML = `
        <div style="width:100%; height:100%; display:flex; justify-content:center; align-items:center; overflow:hidden;">
            <img src="${planetImages[key]}" alt="${key}" style="max-width:90%; max-height:90%; border-radius:50%; box-shadow: 0 0 40px rgba(255,215,0,0.3); animation: floatImage 4s ease-in-out infinite alternate; object-fit: cover;">
        </div>
        <div class="instruction-badge"><i class="fa-solid fa-eye"></i> صورة فلكية حقيقية مرخصة</div>
    `;
}

function renderGalaxyVisual(key) {
    const wrapper = document.querySelector('.galaxy-3d-wrapper');
    wrapper.innerHTML = `
        <div style="width:100%; height:100%; display:flex; justify-content:center; align-items:center; overflow:hidden;">
            <img src="${galaxyImages[key]}" alt="${key}" style="max-width:90%; max-height:90%; border-radius:20px; box-shadow: 0 0 40px rgba(142,68,173,0.4); animation: floatImage 4s ease-in-out infinite alternate; object-fit: cover;">
        </div>
    `;
}

// ===============================================
// 6. التحكم بالأقسام
// ===============================================
function hideAllSections() {
    document.getElementById('planets-section-view').style.display = 'none';
    document.getElementById('galaxies-section-view').style.display = 'none';
    document.getElementById('developer-section-view').style.display = 'none';

    document.getElementById('main-planets-tab').classList.remove('active');
    document.getElementById('main-galaxies-tab').classList.remove('active');
    document.getElementById('main-dev-tab').classList.remove('active');
}

function showPlanetsSection() {
    hideAllSections();
    document.getElementById('planets-section-view').style.display = 'block';
    document.getElementById('main-planets-tab').classList.add('active');
    selectPlanet('sun');
}

function showGalaxiesSection() {
    hideAllSections();
    document.getElementById('galaxies-section-view').style.display = 'block';
    document.getElementById('main-galaxies-tab').classList.add('active');
    selectGalaxy('milkyway');
}

function showDeveloperInfo() {
    hideAllSections();
    document.getElementById('developer-section-view').style.display = 'block';
    document.getElementById('main-dev-tab').classList.add('active');
}

function selectPlanet(key) {
    const data = planetData[key];
    document.querySelectorAll('.sub-btn').forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.currentTarget) window.event.currentTarget.classList.add('active');

    gsap.to('#planet-info-card', { opacity: 0, y: 10, duration: 0.15, onComplete: () => {
        document.getElementById('planet-name').innerText = data.name;
        document.getElementById('planet-type').innerText = data.type;
        document.getElementById('planet-story').innerText = data.story;
        document.getElementById('planet-stats-grid').innerHTML = `
            <div class="stat-box"><i class="fa-solid fa-rotate-right"></i><div><span>زمن اليوم (الدوران)</span><strong>${data.day}</strong></div></div>
            <div class="stat-box"><i class="fa-solid fa-arrows-spin"></i><div><span>زمن السنة (المدار)</span><strong>${data.year}</strong></div></div>
            <div class="stat-box"><i class="fa-solid fa-temperature-high"></i><div><span>درجة الحرارة</span><strong>${data.temp}</strong></div></div>
            <div class="stat-box"><i class="fa-solid fa-moon"></i><div><span>عدد الأقمار</span><strong>${data.moons}</strong></div></div>
        `;
        gsap.to('#planet-info-card', { opacity: 1, y: 0, duration: 0.2 });
    }});
    renderPlanetVisual(key);
}

function selectGalaxy(key) {
    const data = galaxyData[key];
    document.querySelectorAll('.galaxy-tab').forEach(tab => tab.classList.remove('active'));
    if (window.event && window.event.currentTarget) window.event.currentTarget.classList.add('active');

    gsap.to('.galaxy-info-card', { opacity: 0, y: 10, duration: 0.15, onComplete: () => {
        document.getElementById('galaxy-name').innerText = data.name;
        document.getElementById('galaxy-type-badge').innerText = data.type;
        document.getElementById('galaxy-story').innerText = data.story;
        document.getElementById('galaxy-diameter').innerText = data.diameter;
        document.getElementById('galaxy-stars').innerText = data.stars;
        document.getElementById('galaxy-distance').innerText = data.distance;
        document.getElementById('galaxy-core').innerText = data.core;

        gsap.to('.galaxy-info-card', { opacity: 1, y: 0, duration: 0.2 });
    }});

    renderGalaxyVisual(key);
}

// بدء العرض بوضع الكواكب
showPlanetsSection();