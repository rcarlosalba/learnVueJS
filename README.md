# learnVueJS
Aprendiendo VueJS

## Expresiones y Propiedades
Las Expresiones representan valores de data pero se puede hacer más. Se puede ejecutar casi cualquier código JS valido.
Los ciclos y condicionales no se pueden usar. 

Se invocan por medio de {{ invocar }}

## atributos dinámicos
Llamar o cambiar valores de HTML desde JS por Vue.js.
Las directivas sirven para manipular el DOM y se usa de manera declarativa es decir por medio de tag dentro del HTML.
Siempre comienza por "v-"para invocar por ejempĺo el valor de un atributo como img y alt es "v-bind".

## directivas de flujo condicional
v-if
v-if-else
v-else
condicional if
v-show
la diferencia es que el condicional modifica el valor de escritura y el v-show modifica el display

## renderizado de listas v-for
Nos permite crear pequeños componentes o templates. 
v-for="clave in listado" v-bind:="key"

## Eventos
detecta eventos del usuario y modifica el dom
en data desde la instancia de Vue se puede agregar methods en los que podemos definir funciones (al ser data un objeto las funciones son metodos)
se invocan v-on:click="nombreDeLaFuncion" puede ser cualquier evento, mouseover, mouseout y hasta pueden estar combinados. 

## clases en tiempo real 
con v-bind y el operador ternario 
    <h1 v-bind:class="changePercent > 0 ? 'green':'red'">
o con objetos 
<li 
      v-bind:class="{ orange: p.value == price, red: p.value < price, green: p.value > price}"
      v-for="(p,i) in pricesWithDays" 
      v-bind:key="p.day">
  
  Se pueden combinar clases predeterminadas en CSS con clases dinámicas como las anteriores.

## Estilos en tiempo real
v-bind también se puede usar con style
desde el HTML 
<div id="app" v-bind:style="{background: '#' + color}">
y desde Vue
this.color = this.color.split("").reverse("").join("")
siempre que este dentro del objeto definido el color


## Datos computados y watcher
Usando templates literals y computed desde Vue podemos actualizar cadenas de contenido de forma dinámica. Se calculan en tiempo real en base a otras propiedades. 
en Vuje
  computed:{
    title(){
      return `${this.name} - ${this.symbol}`
    }
  },
los watcher son watcher osea observadores que ejecutan cuando observan. deben tener un nombre de una propiedad definida en data 
en data: 
      showPrices: false,
en el watch recibe dos valores como parametro, el valor nuevo y el valor antiguo
  watch:{
    showPrices(newValue, oldValue){
      console.log(newValue, oldValue)
    }
  },

  















