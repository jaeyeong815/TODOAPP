// 서버를 띄우기 위한 기본 세팅
const express = require('express');
const app = express();

app.listen(8080, function(){  //서버를 어디에 열지 정하는 것. 8080포트에 서버 띄워주세요!
    console.log('listening on 8080'); //잘 열렸으면 8080을 출력해주세요!
});

app.get('/pet',function(요청, 응답){ //누군가 /pet으로 방문을 하면
    응답.send('펫용품을 쇼핑할 수 있는 페이지입니다.'); //pet관련된 안내문을 띄워주자
})

app.get('/beauty', (req, res) => {
    res.send('뷰티용품을 쇼핑할 수 있는 페이지입니다.');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); //파일을 보낼 수 있음
})