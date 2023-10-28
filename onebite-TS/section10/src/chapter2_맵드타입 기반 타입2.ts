/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 추출하는 타입
 * -> T: 기준이 될 객체 타입
 * -> K: 추출할 특정 프로퍼티 타입명
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Pick 타입 정의해보기
type Pick<T, K extends keyof T> = {
  // -> K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // -> 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

// legacy라 기존에 정의한 타입에 새로운 프로퍼티가 정의되거나 수정되었을 경우
// 에러가 발생할 가능성이 있다.
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// Omit 타입 정의해보기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// 해석
// T = Post, K = 'title'
// Pick<T, Exclude<keyof T, K>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

// tip) Exclude<T, K>: T에서 K만 제거된 타입을 반환

// Pick <-> Omit, 서로 반대되는 유틸 타입
// const noTitlePost: Pick<Post, "content" | "tags" | "thumbnailURL"> = {
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 * -> 객체 타입을 생성해주는 유틸리티 타입
 * -> K: 객체의 프로퍼티 키가 될 유니온 타입
 * -> V: 프로퍼티의 타입 값
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// Record 타입 정의해보기
// K extends keyof any: K에 들어오는 타입은 어떠한 객체의 키를 추출한 유니온 타입으로 제약
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

// 위와 동일한 타입이 정의된다.
type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string }
>;

// 공통 프로퍼티 타입을 쉽게 추가하고 수정할 수도 있다.
type UpgradeThumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
