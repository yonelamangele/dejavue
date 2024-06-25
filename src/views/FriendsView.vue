<template>
    <div>
        <slot-comp>
            <template #title>
            <h2></h2>
      </template>
      <template #default>
        <img :src="imgurl">
      </template>
        </slot-comp>
    </div>
</template>

<script>

import slotComp from '../components/slotComp.vue'
export default {
    data() {
        return {
            imgurl: ['https://yonelamangele.github.io/dejavue/src/20240422_114746.jpg','https://yonelamangele.github.io/dejavue/src/20240422_120424.jpg','https://yonelamangele.github.io/dejavue/src/20240422_121004.jpg','https://yonelamangele.github.io/dejavue/src/20240422_121616.jpg','https://yonelamangele.github.io/dejavue/src/20240422_121716.jpg','https://arachnidarchitect.github.io/2.images/container/mtdt.png'],
        }
    },
    components:{
        slotComp
    }
    
}
</script>

<style scoped>
    imgurl {
  width: 10rem
}
</style>

// chloe - https://yonelamangele.github.io/dejavue/src/20240422_114746.jpg
// Kiara - https://yonelamangele.github.io/dejavue/src/20240422_120424.jpg
// Ntando - https://yonelamangele.github.io/dejavue/src/20240422_121004.jpg
// Tyra - https://yonelamangele.github.io/dejavue/src/20240422_121616.jpg
// Sihlandlo - https://yonelamangele.github.io/dejavue/src/20240422_121716.jpg
// Taahir - https://arachnidarchitect.github.io/2.images/container/mtdt.png