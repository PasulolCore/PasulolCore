// Enhanced character profile navigation with fade/slide, drag & drop, auto slide, favorite, and more

document.addEventListener("DOMContentLoaded", function () {
    const profiles = Array.from(document.querySelectorAll('.character-profile'));
    const archive = document.querySelector('.archive-container');
    if (profiles.length <= 1) return;

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

    // --- State ---
    let current = 0;
    let autoSlide = null;
    let isDragging = false, dragStartX = 0, dragDelta = 0;
    let favorites = JSON.parse(localStorage.getItem('profileFavorites') || '[]');

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
        updateProgress();
        updateFavoriteBtn();
        showDetails(false);
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

    // --- Initial Show ---
    showProfile(current, 0);
});