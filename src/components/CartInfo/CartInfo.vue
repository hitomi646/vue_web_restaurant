<template>
    <div class="cart-info">
      <span>totlenum：{{total}}</span>
      <br>
      <span>pay：{{totalPrice}}</span>
      <br>
      <button @click="clearShopCar">delate all</button>
    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
    export default {
      name: "cart-info",
      data () {
        return {}
      },
      methods: {
        ...mapMutations({
          VXclearShopCar:   'CLEAR_SHOP_CAR'
        }),
        clearShopCar () {
          if (!this.shopCarList.length) {
            return
          }
          let copy = [];
          for (let i = 0; i < this.shopCarList.length; i++) {
            copy.push(JSON.parse(JSON.stringify(this.shopCarList[i])))
          }
          this.VXclearShopCar()
          this.$emit('clearShopCarList', copy)
        }
      },
      computed: {
        ...mapGetters([
          'shopCarList'
        ]),
        total () {
          let total = 0;
          for (let i = 0; i < this.shopCarList.length; i++) {
            total += this.shopCarList[i].count
          }
          return total
        },
        totalPrice () {
          let totalPrice = 0;
          for (let i = 0; i < this.shopCarList.length; i++) {
            totalPrice += this.shopCarList[i].price * this.shopCarList[i].count
          }
          return totalPrice
        }
      }
    }
</script>

<style scoped>
button{
    font-size: 25px;
    margin: 0px;
    margin-top: 10px;
    background-color: rgb(212, 252, 238)
  }
  span{
    font-size: 25px;
  }
  .cart-info{
    position: relative;
    left:20px;
  }
</style>
