function isFirst(n, a) {
    var s = "";
    if( n/3 < 0.6) {return "";}

    for (var i = 0; i < n/3; i++) {
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
        case 0: // 0, 3, 6, 9, ...
            print += " → "+ a + isFirst(num, a);
            break;
        case 1: // 1, 4, 7, 10, ...
            print += " → 反"+ a + isFirst(num, a);
            break;
        case 2: // 2, 5, 8, 11, ...
            print += " → 肉搜" + isFirst(num, a);
            break;
    }

    document.getElementById("num").value = num;
    document.getElementById("cycle").innerHTML = print;
    document.getElementById("person").innerHTML = Math.floor(num/3) + 1;

}
