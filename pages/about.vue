<template>
    <div>
  
<h2>about</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia, animi ipsa aut totam ea iste unde itaque ipsum. Aut!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia, animi ipsa aut totam ea iste unde itaque ipsum. Aut!</p>

<div>{{ data }}</div>
    </div>
</template>



<script setup>

const {data} = await useFetch('/api/ninja?name=mario')

</script>
