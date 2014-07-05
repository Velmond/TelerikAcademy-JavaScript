(function ($) {
    $.fn.listview = function (itemsToDisplay) {
        var $this = $(this),
            templateSrc = $this.data('template'),
            template = (templateSrc ? $('#' + templateSrc) : $('#students-table-body')).html(),
            templateHtml = Handlebars.compile(template),
            result = templateHtml(itemsToDisplay);

        $this.append(result);
        return $this;
    }
}(jQuery));
