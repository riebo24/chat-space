$(function(){
  
  function buildHTML(chat){
    if (chat.image.url) {
      var html = `<div class="main__chat">
                    <div class="main__chat__title">
                      <div class="main__chat__title__user_name">
                        ${chat.name}
                      </div>
                      <div class="main__chat__title__date">
                        ${chat.created_at}
                      </div>
                    </div>
                    <div class="main__chat__text">
                      ${chat.text}
                    </div>                     
                    <img class="main__chat__image" src= ${chat.image.url} >
                    </div>
                  </div>`
    }else{
      var html = `<div class="main__chat">
                    <div class="main__chat__title">
                      <div class="main__chat__title__user_name">
                        ${chat.name}
                      </div>
                      <div class="main__chat__title__date">
                        ${chat.created_at}
                      </div>
                    </div>
                    <div class="main__chat__text">
                      ${chat.text}
                    </div>                  
                  </div>`
    }
    return html;
  }

  $("#new_chat").on("submit",function(e){
    e.preventDefault()
    var formdata = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      type: "POST",
      url: url,
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(formdata){
      var html = buildHTML(formdata);
      // debugger
      $(".main__contents").append(html);
      $(".input-box").val("");
      $('.submit__btn').prop('disabled', false);
      $(".main__contents").animate({scrollTop: $('.main__contents')[0].scrollHeight});
      console.log("OK");
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
})


