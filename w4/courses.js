// courses.js
const aCourse = {
    courseCode: "CSE121b ",
    name: "Javascript Language",
    sections: [{
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        }
    ]
};

function setCourseInfo(course) {
    document.querySelector('#courseName').textContent = course.name;
    document.querySelector('#courseCode').textContent = course.courseCode;
}
setCourseInfo(aCourse);