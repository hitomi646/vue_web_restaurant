<template>
  <div class="note" :style="note">
    <br>
    <p>Loin'dlci</p><br>
    <div class="tab1">
      <a href="#" @click="txt1()">
        You can click here to look about Loin'dlci restaurant's environment and our history
      </a>
    </div>
    
      <div id="t" style="display:block">
        <p id="txta">Au pied des montagnes, en surplomb sur la mer, à deux pas de 
          la frontière italienne, la bâtisse années 30 en rotonde qui abrite le 
          Mirazur offre un décor idyllique. Immergée dans une végétation luxuriante, 
          elle se décline à flanc de colline sur trois niveaux. La salle de restaurant 
          spacieuse, élégante et lumineuse embrasse la mer à perte de vue 
          et la ville de Menton à travers une longue baie circulaire.</p>
        <div id="pic">
			    <img src="../r1.jpg" alt="" width="500" height=350>
          <img src="../r4.jpg" alt="" width="500" height=350>
          <br>
          <p id="txta">
            Affranchi de son héritage culturel italo-argentin et de celui des
             chefs auprès desquels il a été formé, il puise au fil de son 
             intuition dans la culture locale des deux côtés de la frontière.
          </p>
          <br>
          <img src="../r3.jpg" alt="" width="500" height=350>
          <img src="../r2.jpg" alt="" width="500" height=350>
		    </div>
      </div>
    
    <br>
    <p class="today">Today's Recommendation</p>
    <br>
		<div class="tab1">
      
			<a href="#" @click="showDiv=2" :class="{'select':showDiv===2}">Appetizer</a>
			<a href="#" @click="showDiv=3" :class="{'select':showDiv===3}">Main</a>
			<a href="#" @click="showDiv=4" :class="{'select':showDiv===4}">Soup</a>
			<a href="#" @click="showDiv=5" :class="{'select':showDiv===5}">Dessert</a>
   
		</div>
		<div id="pic" class="tabConten" v-show="showDiv===2">
			<img src="../shrimp.jpg" alt="" width="500" height=350>
		</div>
		<div id="pic" class="tabConten" v-show="showDiv===3">
			<img src="../beef.jpg" alt="" width="500" height=auto>
		</div>
		<div id="pic" class="tabConten" v-show="showDiv===4">
			<img src="../Spain Soup.jpg" alt="" width="500" height=auto>
		</div>
		<div id="pic" class="tabConten" v-show="showDiv===5">
			<img src="../desser.jpg" alt="" width="500" height=auto>
		</div>
    
    

    <p class="today">Manue</p><br>
    <div class="tab1">
      <a href="#" @click="showDiv1=1" :class="{'select':showDiv1===1}">Combo Meal</a>
      <a href="#" @click="showDiv1=7" :class="{'select':showDiv1===7}">Afternoon Tea</a>
      <a href="#" @click="showDiv1=6" :class="{'select':showDiv1===6}">Ordder</a>
    </div>
    <div id="tab1" class="tabConten" v-show="showDiv1===1">
      <p class="combo">combo 1</p>
      <p id="txta1">you can choose this delicious meal</p><br>
      <div id="da">
			<img id="pic2" src="../app1.jpg" alt="" width="300" height=auto>
      <img id="pic2" src="../m1.jpg" alt="" width="300" height=auto>
      <img id="pic2" src="../s1.jpg" alt="" width="300" height=auto>
      <img id="pic2" src="../cake.jpg" alt="" width="300" height=auto>
      </div>

      <p class="combo">combo 2</p>
      <p id="txta1">you can choose this delicious meal</p><br>
			<div id="da">
      <img id="pic2" src="../ap2.jpg" alt="" width="300" height=auto>
      <img id="pic2" src="../m3.jpg" alt="" width="300" height=auto>
      <img id="pic2" src="../s2.jpg" alt="" width="300" height=auto>
      <img id="pic2" src="../d3.jpg" alt="" width="300" height=auto>
			</div>
      </div>

      <div  class="tabConten" v-show="showDiv1===7">
      <p class="combo">Afternoon Tea</p>
      <p id="txta1">four in this list but you can only choose two dessert from that</p><br>
      <div id="da">
      <img id="pic2" src="../1.jpg" alt="" width="300" height=165>
      <img id="pic2" src="../d1.jpg" alt="" width="300" height=auto>
      <img id="pic2" src="../bread.jpg" alt="" width="300" height=165>
      <img id="pic2" src="../d2.jpg" alt="" width="300" height=auto>
      </div>

      
      <br>
      <p id="txta1">four in this list but you can only choose two dessert from four</p><br>
      <div id="da">
      <img id="pic2" src="../d10.jpg" alt="" width="300" height=165>
      <img id="pic2" src="../d5.jpg" alt="" width="300" height=165>
      <img id="pic2" src="../d6.jpg" alt="" width="300" height=165>
      <img id="pic2" src="../d7.jpg" alt="" width="300" height=165>
      <img id="pic2" src="../d8.jpg" alt="" width="300" height=165>
      <img id="pic2" src="../d9.jpg" alt="" width="300" height=165>
      <img id="pic2" src="../d11.jpg" alt="" width="300" height=165>
      <img id="pic2" src="../d12.jpg" alt="" width="300" height=165>
      </div>
      </div>

    <div  class="tabConten" v-show="showDiv1===6">
			<div class="container">
      <shop-list ref="shopList"></shop-list>
      <shop-car @changeItem="removeItemX"></shop-car>
      <cart-info @clearShopCarList="clearShopCarList"></cart-info>
      <br>
    </div>
		</div>
    
    
      
    
  <router-view/>
  </div>
</template>

<script>
  import vHeader from './components/Header/Header'
  import ShopList from './components/ShopList/ShopList'
  import ShopCar from './components/ShopCar/ShopCar'
  import CartInfo from './components/CartInfo/CartInfo'
  

  export default {
    data(){
      return{
        showDiv1:1,
        showDiv:2,
        note:{
          backgroundImage:"url("+require("../13.jpg")+")",
          backgroundRepeat:"repeat",
          backgroundSize:"auto auto",

        }
      }
    },
    methods: {
      removeItemX (evtValue) {
        this.$refs.shopList.removeItem(evtValue)
      },
      clearShopCarList (shopCarList) {
        this.$refs.shopList.removeAllItem(shopCarList)
      },
      txt1(){
        var div=document.getElementById("t");
        if(div.style.display == 'block'){
          div.style.display = 'none';
        }
        else{
          div.style.display = 'block';
        }
      }
      
    },
    components: {
      vHeader,
      ShopList,
      ShopCar,
      CartInfo,
    }
}
</script>

<style>
  .container {
    margin: 0 auto;
    width: 980px;
    padding: 0%;

  }
  .container table, .container h1{
    text-align: center;
    font-size: 27px;
  }
  .btn{
    position: relative;
    text-align: center;
    font-size: 50px;
  }
.tab1{
  text-align: center;
  height:65px;
  width: auto;
  font-size: 23px;
}
a{
  padding: 12px;
  text-align: center;
  margin: 40px;
  background-color: azure;
  text-decoration: none;
}
#pic{
  text-align: center;
}
p{
  text-align: center;
  height:60px;
  margin: 20px;
  padding-top: 15px;
  font-size: 40px;
  background-color: azure;
}
.container{
  padding-top: 20px;
}
p.today{
  text-align: center;
  height:60px;
  margin: 20px;
  padding-top: 15px;
  font-size: 30px;
  background-color: azure;
}
p.combo{
  text-align: center;
  height:60px;
  margin: 20px;
  padding-top: 15px;
  font-size: 27px;
  background-color: azure;
}

#pic2{
  margin-right: 20px;
  margin-bottom: 20px
}
#t{
  position: relative;
}
#txta{
  text-align: center;
  height: auto;
  width: auto;
  font-size: 20px;

}
#txta1{
  text-align: center;
  height: auto;
  width: auto;
  padding-bottom: 15px;
  font-size: 20px;

}
#da{
  text-align: center;
  height: auto;
  width: auto;
}

</style>
