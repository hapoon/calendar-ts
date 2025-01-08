/* =====================
グローバル変数
===================== */
// 表示中の年月
const currentDate = new Date();
// タイトル表示部
const elmTitle: HTMLElement = document.querySelector(".cal__title")!;
// 前月移動ナビ
const elmPrev: HTMLElement = document.querySelector(".cal__prev")!;
// 翌月移動ナビ
const elmNext: HTMLElement = document.querySelector(".cal__next")!;
// 日付表示部
const elmDays: HTMLElement = document.querySelector(".cal__days")!;
/* =====================
イベントハンドラ
===================== */
// アプリケーション初期化
const onPageLoad = () => {
  updateView(currentDate);
};
// 前月移動
const onPrev = () => {};
// 翌月移動
const onNext = () => {};
/* =====================
イベントリスナー
===================== */
// ページの読み込み完了
window.addEventListener("load", onPageLoad);
// 前月ナビのクリック
elmPrev.addEventListener("click", onPrev);
// 翌月ナビのクリック
elmNext.addEventListener("click", onNext);
/* =====================
ユーザー定義関数
===================== */
// 描画更新
function updateView(date: Date) {
  // タイトル表示部の更新
  updateTitle(date)
  // 日付表示部の更新
}
// タイトル表示部の更新
function updateTitle(date: Date) {
  const title =
    date.getFullYear().toString() +
    "年" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "月";
  elmTitle.innerHTML = title;
}
// 日付表示部の更新
