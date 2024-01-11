document.write("자바스크립트 불러오기"); <
!DOCTYPE html >
    <
    html lang = "ko" >

    <
    head >
    <
    title > hotelbooking < /title> <
    link rel = "shortcut icon"
type = "image⁄x-icon"
href = "/static/images/logo/logo-cabin.png" / >
    <
    meta charset = "UTF-8" / >
    <
    meta name = "viewport"
content = "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" / >
    <!-- 폰트 -->
    <
    link href = "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap"
rel = "stylesheet" / >
    <
    link href = "https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"
rel = "stylesheet" / >

    <
    link rel = "stylesheet"
type = "text/css"
href = "/static/css/nav.css" / >
    <
    link rel = "stylesheet"
type = "text/css"
href = "/static/css/user/info/info_review_writing.css" / >
    <
    /head>

<
body >
    <
    div class = "nav_bar" > 리뷰작성 < /div>

<
div class = "row" >
    <
    div class = "tray" >
    <
    div class = "card" >
    <
    img src = "/static/images/rooms/<%=roomInfo[0].image%>" / >
    <
    /div> <
    div class = "img_desc" >
    <
    div class = "interval" >
    <%= roomInfo[0].room_name %> <
    /div> <
    div class = "interval" >
    <%=roomInfo[0].country%> <
    /div> <
    /div> <
    /div> <
    div class = "right_line" > < /div>

<
div class = "tray" >
    <
    div class = "rate_box" >
    <
    div id = "rate" > 평점 < /div> <
    div class = "btn_box" >
    <
    button type = "button"
class = "rate_star"
rate = "1" > < /button> <
    button type = "button"
class = "rate_star"
rate = "2" > < /button> <
    button type = "button"
class = "rate_star"
rate = "3" > < /button> <
    button type = "button"
class = "rate_star"
rate = "4" > < /button> <
    button type = "button"
class = "rate_star"
rate = "5" > < /button> <
    /div> <
    /div> <
    /div> <
    div class = "right_line" > < /div>

<
div class = "tray" >
    <
    textarea class = "message"
placeholder = "여행자들이 숙소에 대한 정보를 얻을 수 있도록 세부정보를 입력해주세요." > < /textarea> <
    /div> <
    div class = "right_line" > < /div>

<
div class = "btn_tray" >
    <
    button type = "button"
class = "confirm"
data - room - id = "<%= roomId %>"
data - booking - id = "<%= bookingId %>" >
    확인 <
    /button> <
    button type = "button"
class = "close" > 닫기 < /button> <
    /div> <
    /div>
<% for(let i = 0; i < LLTime.length; i++) { %>
<% if(i === 0) { %> <
div class = "dateNotation" >
    <%= LLTime[i] %> <
    /div>
<% } else if(LLTime[i - 1] === LLTime[i]){ %> <
div class = "dateNotation"
hidden >
    <%= LLTime[i] %> <
    /div>
<% } else { %> <
div class = "dateNotation" >
    <%= LLTime[i] %> <
    /div>
<% } %> <
div class = "message_form"
data - item - id = "<%= contents[i].id %>" >
    <
    div class = "message_inbox" >
    <
    div style = "padding-top: 0.3rem" >
    <
    div class = "profile_img" >
    <
    img src = "https://img.icons8.com/ios-filled/52/000000/user-male-circle.png" / >
    <
    /div> <
    /div> <
    div class = "chat_view" >
    <
    div >
    <
    div class = "message_info" >
    <
    span class = "name" > <%= contents[i].sender %> < /span> <
    span class = "time" > <%= contents[i].time %> < /span> <
    /div> <
    /div> <
    div >
    <% if(contents[i].sender === nickname){ %> <
    div class = "message_detail"
id = "me" >
    <%= contents[i].content %> <
    /div>
<% } else{ %> <
div class = "message_detail"
langCode = "<%= contents[i].lang %>"
translate = "no" >
    <%= contents[i].content %> <
    /div> <
    div class = "message_detail"
langCode = "none"
hidden > < /div> <
    div class = "translate_btn" >
    <
    input type = "button"
id = "imgBtn" / >
    <
    /div>
<% } %> <
/div> <
/div> <
/div> <
/div>
<% } %>

<!--get_url-->
<
script src = "/static/js/get_url.js" > < /script>
    <!--이페이지 클릭관련, 페이지접속 초기설정 JS-->
    <
    script src = "/static/js/user/info/info_review_writing.js" > < /script> <
    /body>

<
/html>