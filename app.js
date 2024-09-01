let input = document.querySelectorAll("input");
let h2 = document.querySelectorAll("h2");

function Home() {
    let inputVal = input[0].value
    if (inputVal >= 80) {
        h2[0].innerHTML = "Grade 'A'"
    }
    else if (inputVal >= 60) {
        h2[0].innerHTML = "Grade 'B'"
    }
    else if (inputVal >= 40) {
        h2[0].innerHTML = "Grade 'C'"
    }
    else if (inputVal >= 1) {
        h2[0].innerHTML = "No Grade"
    }
    else if (inputVal = input) {
        h2[0].innerHTML = "Enter Num"
    }
   
}

