// pages/welcome/welcome.js
var timer = "";
var checkTime = function checkTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  if (h < 10) {
    h = 0 + "" + h;
  }
  if (m < 10) {
    m = 0 + "" + m;
  }
  var picTime;
  return picTime = h + "" + m;
  
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    logo:'./images/logo.jpeg',
    eText:'Welcome',
    bgurl:'',
    hello:''
  },
  enter:function(){
    wx.redirectTo({
      url: '../index/index',
    })
    clearTimeout(timer);
    
  },
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    //3秒自动进入
    timer=setTimeout(function(){
      wx.redirectTo({
        url: '../index/index',
      })
      clearTimeout(timer);
    },3000)
    /*早中晚四图自动切换
     *0000-0959：早上 bg_moring.jpg
     *1000-1459：中午 bg_afternoon.jpg
     *1500-1859：下午 bg_evening.jpg
     *1900-2359：晚上 bg_night.jpg
     */
    if(checkTime() < 959){
      console.log('true')
      this.setData({
        bgurl: 'http://ideacom.cn/wxapp/images/bg_morning.jpg',
        hello:'Good morning.'
      });
    } else if ((checkTime()>959)&&(checkTime()<=1459)){
      console.log('true2')
      this.setData({
        bgurl: 'http://ideacom.cn/wxapp/images/bg_afternoon.jpg',
        hello: 'Good afternoon.'
      });
    } else if ((checkTime()>1459)&&(checkTime()<=1859)) {
      this.setData({
        bgurl: 'http://ideacom.cn/wxapp/images/bg_evening.jpg',
        hello: 'Good evening.',
        color: '#fff',
        border: ' 1px solid #fff'
      });
    } else if ((checkTime()>1859)&&(checkTime()<=2359)) {
      this.setData({
        bgurl: 'http://ideacom.cn/wxapp/images/bg_night.jpg',
        hello: 'Good night.',
        color: '#fff',
        border: ' 1px solid #fff'
      });
    }else{
      this.setData({
        bgurl: 'http://ideacom.cn/wxapp/bg_morning.jpg',
      });
    }
    
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
  
  },

 
  //生命周期函数--监听页面显示
  onShow: function () {
  
  },

  //生命周期函数--监听页面隐藏
  onHide: function () {
  
  },

  //生命周期函数--监听页面卸载
  onUnload: function () {
  
  },

  
  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
  
  },

  //页面上拉触底事件的处理函数
  onReachBottom: function () {
  
  },

  
  //用户点击右上角分享
  onShareAppMessage: function () {
  
  }
})