;(function($){

	function search($item,options){
		this.$item = $item;
		this.options = options;
		this.$searchBtn = $item.find('.search-btn');
		this.searchInput = $item.find('.search-input');
		this.searchForm = $item.find('.earch-form');
		this.init();




	}

	search.prototype = {
		constructor:search,
		init:function(){

			this.$searchBtn.on('click',$.proxy(this.submit,this));



		}
		submit:function(){
			// 阻止默认行为
			if(this.getInputVal() ==''){
				return false;
			}
			this.$searchForm.trigger('submit')

		}
		getInputVal:function(){
			return $.trim(this.$searchInput.val());
		}





	}

	search.DEFAULS = {



	}






















})(jQuery)