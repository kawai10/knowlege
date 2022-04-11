## Request method

- Request method는 클라이언트가 서버에게 요청하는 목적 및 종류를 알리는 수단이며 다음과 같은 종류가 있다.

1. **GET**

- GET은 특정한 리소스를 가져오도록 요청함. GET은 데이터를 가져올 때만 사용하여야 함.

2. HEAD

- response header 정보만 요청함. 해당 자원이 존재하는지 또는 서버에 문제가 없는지 확인하기 위하여 사용함.

3. OPTIONS

- 웹서버가 지원하는 method의 종류를 요청함. 이 경우 응답이 response header에 'Allow : GET,POST,HEAD' 처럼 보내줌.

4. DELETE

- 정보를 삭제할때 사용함.

5. PATCH

- 정보의 부분적인 수정이 필요할 때 사용함. 그러나 멱등성을 가지지 않기 때문에 동일한 요청을 보냈을 때 다른 결과를 야기할수 있음. 따라서 side-effects를 일으킬 가능성이 있음.

6. **POST**

- 서버로 데이터를 전송할때 사용함. 요청 데이터를 HTTP body에 담아서 보내며 이때 HTTP 헤더에 본문의 유형이 무엇인지 Content-Type에 명시합니다. POST는 멱등성을 보장하지 않음.

7. PUT

- 요청을 보내는 형식은 POST와 동일하나 PUT은 데이터를 갱신하는것이 목적임. 그러나 데이터가 없으면 새로 만듬. POST와 다르게 멱등성을 보장함.

## 멱등성

- 동일한 요청을 한 번 보내는 것과 여러 번 연속으로 보내는 것이 같은 효과를 가지고, 서버의 상태도 동일하게 남을 때 해당 HTTP method는 멱등성을 가졌다고 함. 또한 멱등성을 가졌다는 것은 side-effect가 존재해서는 안된다는 것.  
  GET, HEAD, PUT, DELETE method는 멱등성을 가짐.  
  예를 들어 GET을 여러 번 연속해서 호출해도 클라이언트가 받는 응답은 동일함.  
  그러나 POST의 경우에는 여러 번 호출할 경우 여러 데이터를 추가함.