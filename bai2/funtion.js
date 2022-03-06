// hàm riêng
function numberOneTriangle(n) {

    for (let index = 1; index <= n; index++) {
        document.write(`<br>`);
        for (x = 1; x <= index; x++) {
            document.write(`*`)
        }
    }
}
numberOneTriangle(4)