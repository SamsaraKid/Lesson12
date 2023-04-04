//Случайное число от a до b
// let a=2
// let b=20
//
// while (true) {
//     alert(Math.floor(Math.random() * (b - a + 1)) + a)
// }


//скрытие картинки
function f1(){
    $('img').hide()
}
function f2(){
    $('img').show()
}

//смена картинки
let numpic=1
let kot1='img/cat1.1.jpg'
let kot2='img/cat1.2.jpg'
let kot3='img/cat1.3.jpg'
let kot4='img/cat2.1.jpg'
let kot5='img/cat2.2.jpg'
function f3(){
    if (numpic == 1) {
        $('#pic').attr('src', kot2)
        numpic=2
        console.log(numpic)
        return
    }
    if (numpic == 2) {
        $('#pic').attr('src', kot3)
        numpic=3
        console.log(numpic)
        return
    }
    if (numpic == 3) {
        $('#pic').attr('src', kot4)
        numpic=4
        console.log(numpic)
        return
    }
    if (numpic == 4) {
        $('#pic').attr('src', kot5)
        numpic=5
        console.log(numpic)
        return
    }
    if (numpic == 5) {
        $('#pic').attr('src', kot1)
        numpic=1
        console.log(numpic)
        return
    }
}

//сравнение имени
function f4(){
    let n = $('#in_name').val()
    if ((n === 'Валера') || (n === 'валера')){
        // alert('Привет, Валера!')
        $('#name_out').text('Привет, Валера')
    }   else {
        // alert('Я тебя не знаю')
        $('#name_out').text('Я тебя не знаю')
    }
}
//сравнение числа
function f5(){
    let x1 = Number($('#in_name1').val())
    if (x1 > 100){
        alert('Ваше число больше 100')
    }   else {
        alert('Ваше число меньше 100')
    }

}

//проверка числа в диапазоне
function f6(){
    let x2 = Number($('#in_name2').val())
    if ((x2 > 100)&&(x2 < 1000)){
        alert('Ваше число в диапазоне от 100 до 1000')
    }   else {
        alert('Ваше число не в диапазоне')
    }
}

//проверка числа
function f7(){
    let m = Number($('#in_name3').val())
    if (m<0) {
        $('#name_out3').text('Меньше 0')
    }
    else if ((m>=0)&&(m<100)) {
        $('#name_out3').text('От 0 до 100')
    }
    else if (m>100) {
        $('#name_out3').text('Больше 100')
    }
    else {
        $('#name_out3').text('Это не число')
    }
    $('#in_name3').val('')
}


$('#but1').click(f1)
$('#but2').click(f2)
$('#but3').click(f3)
$('#but4').click(f4)
$('#but5').click(f5)
$('#but6').click(f6)
$('#but7').click(f7)
