// イベントリスナはwebcomponents-loader.jsを使用する場合に必要（読み込みが非同期のため）
window.addEventListener('WebComponentsReady', function() {

  // 日本語を設定する
  VeeValidate.Validator.localize('ja');
  Vue.use(VeeValidate);

  var app = new Vue({
    el: "#app",
    router: router,
    store: store
  })
})
