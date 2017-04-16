/**
 * Created by Administrator on 2017/3/9 0009.
 */
$(document).ready(function () {
    //获取商品列表分类li元素
    var $goods_li = $(".li_first");
    var $goods_menu = $(".goods_classify");
    $goods_li.hover(function () {
        $goods_menu.slideDown(300);
    }, function () {
       $goods_menu.slideUp(300);
    });
    //商品菜单每个子项的动画
    var $menu_li = $goods_menu.find("li");
    $menu_li.hover(function () {
        $(this).animate({ marginLeft:"6px" }, 300);
    }, function() {
        $(this).animate({ marginLeft:"0" }, 300);
    });
});