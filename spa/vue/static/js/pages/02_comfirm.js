// テンプレートの追加
addTemplate("#comfirm-area");

// コンポーネント
Vue.component("ConfirmArea", {
  template: "#comfirm-area",
  computed: {
    data: function() {
      return this.$store.getters['getData']
    },
    dataName: function() {
      return this.$store.getters['getDataName']
    }
  },
  methods: {
    goBack: function() {
      router.push({
        path: '/InputArea'
      })
    },
    goNext: function() {
      // 申込
      store.dispatch('appData')
        .then(function() {
          // 完了画面へ遷移
          router.push({
            path: '/CompleteArea'
          })
        })
    }
  }
})
