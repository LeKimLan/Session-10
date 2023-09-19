let weight = prompt("nhập cân nặng của bạn");

let height = prompt("nhập chiều cao của bạn");

let bmi = Math.round(Number(weight)/Math.pow(height,2)*100)/100;

document.write("BMI là ", bmi,"<br>")

document.write("tình trạng của bạn là ")
if (bmi<18.5) {
    document.write("Gầy")
} else if (bmi>18.5 && bmi<24.9){
    document.write("Bình thường")
} else if (bmi>25 && bmi<29.9){
    document.write("Thừa cân và tiền béo phì")
} else if (bmi>30 && bmi<34.9){
    document.write("Béo phì độ 1")
} else if (bmi>35 && bmi<39.9){
    document.write("Béo phì độ 2")
} else if (bmi>40) {
    document.write("Béo phì độ 3")
}