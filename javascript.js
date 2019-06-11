$(document).ready(function(){
  $(".clickOpenCard").click(function(){
      $.each($(".clickOpenCard"), function(_index, value) {
          value.setAttribute("style","transform: scale(1)");
          value.children[0].setAttribute("style", "display: inline-block");
      });
      this.setAttribute("style","transform: scale(1.2); background: green");
      this.children[0].setAttribute("style", "color: white");

      $.each($('.cardStyle'), function(_index, value) {
          value.setAttribute("style","visibility:hidden; opacity: 0;");
      });
      $('.cardStyle').filter("." + this.getAttribute("id"))[0].setAttribute("style","visibility:visible; opacity: 1; transition: opacity 2s;");
  })

  $('#btn1').click();
})
//Script para o section da ToolKit - FIM

//Script para o section dos Entregaveis - INICIO
$(document).ready(function(){
  $(".cardEntregaveis").click(function(){
      $.each($(".cardEntregaveis"), function(_index, value) {
          value.setAttribute("style","background-image: none; background-color: #ffffff;");
          value.children[0].setAttribute("style","color: #6c4eb5; padding-top:22px;");
      });

      this.setAttribute("style","background-image: linear-gradient(to right, #4891a4, #30bd99 61%, #25d194); transition: background-image;");
      this.children[0].setAttribute("style","color: #ffffff; transition: color;");       

      $.each($('.topicos'), function(_index, value) {
          value.setAttribute("style","visibility:hidden; opacity: 0;");
      });
      $('.topicos').filter("." + this.getAttribute("id"))[0].setAttribute("style","visibility:visible; opacity: 1; transition: opacity 2s;");
  })

  $('#cardTopico1').click();
})