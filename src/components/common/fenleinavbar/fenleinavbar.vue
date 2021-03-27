<template>
    <div>
      <nav-bar class="navbar">
        <div slot="left" class="navleft"><img src="~assets/imgs/fenlei/saoyisao.svg" alt=""><span>扫一扫</span></div>
        <div slot="center" class="navcenter">
          <div class="navcenterimg"><img src="~assets/imgs/fenlei/sousuo.svg" alt=""></div>
          <div class="navcenteript"><input type="text" placeholder="2020新款" autocomplete="off"></div>
          <div class="navcenterimg"><img src="~assets/imgs/fenlei/paizhao.svg" alt=""></div>
        </div>
        <div slot="right" class="navright">
          <img src="~assets/imgs/fenlei/xiaoxi1.svg" alt="">
        </div>
      </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../navbar/NavBar";
    export default {
        name: 'fenleinavbar',
      components: {NavBar},
      data()
    {
        return {}
    }
    }
</script>

<style scoped>
  .navbar{
    width: 100%;
    height: 44px;
  }
  .navleft{
    width: 100%;
    height:100%;
    display: flex;
    font-size: 12px;
    color: rgb(153,152,152);
    position: relative;
    left: 10%;
  }
  .navleft span{
    display: inline-block;
    flex: 1;
  }
  .navleft img{
    width: 42%;
    height: 100%;
  }
  .navcenter{
    width: 90%;
    height: 70%;
    display: flex;
    padding: 0 8px;
    background-color: rgb(247,247,247);
    border-radius: 20px;
    position: relative;
    top: 15%;
    left: 6%;
  }
  .navcenterimg{
    height: 100%;
    width: 8%;
    margin-right: 2px;
  }
  .navcenterimg img{
    height: 100%;
    width: 100%;
  }
  .navcenteript{
    width: 84%;
    height: 100%;
    padding: 0;
    margin: 0;
    position: relative;
  }
  .navcenteript input{
    width: 98%;
    height: 86%;
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    padding: 2px;
    outline: none;
    -webkit-box-shadow:0 0 0 1000px rgb(247,247,247) inset !important;
  }
  .navright{
    width: 100%;
    height: 100%;
    padding: 5px;
  }
  .navright img{
    height: 76%;
    width: 40%;
  }
</style>
