/** 
 * imageFromSelect jQuery plugin
 *
 * @author Vitezslav Kis
 *
 * options:
 *   containerAttr: 'rel'
 *   imageId: 'simage2galery',
 *   thubnailResized: false, 
 *   thumbnailWidth: '120px',
 *   thumbnailHeight: '120px',
 *   emptyText: 'No image'
 *  
 *   $('#select').imageFromSelect();
 *
 */
(function($) {
	$.fn.imageFromSelect = function(options) {
		//var opts = $.extend({}, $.fn.imageFromSelect.defaults, options);
		var defaults = {
			containerAttr: 'xrel',
			imageId: 'simage2galery',
			imageSrc: 'text',
            thubnailResized: false, 
			thumbnailWidth: '120px',
			thumbnailHeight: '120px',
			emptyText: 'No image'
		}
		var opts = $.extend(defaults, options);
		return this.change(function() {
			var $this = $(this);
			if (this.tagName == 'SELECT') {
				var sid = $this.attr('id');
                //alert(sid);
				$("#" + sid + " option:selected").each(function(i, selected) {
					var imgsrc = $(this).attr(opts.containerAttr);
					//alert($(this).attr("xrel"));
                    if (opts.thumbnailResized==true) var resize="width:"+opts.thumbnailWidth+";"+"height:"+opts.thumbnailHeight; else var resize="";
                    
					$("#" + opts.imageId).html("<img src='" + imgsrc + "' style='float:left;"+resize+"'>");
				});
			}
		});
	}
})(jQuery)