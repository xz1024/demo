outer: for (let i = 0; i <= 3; i++) {
    inner: for (let j = 6; j <= 9; j++) {
        if (j == 7) {
            break outer
        }
        console.log(i, j);

    }
}