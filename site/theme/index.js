module.exports = {
  lazyLoad: false,
  home: '/',
  routes: [
    {
      path: '/',
      component: './template/Cover'
    },
    {
      path: '/404',
      component: './template/NotFound'
    },
    {
      path: '/layout',
      component: './template/Layout',
      childRoutes: [
        {
          path: 'doc/:doc',
          component: './template/Doc'
        },
        {
          path: 'components/:components',
          component: './template/Components'
        }
      ]
    }
  ]
}
