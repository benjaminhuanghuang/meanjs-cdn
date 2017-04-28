(function () {
  'use strict';

  angular
    .module('libraries')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Libraries',
      state: 'libraries',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'libraries', {
      title: 'List Libraries',
      state: 'libraries.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'libraries', {
      title: 'Create Library',
      state: 'libraries.create',
      roles: ['user']
    });
  }
}());
