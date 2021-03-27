<template>
    <div>
        <div id="tab-bar">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>
     #tab-bar{
        display: flex;
        width: 100%;
        /* height:100px; */
        position: fixed;
        left: 0;
        bottom: 0;
        background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,193,104,1) 0%, rgba(251,128,128,1) 90% );
        box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.8);
  }
 
</style>