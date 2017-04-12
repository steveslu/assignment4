// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types
var data;
(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');

  $.ajax({
    url: "http://www.mattbowytz.com/simple_api.json?data=all",
    success:function(result){
      var prog = result.data.programming;
      var interest =result.data.interests;
      data=prog.concat(interest);

    }
  })
})();



function autoFill(){
  $("#predicted").empty();
  var results=[];
  var searched = $(".flexsearch-input").val();
  $.each(data, function(ind, val){
    if((searched.length > 0) && val.toLowerCase().startsWith(searched.toLowerCase())){
      results.push(val);
    }
  });


  $.each(results, function(ind, val){
    $("#predicted").append(
      "<a href='https://www.google.com/#q=" + val + "' target='_blank' >"
      + "<li class='guess'>" + val + "</li> </a>");

    if(results.length < 0){

      $("#predicted").addClass("none");
      $("#predicted").removeClass("some");
    }
    else{
      $("#predicted").addClass("some");
      $("#predicted").removeClass("none");
    }
  });

}
