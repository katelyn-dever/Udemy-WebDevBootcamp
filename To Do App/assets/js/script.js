// Check off specific todo by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
    if(e.which === 13) {
        //grabs new todo text from input
        var newTodo = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
    }
});