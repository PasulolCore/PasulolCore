const enneagramTypes = {
    1: { name: "Reformer", traits: ["หลักการ", "ความสมบูรณ์แบบ", "ความรับผิดชอบ"] },
    2: { name: "Helper", traits: ["การช่วยเหลือ", "ความเอื้ออาทร", "การให้"] },
    3: { name: "Achiever", traits: ["ความสำเร็จ", "ประสิทธิภาพ", "ภาพลักษณ์"] },
    4: { name: "Individualist", traits: ["ความเป็นตัวตน", "ความสร้างสรรค์", "อารมณ์ลึกซึ้ง"] },
    5: { name: "Investigator", traits: ["ความรู้", "การวิเคราะห์", "การสังเกต"] },
    6: { name: "Loyalist", traits: ["ความภักดี", "ความปลอดภัย", "การเตรียมพร้อม"] },
    7: { name: "Enthusiast", traits: ["ความสนุกสนาน", "การผจญภัย", "ความเป็นไปได้"] },
    8: { name: "Challenger", traits: ["ความแข็งแกร่ง", "การควบคุม", "ความตรงไปตรงมา"] },
    9: { name: "Peacemaker", traits: ["ความสงบ", "ความสามัคคี", "การยอมรับ"] }
};

const questions = [
    {
    question: "คำถามที่ 1: ผู้บัญชาการตำรวจเรียกคุณเข้าพบเพื่อสั่งงานในการไปสืบสวนสมาคมประหลาดที่ได้รับเรื่องร้องเรียนมาคุณจะตอบสนองผู้บังคับบัญชาอย่างไร",
    image: "images/questions/Q1.gif",
    answers: {
        A: { text: "สั่งอะไรหนักหนาวะ สั่งกูเป็นอาหารตามสั่งเลยเวร", scores: { E: 0, I: +1, T: +1, F: 0, 8: +2, 5: 0 } },
        B: { text: "ครับท่าน", scores: { E: +1, I: 0, T: 0, F: +1, 6: +2, 9: +1 } },
        C: { text: "ไม่รู้ไม่ทำงาน จะนอน", scores: { E: 0, I: +1, T: 0, F: +1, 4: +2, 9: +1 } },
        D: { text: "เงียบๆ รอดูว่าจะได้ทำอะไร", scores: { E: 0, I: +1, T: +1, F: 0, 5: +2, 6: +1 } }
    }
},
{
    question: "คำถามที่ 2: คุณมาถึงสมาคมประหลาดแล้วคุณจะเข้าไปทางไหน ยังไงดีนะ",
    image: "images/questions/Q2.gif",
    answers: {
        A: { text: "เข้าประตูปกติ แบบคนปกติ", scores: { J: +2, P: 0, 1: +1, 3: +1 } },
        B: { text: "หน้าต่างแอบปีนเข้าไป", scores: { P: +2, J: 0, 7: +1, 8: +1 } },
        C: { text: "ปลอมตัวเป็นไปรษณีย์ไทย ส่งพัสดุ", scores: { J: +1, P: +1, 3: +2, 6: +1 } },
        D: { text: "คิดว่าอยากดูรอบๆก่อน", scores: { P: +2, J: 0, 5: +1, 6: +1 } }
    }
},
{
    question: "คำถามที่ 3: มีสมาชิกสมาคมมาพูดคุยกับคุณและจะชวนคุณเข้าไป คุณจะตอบสนองคำเชิญชวนนี้ยังไง",
    image: "images/questions/Q3.gif",
    answers: {
        A: { text: "ตอบรับคำเชิญแบบคนปกติทำกันอย่างมีมารยาท", scores: { E: +1, I: 0, F: +1, T: 0, 2: +1, 3: +1 } },
        B: { text: "คิดว่ามันต้องมีอะไรแปลกๆแน่ๆ", scores: { I: +1, E: 0, T: +1, F: 0, 5: +1, 6: +1 } },
        C: { text: "ไม่คิดอะไรเลย เฉยๆ", scores: { I: +1, E: 0, T: 0, F: +1, 9: +2, 5: +1 } },
        D: { text: "คิดว่าอยากกลับบ้านแล้ว ให้มาคุยกับใครก็ไม่รู้ประหลาดๆ", scores: { I: +1, E: 0, F: +1, T: 0, 4: +2, 6: +1 } }
    }
},
{
    question: "คำถามที่ 4: คุณได้เข้าร่วมประชุมสมาคมคุณได้รับสิทธิ์ในการถามคำถามได้คุณจะถามว่าอะไร",
    image: "images/questions/Q4.gif",
    answers: {
        A: { text: "ถามตรงๆ ว่าสมาคมนี้มีกิจกรรมอะไรบ้าง", scores: { E: +1, T: +1, 3: +1, 8: +1 } },
        B: { text: "ถามแบบอ้อมๆ ว่ามีสมาชิกกี่คน นัดพบกันบ่อยแค่ไหน", scores: { I: +1, F: +1, 6: +1, 9: +1 } },
        C: { text: "ถามเจาะลึกเกี่ยวกับจุดประสงค์และแนวคิดของสมาคม", scores: { T: +2, 5: +2, 1: +1 } },
        D: { text: "ไม่ถามอะไร ใช้วิธีสังเกตการณ์เฉยๆ", scores: { I: +2, 4: +1, 5: +1 } }
    }
},
{
    question: "คำถามที่ 5: อู๊ดหัวหน้าสมาคมให้คุณแนะนำตัวต่อหน้าสมาชิกสมาคมทั้งหมด คุณจะแนะนำตัว หรือจะพูดอะไรต่อสมาชิกคนอื่นๆ",
    image: "images/questions/Q5.gif",
    answers: {
        A: { text: "แนะนำตัวตามจริงแบบสั้นๆ", scores: { J: +1, 1: +1, 3: +1 } },
        B: { text: "สร้างเรื่องราวปลอมๆ เพื่อปกปิดตัวตน", scores: { P: +1, 7: +2, 3: +1 } },
        C: { text: "พูดน้อยที่สุดเท่าที่จะทำได้", scores: { I: +2, 5: +1, 9: +1 } },
        D: { text: "ใช้โอกาสนี้ถามคำถามสมาชิกคนอื่นแทน", scores: { E: +1, 8: +1, 7: +1 } }
    }
},
{
    question: "คำถามที่ 6: หลังจากแนะนำตัวเสร็จ คุณได้เดินออกจากที่ประชุมเพื่อสำรวจหาหลักฐานความผิดปกติเพิ่ม มีห้องให้คุณเลือกสำรวจ 3 ห้องคุณจะเลือกห้องไหน หรือจะทำยังไง",
    image: "images/questions/Q6.gif",
    answers: {
        A: { text: "ห้องเก็บเอกสาร (อาจมีข้อมูลสำคัญ)", scores: { T: +1, 5: +1, 1: +1 } },
        B: { text: "ห้องพักผ่อน (อาจได้ยินบทสนทนาสำคัญ)", scores: { F: +1, 2: +1, 6: +1 } },
        C: { text: "ห้องใต้ดิน (น่าสงสัยที่สุด)", scores: { P: +1, 7: +1, 8: +1 } },
        D: { text: "ไม่เข้าห้องไหน เดินสำรวจรอบนอกก่อน", scores: { J: +1, 6: +1, 9: +1 } }
    }
},
{
    question: "คำถามที่ 7: คุณพบสิ่งของให้เลือกในการเก็บไว้เป็นหลักฐานคุณเลือกที่จะเก็บหลักฐานใดที่คิดว่ามีประโยชน์ต่อการสืบสวนมากที่สุด",
    image: "images/questions/Q7.gif",
    answers: {
        A: { text: "สมุดบันทึกลายมือประธานสมาคม", scores: { J: +1, 1: +1, 5: +1 } },
        B: { text: "บัตรสมาชิกของคนอื่นที่ทิ้งไว้", scores: { F: +1, 2: +1, 6: +1 } },
        C: { text: "อุปกรณ์แปลกๆ ที่ไม่รู้ว่าทำอะไร", scores: { P: +1, 7: +1, 5: +1 } },
        D: { text: "ถ่ายรูปทุกอย่างโดยไม่แตะต้องอะไร", scores: { T: +1, 6: +1, 9: +1 } }
    }
},
{
    question: "คำถามที่ 8: คุณได้เก็บหลักฐานสำหรับข้อมูลมาแล้ว คุณต้องออกไปจากที่นี่จงเลือกทางออกที่คุณคิดจะออกแบบนั้น",
    image: "images/questions/Q8.gif",
    answers: {
        A: { text: "ออกทางประตูหน้าแบบปกติ", scores: { J: +1, 3: +1, 1: +1 } },
        B: { text: "แอบออกทางหลังแบบไม่ให้ใครเห็น", scores: { I: +1, 5: +1, 6: +1 } },
        C: { text: "สร้างสถานการณ์วุ่นวายเพื่อเบี่ยงเบนความสนใจ", scores: { E: +1, 7: +1, 8: +1 } },
        D: { text: "รอจนกว่าทุกคนจะหลับก่อนค่อยออก", scores: { I: +1, 9: +2, 5: +1 } }
    }
},
{
    question: "คำถามที่ 9: คุณได้มาถึงสำนักงานตำรวจอย่างปลอดภัยแล้ว คุณจะรายงานผู้บังคับบัญชาอย่างไร",
    image: "images/questions/Q9.gif",
    answers: {
        A: { text: "รายงานแบบเป็นทางการตามหลักฐานที่เก็บมา", scores: { J: +2, 1: +1, 3: +1 } },
        B: { text: "เล่าแบบละเอียดพร้อมแสดงอารมณ์", scores: { F: +1, 4: +1, 6: +1 } },
        C: { text: "สรุปเฉพาะประเด็นสำคัญเท่านั้น", scores: { T: +1, 5: +1, 9: +1 } },
        D: { text: "เสนอแผนการจัดการทันที", scores: { E: +1, 8: +1, 7: +1 } }
    }
},
    // ...existing code...
{
    question: "คำถามที่ 10: วันหยุดสุดสัปดาห์ Pasulol ชวนเพื่อนๆ ไปเที่ยว คุณจะเลือกกิจกรรมอะไร?",
    image: "images/questions/Q10.gif",
    answers: {
        A: { text: "ตั้งวงเล่นบอร์ดเกมที่บ้าน", scores: { I: +2, 5: +1, 9: +1 } },
        B: { text: "ไปเดินห้าง กินชานมไข่มุก", scores: { E: +2, 7: +1, 2: +1 } },
        C: { text: "ชวนทุกคนไปแคมป์ปิ้งนอกเมือง", scores: { J: +1, 1: +1, 6: +1 } },
        D: { text: "นอนอยู่บ้านดูซีรีส์คนเดียว", scores: { P: +2, 4: +1, 5: +1 } }
    }
},
{
    question: "คำถามที่ 11: Kui ประดิษฐ์เครื่องจักรใหม่แต่เกิดระเบิดกลางบ้าน คุณจะทำอย่างไร?",
    image: "images/questions/Q11.gif",
    answers: {
        A: { text: "ช่วยเก็บกวาดและปลอบใจ Kui", scores: { F: +2, 2: +1, 6: +1 } },
        B: { text: "หัวเราะแล้วถ่ายคลิปลงโซเชียล", scores: { E: +1, 7: +2, 3: +1 } },
        C: { text: "รีบหาสาเหตุและช่วยซ่อม", scores: { T: +2, 5: +1, 1: +1 } },
        D: { text: "บ่นว่าอย่าทำบ้านพังอีกนะ!", scores: { J: +1, 8: +1, 1: +1 } }
    }
},
{
    question: "คำถามที่ 12: Nai ชวนทุกคนไปแข่งเกมออนไลน์ คุณจะรับมือกับการแข่งขันนี้อย่างไร?",
    image: "images/questions/Q12.gif",
    answers: {
        A: { text: "วางแผนกลยุทธ์อย่างจริงจัง", scores: { J: +2, 3: +1, 8: +1 } },
        B: { text: "เล่นขำๆ เน้นความสนุก", scores: { P: +2, 7: +1, 9: +1 } },
        C: { text: "ให้กำลังใจทีมและช่วยประสานงาน", scores: { F: +1, 2: +2, 6: +1 } },
        D: { text: "แอบซุ่มฝึกซ้อมคนเดียว", scores: { I: +1, 5: +2, 4: +1 } }
    }
},
{
    question: "คำถามที่ 13: Hon ทำขนมมาแจกแต่หน้าตาดูไม่น่ากิน คุณจะ...",
    image: "images/questions/Q13.gif",
    answers: {
        A: { text: "ชิมแล้วชมว่าอร่อย (แม้จะไม่จริง)", scores: { F: +2, 2: +1, 9: +1 } },
        B: { text: "พูดตรงๆ ว่าหน้าตาแปลกดี", scores: { T: +2, 8: +1, 1: +1 } },
        C: { text: "แอบเอาไปให้หมากิน", scores: { P: +1, 7: +2, 6: +1 } },
        D: { text: "ขอสูตรไปลองทำเอง", scores: { J: +1, 3: +1, 5: +1 } }
    }
},
{
    question: "คำถามที่ 14: Ricky โดนเพื่อนล้อเรื่องเป็นแมลงสาบ คุณจะ...",
    image: "images/questions/Q14.gif",
    answers: {
        A: { text: "ปลอบใจและอยู่ข้าง Ricky", scores: { F: +2, 2: +2, 6: +1 } },
        B: { text: "ชวน Ricky ไปเล่นอะไรสนุกๆ ลืมเรื่องเศร้า", scores: { E: +1, 7: +2, 9: +1 } },
        C: { text: "วางแผนแก้เผ็ดคนที่ล้อ", scores: { T: +1, 8: +2, 3: +1 } },
        D: { text: "บอก Ricky ว่าไม่ต้องสนใจคนอื่น", scores: { I: +2, 5: +1, 4: +1 } }
    }
},
{
    question: "คำถามที่ 15: Nontok อยากเปลี่ยนลุคใหม่ คุณจะช่วยยังไง?",
    image: "images/questions/Q15.gif",
    answers: {
        A: { text: "พาไปช็อปปิ้งเสื้อผ้าใหม่", scores: { E: +2, 3: +1, 7: +1 } },
        B: { text: "ให้คำแนะนำเรื่องสไตล์", scores: { J: +1, 1: +2, 6: +1 } },
        C: { text: "บอกให้เป็นตัวของตัวเองดีที่สุด", scores: { F: +1, 4: +2, 9: +1 } },
        D: { text: "ช่วยแต่งหน้า/ทำผมให้", scores: { P: +1, 2: +1, 5: +2 } }
    }
},
{
    question: "คำถามที่ 16: วันเกิดของ Narai คุณจะเลือกของขวัญอะไร?",
    image: "images/questions/Q16.gif",
    answers: {
        A: { text: "ของขวัญ DIY ทำเอง", scores: { F: +1, 4: +2, 2: +1 } },
        B: { text: "ของเล่นเทคโนโลยีใหม่ล่าสุด", scores: { T: +2, 5: +1, 7: +1 } },
        C: { text: "พาไปกินบุฟเฟ่ต์", scores: { E: +2, 3: +1, 8: +1 } },
        D: { text: "เขียนการ์ดอวยพรยาวๆ", scores: { J: +1, 6: +2, 9: +1 } }
    }
},
{
    question: "คำถามที่ 17: Steve ชวนไปผจญภัยในป่า คุณจะ...",
    image: "images/questions/Q17.gif",
    answers: {
        A: { text: "เตรียมอุปกรณ์ครบทุกอย่าง", scores: { J: +2, 1: +1, 6: +1 } },
        B: { text: "ลุยเลย ไม่ต้องวางแผนมาก", scores: { P: +2, 7: +1, 8: +1 } },
        C: { text: "ขออยู่บ้านดีกว่า", scores: { I: +2, 5: +1, 9: +1 } },
        D: { text: "ชวนเพื่อนๆ ไปด้วยกันเยอะๆ", scores: { E: +2, 2: +1, 3: +1 } }
    }
},
{
    question: "คำถามที่ 18: Cherdchai จัดประกวดร้องเพลง คุณจะ...",
    image: "images/questions/Q18.gif",
    answers: {
        A: { text: "ขึ้นเวทีโชว์เต็มที่", scores: { E: +2, 3: +2, 7: +1 } },
        B: { text: "เชียร์เพื่อนๆ อยู่ข้างล่าง", scores: { F: +2, 2: +1, 6: +1 } },
        C: { text: "เป็นกรรมการตัดสิน", scores: { J: +1, 1: +2, 8: +1 } },
        D: { text: "แอบร้องในห้องน้ำคนเดียว", scores: { I: +2, 4: +1, 5: +1 } }
    }
},
{
    question: "คำถามที่ 19: Ob เผลอทำของสำคัญหาย คุณจะ...",
    image: "images/questions/Q19.gif",
    answers: {
        A: { text: "ช่วยกันหาทุกซอกทุกมุม", scores: { F: +2, 6: +2, 9: +1 } },
        B: { text: "ปลอบใจ Ob ว่าไม่เป็นไร", scores: { I: +1, 2: +2, 4: +1 } },
        C: { text: "วางแผนย้อนรอยหาของ", scores: { J: +2, 1: +1, 5: +1 } },
        D: { text: "ชวน Ob ไปซื้อใหม่", scores: { E: +1, 7: +2, 3: +1 } }
    }
},
{
    question: "คำถามที่ 20: Nuang ได้เป็นพิธีกรรายการทีวี คุณจะ...",
    image: "images/questions/Q20.gif",
    answers: {
        A: { text: "ช่วยคิดมุกตลกให้", scores: { P: +2, 7: +2, 8: +1 } },
        B: { text: "ช่วยจัดสคริปต์และคิวงาน", scores: { J: +2, 1: +1, 6: +1 } },
        C: { text: "ไปเชียร์ถึงสตูดิโอ", scores: { E: +2, 2: +1, 3: +1 } },
        D: { text: "ดูถ่ายทอดสดอยู่บ้าน", scores: { I: +2, 5: +1, 9: +1 } }
    }
},
{
    question: "คำถามที่ 21: Lord of Darkness ชวนเล่นบอร์ดเกมสุดโหด คุณจะ...",
    image: "images/questions/Q21.gif",
    answers: {
        A: { text: "วางแผนชนะอย่างจริงจัง", scores: { T: +2, 5: +2, 1: +1 } },
        B: { text: "เล่นขำๆ ไม่ซีเรียส", scores: { F: +1, 9: +2, 7: +1 } },
        C: { text: "จับกลุ่มกับเพื่อนวางแผนลับ", scores: { J: +1, 3: +2, 8: +1 } },
        D: { text: "แกล้ง Lord of Darkness ด้วยมุกตลก", scores: { P: +2, 4: +2, 2: +1 } }
    }
},
{
    question: "คำถามที่ 22: Ood เปิดเผยความลับสุดยอดของสมาคม คุณจะ...",
    image: "images/questions/Q22.gif",
    answers: {
        A: { text: "ตั้งใจฟังและจดบันทึก", scores: { J: +2, 1: +2, 5: +1 } },
        B: { text: "ถามคำถามเพิ่มแบบไม่หยุด", scores: { E: +2, 7: +2, 3: +1 } },
        C: { text: "สงสัยแต่ไม่พูดอะไร", scores: { I: +2, 6: +2, 9: +1 } },
        D: { text: "แอบเอาไปเม้าท์กับเพื่อน", scores: { P: +1, 4: +2, 2: +1 } }
    }
},
{
    question: "คำถามที่ 23: Peut ชวนไปทำกิจกรรมแปลกๆ คุณจะ...",
    image: "images/questions/Q23.gif",
    answers: {
        A: { text: "ลองทำด้วยความตื่นเต้น", scores: { E: +2, 7: +2, 8: +1 } },
        B: { text: "ขอศึกษาข้อมูลก่อน", scores: { T: +2, 5: +2, 1: +1 } },
        C: { text: "ชวนเพื่อนๆ ไปด้วยกัน", scores: { F: +2, 2: +2, 6: +1 } },
        D: { text: "ขออยู่ห่างๆ ดีกว่า", scores: { I: +2, 4: +2, 9: +1 } }
    }
},
{
    question: "คำถามที่ 24: เพื่อนๆ ทะเลาะกันเรื่องเล็กน้อย คุณจะ...",
    image: "images/questions/Q24.gif",
    answers: {
        A: { text: "ช่วยไกล่เกลี่ยให้คืนดีกัน", scores: { F: +2, 2: +2, 9: +1 } },
        B: { text: "เสนอให้แข่งเกมตัดสิน", scores: { T: +1, 7: +2, 8: +1 } },
        C: { text: "ปล่อยให้เคลียร์กันเอง", scores: { P: +2, 6: +2, 5: +1 } },
        D: { text: "ชวนทุกคนไปกินข้าวลืมเรื่องทะเลาะ", scores: { E: +2, 3: +2, 1: +1 } }
    }
},
{
    question: "คำถามที่ 25: วันหยุดยาว คุณจะเลือกทำอะไร?",
    image: "images/questions/Q25.gif",
    answers: {
        A: { text: "เดินทางท่องเที่ยวกับเพื่อน", scores: { E: +2, 7: +2, 3: +1 } },
        B: { text: "อยู่บ้านอ่านหนังสือ/เล่นเกม", scores: { I: +2, 5: +2, 4: +1 } },
        C: { text: "วางแผนกิจกรรมล่วงหน้า", scores: { J: +2, 1: +2, 6: +1 } },
        D: { text: "ปล่อยไปตามอารมณ์ ไม่วางแผน", scores: { P: +2, 9: +2, 8: +1 } }
    }
},
{
    question: "คำถามที่ 26: ถ้ามีโอกาสได้พลังวิเศษ 1 อย่าง คุณจะเลือกอะไร?",
    image: "images/questions/Q26.gif",
    answers: {
        A: { text: "อ่านใจคนอื่นได้", scores: { T: +2, 5: +2, 6: +1 } },
        B: { text: "รักษาโรคและช่วยเหลือคน", scores: { F: +2, 2: +2, 9: +1 } },
        C: { text: "เคลื่อนย้ายตัวเองไปไหนก็ได้", scores: { P: +2, 7: +2, 8: +1 } },
        D: { text: "หยุดเวลาได้", scores: { J: +2, 1: +2, 4: +1 } }
    }
},
{
    question: "คำถามที่ 27: ถ้าได้เป็นตัวละครใน Pasulol 1 วัน คุณจะ...",
    image: "images/questions/Q27.gif",
    answers: {
        A: { text: "สร้างสิ่งประดิษฐ์ใหม่กับ Kui", scores: { T: +2, 7: +2, 5: +1 } },
        B: { text: "ช่วย Hon แจกขนมให้ทุกคน", scores: { F: +2, 2: +2, 6: +1 } },
        C: { text: "วางแผนยึดสมาคมกับ Nai", scores: { J: +2, 3: +2, 8: +1 } },
        D: { text: "นอนเล่นอยู่บ้านกับ Ricky", scores: { I: +2, 4: +2, 9: +1 } }
    }
},
];

const characters = [
    { 
        name: 'Pasulol', 
        mbti: 'INTP', 
        enneagram: '5w4', 
        code: '549', 
        coreType: '5',
        relations: ['Kui', 'Nai', 'Nontok', 'Hon'],
        description: 'พี่พสุคือผู้สร้างสรรค์โลกของ Pasulol ให้มีชีวิตขึ้นมา.'
    },
    { 
        name: 'Kui', 
        mbti: 'ENTP', 
        enneagram: '7w8', 
        code: '738', 
        coreType: '7',
        relations: ['Pasulol', 'Nai'],
        description: 'กุ่ยยอดนักประดิษฐ์ผู้มีความคิดสร้างสรรค์สูงและเป็นพ่อของแมลงสาปกลายพันธ์ุ.'
    },
    { 
        name: 'Nai', 
        mbti: 'ENTJ', 
        enneagram: '3w4', 
        code: '385', 
        coreType: '3',
        relations: ['Pasulol', 'Kui', 'Hon'],
        description: 'ไนน์มีความเป็นผู้นำสูงและมั่นใจมาก.'
    },
    { 
        name: 'Hon', 
        mbti: 'ENFP', 
        enneagram: '2w1', 
        code: '297', 
        coreType: '2',
        relations: ['Pasulol', 'Nai'],
        description: 'ฮอลนิสัยดีชอบช่วยเหลือคนอื่น แต่มักจะตายก่อนตลอดเลย.'
    },
    { 
        name: 'Ricky', 
        mbti: 'ESFJ', 
        enneagram: '2w1', 
        code: '261', 
        coreType: '2',
        relations: ['Hon', 'Kui'],
        description: 'ริกกี้แมลงสาปเพื่อนรักนิสัยดีชอบช่วยเหลือผู้อื่น แต่กลับบิดเบี้ยวเพราะพ่อกับสังคมไม่รักเพราะรูปร่างที่เป็นแมลงสาป.'
    },
    { 
        name: 'Isuan', 
        mbti: 'ESTP', 
        enneagram: '8w7', 
        code: '837', 
        coreType: '8',
        relations: ['Nai', 'Nontok'],
        description: 'พระอิศวรเทพผู้ทำลายล้าง.'
    },
    { 
        name: 'Nontok', 
        mbti: 'ISFP', 
        enneagram: '4w3', 
        code: '486', 
        coreType: '4',
        relations: ['Pasulol', 'Isuan'],
        description: 'นนทกยักษ์ล้างเท้า เพราะโดนกลั่นแกล้งจึงคิดล้างแค้น.'
    },
    { 
        name: 'Narai', 
        mbti: 'ESFP', 
        enneagram: '7w6', 
        code: '739', 
        coreType: '7',
        relations: ['Nai', 'Kui'],
        description: 'พระนารายณ์เทพผู้พดุงธรรม ผู้ปราบปรามยักษ์ชั่ว.'
    },
    { 
        name: 'Steve', 
        mbti: 'ISTP', 
        enneagram: '8w9', 
        code: '864', 
        coreType: '8',
        relations: ['Pasulol', 'Kui'],
        description: 'สตีฟทหารผ่านศึกผู้ถูกผนึกไว้ในอำพัน และฟื้นมาในโลกปัจจุบันเขาเหลืออะไรบ้าง.'
    },
    { 
        name: 'Cherdchai', 
        mbti: 'ESTJ', 
        enneagram: '8w7', 
        code: '836', 
        coreType: '8',
        relations: ['Nai', 'Isuan'],
        description: 'คุณเชิดชัยกัปตันสายการบินชั้นตํ่าที่ต้องคุมฝูงชน.'
    },
    { 
        name: 'Boonchoke', 
        mbti: 'ISTJ', 
        enneagram: '1w9', 
        code: '163', 
        coreType: '1',
        relations: ['Hon', 'Pasulol'],
        description: 'ลุงบุญโชค ผู้สูงอายุ.'
    },
    { 
        name: 'Ob', 
        mbti: 'INFP', 
        enneagram: '4w5', 
        code: '495', 
        coreType: '4',
        relations: ['Hon', 'Narai'],
        description: 'อ๊บเด็กนักเรียน ที่ไม่อยากเข้าลาดกระบัง.'
    },
    { 
        name: 'Nuang', 
        mbti: 'ENFJ', 
        enneagram: '2w3', 
        code: '278', 
        coreType: '2',
        relations: ['Kui', 'Ricky'],
        description: 'พิธีกรผมสวยสุดหล่อ ผู้ดำเนินรายการ และควบคุมสถานการณ์.'
    },
    { 
        name: 'Lord of Darkness', 
        mbti: 'INFJ', 
        enneagram: '6w5', 
        code: '612', 
        coreType: '6',
        relations: ['Steve', 'Pasulol'],
        description: 'เจ้าแห่งความมืดผู้อยู่เบื้องหลังความชั่วร้ายทุกอย่าง ทรงพลังในโลกหลังความตาย.'
    },
    { 
        name: 'Ood', 
        mbti: 'ENTJ', 
        enneagram: '8w7', 
        code: '835', 
        coreType: '8',
        relations: ['Narai', 'Cherdchai'],
        description: 'ผู้นำสมาคมผู้รู้ความจริงมีอำนาจมากเพราะคนเชื่อเขาว่าเอเลี่ยนมีจริง.'
    },
    { 
        name: 'Peut', 
        mbti: 'ISFP', 
        enneagram: '6w7', 
        code: '684', 
        coreType: '6',
        relations: ['Kui', 'Ricky'],
        description: 'ไอปื๊ดเด็กติดยา กูจะดูดยาให้หมดโลกไปเลย.'
    },
    {
        name: 'Bank', 
        mbti: 'INTJ', 
        enneagram: '6w5', 
        code: '613', 
        coreType: '6',
        relations: ['Ood', 'Hon', 'Pasulol'],
        description: 'แบงค์จอมขมังเวทย์ ผู้เป็นได้ทุกอย่างเพราะ paranoid เกิน.'
    },
    {
        name: 'Indha', 
        mbti: 'ISFJ', 
        enneagram: '6w5', 
        code: '613', 
        coreType: '6',
        relations: ['Ood', 'Hon', 'Pasulol'],
        description: 'เทพ'
    }
];



let currentQuestion = 0;
let scores = { 
    // MBTI Scores
    E: 0, I: 0, T: 0, F: 0, J: 0, P: 0,
    // Enneagram Scores
    enneagram: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
    // Tritype Components
    headType: 0, heartType: 0, gutType: 0
};
let selectedAnswer = null;

// ฟังก์ชันหลัก
function initializeQuiz() {
    console.log("จำนวนคำถาม:", questions.length); 

    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);

    displayQuestion();

    // --- ถ้าเคยทำเสร็จและยังไม่กดเริ่มใหม่ ให้แสดงผลลัพธ์ทันที ---
    if (localStorage.getItem('quizResultShown') === '1') {
        // โหลดคะแนนเดิมกลับมา
        const savedScores = localStorage.getItem('quizScores');
        if (savedScores) {
            scores = JSON.parse(savedScores);
        }
        showResults();
    }
}


function displayQuestion() {
    const question = questions[currentQuestion];
    // ป้องกัน error ใน in-app browser
    if ('speechSynthesis' in window && typeof SpeechSynthesisUtterance !== "undefined") {
        const speech = new SpeechSynthesisUtterance(question.question);
        speech.lang = 'th-TH';
        speechSynthesis.speak(speech);
    }
    const qText = document.getElementById('question-text');
    if (qText) qText.textContent = question.question;

    // ปรับตรงนี้ให้รองรับข้อที่ไม่มีรูป
    const img = document.getElementById('question-image');
    if (img) {
        if (question.image && question.image.trim() !== "") {
            img.src = question.image;
            img.alt = "ภาพคำถาม";
            img.style.display = "block";
            img.onerror = function () { this.style.display = "none"; };
            img.onload = function () { this.style.display = "block"; };
        } else {
            img.style.display = "none";
        }
    }

    const answersContainer = document.getElementById('answer-options');
    answersContainer.innerHTML = '';

    for (const [key, answer] of Object.entries(question.answers)) {
        const answerElement = document.createElement('div');
        answerElement.className = 'answer-option';
        answerElement.textContent = answer.text;
        answerElement.dataset.key = key;
        answerElement.addEventListener('click', () => selectAnswer(key, answerElement));
        answersContainer.appendChild(answerElement);
    }

    updateProgress();
    document.getElementById('next-btn').disabled = true;
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
}

function selectAnswer(key, element) {
    document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
    document.getElementById('next-btn').disabled = false;
    selectedAnswer = key;
}

function updateProgress() {
    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;
    document.getElementById('progress-text').textContent = `${currentQuestion + 1}/${questions.length}`;
}

function nextQuestion() {
    if (selectedAnswer === null) return;
    
    updateScores(questions[currentQuestion].answers[selectedAnswer].scores);
    
    currentQuestion++;
    selectedAnswer = null;
    
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        console.log(">> แสดงผลลัพธ์");
        showResults();
    }
}
// ฟังก์ชันบันทึกสถานะปัจจุบัน
function saveProgress(currentQuestionIndex, answersArray) {
    localStorage.setItem('quizCurrentIndex', currentQuestionIndex);
    localStorage.setItem('quizAnswers', JSON.stringify(answersArray));
}

// ฟังก์ชันโหลดสถานะที่เคยบันทึกไว้
function loadProgress() {
    const index = localStorage.getItem('quizCurrentIndex');
    const answers = localStorage.getItem('quizAnswers');
    return {
        currentQuestionIndex: index ? parseInt(index) : 0,
        answersArray: answers ? JSON.parse(answers) : []
    };
}
function onAnswerSelected(answer) {
    answersArray[currentQuestionIndex] = answer;
    saveProgress(currentQuestionIndex + 1, answersArray);
    // ...ไปข้อถัดไป
}
window.onload = function() {
    const progress = loadProgress();
    currentQuestionIndex = progress.currentQuestionIndex;
    answersArray = progress.answersArray;
    // render quiz ที่ข้อที่ค้างไว้
};
function clearProgress() {
    localStorage.removeItem('quizCurrentIndex');
    localStorage.removeItem('quizAnswers');
}



function prevQuestion() {
    currentQuestion--;
    selectedAnswer = null;
    displayQuestion();
}

function updateScores(answerScores) {
    // Update MBTI scores
    for (const [trait, score] of Object.entries(answerScores)) {
        if (scores.hasOwnProperty(trait)) {
            scores[trait] += score;
        } else if (scores.enneagram.hasOwnProperty(trait)) {
            scores.enneagram[trait] += score;
        }
    }
    
    // Update Tritype components
    scores.headType = Math.max(scores.enneagram[5], scores.enneagram[6], scores.enneagram[7]);
    scores.heartType = Math.max(scores.enneagram[2], scores.enneagram[3], scores.enneagram[4]);
    scores.gutType = Math.max(scores.enneagram[1], scores.enneagram[8], scores.enneagram[9]);
}

function showResults() {
    console.log(">> เข้าสู่ showResults แล้ว");
    playComplete();

    const test = document.getElementById('test-container');
    const result = document.getElementById('result-container');

    console.log("test-container:", test);
    console.log("result-container:", result);

    document.getElementById('test-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');


    const character = calculateCharacter();
    const userEnneagram = calculateEnneagramType();
    const userTritype = calculateTritype();

    displayCharacterResult(character, userEnneagram, userTritype);
    displayRelatedCharacters(character);

    // --- เพิ่มบันทึกสถานะผลลัพธ์ ---
    localStorage.setItem('quizResultShown', '1');
    localStorage.setItem('quizScores', JSON.stringify(scores)); // <--- เพิ่มบรรทัดนี้
}



function calculateCharacter() {
    let bestMatch = null;
    let maxScore = -Infinity;

    characters.forEach(character => {
        let matchScore = 0;
        
        // MBTI Matching
        for (const trait of character.mbti) {
            matchScore += scores[trait] || 0;
        }
        
        // Enneagram Matching
        matchScore += scores.enneagram[character.coreType] * 2;
        
        if (character.tritype) {
            for (const type of character.tritype.split('')) {
                matchScore += scores.enneagram[parseInt(type)] || 0;
            }
        }
        
        if (matchScore > maxScore) {
            maxScore = matchScore;
            bestMatch = character;
        }
    });
    
    return bestMatch || characters[0];
}

function calculateEnneagramType() {
    let maxType = 1;
    for (let type = 2; type <= 9; type++) {
        if (scores.enneagram[type] > scores.enneagram[maxType]) {
            maxType = type;
        }
    }
    return { type: maxType, name: enneagramTypes[maxType].name };
}

function calculateTritype() {
    const headType = [5, 6, 7].reduce((a, b) => scores.enneagram[a] > scores.enneagram[b] ? a : b);
    const heartType = [2, 3, 4].reduce((a, b) => scores.enneagram[a] > scores.enneagram[b] ? a : b);
    const gutType = [1, 8, 9].reduce((a, b) => scores.enneagram[a] > scores.enneagram[b] ? a : b);
    return `${headType}${heartType}${gutType}`;
}

function displayCharacterResult(character, enneagram, tritype) {
    document.getElementById('character-name').textContent = character.name;
    document.getElementById('character-image').src = `./images/characters/${character.name.toLowerCase()}face.png`;
    document.getElementById('character-traits').textContent = 
        `MBTI: ${character.mbti} | Enneagram: ${character.enneagram} | Tritype: ${character.tritype}`;
    
    document.getElementById('character-description').innerHTML = `
        <p>${character.description}</p>
        <div class="result-section">
            <h4>ผลลัพธ์ของคุณ</h4>
            <p><strong>Enneagram Type:</strong> ${enneagram.type} - ${enneagram.name}</p>
            <p><strong>Tritype:</strong> ${tritype}</p>
        </div>
    `;
}

function displayRelatedCharacters(character) {
    const container = document.getElementById('related-characters');
    container.innerHTML = '';
    
    character.relations.forEach(relName => {
        const relChar = characters.find(c => c.name === relName);
        if (relChar) {
            const charElement = document.createElement('div');
            charElement.className = 'related-character';
            charElement.innerHTML = `
                <img src="images/characters/${relName.toLowerCase()}face.png" alt="${relName}">
                <div class="related-char-info">
                    <strong>${relName}</strong>
                    <small>${relChar.mbti} | ${relChar.enneagram}</small>
                </div>
            `;
            container.appendChild(charElement);
        }
    });
}

function restartQuiz() {
    currentQuestion = 0;
    scores = { 
        E: 0, I: 0, T: 0, F: 0, J: 0, P: 0,
        enneagram: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
        headType: 0, heartType: 0, gutType: 0
    };
    selectedAnswer = null;

    // Reset progress bar
    document.getElementById('progress').style.width = '0%';
    document.getElementById('progress-text').textContent = '0/0';

    // Reset visibility of containers
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('test-container').classList.remove('hidden');

    // Clear any selected answers
    const answersContainer = document.getElementById('answer-options');
    if (answersContainer) {
        answersContainer.innerHTML = '';
    }

    // Reset local storage progress
    clearProgress();
    localStorage.removeItem('quizResultShown');
    localStorage.removeItem('quizScores'); // <--- เพิ่มบรรทัดนี้

    // Display the first question
    displayQuestion();
}

document.addEventListener('DOMContentLoaded', initializeQuiz);

// เพิ่มเสียงให้กับปุ่มต่างๆ
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => playSound("hoverSound"));
});
