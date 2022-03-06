// khai báo lỗi
let error = document.querySelector('.error');
// số
let firstNumber = document.querySelector('.first-number');

// nút in 
let btnGeneratePrime = document.querySelector('.btn-generate-prime')
    // kết quả 
let result = document.querySelector('.result')
let resultBox = document.querySelector('.result-box')

// tạo hàm validate 
function validate(n) {
    error.innerHTML = "";
    let errorMessage = [];
    let isValidate = true;
    // validate số a chưa nhập và nhỏ hơn 0
    if (!(n)) {
        errorMessage.push("Số a không được để trống")
    }

    if (parseInt(n) < 1 || parseInt(n) > 10) {
        errorMessage.push("Số cạnh của tam giác phải trong khoảng 1 => 10")
    }
    // hiện thị lỗi
    if (errorMessage.length > 0) {
        let errorHtml = "";
        isValidate = false;
        for (const message of errorMessage) {
            errorHtml += "<li>" + message + "</li>";
        }
        error.innerHTML = errorHtml;
    }

    return isValidate;
}

// hiện thị số nguyên tố
function numberOneTriangle(n) {
    let primeNumberHtml = "";
    // nếu các số validate
    if (validate(n)) {
        // hiện kết quả
        resultBox.classList.remove('d-none')
        let number = firstNumber.value;

        for (let index = 1; index <= number; index++) {
            primeNumberHtml += `<br>`;
            for (x = 1; x <= index; x++) {
                primeNumberHtml += `<span>*</span>`
            }
        }
        result.innerHTML = primeNumberHtml
    } else {
        resultBox.classList.add('d-none')
    }

}

// khi click vào nút thì chạy hàm in tam giác
btnGeneratePrime.onclick = numberOneTriangle;