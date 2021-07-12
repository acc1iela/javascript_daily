// const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
const a = { a: 'a' };
const b = { b: 'b' };
const c = Object.assign({}, a, b);
console.log(c); // {a: 'a', b: 'b'}

// 以下のdd, ee, ffを新しい配列として返す
const array = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg'];
const newArray = array.slice(-4, -1);

// ['a','b’] の要素をconsole出力してください e.g 'a'と'b'
const array1 = ['a', 'b'];
const result = array1.forEach((elem, i) => {
  console.log(elem);
});
console.log(result); // 'a', 'b';

// ['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'
// 上で定義されてる変数使用
array1.forEach((ele, i) => {
  console.log(ele + i);
});
