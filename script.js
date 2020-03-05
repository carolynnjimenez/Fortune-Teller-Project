$("button").click(function() {
    let name = $(".name").val();
    let partners = parseInt($(".partners").val());
    let age = parseInt($(".age").val());
    
    let result = 2020 + age - partners;
    $("body").append(`${name}, you will get married in the year ${result}`);
});