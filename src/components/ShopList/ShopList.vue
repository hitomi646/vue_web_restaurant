<template>
  <div class="shop-list">
    <h1>Manue</h1>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>num</th>
          <th>ordinal</th>
          <th>operate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in shopList">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.count}}</td>
          <td>{{item.stock}}</td>
          <td>
            <button @click="addToCar(item)" v-if="item.count === 0">enter</button>
            <button @click="reduceItem(item)" v-if="item.count > 0">-</button>
            <button @click="addItem(item)" v-if="item.count" :disabled="item.stock<=0">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data: function () {
      return {
        shopList: [
          {
            id: 1,
            name: 'pork chop',
            price: 20,
            stock: 4,
            count: 0
          },
          {
            id: 2,
            name: 'roast chicken',
            price: 14,
            stock: 5,
            count: 0
          },
          {
            id: 3,
            name: 'potato puree',
            price: 10,
            stock: 2,
            count: 0
          },
          {
            id: 4,
            name: 'fried cabage',
            price: 2,
            stock: 3,
            count: 0
          },
          {
            id: 5,
            name: 'sashimi',
            price: 30,
            stock: 3,
            count: 0
          },
          {
            id: 6,
            name: 'blackberry soft cream',
            price: 18,
            stock: 8,
            count: 0
          }
        ]
      }
    },
    methods: {
      removeItem(item) {
        let obj = this.shopList .find(function (data) {
          return item.id === data.id
        })

        let count = item.count
        let stock = item.stock
        obj.stock = count + stock
        obj.count = 0
      },
      removeAllItem (shopCarList) {
        for (let i = 0; i < shopCarList.length; i++) {
          this.removeItem(shopCarList[i]);
        }
      },
      ...mapMutations({
        addToCar: 'ADD_TO_CAR',
        addItem: 'ADD_ITEM',
        reduceItem: 'REDUCE_ITEM'
      })
    },
    computed: {
      ...mapGetters([
        'shopCarList'
      ])
    }
  }
</script>

<style>
  .shop-list {
    margin: 30px 0;
  }
  table,th,td {
    border: 2px solid #ccc;
  }
  table {
    width: 100%;
    height: 30px;
    border-spacing: 0;
    border-collapse: collapse;
  }
  tbody tr:hover {
    background: #c9c9c9;
    border: 2px solid red;
  }
  .btn {
    padding: 3px 8px;
  }
  button{
    font-size: 23px;
    margin: 0px;
    margin-bottom: 5px;
    background-color: rgb(212, 252, 238)
  }
</style>
