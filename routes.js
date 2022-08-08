function routes($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "feature-product/product/pages/home.html",
      controller: "productController",
    })
    .when("/product/:id/edit", {
      templateUrl: "feature-product/auth/pages/updateProduct.html",
      controller: "productController",
    })
    .when("/product", {
      templateUrl: "feature-product/auth/pages/home.product.html",
      controller: "productController",
    })
    .when("/product/add", {
      templateUrl: "feature-product/auth/pages/addProduct.html",
      controller: "productController",
    })
    .when("/cate", {
      templateUrl: "feature-product/auth/pages/cate.html",
      controller: "cateController",
    })

    .when("/cate/add", {
      templateUrl: "feature-product/auth/pages/cate.html",
      controller: "cateController",
    })
    .when("/cate/:id/edit", {
      templateUrl: "feature-product/auth/pages/cate.html",
      controller: "cateController",
    })
    .when("/products", {
      templateUrl: "feature-product/product/pages/productList.html",
      controller: "productController",
    })
    .when("/menu", {
      templateUrl: "feature-product/auth/pages/menu.html",
      controller: "menuController",
    })
    .when("/detail/:id", {
      templateUrl: "feature-product/product/pages/detail.product.html",
      controller: "productController",
    })

    .when("/menu/add", {
      templateUrl: "feature-product/auth/pages/menu.html",
      controller: "menuController",
    })
    .when("/menu/:id/edit", {
      templateUrl: "feature-product/auth/pages/menu.html",
      controller: "menuController",
    });
}
