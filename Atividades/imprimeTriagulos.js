imprimeTriangulo = () => {
    for (i = 1; i < 5; i++) {
        let part = ""
        for (j = 0; j <= i; j++) {
            part += "#"
        }
        console.log(part);
    }
}