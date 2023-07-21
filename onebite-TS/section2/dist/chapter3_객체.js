// * object
let dog = {
    name: "돌돌이",
    color: "brown",
};
let user = {
    id: 1,
    name: "nor",
};
user.id; // : object로만 타입을 정의했을 때는 에러가 발생한다.
user = {
    name: "홍길동",
};
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = "hacked"; //! ERROR
