/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 * 
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
    { session_id: 1, time: '09:00', student: { student_id: 1, name: 'Adi' }, class: { class_id: 1, name: 'A' } },
    { session_id: 2, time: '10:00', student: { student_id: 5, name: 'Surya' }, class: { class_id: 3, name: 'C' } },
    { session_id: 2, time: '10:00', student: { student_id: 8, name: 'Edi' }, class: { class_id: 4, name: 'D' } },
    { session_id: 2, time: '10:00', student: { student_id: 7, name: 'Dede' }, class: { class_id: 4, name: 'D' } },
    { session_id: 1, time: '09:00', student: { student_id: 3, name: 'Bayu' }, class: { class_id: 2, name: 'B' } },
    { session_id: 1, time: '09:00', student: { student_id: 2, name: 'Budi' }, class: { class_id: 1, name: 'A' } },
    { session_id: 1, time: '09:00', student: { student_id: 4, name: 'Dharma' }, class: { class_id: 2, name: 'B' } },
    { session_id: 2, time: '10:00', student: { student_id: 3, name: 'Maha' }, class: { class_id: 3, name: 'C' } },
];

function result(sessions) {
    // Your Code Here
    let output = []
    for (let i = 0; i < sessions.length; i++) {
        let found = false
        for (let j = 0; j < output.length; j++) {
            if (output[j].session_id === sessions[i].session_id) {
                found = true
                let found2 = false
                for (let k = 0; k < output[j].classes.length; k++) {
                    if (output[j].classes[k].class_id === sessions[i].class.class_id) {
                        found2 = true
                        output[j].classes[k].students.push(sessions[i].student)
                        break
                    }
                }
                if (!found2) {
                    output[j].classes.push({
                        class_id: sessions[i].class.class_id,
                        name: sessions[i].class.name,
                        students: [
                            { student_id: sessions[i].student.student_id, name: sessions[i].student.name }
                        ]
                    })
                }
                break
            }
        }
        if (!found) {
            output.push({
                session_id: sessions[i].session_id,
                time: sessions[i].time,
                classes: [
                    {
                        class_id: sessions[i].class.class_id,
                        name: sessions[i].class.name,
                        students: [
                            { student_id: sessions[i].student.student_id, name: sessions[i].student.name }
                        ]
                    }
                ]
            })
        }
    }
    // console.log(output[0].classes[1]);
    // console.log(output[1].classes);
    return (output);
}

console.log(result(sessions));
