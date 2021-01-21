//to help with form not refreshing
function handleForm(event) {
    event.preventDefault();
}


//for future assignment reference

//var submit = document.getElementById("submitButton");
//submit.addEventListener("click", function () {
//    alert("From = " + document.getElementById("from").value + ", " +
//        "Email = " + document.getElementById("email").value + ", " +
//        "Message = " + document.getElementById("message").value);
//});


//Grade Calculator
function CalculateGrade() {
    var letterGrade = "NaN";
    //parsing the percentages in integer format from form to later break down into total percentage
    var assignments = parseInt(document.getElementById("assignments").value);
    var groupProject = parseInt(document.getElementById("groupProject").value);
    var quizzes = parseInt(document.getElementById("quizzes").value);
    var exams = parseInt(document.getElementById("exams").value);
    var intex = parseInt(document.getElementById("intex").value);
    //Using syllabus weights to find total percentage
    var percentage = ((assignments * .5) + (groupProject * .1) + (quizzes * .1) + (exams * .2) + (intex * .1));

    //Determining letter grade
    if (percentage >= 94) {
        letterGrade = "A";
    }
    else if (percentage >= 90) {
        letterGrade = "A-";
    }
    else if (percentage >= 87) {
        letterGrade = "B+";
    }
    else if (percentage >= 84) {
        letterGrade = "B";
    }
    else if (percentage >= 80) {
        letterGrade = "B-";
    }
    else if (percentage >= 77) {
        letterGrade = "C+";
    }
    else if (percentage >= 74) {
        letterGrade = "C";
    }
    else if (percentage >= 70) {
        letterGrade = "C-";
    }
    else if (percentage >= 67) {
        letterGrade = "D+";
    }
    else if (percentage >= 64) {
        letterGrade = "D";
    }
    else if (percentage >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    //displaying percentage and grade in html p tag
    document.getElementById("Grade").innerHTML = ("Your grade is:  " + letterGrade + " with a percentage of " + percentage);
};