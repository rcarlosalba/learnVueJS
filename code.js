// let title = "Hola HTML"
// const h1 = document.getElementById("h1")
// h1.innerText = ("Hola Vue")


// new Vue({
//   el: "#app",

//   data(){
//     return{
//       title: "Hola de nuevo Vue!"
//     }
//   }
// })

new Vue({
  el: "#app",

  data(){
    return{
      name: "Bitcoin",
      symbol: "BTC",
      img: ("https://cryptologos.cc/logos/bitcoin-btc-logo.png"),
      changePercent: 10,
      price: 8500,
      color: "f4f4f4",
      prices: [100,200,300,400,220,541,258,230,540], 
      titlePrice: "Precio del Bitcoin",
      pricesWithDays:[
        {day:"Lunes", value:200},
        {day:"Martes", value:500},
        {day:"Miércoles", value:800},
        {day:"Jueves", value:8500},
        {day:"Viernes", value:300},
        {day:"Sábado", value:580},
        {day:"Domingo", value:9850}
      ], 
      value: 0,
      showPrices: false,
    }
  },
  computed:{
    title(){
      return `${this.name} - ${this.symbol}`
    }, 
    converterValue(){
      if(!this.value){
        return 0
      }
      return this.value / this.price
    }
  },
  watch:{
    showPrices(newValue, oldValue){
      console.log(newValue, oldValue)
    }
  },
  methods:{
    toggleShowPrices(){
      this.showPrices = !this.showPrices

      this.color = this.color.split("").reverse("").join("")
    }
  }
})