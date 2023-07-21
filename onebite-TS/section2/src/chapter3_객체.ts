// * object
let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

let user: {
  id?: number; // 해당 프로퍼티는 선택적 속성으로 Optional Property라 한다.
  name: string;
} = {
  id: 1,
  name: "nor",
};

user.id; // : object로만 타입을 정의했을 때는 에러가 발생한다.

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string; // readonly - 읽기 전용 property로 정의
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; //! ERROR
