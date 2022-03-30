import classes from '../components/pages/home/CherryBlossom.module.scss';  // CSS Modulesを使いCSSを適用

// 季節に合わせた背景にしたいと思い、桜を散らしてみました。
// 参照サイト → https://web-dev.tech/front-end/javascript/cherry-blossom-petal-falling-effect/
// ・CSSで花びらの見た目や動きを作る
// ・JavaScriptでランダムサイズの花びらを作り、指定の場所へ挿入。この処理を繰り返し複数の花びらを挿入する。
// この流れになっています。
// Hooksは未使用ですが、可読性を上げるためhooksフォルダに関数を分離させました。
// ほぼ参照させていただいたコード通りです。コードリーディングしながら微調整し、とても勉強になりました。
// 

const section = document.getElementsByClassName('cherry-blossom-container');

// 花びらを作る関数
export const createPetal = () => {

  const petalEl = document.createElement('span');
  petalEl.className = classes.petal;  // importしたscssファイルのpetalクラスを指定
  const minSize = 10;
  const maxSize = 15;
  // Math.random() * (最大値 + 1 - 最小値) + 最小値  ←これで最大値〜最小値の乱数を出せるみたい
  const size = Math.random() * (maxSize + 1 - minSize) + minSize;
  petalEl.style.width = `${size}px`;
  petalEl.style.height = `${size}px`;
  petalEl.style.left = `${Math.random() * window.innerWidth}px`;

  // HTMLCollectionのitemメソッドで花びらをsectionに追加
  section.item(0).appendChild(petalEl);

  // アニメーション終了と同時(10秒後)に花びらを削除
  setTimeout(() => {
    petalEl.remove();
  }, 10000);
}