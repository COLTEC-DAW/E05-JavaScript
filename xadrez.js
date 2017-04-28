    //Para node.js

    var num;
    var i;
    var j;

    console.log("Digite um numero");
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', function() {
    num = process.stdin.read();
    if (num !== null) {
        for(i = 0;i<num;i++){
            for(j = 0;j<8;j++){
                if(i%2 == 0 && j%2 == 0)
                    process.stdout.write("#");
                else if(i%2 == 0 && j%2 == 1)
                    process.stdout.write(" ");
                else if(i%2 == 1 && j%2 == 0)
                    process.stdout.write(" ");
                else if(i%2 == 1 && j%2 == 1)
                    process.stdout.write("#");
            }
        process.stdout.write("\n");
        }
        process.exit();
    }
    });
