const app = angular.module("myApp", ["ngRoute"]);
app.config(routes);
app.controller("productController", productController);
app.controller("cateController", cateController);
app.controller("menuController", menuController);
