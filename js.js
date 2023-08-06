var btn = document.querySelector(".next")
var h2 = document.querySelector("h2")
var nextGamebtn = document.querySelector('button')
var trueScore = document.querySelector(".score1")
var falseScore = document.querySelector(".score3")
var win = 0
var lose = 0
var suallar = [['Insanlar 200 il yaşayırlar ?', 'f'], ['Rusiyanın Paytaxtı Moskvadırmı ?', 't'], ['Amerikanin Prezdenti İlham Aliyevdirmi ?', 'f'], ['Cinema oyunlarla bağlıdırmı ?', 'f'], ['Kitab oxumaq beyini inkişaf eletdirirmi ?', 't']]
var sualSayi = 0
h2.innerText = suallar[sualSayi][0]



window.onkeypress = (e) => {
    if (e.key == 'f' || e.key == 't') {

        if (sualSayi == suallar.length) {
            h2.innerHTML = 'Oyunumuz Bitdi Qatıldığınız Üçün Teşekkürler'
        }
        else {
            if (suallar[sualSayi][1] == e.key) {
                win++
                trueScore.innerText = win
                falseScore.innerText = lose
            }
            else {
                lose++
                trueScore.innerText = win
                falseScore.innerText = lose
            }
            sualSayi++
            h2.innerText = suallar[sualSayi][0]
        }
    }
}


nextGamebtn.onclick = () => { 
    window.location = 'C:/Users/andro/Desktop/PROYEKTLER/Games/Rock-Paper-Game/index.html'
}