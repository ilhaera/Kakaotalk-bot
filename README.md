# 카카오톡 봇 예제
with node.js

## 개요
카카오톡 플러스친구 스마트채팅 봇의 예제입니다.
*   node.js 기반
*   아주 기초적인 뼈대만 잡힘

## 구조
### app.js
앱의 메인입니다.
패키지 로딩과 listen등을 담당합니다.
### /data
대부분의 데이터들을 담고 있습니다.
*   keyboard.json : 키보드 세팅입니다.
*   text.json : 대화에 쓰이는 정보들입니다. bind를 통해 인식 방법을 구분합니다.
    - match : 입력값과 정확히 일치할 때 작동합니다.
    - find : 입력값이 포함되었을 때 작동합니다.
    - start : 입력값으로 시작할 때 작동합니다.
    - end : 입력값으로 끝날 때 작동합니다.

response에 담긴 문자열을 eval합니다. restext에 들어간 문자열을 카카오 API에 전송합니다.

### /process
기능적인 부분들을 담고 있습니다.
*    ai.js : 대화를 처리합니다. text.json을 불러와 작동합니다. 이 예제에서는 text타입의 입력만을 다룹니다.

### /routes
*    index.js : http 메소드들을 다룹니다.
