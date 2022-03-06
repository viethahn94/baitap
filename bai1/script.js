// khai báo lỗi
let error = document.querySelector('.error');
// số a
let firstNumber = document.querySelector('.first-number');
// số b
let secondNumber = document.querySelector('.second-number');
// nút in 
let btnGeneratePrime = document.querySelector('.btn-generate-prime')
    // kết quả 
let result = document.querySelector('.result')
let resultBox = document.querySelector('.result-box')

// tạo hàm validate 
function validate() {
    error.innerHTML = "";
    let errorMessage = [];
    let isValidate = true;
    // validate số a chưa nhập và nhỏ hơn 0
    if (!(firstNumber.value)) {
        errorMessage.push("Số a không được để trống")
    }


    if (parseInt(firstNumber.value) < 0) {
        errorMessage.push("Số a phải lớn hơn hoặc bằng 0")
    }
    // validate số b chưa nhập và nhỏ hơn 0
    if (!(secondNumber.value)) {
        errorMessage.push("Số b không được để trống")
    }
    if (parseInt(secondNumber.value) < 0) {
        errorMessage.push("Số b phải lớn hơn hoặc bằng 0")
    }
    // validate số a nhỏ hơn hoặc bằng số b
    if (parseInt(secondNumber.value) < parseInt(firstNumber.value)) {
        errorMessage.push("Số b phải lớn hơn hoặc bằng số a")
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
function renderPrime() {
    let primeNumberHtml = "";
    // nếu các số validate
    if (validate()) {
        // hiện kết quả
        resultBox.classList.remove('d-none')
        for (let index = firstNumber.value; index <= secondNumber.value; index++) {
            if (isPrime(index)) {
                primeNumberHtml += "<span class='prime-item'>" + index + "</span>"
            }
        }
        // nếu đã validate thì hiện kết quả nếu không hiện không có số nguyên tố
        if (primeNumberHtml) {
            result.innerHTML = primeNumberHtml
        } else {
            result.innerHTML = "Không có số nguyên tố nào trong khoảng:" + firstNumber.value + " => " + secondNumber.value
        }
    } else {
        resultBox.classList.add('d-none')
    }

}

// khi click vào nút thì chạy hàm in số nguyên tố
btnGeneratePrime.onclick = renderPrime;


/*Tạo hàm kiểm tra số nguyên tố trong JavaScript*/
function isPrime(n) {
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố

    let flag = 1;

    if (n < 2) return 0; /*Số nhỏ hơn 2 không phải số nguyên tố => kết thúc*/

    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}