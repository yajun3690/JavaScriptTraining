;(function($){
    ClassicEditor
    .create( document.querySelector( '#content' ),{
    	language:'zh-cn',
    	ckfinder:{
			uploadUrl:'/admin/uploadImage'
		}
    } )
    .catch( error => {
        console.error( error );
    } );
})(jQuery);