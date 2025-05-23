// ฟังก์ชันหลักสำหรับการทำงานของหน้าเมนู
document.addEventListener('DOMContentLoaded', function() {
    // เพิ่มเอฟเฟกต์เมื่อโหลดหน้าเสร็จ
    animateElements();
    
    // ตรวจสอบว่ามีผลลัพธ์เก่าหรือไม่
    checkPreviousResult();
});

// ฟังก์ชันเริ่มแบบทดสอบ
function startQuiz() {
    // เพิ่มเอฟเฟกต์ก่อนเปลี่ยนหน้า
    document.querySelector('.menu-container').style.transform = 'scale(0.95)';
    document.querySelector('.menu-container').style.opacity = '0.8';
    
    setTimeout(() => {
        window.location.href = "quiz.html";
    }, 300);
}

// ฟังก์ชันแสดงวิธีใช้
function showInstructions() {
    Swal.fire({
        title: '<strong>วิธีทำแบบทดสอบ</strong>',
        html: `
            <div class="instructions-container">
                <div class="instruction-step">
                    <span class="step-number">1</span>
                    <p>อ่านคำถามและตัวเลือกทั้งหมดอย่างละเอียด</p>
                </div>
                <div class="instruction-step">
                    <span class="step-number">2</span>
                    <p>เลือกคำตอบที่ตรงกับบุคลิกภาพของคุณมากที่สุด</p>
                </div>
                <div class="instruction-step">
                    <span class="step-number">3</span>
                    <p>กดปุ่ม <strong>'ต่อไป'</strong> เพื่อไปคำถามถัดไป</p>
                </div>
                <div class="instruction-step">
                    <span class="step-number">4</span>
                    <p>เมื่อตอบครบทุกคำถามจะแสดงผลลัพธ์ทันที</p>
                </div>
                <p class="instruction-tip">💡 คำแนะนำ: ตอบตามความเป็นตัวคุณจริงๆ อย่าเลือกเพราะคิดว่าคำตอบนั้นดูดี!</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'เข้าใจแล้ว',
        confirmButtonColor: '#b22222',
        width: '800px',
        customClass: {
            popup: 'custom-swal-popup'
        }
    });
}

// ฟังก์ชันแสดงเกี่ยวกับแบบทดสอบ
function showAbout() {
    Swal.fire({
        title: '<strong>เกี่ยวกับ Pasulol Core</strong>',
        html: `
            <div class="about-container">
                <img src="./images/pasulol-about.png" alt="Pasulol" class="about-image">
                <div class="about-content">
                    <p>แบบทดสอบนี้พัฒนาขึ้นเพื่อวิเคราะห์บุคลิกภาพของคุณผ่านตัวละครในจักรวาล Pasulol</p>
                    <p>ใช้ทฤษฎีทางจิตวิทยาเช่น MBTI และ Enneagram ในการวิเคราะห์ผลลัพธ์</p>
                    <div class="about-features">
                        <p><i class="fas fa-check-circle"></i> แบบทดสอบ 9 คำถาม</p>
                        <p><i class="fas fa-check-circle"></i> ผลลัพธ์ละเอียดพร้อมคำอธิบาย</p>
                        <p><i class="fas fa-check-circle"></i> เปรียบเทียบกับตัวละครอื่นๆ</p>
                    </div>
                    <p class="about-version">เวอร์ชัน 1.0 | อัปเดตล่าสุด: กันยายน 2023</p>
                </div>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'ปิด',
        confirmButtonColor: '#b22222',
        width: '900px',
        showCloseButton: true
    });
}

// ฟังก์ชันตรวจสอบผลลัพธ์แบบทดสอบครั้งก่อน
function checkPreviousResult() {
    const previousResult = localStorage.getItem('pasulolQuizResult');
    if (previousResult) {
        const result = JSON.parse(previousResult);
        showReturningUserMessage(result.character);
    }
}

// ฟังก์ชันแสดงข้อความสำหรับผู้ใช้ที่เคยทำแบบทดสอบ
function showReturningUserMessage(character) {
    const returningMessage = document.createElement('div');
    returningMessage.className = 'returning-user-message';
    returningMessage.innerHTML = `
        <p>คุณเคยทำแบบทดสอบแล้ว ผลลัพธ์ล่าสุด: <strong>${character.name}</strong></p>
        <button onclick="viewPreviousResult()" class="view-result-btn">
            <i class="fas fa-eye"></i> ดูผลลัพธ์ก่อนหน้า
        </button>
    `;
    document.querySelector('.menu-description').prepend(returningMessage);
}

// ฟังก์ชันดูผลลัพธ์ก่อนหน้า
function viewPreviousResult() {
    const previousResult = JSON.parse(localStorage.getItem('pasulolQuizResult'));
    if (previousResult) {
        window.location.href = `result.html?character=${encodeURIComponent(previousResult.character.name)}`;
    }
}

// ฟังก์ชันเพิ่มเอฟเฟกต์การโหลด
function animateElements() {
    const elements = [
        '.menu-title',
        '.menu-subtitle',
        '.character-gif',
        '.menu-btn',
        '.menu-description'
    ];
    
    elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = `all 0.5s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}

// เพิ่มสไตล์สำหรับ Swal (SweetAlert2)
const style = document.createElement('style');
style.textContent = `
    .custom-swal-popup {
        font-family: 'Kanit', sans-serif;
        border-radius: 20px;
    }
    .instruction-step {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        padding: 10px;
        background: #f9f9f9;
        border-radius: 10px;
    }
    .step-number {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: #b22222;
        color: white;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        margin-right: 15px;
        font-weight: bold;
    }
    .instruction-tip {
        margin-top: 20px;
        padding: 10px;
        background: #fff8e1;
        border-left: 4px solid #ffc107;
        font-size: 0.9em;
    }
    .about-container {
        display: flex;
        gap: 20px;
        align-items: center;
    }
    .about-image {
        width: 200px;
        border-radius: 10px;
    }
    .about-features {
        margin: 15px 0;
    }
    .about-features i {
        color: #b22222;
        margin-right: 8px;
    }
    .about-version {
        font-size: 0.8em;
        color: #777;
        margin-top: 20px;
    }
    .returning-user-message {
        background: #e8f5e9;
        padding: 10px 15px;
        border-radius: 10px;
        margin-bottom: 20px;
        border-left: 4px solid #4caf50;
    }
    .view-result-btn {
        background: #4caf50;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
        font-size: 0.9em;
        transition: all 0.3s;
    }
    .view-result-btn:hover {
        background: #388e3c;
    }
`;
document.head.appendChild(style);