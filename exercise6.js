function createStaircase(n) {
    console.log("# #");
    
    for (let i = 2; i <= n; i++) {
        let line = "";
        let quantity = i + 1;
        
        while (line.length < quantity) {
            line = line + "#";
        }
        
        console.log(line);
    }
}
createStaircase(3);
