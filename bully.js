function isFirst(n, a) {
    var s = "";
    if( Math.floor((n)/3) < 1) {
        return "";
    }

    for (var i = 0; i < Math.floor(n/3); i++) {
        s += a;
    }

    return s+"者";
}

function Bully() {
    var a = "霸凌";
    var num = Number(document.getElementById("num").value);
    var print = document.getElementById("cycle").innerHTML;
    num++;


    switch ( num%3 ) {
        case 1: // 0, 3, 6, 9, ...
            print += " → "+ a + isFirst(num, a);
            break;
        case 2: // 1, 4, 7, 10, ...
            print += " → "+"反"+ a + isFirst(num, a);
            break;
        case 0: // 2, 5, 8, 11, ...
            print += " → 肉搜" + isFirst(num, a);
            break;
    }

    document.getElementById("num").value = num;
    document.getElementById("cycle").innerHTML = print;
    document.getElementById("person").innerHTML = Math.floor((num-1)/3)+1;

}
