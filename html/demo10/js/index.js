/**
 * Created by Administrator on 2017/3/9 0009.
 */
$(document).ready(function () {
    var menu_item_timer;
    var $li_item_1 = $(".d_menu_btn li:eq(0)");
    var $d_menu_1 = $(".d_menu_1");
    $li_item_1.hover(function() {
        clearTimeout(menu_item_timer);
        $d_menu_1.css("display","block");
        //clearTimeout(menuNone());
    }, function() {
        //$d_menu_1.css("display","none");
        menu_item_timer = setTimeout(menuNone, 300);
    });

    $d_menu_1.hover(function() {
        clearTimeout(menu_item_timer);

    }, function() {

        menu_item_timer = setTimeout(menuNone, 300);
    });
    function menuNone() {
        $d_menu_1.css("display","none");
    }

});