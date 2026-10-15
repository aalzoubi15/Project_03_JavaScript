function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || age < 0) {
        return false;
    }

    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

console.log("Grade for 100:", calculateGrade(100));
console.log("Grade for 90:", calculateGrade(90));
console.log("Grade for 89:", calculateGrade(89));
console.log("Grade for 0:", calculateGrade(0));
console.log("Grade for 45:", calculateGrade(45));
console.log("Invalid score:", calculateGrade("abc"));
console.log("Out of range:", calculateGrade(101));

console.log("Adult with ticket:", checkAccess(18, true));
console.log("Underage with ticket:", checkAccess(17, true));
console.log("Adult without ticket:", checkAccess(25, false));
console.log("Invalid age:", checkAccess(-1, true));