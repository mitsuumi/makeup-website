<template>
<div class="row mx-3">
            <div v-for="shopItem in resultShopList" class="col-md-3 text-center p-2" :key="shopItem.id">
                <img class="rounded-circle my-5" :src="shopItem.imageUrl" alt="" width="150" height="150">
                <h4 class="eng-font text-decoration-underline">{{shopItem.title}}</h4>
                <!-- <p>{{shopItem.title}}</p> -->
                <div class="price-card p-3 my-5">
                    <h5 class="my-2 eng-font text-light border-bottom">PRICE</h5>
                    <p class="my-2">{{shopItem.price}}元/則</p>
                </div>
                <button class="add-cart-btn" @click="addCart(shopItem.id)">加入購物車</button>
            </div>
            </div>
            
</template>
<script>
export default{
mounted() {
        this.axios.get('/shopList').then((response) => {
            console.log(response)
            this.resultShopList = response.data.data
        })
        // this.axios.get('/cart').then((res) => {
        //     console.log(res)
        // })
    },
data() {
        return {
            resultShopList: []
        }
    },
  methods: {
        addCart(id) {
            console.log(this.axios)
            this.axios.post('/cart-add-item', { productId: id }).then((response) => {
                console.log(response)
                // this.$router.push('/cart')
            })
        }
    }
}
</script>