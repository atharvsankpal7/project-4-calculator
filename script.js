let string = "";
let input = document.getElementsByClassName("buttons");
let input_array = Array.from(input);
input_array.forEach((element) => {
    element.addEventListener("click", (event) => {
        if (event.target.innerHTML == "c") {
            string = "";
            document.getElementById("textpreview").value = string;
        } else if (event.target.innerHTML == "d") {
            string = string.slice(0, -1);
            document.getElementById("textpreview").value = string;
        } else if (event.target.innerHTML == "=") {
            string = eval(string);
            document.getElementById("textpreview").value = string;
        } else {
            string += event.target.innerHTML;
            document.getElementById("textpreview").value = string;
        }
    });
});
