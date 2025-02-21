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
  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/",true);
  // 여기에 true는 비동기 요청을 의미한다.
  // 비동기 요청을 하면 요청을 보낸 후 응답이 올 때까지 기다리지 않고 다음코드를 실행한다.
  // 따라서 응답이 올 때까지 기다렸다가 다음 코드를 실행하고 싶다면 false로 설정해야 한다.
  // 하지만 비동기 요청을 하지 않으면 브라우저가 멈추기 때문에 권장하지 않는다.
  // open 메서드의 세 번째 인수는 생략 가능하다. 생략하면 기본값으로 false가 설정된다.
  xhr.addEventListener('load',()=>{
    if (xhr.status === 200) {
      console.log("데이터 받은 후 조회");
      console.dir(xhr); // xhr은 객체이다.

      const result = JSON.parse(xhr.responseText);
      // 파일을 검사해본결과 JSON 형식으로 되어있는 것을 확인할 수 있다.
      console.dir(result);

      const pokemons = result.results;
      console.dir(pokemons);
      // pokemons는 배열인 것을 결과를 통해 확인 할 수 있다.

      // DOM 조작 ----------------------------------------------------------------------------
      const root = document.getElementById('root');
      const ul = document.createElement('ul');
      pokemons.forEach((pokemon)=>{
        const li = document.createElement('li');
        li.textContent = pokemon.name;
        ul.appendChild(li);
      });
      root.appendChild(ul);
      // DOM 조작 ----------------------------------------------------------------------------
    }
  });
  xhr.send();
};

getPokemonAJAX();