Number.prototype.formatCardNumber = function () {
    return this.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
};
let dataBank=[
    {
        name:'mellat',
        cardNumber: '61043374',
        img:'./img/logo/logo1.png',
    } ,
    {
        name:'saman',
        cardNumber: '62198610',
        img:'./img/logo/logo2.png',
    }, 
    {
        name:'tejarat',
        cardNumber: '58598310',
        img:'./img/logo/logo3.png',
    } ,
    {
        name:'keshavarzi',
        cardNumber: '60377014',
        img:'./img/logo/logo4.png',
    } 

]

let filterData={
    number:null,
}
document.querySelector('.card-origin').addEventListener('input', (e) => {
      filterData.number= e.target.value;
     
    if(filterData.number != 'null') {
            let filterCard = dataBank.filter(x=>x.cardNumber === filterData.number);
            document.getElementById("cardImg").src=filterCard[0].img;
            document.getElementById("cardImg").style.display = "inline-block";
      }
});



 


