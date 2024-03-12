const elsCard = document.querySelectorAll('.card');//Kartochkalarning har hammasi topib olinayapdi
const elContainer = document.querySelector('#id-container');//Kartochkalarni o'rab turuvchi ota element id si topib olinayapdi

elsCard.forEach(function (elCard) {//Kartochkalarning har biri uchun elCard o'zgaruvchisiga biriktirish funksiyasi kiritilayapdi
elCard.addEventListener('click', function() {//elCard ya'ni har bir kartochka click hodisasiga quloq solayapdi va funksiya kiritilayapdi
  elContainer.classList.toggle('container-orign');//kiritilgan funksiya orqali kartochkalar bosilganda o'rab turuvchi ota elementga klass ko'shiladi va qo'shilgan klass olib tashlanadi
})
})