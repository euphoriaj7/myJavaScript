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
    ],
    enrollStudent: function(sectionNum) {
        // find the right section in sections
        this.sections[0]
            // increment enrolled
    }
};

function setCourseInfo(course) {
    document.querySelector('#courseName').textContent = course.name;
    document.querySelector('#courseCode').textContent = course.courseCode;
};

function sectionTemplate(section) {
    return `<tr><td>${section.sectionNum}</td><td>${section.roomNum}</td><td>${section.enrolled}</td><td>${section.days}</td><td>${section.instructor}</td></tr>`
};

function tableCreator(data, selector, template) {
    const element = document.querySelector('#sections');
    const htmlStrings = sections.map(sectionTemplate);
    console.log(htmlStrings);
    const htmlString = htmlString.join('');
    element.innerHTML = htmlString;
};

function init() {
    setCourseInfo(aCourse);
    tableCreator(aCourse.sections);
}

aCourse.enrollStudent('1');
setCourseInfo(aCourse);
tableCreator(aCourse.sections);