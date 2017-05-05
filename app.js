
// executes app.js ONLY when the DOM is done loading.
$(document).ready(function(){

  console.log("Sanity Check");

  var groceryList = [];
  $('button').on('click', function(e){
    e.preventDefault();
    $groceryItem = $('#toGet').val();
    groceryList.push($groceryItem);
    console.log(groceryList);
    $('#toGet').val('');
    $elementHtmlString = '<li id="'+$groceryItem+'">'+$groceryItem+'</li>';
    $('ul').append($elementHtmlString);

  });

  $('.groceryList').on('click', 'li', function(e){
    $(this).toggleClass('bought');
  });


});
