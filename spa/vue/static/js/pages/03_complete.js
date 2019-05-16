// テンプレートの追加
addTemplate("#complete-area");

// コンポーネント
Vue.component("CompleteArea", {
  template: "#complete-area",
  computed: {
    data: function() {
      return this.$store.getters['getData']
    },
    dataName: function() {
      return this.$store.getters['getDataName']
    }
  },
  methods: {
    goFirstPage: function() {
      this.$store.commit('clearData')
      router.push({
        path: '/InputArea'
      })
    }
  }
})
