//list menu icon animations

$(document).ready(function(){
  $(".mail-list").mouseover(function(){
    $(".mail-icon").css("color", "#D77691");
  });
  $(".mail-list").mouseout(function(){
    $(".mail-icon").css("color", "#A19DB6");
  });
  $(".problem-list").mouseover(function(){
    $(".problem-icon").css("color", "#D77691");
  });
  $(".problem-list").mouseout(function(){
    $(".problem-icon").css("color", "#A19DB6");
  });

//problem section slide animation

  $('.problem-content').hide();
  $('.problem-div').click(function () {
    var $this = $(this);
      $(this).siblings('.problem-content').slideToggle(150, function () {
      });
    });

//check problem answer
//***If you're smart enough to check the code for the answer, then you're just insulting your own intelligence by not solving it yourself, bitch**

  $('#Answer').on('input', function() {
    var answer = $(this).val();
    if(answer == '10'){
      $('.validate-wrong').hide();
      $('.validate-correct').css("display", "inline");
      $('#Check-answer').text('Correct!').hide().fadeIn(150);
      
    }
    else{
      $('.validate-correct').hide();
      $('.validate-wrong').css("display", "inline");
      $('#Check-answer').text('Nope!').hide().fadeIn(150);
      
    }
  });
});