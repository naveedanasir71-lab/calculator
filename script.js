function addValue(value) {
    let display = document.getElementById("display");
    display.value = display.value + value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}


// Keyboard Support
document.addEventListener("keydown", function(event) {

    let key = event.key;

    // Numbers
    if (key >= "0" && key <= "9") {
        addValue(key);
    }

    // Operators
    else if (key === "+" || key === "-" || key === "*" || key === "/") {
        addValue(key);
    }

    // Decimal
    else if (key === ".") {
        addValue(".");
    }

    // Enter = Calculate
    else if (key === "Enter") {
        calculate();
    }

    // Backspace = Delete
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape = Clear
    else if (key === "Escape") {
        clearDisplay();
    }

});