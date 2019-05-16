var InputArea = {
  template: '<InputArea></InputArea>'
}
var ConfirmArea = {
  template: '<ConfirmArea></ConfirmArea>'
}
var CompleteArea = {
  template: '<CompleteArea></CompleteArea>'
}

var router = new VueRouter({
  mode: 'history',
  base: '/spa/vue',
  routes: [{
      path: '/InputArea',
      name: 'InputArea',
      component: InputArea
    },
    {
      path: '/ConfirmArea',
      name: 'ConfirmArea',
      component: ConfirmArea
    },
    {
      path: '/CompleteArea',
      name: 'CompleteArea',
      component: CompleteArea
    },
    {
      path: '*',
      redirect: '/InputArea'
    }
  ]
})
