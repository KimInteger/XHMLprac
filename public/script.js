/*
* 서버 vs 클라이언트 관계에서 요청과 응답을 하는 방법과 다르게
* 클라이언트가 다른 서버에 요청을 보내고 응답을 받는 방법이 AJAX 기술 중 핵심이다.
* 내가 가동하지 않는 임의의 서버에 특정 주소 'https://pokeapi.co/api/v2/pokemon/'에
* 요청을 보내고 응답을 받아서 처리하는 것이다.

* 문서 ★★'가'★★ 요청을 보내는 것
* 따라서 상대코드도 동일하게 적용 된다.
* new XMLHttpRequest()라는 인스턴스 안에는 각종 문서가 통신을 위해 필요한 기능과 정보들이
* 담겨있다.
 */

const getPokemonAJAX = () => {
  const xhr = new XMLHttpRequest(); // 이것이 '객체', '인스턴스'로 보여야 한다.
  // ! 객체로 조회된다. [object XMLHttpRequest]
  console.dir('데이터 받기전 조회 : ' + xhr);
};

getPokemonAJAX();