/* -------------------------------------------------- **
** minTable 1.0
** -------------------------------------------------- **
** Author: Aygul Ilimbaev
** URL: https://github.com/aigzhep/minTable
** Copyright: 2013 Aygul Ilimbaev
** License: MIT License
** -------------------------------------------------- */

(function($) {
    $.fn.minimize = function(options) {
        //default settings
        var defaults = {
            min: 0, // an amount of rows you want to show in short view of your table
            buttonText: ["Show", "Hide"], // a text inside a control button
            fixHeader: false, // fixation of <thead> table element:
                                // "true" when it's needed to be always fully shown,
                                // "false" when it can be partially hidden
            initialView: "short" // an initial state of your table, use "short" or "full" to determine it
        }

        var options = $.extend(defaults, options);

        $(this).each(function() {
            var amount = options.min,
                parentTableWidth = $(this).width(); //storing initial table width

            // storing initial meanings of cells width
            $(this).find('td, th').each(function(){
                $(this).data('width', $(this).width());
            });

            //creating a wrapper around table
            $(this).wrap("<div class='collapsible-wrapper'></div>");

            //adding a class to the initial table,
            //creating a slidable block,
            //creating a "Show"/"Hide" button
            $(this).addClass('parent').after(
                "<div class='collapsible'><table class='inheritor'><tbody></tbody></table></div>" +
                "<div class='button-holder'><a href='#' class='show-button'>" + options.buttonText[0] + "</a></div>"
            );

            //forming initial state of the table
            if (options.initialView == 'short') {
                $(this).next().hide()
                       .next().children().text(options.buttonText[0]).attr('data-state','show');
            } else {
                $(this).next().show()
                       .next().children().text(options.buttonText[1]).attr('data-state','hide');
            }

            //rows migration from initial table to the table in the slidable block
            if ($(this).children('thead').length) {
                //storing rows location info (in <thead> or <tbody>)
                $(this).find('tbody tr').attr('data-parent','body');
                $(this).find('thead tr').attr('data-parent','head');

                    if (options.min == 0 && options.fixHeader == false) {
                        $(this).next().html('').append($(this));
                    } else {
                        if (options.fixHeader == true) {
                            amount += $(this).find('thead tr').length;
                        }
                        var rowsToHide = $(this).find('tr').filter(":gt("+ (amount-1) +")");
                        $(this).next().find('tbody').append(rowsToHide.filter("[data-parent='body']"));
                        $(this).next().find('tbody').before("<thead></thead>");
                        $(this).next().find('thead').append(rowsToHide.filter("[data-parent='head']"));            
                    }

            } else {
                $(this).next().find('tbody').append($(this).find('tr').filter(":gt("+ (amount-1) +")"));
            }

            //restoring the initial meanings of table and cells width
            $(this).add($(this).next().children('.inheritor'))
                   .width(parentTableWidth)
                   .find('td, th').each(function(){
                        $(this).width($(this).data('width'));
                    });

            //handling of button press
            $(this).parents('.collapsible-wrapper').find('.show-button').click(function(event){
                if ($(this).data('state') == 'show') {
                    $(this).text(options.buttonText[1]);
                    $(this).data('state','hide');
                } else {
                    $(this).text(options.buttonText[0]);
                    $(this).data('state','show');
                }

                $(this).parent().siblings('.collapsible').slideToggle(400);
                return false;
            });
        });
    }
})(jQuery);
