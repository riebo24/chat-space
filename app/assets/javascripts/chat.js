$(function(){  
  function buildHTML(chat){  
    if (chat.text && chat.image.url) {
      var html = `<div class="main__chat" data-chat-id="${chat.id}">
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
                  </div>`

    } else if (chat.text){
      var html = `<div class="main__chat" data-chat-id="${chat.id}">
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

    } else {
      var html = `<div class="main__chat" data-chat-id="${chat.id}">
                    <div class="main__chat__title">
                      <div class="main__chat__title__user_name">
                        ${chat.name}
                      </div>
                      <div class="main__chat__title__date">
                        ${chat.created_at}
                      </div>
                    </div>
                    <img class="main__chat__image" src= ${chat.image.url} >
                  </div>`

    };
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
      $(".main__contents").append(html);
      $('.submit__btn').prop('disabled', false);
      $("#new_chat")[0].reset();
      $(".main__contents").animate({scrollTop: $('.main__contents')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.submit__btn').prop('disabled', false);
    })
  })

  var reloadMessages = function(){

      last_chat_id = $('.main__chat:last').data('chat-id');
      $.ajax({
        type: 'GET',
        data: {id: last_chat_id},
        url: 'api/chats',
        dataType: 'json'
      })
      .done(function(chats){
      
        if (chats.length !== 0){
          var insertHTML = "";
          $.each(chats, function(i, chat){
            insertHTML += buildHTML(chat)
          });
          $(".main__contents").append(insertHTML);
          $(".main__contents").animate({scrollTop: $('.main__contents')[0].scrollHeight});
          $("#new_chat")[0].reset();
          $(".submit__btn").prop("disabled", false);
        }
      })
      .fail(function(){
        console.log("error")
      });
   
  };
  if (document.location.href.match(/\/groups\/\d+\/chats/)){
    setInterval(reloadMessages, 7000);
  }
});

