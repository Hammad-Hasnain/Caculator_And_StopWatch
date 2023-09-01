/* ======= Section 3 end ======= */
var inp = document.getElementById("inp")
// var inpValue = inp.value;
console.log(inp.value)
console.log(inp)
function addValue(num) {
    console.log(num)
    inp.value += num
    var lastElem = inp.value.slice(inp.value.length - 1)
    var secondLastElem = inp.value.slice(inp.value.length - 2, -1)
    console.log("1st" + lastElem)
    console.log("2nd" + secondLastElem)
    if (lastElem === "+" || lastElem === "-" || lastElem === "*" || lastElem === "/" || lastElem === "%") {
        if (secondLastElem === "+" || secondLastElem === "-" || secondLastElem === "*" || secondLastElem === "/" || secondLastElem === '%') {
            // console.log("Double operator")
            inp.value = inp.value.slice(0, inp.value.length - 1)
        }
    }

    /*     var op = "+*-/";
            for (var i = 0; i < op.length; i++) {
                // console.log("index" + i)
                for (var j = 0; j, op.length; j++) {
                    if (lastElem === op[i]) {
                        // if (secondLastElem === op[j]) {
                        //     console.log("loop found double operator")
                        //     console.log(lastElem + " " + secondLastElem)
                        // }
                        console.log("lastelem " + lastElem)
                    }
                }
            } */
}
function calValue() {
    console.log(eval(inp.value))
    inp.value = eval(inp.value)

}
function clrValue() {
    inp.value = ""
}
function dlt1ValBack() {
    // inp.value = inp.value.slice(0, -1)
    // OR
    inp.value = inp.value.slice(0, inp.value.length - 1)
}
/* ======= Section 3 end ======= */

