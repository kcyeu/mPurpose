function expand(obj) {
    console.log($(obj).parent().next('.hidden'));

    $(obj).parent().next('.hidden').removeClass('hidden');
    $(obj).parent().remove();

}