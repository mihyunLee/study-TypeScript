/**
 * 인덱스드 엑세스 타입
 * - 객체 타입으로부터 특정 프로퍼티의 타입을 변수에 정의할 수 있는 문법
 * - 기존 인터페이스의 세부 타입이 변경되어도 직접적으로 수정하는 부분을 줄일 수 있다.
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "노르",
  },
};

printAuthorInfo(post.author);

/**
 * 인덱스드 엑세스 타입 - 배열
 * - 배열 타입의 type alias가 있을 때 타입 정의 시 타입[number]로 정의하면
 * 배열 타입으로부터 하나의 요소 타입만 가져올 수 있다.
 * - number가 아닌 배열 인덱스처럼 숫자(0, 1...)를 넣어주어도 된다.
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const postList: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "노르",
  },
};

/**
 * 인덱스드 액세스 타입 - 튜플
 */

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// !ERROR, 튜플은 길이가 지정되어 있으므로 없는 인덱스를 추출할 경우 에러 발생
// type Tup3 = Tup[3];

// 유니온 타입으로 추출, string | number| boolean
type TupNum = Tup[number];
