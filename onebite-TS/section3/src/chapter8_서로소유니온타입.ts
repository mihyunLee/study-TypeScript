/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
 * ex) string | number
 */

// 💡 웹 서비스 회원관리 기능

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// 로그인한 유저 별로 출력되는 메시지가 다르다.
// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.

// -> ❌ 직관적으로 알아보기 어려운 코드
// user가 어떤 프로퍼티를 가지고 있는게 어떤 type을 의미하는지 코드를 찾아봐야 해당 함수를 이해할 수 있다.
function login(user: User) {
  if ("kickCount" in user) {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

// -> ✅ 직관적인 코드
function beatuifulLogin(user: User) {
  if (user.tag === "ADMIN") {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

// -> ✨ swtich-case문을 사용하여 더 직관적인 코드 완성
function moreBeatuifulLogin(user: User) {
  // user.tag에 따라 해당 tag를 가지고 있는 객체의 타입은 하나씩 존재하기 때문에
  // 직관적으로 타입을 좁힐 수 있다.
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
      break;
    }
  }
}

// 💡 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩중 -> 로딩중 출력
// 실패 -> 실패 : 에러메시지 출력
// 성공 -> 성공 : 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩중");
      break;
    case "FAILED":
      console.log(`에러 발생: ${task.error.message}`);
      break;
    case "SUCCESS":
      console.log(`성공: ${task.response.data}`);
      break;
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~",
  },
};
