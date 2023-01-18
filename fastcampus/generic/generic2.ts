function helloBasic<T>(message: T): T {
  return message;
}

helloBasic<string>("Mark"); // T를 직접 string으로 지정, function helloBasic<string>(message: string): string
helloBasic("Anna"); // T를 "Anna"로 추론, function helloBasic<"Anna">(message: "Anna"): "Anna"

function helloBasic2<T, U>(message: T, comment: U) {
  return message;
}

helloBasic2<string, number>("Mark", 39);
helloBasic2(36, 39);
