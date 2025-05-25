// Enhanced character profile navigation with fade/slide, drag & drop, auto slide, favorite, and more

document.addEventListener("DOMContentLoaded", function () {
    // 1. Character data
    const characters = [
    {
        name: "Pasulol",
        tier: "Creator",
        img: "results/pasulol.jpg",
        alt: "Pasulol Profile",
        attributes: [
            { label: "MBTI", value: "INTP" },
            { label: "Enneagram", value: "5w4" },
            { label: "Core Type", value: "5" },
            { label: "Code", value: "549" },
            { label: "Relations", value: "Kui, Nai, Nontok, Hon" }
        ],
        quote: "พี่พสุคือผู้สร้างสรรค์โลกของ Pasulol ให้มีชีวิตขึ้นมา.",
        quoteBy: "Narration"
    },
    {
        name: "Kui",
        tier: "Inventor",
        img: "results/kui.jpg",
        alt: "Kui Profile",
        attributes: [
            { label: "MBTI", value: "ENTP" },
            { label: "Enneagram", value: "7w8" },
            { label: "Core Type", value: "7" },
            { label: "Code", value: "738" },
            { label: "Relations", value: "Pasulol, Nai" }
        ],
        quote: "กุ่ยยอดนักประดิษฐ์ผู้มีความคิดสร้างสรรค์สูงและเป็นพ่อของแมลงสาปกลายพันธ์ุ.",
        quoteBy: "Narration"
    },
    {
        name: "Nai",
        tier: "Leader",
        img: "results/nai.jpg",
        alt: "Nai Profile",
        attributes: [
            { label: "MBTI", value: "ENTJ" },
            { label: "Enneagram", value: "3w4" },
            { label: "Core Type", value: "3" },
            { label: "Code", value: "385" },
            { label: "Relations", value: "Pasulol, Kui, Hon" }
        ],
        quote: "ไนน์มีความเป็นผู้นำสูงและมั่นใจมาก.",
        quoteBy: "Narration"
    },
    {
        name: "Hon",
        tier: "Support",
        img: "results/hon.jpg",
        alt: "Hon Profile",
        attributes: [
            { label: "MBTI", value: "ENFP" },
            { label: "Enneagram", value: "2w1" },
            { label: "Core Type", value: "2" },
            { label: "Code", value: "297" },
            { label: "Relations", value: "Pasulol, Nai" }
        ],
        quote: "ฮอลนิสัยดีชอบช่วยเหลือคนอื่น แต่มักจะตายก่อนตลอดเลย.",
        quoteBy: "Narration"
    },
    {
        name: "Ricky",
        tier: "Friend",
        img: "results/ricky.jpg",
        alt: "Ricky Profile",
        attributes: [
            { label: "MBTI", value: "ESFJ" },
            { label: "Enneagram", value: "2w1" },
            { label: "Core Type", value: "2" },
            { label: "Code", value: "261" },
            { label: "Relations", value: "Hon, Kui" }
        ],
        quote: "ริกกี้แมลงสาปเพื่อนรักนิสัยดีชอบช่วยเหลือผู้อื่น แต่กลับบิดเบี้ยวเพราะพ่อกับสังคมไม่รักเพราะรูปร่างที่เป็นแมลงสาป.",
        quoteBy: "Narration"
    },
    {
        name: "Isuan",
        tier: "Deity",
        img: "results/isuan.jpg",
        alt: "Isuan Profile",
        attributes: [
            { label: "MBTI", value: "ESTP" },
            { label: "Enneagram", value: "8w7" },
            { label: "Core Type", value: "8" },
            { label: "Code", value: "837" },
            { label: "Relations", value: "Nai, Nontok" }
        ],
        quote: "พระอิศวรเทพผู้ทำลายล้าง.",
        quoteBy: "Narration"
    },
    {
        name: "Nontok",
        tier: "Giant",
        img: "results/nontok.jpg",
        alt: "Nontok Profile",
        attributes: [
            { label: "MBTI", value: "ISFP" },
            { label: "Enneagram", value: "4w3" },
            { label: "Core Type", value: "4" },
            { label: "Code", value: "486" },
            { label: "Relations", value: "Pasulol, Isuan" }
        ],
        quote: "นนทกยักษ์ล้างเท้า เพราะโดนกลั่นแกล้งจึงคิดล้างแค้น.",
        quoteBy: "Narration"
    },
    {
        name: "Narai",
        tier: "Deity",
        img: "results/narai.jpg",
        alt: "Narai Profile",
        attributes: [
            { label: "MBTI", value: "ESFP" },
            { label: "Enneagram", value: "7w6" },
            { label: "Core Type", value: "7" },
            { label: "Code", value: "739" },
            { label: "Relations", value: "Nai, Kui" }
        ],
        quote: "พระนารายณ์เทพผู้พดุงธรรม ผู้ปราบปรามยักษ์ชั่ว.",
        quoteBy: "Narration"
    },
    {
        name: "Steve",
        tier: "Soldier",
        img: "results/steve.jpg",
        alt: "Steve Profile",
        attributes: [
            { label: "MBTI", value: "ISTP" },
            { label: "Enneagram", value: "8w9" },
            { label: "Core Type", value: "8" },
            { label: "Code", value: "864" },
            { label: "Relations", value: "Pasulol, Kui" }
        ],
        quote: "สตีฟทหารผ่านศึกผู้ถูกผนึกไว้ในอำพัน และฟื้นมาในโลกปัจจุบันเขาเหลืออะไรบ้าง.",
        quoteBy: "Narration"
    },
    {
        name: "Cherdchai",
        tier: "Captain",
        img: "results/cherdchai.jpg",
        alt: "Cherdchai Profile",
        attributes: [
            { label: "MBTI", value: "ESTJ" },
            { label: "Enneagram", value: "8w7" },
            { label: "Core Type", value: "8" },
            { label: "Code", value: "836" },
            { label: "Relations", value: "Nai, Isuan" }
        ],
        quote: "คุณเชิดชัยกัปตันสายการบินชั้นตํ่าที่ต้องคุมฝูงชน.",
        quoteBy: "Narration"
    },
    {
        name: "Boonchoke",
        tier: "Elder",
        img: "results/boonchoke.jpg",
        alt: "Boonchoke Profile",
        attributes: [
            { label: "MBTI", value: "ISTJ" },
            { label: "Enneagram", value: "1w9" },
            { label: "Core Type", value: "1" },
            { label: "Code", value: "163" },
            { label: "Relations", value: "Hon, Pasulol" }
        ],
        quote: "ลุงบุญโชค ผู้สูงอายุ.",
        quoteBy: "Narration"
    },
    {
        name: "Ob",
        tier: "Student",
        img: "results/ob.jpg",
        alt: "Ob Profile",
        attributes: [
            { label: "MBTI", value: "INFP" },
            { label: "Enneagram", value: "4w5" },
            { label: "Core Type", value: "4" },
            { label: "Code", value: "495" },
            { label: "Relations", value: "Hon, Narai" }
        ],
        quote: "อ๊บเด็กนักเรียน ที่ไม่อยากเข้าลาดกระบัง.",
        quoteBy: "Narration"
    },
    {
        name: "Nuang",
        tier: "Host",
        img: "results/nuang.jpg",
        alt: "Nuang Profile",
        attributes: [
            { label: "MBTI", value: "ENFJ" },
            { label: "Enneagram", value: "2w3" },
            { label: "Core Type", value: "2" },
            { label: "Code", value: "278" },
            { label: "Relations", value: "Kui, Ricky" }
        ],
        quote: "พิธีกรผมสวยสุดหล่อ ผู้ดำเนินรายการ และควบคุมสถานการณ์.",
        quoteBy: "Narration"
    },
    {
        name: "Lord of Darkness",
        tier: "Villain",
        img: "results/lordofdarkness.jpg",
        alt: "Lord of Darkness Profile",
        attributes: [
            { label: "MBTI", value: "INFJ" },
            { label: "Enneagram", value: "6w5" },
            { label: "Core Type", value: "6" },
            { label: "Code", value: "612" },
            { label: "Relations", value: "Steve, Pasulol" }
        ],
        quote: "เจ้าแห่งความมืดผู้อยู่เบื้องหลังความชั่วร้ายทุกอย่าง ทรงพลังในโลกหลังความตาย.",
        quoteBy: "Narration"
    },
    {
        name: "Ood",
        tier: "Leader",
        img: "results/ood.jpg",
        alt: "Ood Profile",
        attributes: [
            { label: "MBTI", value: "ENTJ" },
            { label: "Enneagram", value: "8w7" },
            { label: "Core Type", value: "8" },
            { label: "Code", value: "835" },
            { label: "Relations", value: "Narai, Cherdchai" }
        ],
        quote: "ผู้นำสมาคมผู้รู้ความจริงมีอำนาจมากเพราะคนเชื่อเขาว่าเอเลี่ยนมีจริง.",
        quoteBy: "Narration"
    },
    {
        name: "Peut",
        tier: "Troublemaker",
        img: "results/peut.jpg",
        alt: "Peut Profile",
        attributes: [
            { label: "MBTI", value: "ISFP" },
            { label: "Enneagram", value: "6w7" },
            { label: "Core Type", value: "6" },
            { label: "Code", value: "684" },
            { label: "Relations", value: "Kui, Ricky" }
        ],
        quote: "ไอปื๊ดเด็กติดยา กูจะดูดยาให้หมดโลกไปเลย.",
        quoteBy: "Narration"
    },
    {
        name: "Bank",
        tier: "Mage",
        img: "results/bank.jpg",
        alt: "Bank Profile",
        attributes: [
            { label: "MBTI", value: "INTJ" },
            { label: "Enneagram", value: "6w5" },
            { label: "Core Type", value: "6" },
            { label: "Code", value: "613" },
            { label: "Relations", value: "Ood, Hon, Pasulol" }
        ],
        quote: "แบงค์จอมขมังเวทย์ ผู้เป็นได้ทุกอย่างเพราะ paranoid เกิน.",
        quoteBy: "Narration"
    },
    {
        name: "Indha",
        tier: "Deity",
        img: "results/indha.jpg",
        alt: "Indha Profile",
        attributes: [
            { label: "MBTI", value: "ISFJ" },
            { label: "Enneagram", value: "6w5" },
            { label: "Core Type", value: "6" },
            { label: "Code", value: "613" },
            { label: "Relations", value: "Ood, Hon, Pasulol" }
        ],
        quote: "เทพ",
        quoteBy: "Narration"
    }
];

    // 2. Render profiles to DOM
    const archive = document.getElementById('archive-container');
    archive.innerHTML = characters.map((char, idx) => `
        <article class="character-profile" data-idx="${idx}" style="display:none;">
            <header class="profile-header" style="position: relative;">
                <h2 class="character-name">${char.name}</h2>
                <div class="character-rank">
                    <span class="tier-badge">${char.tier}</span>
                </div>
                <button class="favorite-btn" title="Favorite" style="position: absolute; top: 18px; right: 18px;">
                    <i class="fas fa-heart"></i>
                </button>
            </header>
            <section class="character-visual">
                <img src="${char.img}" alt="${char.alt}" class="profile-image" loading="lazy">
            </section>
            <section class="character-meta">
                <dl class="attributes-grid">
                    ${char.attributes.map(attr => `
                        <div class="attribute-group">
                            <dt>${attr.label}</dt>
                            <dd>${attr.value}</dd>
                        </div>
                    `).join('')}
                </dl>
            </section>
            <section class="intel-section">
                <blockquote class="tactical-quote">
                    "${char.quote}"
                    <footer>- ${char.quoteBy}</footer>
                </blockquote>
            </section>
        </article>
    `).join('');

    // 3. หลังจาก render แล้ว ค่อย querySelectorAll
    const profiles = Array.from(document.querySelectorAll('.character-profile'));
    let favorites = JSON.parse(localStorage.getItem('profileFavorites') || '[]');
    let current = 0;
    let autoSlide = null;
    let isDragging = false, dragStartX = 0, dragDelta = 0;

    // --- Navigation Bar ---
    const nav = document.createElement('div');
    nav.className = 'results-nav';
    nav.innerHTML = `
        <button class="results-btn" id="prevProfile" aria-label="ก่อนหน้า"><i class="fas fa-chevron-left"></i></button>
        <span id="profile-progress" style="align-self:center;font-size:1.1rem;color:var(--primary-accent);"></span>
        <button class="results-btn" id="nextProfile" aria-label="ถัดไป"><i class="fas fa-chevron-right"></i></button>
        <button class="results-btn" id="randomProfile" aria-label="สุ่ม"><i class="fas fa-random"></i></button>
    `;
    archive.prepend(nav);

    // --- Favorite Counter ---
    const favCounter = document.createElement('div');
    favCounter.id = 'fav-counter';
    favCounter.style = 'margin-bottom:1.2rem;font-size:1.1rem;color:var(--secondary-accent);';
    archive.prepend(favCounter);

    // --- Helper: Show Profile with Fade/Slide ---
    function showProfile(idx, direction = 0) {
        profiles.forEach((el, i) => {
            if (i === idx) {
                el.style.display = 'block';
                el.style.opacity = 0;
                el.style.transform = `translateX(${direction === 0 ? 0 : (direction > 0 ? 60 : -60)}px)`;
                setTimeout(() => {
                    el.style.transition = 'opacity 0.4s, transform 0.4s';
                    el.style.opacity = 1;
                    el.style.transform = 'translateX(0)';
                }, 10);
            } else {
                el.style.transition = 'opacity 0.3s, transform 0.3s';
                el.style.opacity = 0;
                el.style.transform = `translateX(${i < idx ? -60 : 60}px)`;
                setTimeout(() => { el.style.display = 'none'; }, 300);
            }
        });
        updateFavoriteButtons();
        updateProgress();
    }

    // --- Progress Indicator ---
    function updateProgress() {
        document.getElementById('profile-progress').textContent = `โปรไฟล์ ${current + 1} / ${profiles.length}`;
    }

    // --- Favorite Logic ---
    function updateFavoriteBtn() {
        let btn = document.getElementById('fav-btn');
        if (!btn) {
            btn = document.createElement('button');
            btn.id = 'fav-btn';
            btn.className = 'results-btn';
            btn.style.marginLeft = '1rem';
            btn.innerHTML = '<i class="fas fa-heart"></i>';
            btn.title = 'Favorite';
            nav.appendChild(btn);
            btn.onclick = toggleFavorite;
        }
        btn.style.background = isFavorite(current) ? 'var(--primary-accent)' : 'var(--secondary-accent)';
        btn.style.color = isFavorite(current) ? '#fff' : '#fff';
        updateFavCounter();
    }
    function isFavorite(idx) {
        return favorites.includes(idx);
    }
    function toggleFavorite() {
        if (isFavorite(current)) {
            favorites = favorites.filter(i => i !== current);
        } else {
            favorites.push(current);
        }
        localStorage.setItem('profileFavorites', JSON.stringify(favorites));
        updateFavoriteBtn();
    }
    function updateFavCounter() {
        favCounter.innerHTML = `<i class="fas fa-heart"></i> Favorite ทั้งหมด: <b>${favorites.length}</b>`;
    }

    // --- Show/Hide Details (Popover) ---
    function showDetails(show) {
        let detail = document.getElementById('profile-detail-pop');
        if (!detail) {
            detail = document.createElement('div');
            detail.id = 'profile-detail-pop';
            detail.style = `
                position:fixed;left:50%;top:60px;transform:translateX(-50%);
                background:#fffafd;box-shadow:0 4px 24px #e5737320;
                border-radius:18px;padding:1.2rem 1.5rem;z-index:999;
                min-width:220px;max-width:90vw;display:none;
                color:var(--text-primary);font-size:1.05rem;
            `;
            document.body.appendChild(detail);
        }
        if (show) {
            const meta = profiles[current].querySelector('.character-meta');
            detail.innerHTML = meta ? meta.innerHTML : 'ไม่มีรายละเอียดเพิ่มเติม';
            detail.style.display = 'block';
        } else {
            detail.style.display = 'none';
        }
    }
    // Add info button
    let infoBtn = document.createElement('button');
    infoBtn.className = 'results-btn';
    infoBtn.innerHTML = '<i class="fas fa-info-circle"></i>';
    infoBtn.title = 'รายละเอียดเพิ่มเติม';
    infoBtn.style.marginLeft = '1rem';
    nav.appendChild(infoBtn);
    infoBtn.onclick = () => showDetails(true);
    document.addEventListener('click', e => {
        if (!e.target.closest('#profile-detail-pop') && !e.target.closest('.fa-info-circle')) {
            showDetails(false);
        }
    });

    // --- Navigation Events ---
    document.getElementById('prevProfile').onclick = function () {
        current = (current - 1 + profiles.length) % profiles.length;
        showProfile(current, -1);
    };
    document.getElementById('nextProfile').onclick = function () {
        current = (current + 1) % profiles.length;
        showProfile(current, 1);
    };
    document.getElementById('randomProfile').onclick = function () {
        let rand;
        do { rand = Math.floor(Math.random() * profiles.length); } while (rand === current && profiles.length > 1);
        current = rand;
        showProfile(current, 1);
    };

    // --- Auto Slide ---
    function startAutoSlide() {
        if (autoSlide) clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            current = (current + 1) % profiles.length;
            showProfile(current, 1);
        }, 5000);
    }
    function stopAutoSlide() {
        if (autoSlide) clearInterval(autoSlide);
    }
    startAutoSlide();
    archive.addEventListener('mouseenter', stopAutoSlide);
    archive.addEventListener('mouseleave', startAutoSlide);

    // --- Responsive Touch Gesture (Swipe) ---
    let startX = null;
    archive.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });
    archive.addEventListener('touchend', e => {
        if (startX === null) return;
        let endX = e.changedTouches[0].clientX;
        if (endX - startX > 50) {
            current = (current - 1 + profiles.length) % profiles.length;
            showProfile(current, -1);
        } else if (startX - endX > 50) {
            current = (current + 1) % profiles.length;
            showProfile(current, 1);
        }
        startX = null;
    });

    // --- Keyboard Navigation ---
    document.addEventListener('keydown', e => {
        if (e.key === "ArrowLeft") {
            current = (current - 1 + profiles.length) % profiles.length;
            showProfile(current, -1);
        } else if (e.key === "ArrowRight") {
            current = (current + 1) % profiles.length;
            showProfile(current, 1);
        }
    });

    // --- Drag & Drop to Reorder ---
    profiles.forEach((profile, idx) => {
        profile.draggable = true;
        profile.ondragstart = e => {
            isDragging = true;
            dragStartX = e.clientX;
            profile.style.opacity = 0.5;
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("text/plain", idx);
        };
        profile.ondragend = e => {
            isDragging = false;
            profile.style.opacity = 1;
        };
        profile.ondragover = e => {
            e.preventDefault();
            profile.style.boxShadow = "0 0 0 4px var(--secondary-accent)";
        };
        profile.ondragleave = e => {
            profile.style.boxShadow = "";
        };
        profile.ondrop = e => {
            e.preventDefault();
            profile.style.boxShadow = "";
            const fromIdx = parseInt(e.dataTransfer.getData("text/plain"));
            const toIdx = idx;
            if (fromIdx !== toIdx) {
                // Swap DOM
                if (fromIdx < toIdx) {
                    archive.insertBefore(profiles[fromIdx], profiles[toIdx].nextSibling);
                } else {
                    archive.insertBefore(profiles[fromIdx], profiles[toIdx]);
                }
                // Update array
                profiles.splice(toIdx, 0, profiles.splice(fromIdx, 1)[0]);
                // Show the moved profile
                current = toIdx;
                showProfile(current, 0);
            }
        };
    });

    // Helper: อัปเดตปุ่มหัวใจในแต่ละโปรไฟล์
    function updateFavoriteButtons() {
        profiles.forEach((profile, idx) => {
            const favBtn = profile.querySelector('.favorite-btn');
            if (favBtn) {
                if (favorites.includes(idx)) {
                    favBtn.classList.add('favorited');
                    favBtn.setAttribute('aria-pressed', 'true');
                } else {
                    favBtn.classList.remove('favorited');
                    favBtn.setAttribute('aria-pressed', 'false');
                }
            }
        });
    }

    // ใส่ event ให้ปุ่มหัวใจทุกโปรไฟล์
    profiles.forEach((profile, idx) => {
        const favBtn = profile.querySelector('.favorite-btn');
        if (favBtn) {
            favBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                if (favorites.includes(idx)) {
                    favorites = favorites.filter(i => i !== idx);
                } else {
                    favorites.push(idx);
                }
                localStorage.setItem('profileFavorites', JSON.stringify(favorites));
                updateFavoriteButtons();
            });
        }
    });

    // อัปเดตสถานะหัวใจเมื่อโหลดหน้า
    updateFavoriteButtons();

    // --- Initial Show ---
    showProfile(current, 0);
});