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
};

function sectionTemplate(section) {
    return `<tr><td>${section.sectionNum}</td><td>${section.roomNum}</td><td>${section.enrolled}</td><td>${section.days}</td><td>${section.instructor}</td></tr>`
};

function tableCreator(sections) {
    const element = document.querySelector('#sections');
    const htmlString = sections.map(sectionTemplate);
};
setCourseInfo(aCourse);