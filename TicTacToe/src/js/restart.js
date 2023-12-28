export function restart(){

    header.classList.remove("headWin");
    header.classList.remove("headP2");
    header.classList.add("headP1");
    headerMove.innerText = "Ходит нолик";

    sidebar.innerHTML = ''

    document.getElementById('1').innerText = ''
    document.getElementById('1').classList.remove('red')
    document.getElementById('1').classList.remove('blue')

    document.getElementById('2').innerText = ''
    document.getElementById('2').classList.remove('red')
    document.getElementById('2').classList.remove('blue')

    document.getElementById('3').innerText = ''
    document.getElementById('3').classList.remove('red')
    document.getElementById('3').classList.remove('blue')

    document.getElementById('4').innerText = ''
    document.getElementById('4').classList.remove('red')
    document.getElementById('4').classList.remove('blue')

    document.getElementById('5').innerText = ''
    document.getElementById('5').classList.remove('red')
    document.getElementById('5').classList.remove('blue')

    document.getElementById('6').innerText = ''
    document.getElementById('6').classList.remove('red')
    document.getElementById('6').classList.remove('blue')

    document.getElementById('7').innerText = ''
    document.getElementById('7').classList.remove('red')
    document.getElementById('7').classList.remove('blue')

    document.getElementById('8').innerText = ''
    document.getElementById('8').classList.remove('red')
    document.getElementById('8').classList.remove('blue')

    document.getElementById('9').innerText = ''
    document.getElementById('9').classList.remove('red')
    document.getElementById('9').classList.remove('blue')
}