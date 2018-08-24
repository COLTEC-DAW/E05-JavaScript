function xadrez(num) {
    var x = " ";
    var has = "# # # #";
    console.log("");
    for (let i = 0; i < num; i++) {
        if(i % 2 == 0) {
            console.log(has);
        } else {
            console.log(x+has);
        }          
    }
}
xadrez(7);
