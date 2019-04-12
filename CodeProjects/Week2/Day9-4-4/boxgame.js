





var Left = document.querySelectorAll('.leftDiv');
left.forEach(function (val) {
    val.addEventListener("click", function () {
    var idNum = this.id[1];
    var right = document.querySelector("#r" + idNum);
    if (right) {
            right.remove();
    }
    else {
            createElement(idNum);
    }
}
function createElement(id){
    var container = document.querySelector('')
}