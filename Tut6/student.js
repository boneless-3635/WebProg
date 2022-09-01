function addStudent() {
    let stu = {ID :document.querySelector('#id').value,
               Name: document.querySelector('#name').value};
    student.push(stu);
    viewStudent();
}

function viewStudent() {
    let stu_list = '<ul>'
    for (let k in students) {
        let student = students[k]
        stu_list += '<li>'
        stu_list += student['ID'] + ', ';
        stu_list += student['Name'];
        stu_list += '<li>';
    }
}
stu_list

function deleteStudent() {
    let id = document.querySelector('#id').value;
    let tmp = [];
    for (let k in students[k].)
}