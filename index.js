window.onload = function() {
    const input = document.querySelector("input");
    const li = document.querySelectorAll("li");

    input.addEventListener("keyup", function() {
        var value = input.value.toUpperCase();
        console.log(value);
        li.forEach(function(list) {
            if (value == "") {
                list.style.display = "";

            } else if (list.textContent.toUpperCase().indexOf(value) == -1) {
                list.style.display = "none";


            }
        })
    })

}