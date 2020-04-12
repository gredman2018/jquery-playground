const app = {
  
  initialize: function () {


    $('.circle0').hover(function () {
      $(this).toggleClass('color')
    });

    $('.circle1').click(function () {
      $(this).toggleClass('move')
    });

    $('.circle2').click(function () {
      app.moveOrColor();
    })

    $('.square').dblclick(function () {
      app.circleOrSquare();
    })

  },

  moveOrColor : function () {
    let num = Math.floor((Math.random() * 2) + 1);
    if(num == 1){
      $('.circle2').toggleClass('color')
    }else{
      $('.circle2').toggleClass('move')
    }
  },

  circleOrSquare : function () {
    let num = Math.floor((Math.random() * 2) + 1);
    if(num == 1){
      $('.square').toggleClass('makeCircle')
    }
  }

  }


  

