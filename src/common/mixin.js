import BackTop from "components/common/backtop/BackTop";

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop:true
    }
  },
  methods:{
    backtop(){
      this.$refs.scroll.scrollTop(0,0,1000)
    },
    // contentscroll(position){
    //   this.isShowBackTop = -position.y > BACK_POSITION
    // }
  }
}
