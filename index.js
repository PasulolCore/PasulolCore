
$(document).ready(() => {
    $.post('https://pasulolcoreapi.onrender.com/result/visit', (data) => {
        console.log(data);
    }).fail(() => {
        console.error('Failed to connect to the API.');
    }).done(() => {
        $(document).ready(() => {
            $.get('https://pasulolcoreapi.onrender.com/result/statistics', (data) => {
                if (data && data.cumulative_visitors !== undefined) {
                    $('#play-count').text(data.cumulative_visitors);
                }
                if (data && data.cumulative_shares !== undefined) {
                    $('#share-count').text(data.cumulative_shares);
                }
            }).fail(() => {
                console.error('Failed to fetch statistics from the API.');
            });
        });
    });
});
function playClick() {
    if (window.soundEnabled !== false) {
        const audio = new Audio('sounds/click.mp3');
        audio.volume = 0.4;
        audio.play();
    }
}
function playHover() {
    if (window.soundEnabled !== false) {
        const audio = new Audio('sounds/hover.mp3');
        audio.volume = 0.25;
        audio.play();
    }
}

// --- Sound Toggle ---
function toggleSound() {
    window.soundEnabled = !window.soundEnabled;
    document.getElementById('soundIcon').className = window.soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    localStorage.setItem('soundEnabled', window.soundEnabled ? '1' : '0');
}
window.soundEnabled = localStorage.getItem('soundEnabled') !== '0';

// --- Animate Card Buttons on Load (Card Grid) ---
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-btn');
    cards.forEach((btn, i) => {
        btn.style.opacity = 0;
        btn.style.transform = 'scale(0.93) translateY(24px)';
        setTimeout(() => {
            btn.style.transition = 'all 0.5s cubic-bezier(.4,2,.6,1)';
            btn.style.opacity = 1;
            btn.style.transform = 'scale(1) translateY(0)';
        }, 180 + i * 100);
    });
});

// --- SweetAlert Popups ---
function showInstructions() {
    Swal.fire({
        title: 'วิธีทำแบบทดสอบ',
        html: `
            <ol style="text-align: left; margin: 0 auto; max-width: 80%;">
                <li>อ่านคำถามและตัวเลือกอย่างละเอียด</li>
                <li>เลือกคำตอบที่ตรงกับคุณที่สุด</li>
                <li>กดปุ่ม 'ต่อไป' เพื่อไปคำถามถัดไป</li>
                <li>เมื่อตอบครบทุกคำถามจะแสดงผลลัพธ์</li>
            </ol>
            <p style="margin-top: 20px; font-style: italic;">เลือกคำตอบที่ตรงกับตัวคุณจริงๆ อย่าเลือกสิ่งที่คิดว่าฮานะ :D</p>
        `,
        icon: 'info',
        confirmButtonText: 'เข้าใจแล้ว',
        confirmButtonColor: '#b22222'
    });
}

function showAbout() {
    Swal.fire({
        title: 'เกี่ยวกับแบบทดสอบ',
        html: `
            <div style="text-align: left;">
                <p><strong>Pasulol Core Personality Test</strong></p>
                <p>แบบทดสอบนี้พัฒนาขึ้นเพื่อวิเคราะห์บุคลิกภาพตามตัวละครการ์ตูนของเรื่อง Pasulol เป็นหลักให้แม่นยำ</p>
                <p>เวอร์ชัน 0.1</p>
                <hr>
                <p style="font-size: 0.9rem; color: #777;">© 2025 Pasulol Universe</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'ปิด',
        confirmButtonColor: '#b22222'
    });
}

function showSupport() {
    Swal.fire({
        title: 'สนับสนุนผู้พัฒนา',
        html: `
            <div style="text-align: center; font-family: 'Segoe UI', sans-serif;">
                <p>หากคุณชอบแบบทดสอบนี้และอยากสนับสนุนผู้พัฒนา</p>
                <p>สามารถสนับสนุนได้ผ่านช่องทางเหล่านี้:</p>
                <div style="margin: 25px 0; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                    <button onclick="window.open('https://www.buymeacoffee.com/wellgr8', '_blank');"
                            style="background-color: #FFDD00; color: #111; font-weight: 600; font-size: 16px;
                                   border: none; padding: 12px 24px; border-radius: 12px; cursor: pointer;
                                   box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: all 0.2s ease;">
                        ☕ Buy Me a Coffee
                    </button>
                    <button onclick="window.open('https://ezdn.app/welldonegr8', '_blank');"
                            style="background-color: #2D9CDB; color: #fff; font-weight: 600; font-size: 16px;
                                   border: none; padding: 12px 24px; border-radius: 12px; cursor: pointer;
                                   box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: all 0.2s ease;">
                        💙 EasyDonate
                    </button>
                </div>
                <p style="font-size: 0.9rem; color: #555;">ขอบคุณสำหรับการสนับสนุน!</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'ปิด',
        confirmButtonColor: '#b22222'
    });
}

// --- Gesture Navigation: ปัดซ้ายไป quiz.html, ปัดขวาไป results.html ---
let startX = null, startY = null;
document.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});
document.addEventListener('touchend', e => {
    if (startX === null || startY === null) return;
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;
    // ปัดซ้าย (ไป quiz.html)
    if (startX - endX > 60 && Math.abs(endY - startY) < 40) {
        window.location.href = "quiz.html";
    }
    // ปัดขวา (ไป results.html)
    if (endX - startX > 60 && Math.abs(endY - startY) < 40) {
        window.location.href = "results.html";
    }
    startX = startY = null;
});