// * enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 10,
  USER,
  GUSET,
}

type User = {
  name: string;
  role: Role;
};

const user1: User = {
  name: "노르",
  role: Role.ADMIN, // 0 <- 관리자
};

const user2: User = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반 유저
};

const user3: User = {
  name: "아무개",
  role: Role.GUSET, // 2 <- 게스트
};
