function TopBar(topThreshold, bottomThreshold){

  this.topThreshold = topThreshold;
  this.bottomThreshold = bottomThreshold;

	this.$el = $('#top-bar');

  var that = this;

  $(window).on('scroll',function(){

    that.onScroll();

  });


}

TopBar.prototype = {

	hide : function(){
		this.$el.css({'transform':'translate3d(0,-100%,0)'});
	},

	show : function(){
		this.$el.css({'transform':'translate3d(0,0,0)'});
	},

	onScroll : function(){

    var that = this;
    var top = $(document).scrollTop();

    if (top > this.topThreshold){
      this.show();
    }else if(top < this.topThreshold){
      this.hide();
    }

	}

};


$(function(){
  var $cover = $('#cover');
  var height = $cover.height();
	window.topBar = new TopBar( height, height * 1.3);
});

