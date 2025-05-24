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
        question: "Q1: ผู้บัญชาการตำรวจเรียกคุณเข้าพบเพื่อสั่งงานในการไปสืบสวนสมาคมประหลาดที่ได้รับเรื่องร้องเรียนมาคุณจะตอบสนองผู้บังคับบัญชาอย่างไร",
        image: "images/questions/Q1.gif",
        answers: {
            A: {
                text: "สั่งอะไรหนักหนาวะ สั่งกูเป็นอาหารตามสั่งเลยเวร",
                scores: { E: 0, I: +1, T: +1, F: 0, 8: +2, 5: 0 }
            },
            B: {
                text: "ครับท่าน",
                scores: { E: +1, I: 0, T: 0, F: +1, 6: +2, 9: +1 }
            },
            C: {
                text: "ไม่รู้ไม่ทำงาน จะนอน",
                scores: { E: 0, I: +1, T: 0, F: +1, 4: +2, 9: +1 }
            },
            D: {
                text: "เงียบๆ รอดูว่าจะได้ทำอะไร",
                scores: { E: 0, I: +1, T: +1, F: 0, 5: +2, 6: +1 }
            }
        }
    },
    {
        question: "Q2: คุณมาถึงสมาคมประหลาดแล้วคุณจะเข้าไปทางไหน ยังไงดีนะ",
        image: "images/questions/Q2.gif",
        answers: {
            A: {
                text: "เข้าประตูปกติ แบบคนปกติ",
                scores: { J: +2, P: 0, 1: +1, 3: +1 }
            },
            B: {
                text: "หน้าต่างแอบปีนเข้าไป",
                scores: { P: +2, J: 0, 7: +1, 8: +1 }
            },
            C: {
                text: "ปลอมตัวเป็นไปรษณีย์ไทย ส่งพัสดุ",
                scores: { J: +1, P: +1, 3: +2, 6: +1 }
            },
            D: {
                text: "คิดว่าอยากดูรอบๆก่อน",
                scores: { P: +2, J: 0, 5: +1, 6: +1 }
            }
        }
    },
    {
        question: "Q3: มีสมาชิกสมาคมมาพูดคุยกับคุณและจะชวนคุณเข้าไป คุณจะตอบสนองคำเชิญชวนนี้ยังไง",
        image: "images/questions/Q3.gif",
        answers: {
            A: {
                text: "ตอบรับคำเชิญแบบคนปกติทำกันอย่างมีมารยาท",
                scores: { E: +1, I: 0, F: +1, T: 0, 2: +1, 3: +1 }
            },
            B: {
                text: "คิดว่ามันต้องมีอะไรแปลกๆแน่ๆ",
                scores: { I: +1, E: 0, T: +1, F: 0, 5: +1, 6: +1 }
            },
            C: {
                text: "ไม่คิดอะไรเลย เฉยๆ",
                scores: { I: +1, E: 0, T: 0, F: +1, 9: +2, 5: +1 }
            },
            D: {
                text: "คิดว่าอยากกลับบ้านแล้ว ให้มาคุยกับใครก็ไม่รู้ประหลาดๆ",
                scores: { I: +1, E: 0, F: +1, T: 0, 4: +2, 6: +1 }
            }
        }
    },
    {
        question: "Q4: คุณได้เข้าร่วมประชุมสมาคมคุณได้รับสิทธิ์ในการถามคำถามได้คุณจะถามว่าอะไร",
        image: "images/questions/Q4.gif",
        answers: {
            A: {
                text: "ถามตรงๆ ว่าสมาคมนี้มีกิจกรรมอะไรบ้าง",
                scores: { E: +1, T: +1, 3: +1, 8: +1 }
            },
            B: {
                text: "ถามแบบอ้อมๆ ว่ามีสมาชิกกี่คน นัดพบกันบ่อยแค่ไหน",
                scores: { I: +1, F: +1, 6: +1, 9: +1 }
            },
            C: {
                text: "ถามเจาะลึกเกี่ยวกับจุดประสงค์และแนวคิดของสมาคม",
                scores: { T: +2, 5: +2, 1: +1 }
            },
            D: {
                text: "ไม่ถามอะไร ใช้วิธีสังเกตการณ์เฉยๆ",
                scores: { I: +2, 4: +1, 5: +1 }
            }
        }
    },
    {
        question: "Q5: อู๊ดหัวหน้าสมาคมให้คุณแนะนำตัวต่อหน้าสมาชิกสมาคมทั้งหมด คุณจะแนะนำตัว หรือจะพูดอะไรต่อสมาชิกคนอื่นๆ",
        image: "images/questions/Q5.gif",
        answers: {
            A: {
                text: "แนะนำตัวตามจริงแบบสั้นๆ",
                scores: { J: +1, 1: +1, 3: +1 }
            },
            B: {
                text: "สร้างเรื่องราวปลอมๆ เพื่อปกปิดตัวตน",
                scores: { P: +1, 7: +2, 3: +1 }
            },
            C: {
                text: "พูดน้อยที่สุดเท่าที่จะทำได้",
                scores: { I: +2, 5: +1, 9: +1 }
            },
            D: {
                text: "ใช้โอกาสนี้ถามคำถามสมาชิกคนอื่นแทน",
                scores: { E: +1, 8: +1, 7: +1 }
            }
        }
    },
    {
        question: "Q6: หลังจากแนะนำตัวเสร็จ คุณได้เดินออกจากที่ประชุมเพื่อสำรวจหาหลักฐานความผิดปกติเพิ่ม มีห้องให้คุณเลือกสำรวจ 3 ห้องคุณจะเลือกห้องไหน หรือจะทำยังไง",
        image: "images/questions/Q6.gif",
        answers: {
            A: {
                text: "ห้องเก็บเอกสาร (อาจมีข้อมูลสำคัญ)",
                scores: { T: +1, 5: +1, 1: +1 }
            },
            B: {
                text: "ห้องพักผ่อน (อาจได้ยินบทสนทนาสำคัญ)",
                scores: { F: +1, 2: +1, 6: +1 }
            },
            C: {
                text: "ห้องใต้ดิน (น่าสงสัยที่สุด)",
                scores: { P: +1, 7: +1, 8: +1 }
            },
            D: {
                text: "ไม่เข้าห้องไหน เดินสำรวจรอบนอกก่อน",
                scores: { J: +1, 6: +1, 9: +1 }
            }
        }
    },
    {
        question: "Q7: คุณพบสิ่งของให้เลือกในการเก็บไว้เป็นหลักฐานคุณเลือกที่จะเก็บหลักฐานใดที่คิดว่ามีประโยชน์ต่อการสืบสวนมากที่สุด",
        image: "images/questions/Q7.gif",
        answers: {
            A: {
                text: "สมุดบันทึกลายมือประธานสมาคม",
                scores: { J: +1, 1: +1, 5: +1 }
            },
            B: {
                text: "บัตรสมาชิกของคนอื่นที่ทิ้งไว้",
                scores: { F: +1, 2: +1, 6: +1 }
            },
            C: {
                text: "อุปกรณ์แปลกๆ ที่ไม่รู้ว่าทำอะไร",
                scores: { P: +1, 7: +1, 5: +1 }
            },
            D: {
                text: "ถ่ายรูปทุกอย่างโดยไม่แตะต้องอะไร",
                scores: { T: +1, 6: +1, 9: +1 }
            }
        }
    },
    {
        question: "Q8: คุณได้เก็บหลักฐานสำหรับข้อมูลมาแล้ว คุณต้องออกไปจากที่นี่จงเลือกทางออกที่คุณคิดจะออกแบบนั้น",
        image: "images/questions/Q8.gif",
        answers: {
            A: {
                text: "ออกทางประตูหน้าแบบปกติ",
                scores: { J: +1, 3: +1, 1: +1 }
            },
            B: {
                text: "แอบออกทางหลังแบบไม่ให้ใครเห็น",
                scores: { I: +1, 5: +1, 6: +1 }
            },
            C: {
                text: "สร้างสถานการณ์วุ่นวายเพื่อเบี่ยงเบนความสนใจ",
                scores: { E: +1, 7: +1, 8: +1 }
            },
            D: {
                text: "รอจนกว่าทุกคนจะหลับก่อนค่อยออก",
                scores: { I: +1, 9: +2, 5: +1 }
            }
        }
    },
    {
        question: "Q9: คุณได้มาถึงสำนักงานตำรวจอย่างปลอดภัยแล้ว คุณจะรายงานผู้บังคับบัญชาอย่างไร",
        image: "images/questions/Q9.gif",
        answers: {
            A: {
                text: "รายงานแบบเป็นทางการตามหลักฐานที่เก็บมา",
                scores: { J: +2, 1: +1, 3: +1 }
            },
            B: {
                text: "เล่าแบบละเอียดพร้อมแสดงอารมณ์",
                scores: { F: +1, 4: +1, 6: +1 }
            },
            C: {
                text: "สรุปเฉพาะประเด็นสำคัญเท่านั้น",
                scores: { T: +1, 5: +1, 9: +1 }
            },
            D: {
                text: "เสนอแผนการจัดการทันที",
                scores: { E: +1, 8: +1, 7: +1 }
            }
        }
    },
    {
    question: "Q10: หลังจากรายงานเสร็จ ผู้บังคับบัญชาตั้งทีมพิเศษให้คุณเป็นหัวหน้าสืบสวนเรื่องสมาคมประหลาด แต่คุณพบว่าในทีมมีคนที่คุณไม่ไว้ใจ คุณจะเริ่มต้นจัดการทีมอย่างไร?",
    image: "images/questions/Q10.gif",
    answers: {
        A: {
            text: "แบ่งงานตามความถนัดของแต่ละคนทันที",
            scores: { J: +2, 1: +1, 3: +1 }
        },
        B: {
            text: "สังเกตพฤติกรรมของทุกคนก่อนแบ่งงาน",
            scores: { I: +1, 5: +1, 9: +1 }
        },
        C: {
            text: "พูดคุยกับแต่ละคนเป็นการส่วนตัวเพื่อประเมินใจ",
            scores: { F: +1, 2: +1, 6: +1 }
        },
        D: {
            text: "ตั้งกับดักทดสอบความซื่อสัตย์ในทีม",
            scores: { T: +1, 7: +1, 8: +1 }
        }
    }
},
{
    question: "Q11: ระหว่างการสืบสวน ทีมของคุณพบเบาะแสใหม่ที่อาจเกี่ยวข้องกับองค์กรลับระดับประเทศ คุณจะวางแผนการสืบสวนต่อไปอย่างไร?",
    image: "images/questions/Q11.gif",
    answers: {
        A: {
            text: "แจ้งผู้บังคับบัญชาและขอคำสั่งก่อนดำเนินการ",
            scores: { J: +1, 6: +1, 1: +1 }
        },
        B: {
            text: "ดำเนินการสืบสวนต่อโดยไม่แจ้งใคร",
            scores: { P: +1, 7: +1, 8: +1 }
        },
        C: {
            text: "แบ่งทีมออกเป็นกลุ่มย่อยเพื่อกระจายความเสี่ยง",
            scores: { E: +1, 3: +1, 2: +1 }
        },
        D: {
            text: "รวบรวมข้อมูลให้มากที่สุดก่อนตัดสินใจ",
            scores: { T: +1, 5: +1, 9: +1 }
        }
    }
},
{
    question: "Q12: คุณได้รับข้อความลับจากบุคคลนิรนาม เสนอข้อมูลสำคัญแลกกับผลประโยชน์บางอย่าง คุณจะจัดการกับสถานการณ์นี้อย่างไร?",
    image: "images/questions/Q12.gif",
    answers: {
        A: {
            text: "ปฏิเสธข้อเสนอและแจ้งเจ้าหน้าที่ความมั่นคง",
            scores: { J: +2, 1: +1, 3: +1 }
        },
        B: {
            text: "รับข้อเสนอแต่ขอหลักฐานก่อน",
            scores: { T: +1, 5: +1, 9: +1 }
        },
        C: {
            text: "แกล้งทำเป็นสนใจเพื่อสืบหาตัวตนของเขา",
            scores: { P: +2, 7: +1, 8: +1 }
        },
        D: {
            text: "ปรึกษาทีมงานและตัดสินใจร่วมกัน",
            scores: { F: +1, 2: +1, 6: +1 }
        }
    }
},
{
    question: "Q13: ในขณะที่คุณกำลังสืบสวน มีเหตุการณ์ไม่คาดคิดเกิดขึ้น – หนึ่งในทีมของคุณหายตัวไป คุณจะดำเนินการอย่างไร?",
    image: "images/questions/Q13.gif",
    answers: {
        A: {
            text: "สั่งหยุดภารกิจและค้นหาสมาชิกที่หายไปทันที",
            scores: { F: +1, 2: +1, 6: +1 }
        },
        B: {
            text: "ดำเนินภารกิจต่อแต่เพิ่มความระมัดระวัง",
            scores: { T: +1, 5: +1, 9: +1 }
        },
        C: {
            text: "สอบสวนทีมที่เหลือเพื่อหาความจริง",
            scores: { J: +1, 1: +1, 3: +1 }
        },
        D: {
            text: "ติดต่อขอความช่วยเหลือจากหน่วยงานภายนอก",
            scores: { E: +1, 7: +1, 8: +1 }
        }
    }
},
{
    question: "Q14: คุณพบหลักฐานใหม่ที่ชี้ชัดว่ามีคนในทีมเป็นสายลับ คุณจะเผชิญหน้ากับเขาอย่างไร?",
    image: "images/questions/Q14.gif",
    answers: {
        A: {
            text: "เผชิญหน้าโดยตรงและขอคำอธิบาย",
            scores: { J: +1, 3: +1, 1: +1 }
        },
        B: {
            text: "จับตาดูเขาอย่างลับๆเพื่อหาหลักฐานเพิ่ม",
            scores: { P: +1, 7: +1, 8: +1 }
        },
        C: {
            text: "ปรึกษาผู้บังคับบัญชาก่อนดำเนินการ",
            scores: { F: +1, 2: +1, 6: +1 }
        },
        D: {
            text: "วางแผนกับทีมเพื่อจับสายลับแบบไม่ให้เขารู้ตัว",
            scores: { T: +1, 5: +1, 9: +1 }
        }
    }
},
{
    question: "Q15: หลังจากจับสายลับได้ คุณพบว่ามีองค์กรใหญ่อยู่เบื้องหลัง คุณจะเลือกเปิดโปงองค์กรนี้ต่อสาธารณะหรือไม่?",
    image: "images/questions/Q15.gif",
    answers: {
        A: {
            text: "เปิดโปงทันทีเพื่อความโปร่งใส",
            scores: { E: +2, 3: +1, 1: +1 }
        },
        B: {
            text: "เก็บข้อมูลไว้ก่อนเพื่อความปลอดภัยของทีม",
            scores: { I: +1, 5: +1, 9: +1 }
        },
        C: {
            text: "ปรึกษาผู้บังคับบัญชาและหน่วยงานที่เกี่ยวข้อง",
            scores: { F: +1, 2: +1, 6: +1 }
        },
        D: {
            text: "วางแผนเปิดโปงอย่างรอบคอบเพื่อไม่ให้เกิดผลเสีย",
            scores: { T: +1, 7: +1, 8: +1 }
        }
    }
},
{
    question: "Q16: หลังจากภารกิจจบลง คุณได้รับข้อเสนอให้เข้าร่วมหน่วยงานลับระดับประเทศ คุณจะเลือกเส้นทางชีวิตอย่างไร?",
    image: "images/questions/Q16.gif",
    answers: {
        A: {
            text: "รับข้อเสนอและเริ่มต้นชีวิตใหม่ในหน่วยงานลับ",
            scores: { E: +1, 7: +1, 8: +1 }
        },
        B: {
            text: "ปฏิเสธและกลับไปทำงานในกรมตำรวจตามเดิม",
            scores: { J: +1, 1: +1, 3: +1 }
        },
        C: {
            text: "ขอเวลาคิดและศึกษาข้อมูลเพิ่มเติม",
            scores: { T: +1, 5: +1, 9: +1 }
        },
        D: {
            text: "ปรึกษาครอบครัวและเพื่อนสนิทก่อนตัดสินใจ",
            scores: { F: +1, 2: +1, 6: +1 }
        }
    }
},
{
    question: "Q17: เมื่อคุณเลือกเส้นทางใหม่ คุณต้องเผชิญกับภารกิจที่ท้าทายยิ่งกว่าเดิม คุณจะเตรียมตัวอย่างไร?",
    image: "images/questions/Q17.gif",
    answers: {
        A: {
            text: "ฝึกฝนทักษะใหม่ๆและศึกษาข้อมูลอย่างจริงจัง",
            scores: { J: +1, 1: +1, 3: +1 }
        },
        B: {
            text: "สร้างเครือข่ายและหาพันธมิตรใหม่ๆ",
            scores: { E: +1, 7: +1, 8: +1 }
        },
        C: {
            text: "วางแผนรับมือกับความเสี่ยงล่วงหน้า",
            scores: { T: +1, 5: +1, 9: +1 }
        },
        D: {
            text: "ขอคำแนะนำจากผู้มีประสบการณ์",
            scores: { F: +1, 2: +1, 6: +1 }
        }
    }
},
{
    question: "Q18: ในภารกิจใหม่ คุณต้องเลือกระหว่างช่วยเหลือเพื่อนร่วมทีมที่ตกอยู่ในอันตราย หรือปฏิบัติหน้าที่ตามเป้าหมายหลัก คุณจะเลือกอะไร?",
    image: "images/questions/Q18.gif",
    answers: {
        A: {
            text: "ช่วยเหลือเพื่อนร่วมทีมก่อนเสมอ",
            scores: { F: +2, 2: +1, 6: +1 }
        },
        B: {
            text: "ปฏิบัติหน้าที่ตามเป้าหมายหลัก",
            scores: { T: +2, 5: +1, 9: +1 }
        },
        C: {
            text: "พยายามหาทางช่วยทั้งสองฝ่าย",
            scores: { J: +1, 1: +1, 3: +1 }
        },
        D: {
            text: "ขอคำแนะนำจากหัวหน้าหรือผู้เชี่ยวชาญ",
            scores: { E: +1, 7: +1, 8: +1 }
        }
    }
},
{
    question: "Q19: เมื่อภารกิจสำเร็จ คุณได้รับรางวัลและชื่อเสียงมากมาย คุณจะใช้โอกาสนี้ทำอะไรต่อไป?",
    image: "images/questions/Q19.gif",
    answers: {
        A: {
            text: "แบ่งปันประสบการณ์และฝึกสอนรุ่นใหม่",
            scores: { F: +1, 2: +1, 6: +1 }
        },
        B: {
            text: "ศึกษาภารกิจใหม่เพื่อความก้าวหน้า",
            scores: { T: +1, 5: +1, 9: +1 }
        },
        C: {
            text: "พักผ่อนและใช้เวลากับครอบครัว",
            scores: { I: +1, 4: +1, 1: +1 }
        },
        D: {
            text: "สร้างเครือข่ายและขยายอิทธิพล",
            scores: { E: +1, 7: +1, 8: +1 }
        }
    }
},
{
    question: "Q20: สุดท้าย คุณมองย้อนกลับไปในเส้นทางที่ผ่านมา คุณคิดว่าคุณได้เรียนรู้อะไรสำคัญที่สุดจากการเป็นนักสืบ?",
    image: "images/questions/Q20.gif",
    answers: {
        A: {
            text: "ความสำคัญของทีมเวิร์คและความไว้ใจ",
            scores: { F: +2, 2: +1, 6: +1 }
        },
        B: {
            text: "การตัดสินใจอย่างมีเหตุผลและรอบคอบ",
            scores: { T: +2, 5: +1, 9: +1 }
        },
        C: {
            text: "ความกล้าหาญและความมุ่งมั่น",
            scores: { J: +1, 1: +1, 3: +1 }
        },
        D: {
            text: "การปรับตัวและเรียนรู้สิ่งใหม่ๆตลอดเวลา",
            scores: { P: +1, 7: +1, 8: +1 }
        }
    }
},
{
    question: "Q21: หลังจากได้รับรางวัลใหญ่ คุณถูกสื่อมวลชนรุมสัมภาษณ์เกี่ยวกับภารกิจที่ผ่านมา คุณจะตอบคำถามอย่างไร?",
    image: "images/questions/Q21.gif",
    answers: {
        A: {
            text: "ตอบอย่างตรงไปตรงมาและโปร่งใส",
            scores: { E: +1, 3: +1, 1: +1 }
        },
        B: {
            text: "เลือกตอบเฉพาะประเด็นสำคัญที่ควรรู้",
            scores: { T: +1, 5: +1, 9: +1 }
        },
        C: {
            text: "พูดถึงความร่วมมือของทีมเป็นหลัก",
            scores: { F: +1, 2: +1, 6: +1 }
        },
        D: {
            text: "หลบเลี่ยงคำถามที่อาจกระทบความมั่นคง",
            scores: { P: +1, 7: +1, 8: +1 }
        }
    }
},
{
    question: "Q22: คุณได้รับจดหมายขู่จากองค์กรลึกลับที่ไม่พอใจผลงานของคุณ คุณจะรับมือกับภัยคุกคามนี้อย่างไร?",
    image: "images/questions/Q22.gif",
    answers: {
        A: {
            text: "แจ้งเจ้าหน้าที่ความมั่นคงทันที",
            scores: { J: +1, 1: +1, 3: +1 }
        },
        B: {
            text: "เก็บจดหมายไว้เป็นหลักฐานและสืบหาต้นตอ",
            scores: { T: +1, 5: +1, 9: +1 }
        },
        C: {
            text: "วางแผนล่อให้คนร้ายเผยตัว",
            scores: { P: +1, 7: +1, 8: +1 }
        },
        D: {
            text: "ขอความช่วยเหลือจากเพื่อนร่วมทีม",
            scores: { F: +1, 2: +1, 6: +1 }
        }
    }
},
{
    question: "Q23: คุณได้รับมอบหมายให้ฝึกอบรมเจ้าหน้าที่รุ่นใหม่ คุณจะเน้นสอนเรื่องอะไรเป็นพิเศษ?",
    image: "images/questions/Q23.gif",
    answers: {
        A: {
            text: "ทักษะการสืบสวนและวิเคราะห์หลักฐาน",
            scores: { T: +1, 5: +1, 9: +1 }
        },
        B: {
            text: "การทำงานเป็นทีมและความไว้ใจ",
            scores: { F: +1, 2: +1, 6: +1 }
        },
        C: {
            text: "การรับมือกับสถานการณ์ฉุกเฉิน",
            scores: { J: +1, 1: +1, 3: +1 }
        },
        D: {
            text: "การคิดนอกกรอบและสร้างสรรค์วิธีใหม่ๆ",
            scores: { P: +1, 7: +1, 8: +1 }
        }
    }
},
{
    question: "Q24: ระหว่างฝึกอบรม มีเจ้าหน้าที่ใหม่คนหนึ่งทำผิดพลาดร้ายแรง คุณจะจัดการอย่างไร?",
    image: "images/questions/Q24.gif",
    answers: {
        A: {
            text: "ให้คำแนะนำและโอกาสแก้ตัว",
            scores: { F: +1, 2: +1, 6: +1 }
        },
        B: {
            text: "ตำหนิอย่างตรงไปตรงมาเพื่อให้เขาเรียนรู้",
            scores: { T: +1, 5: +1, 9: +1 }
        },
        C: {
            text: "รายงานผู้บังคับบัญชาทันที",
            scores: { J: +1, 1: +1, 3: +1 }
        },
        D: {
            text: "หาสาเหตุที่แท้จริงและช่วยแก้ไขปัญหา",
            scores: { P: +1, 7: +1, 8: +1 }
        }
    }
},
{
    question: "Q25: วันหนึ่งคุณได้รับข้อมูลลับเกี่ยวกับแผนก่อการร้ายครั้งใหญ่ คุณจะดำเนินการอย่างไร?",
    image: "images/questions/Q25.gif",
    answers: {
        A: {
            text: "แจ้งเตือนทุกหน่วยงานทันที",
            scores: { J: +2, 1: +1, 3: +1 }
        },
        B: {
            text: "ตรวจสอบข้อมูลให้แน่ชัดก่อน",
            scores: { T: +1, 5: +1, 9: +1 }
        },
        C: {
            text: "วางแผนจับกุมโดยไม่ให้ฝ่ายตรงข้ามรู้ตัว",
            scores: { P: +1, 7: +1, 8: +1 }
        },
        D: {
            text: "ขอคำปรึกษาจากผู้เชี่ยวชาญ",
            scores: { F: +1, 2: +1, 6: +1 }
        }
    }
},
{
    question: "Q26: ในภารกิจป้องกันเหตุร้าย คุณต้องเลือกระหว่างปกป้องเป้าหมายสำคัญกับช่วยประชาชนที่ตกอยู่ในอันตราย คุณจะเลือกอะไร?",
    image: "images/questions/Q26.gif",
    answers: {
        A: {
            text: "ปกป้องเป้าหมายสำคัญก่อน",
            scores: { J: +1, 1: +1, 3: +1 }
        },
        B: {
            text: "ช่วยเหลือประชาชนก่อน",
            scores: { F: +1, 2: +1, 6: +1 }
        },
        C: {
            text: "วางแผนให้ทั้งสองฝ่ายปลอดภัย",
            scores: { T: +1, 5: +1, 9: +1 }
        },
        D: {
            text: "ขอความช่วยเหลือจากหน่วยอื่น",
            scores: { E: +1, 7: +1, 8: +1 }
        }
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
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
    
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-image').src = question.image;
    
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
    playSound("pageSound");
    if (selectedAnswer === null) return;
    
    updateScores(questions[currentQuestion].answers[selectedAnswer].scores);
    
    currentQuestion++;
    selectedAnswer = null;
    
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
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
    playSound("completeSound");
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    const character = calculateCharacter();
    const userEnneagram = calculateEnneagramType();
    const userTritype = calculateTritype();
    
    displayCharacterResult(character, userEnneagram, userTritype);
    displayRelatedCharacters(character);
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
    document.getElementById('character-image').src = `images/${character.name.toLowerCase()}.jpg`;
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
                <img src="images/${relName.toLowerCase()}.jpg" alt="${relName}">
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
    
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('test-container').style.display = 'block';
    displayQuestion();
}

document.addEventListener('DOMContentLoaded', initializeQuiz);

let soundEnabled = true;

function playSound(soundId) {
    if (!soundEnabled) return;
    
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play().catch(e => console.log("ไม่สามารถเล่นเสียงได้:", e));
}

document.getElementById('soundToggle').addEventListener('click', function() {
    soundEnabled = !soundEnabled;
    const icon = this.querySelector('i');
    
    if (soundEnabled) {
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    } else {
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    }
});

// เพิ่มเสียงให้กับปุ่มต่างๆ
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => playSound("clickSound"));
    btn.addEventListener('mouseenter', () => playSound("hoverSound"));
});