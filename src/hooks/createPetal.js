import classes from '../components/pages/home/CherryBlossom.module.scss';  // CSS Modulesを使いCSSを適用

// 季節に合わせた背景にしたいと思い、桜を散らしてみました。
// 参照サイト → https://web-dev.tech/front-end/javascript/cherry-blossom-petal-falling-effect/
// ・CSSで花びらの見た目や動きを作る
// ・JavaScriptでランダムサイズの花びらを作り、指定の場所へ挿入。この処理を繰り返し複数の花びらを挿入する。
// この流れになっています。
// Hooksは未使用ですが、可読性を上げるためhooksフォルダに関数を分離させました。
// ほぼ参照させていただいたコード通りです。コードリーディングしながら微調整し、とても勉強になりました。

// ■スマホ画面が小刻みに揺れる問題の対処メモ
// 検証ツールでiPhone画面などのスマホ表示を見ると、画面が小刻みに揺れ出すことに気づく。
// コンソールに window.innerWidth の値を出力し、ウィンドウの横幅を確かめてみる。
// iPhoneSEの場合、通常 375px なのに数値が増えるときがあり、その瞬間から画面が揺れだす。
// 花びらのサイズ分が、ウィンドウ幅からはみ出したときに起きる？と考える。
// 花びらが降り始める位置の最大値を 花びらサイズ+10px 左にずらすことで値が一定し、解決した様子。


const section = document.getElementsByClassName('cherry-blossom-container');
const screenWidth = window.innerWidth;

// 花びらを作る関数
export const createPetal = () => {

  const petalEl = document.createElement('span');
  petalEl.className = classes.petal;  // importしたscssファイルのpetalクラスを指定
  const minSize = 10;
  const maxSize = 15;
  const size = Math.random() * (maxSize + 1 - minSize) + minSize;  // Math.random() * （最大値 + 1 - 最小値） + 最小値  ←これで最小値〜最大値の乱数を出せるみたい
  petalEl.style.width = `${size}px`;
  petalEl.style.height = `${size}px`;
  petalEl.style.left = `${Math.random() * (screenWidth - size - 9)}px`;  // 上の乱数計算（最小値：0,  最大値：screenWidth - 花びらサイズ - 10）

  // HTMLCollectionのitemメソッドで花びらをsectionに追加
  section.item(0).appendChild(petalEl);

  // アニメーション終了と同時(10秒後)に花びらを削除
  setTimeout(() => {
    petalEl.remove();
  }, 10000);
}