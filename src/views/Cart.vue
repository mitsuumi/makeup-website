<template>
    <tr v-for="cart in resultCartList">
                        <td>{{ cart.title}}</td>
                        <td>{{ cart.cartItem.quantity }}</td>
                        <td>{{ cart.price }}</td>
                        <td><button class="submit-btn">Remove</button></td>
                    </tr>
</template>
<script>

export default{
    data() {
        return {
            resultCartList: [],
            description: '',
            quantity: '',
            price: ''
        }
    },
    mounted() {
        this.axios.get('/cart').then((res)=> {
            console.log(res)
            const {products:resultCartList} = res.data //解構
            this.resultCartList = resultCartList
        })
    },
}
</script>