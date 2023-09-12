/**
 * 템플릿 리터럴 타입
 * - string리터럴 타입을 기반으로 특정 패턴을 갖는 문자열 타입들을 만듦
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

//type ColoredAnimal = 'red-dog' | 'red-cat' | 'red-chicken' ... 비효율적!

type ColoredAnimal = `${Color}-${Animal}`;
/**
 *  "red-dog" | "red-cat" | "red-chicken" | "black-dog" | "black-cat" |
 *  "black-chicken" | "green-dog" | "green-cat" | "green-chicken"
 */
