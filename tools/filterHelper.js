let output = '{"ID":['
$("ul.swiper-wrapper").each(function () {
    output += '{"key":"_key_","name":"_name_","value":[';
    $(this).children("li").each(function () {
        let name = $(this).find("a").text();
        let value = decodeURIComponent($(this).find("a").attr('href'));
        value = value.replaceAll("javascript:void(0)", "");
        output += '{"n":"' + name + '","v":"' + value + '"},';
    });
    output += ']},';
});
output += "]}"
console.log(output.replaceAll("},]","}]"));