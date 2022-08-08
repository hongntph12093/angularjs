function cateController($scope, $http, $routeParams) {
  const API = `http://localhost:3000/cates`;

  $scope.cates = [];
  const id = $routeParams.id;

  // Mặc định lấy danh sách sản phẩm và hiển thị ra ngoài
  $http.get(API).then(({ data }) => ($scope.cates = data));
  const getItemCate = async () => {
    $http.get(`${API}/${id}`).then(({ data }) => ($scope.cate = data));
  };
  if (id) {
    getItemCate();
  }/*
  const cateAPI = `http://localhost:3000/cates/1?_embed=products`;
  $scope.productCates = [];

  $http.get(cateAPI).then(({ data }) => ($scope.productCates[products] = data));

  console.log($scope.productCates[products]);*/
  // Xóa sản phẩm
  $scope.removeCate = function (id) {
    console.log(id);
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirm) {
      $http
        .delete(`${API}/${id}`)
        .then(() => {
          const newCates = $scope.cates.filter((item) => item.id != id);
          $scope.cates = newCates;
          toastr.success("Đã xóa thành công");
        })
        .catch((error) => console.log(error));
    }
  };

  $scope.addCate = function (e) {
    e.preventDefault();
    $http
      .post(`${API}`, $scope.cate)
      .then(() => {
        toastr.success("Đã thêm thành công");
        window.location.href = "./#!cate";
      })
      .catch((error) => toastr.error("Lỗi", error));
  };
  $scope.updateItem = function (e) {
    $http
      .put(`${API}/${$scope.cate.id}`, $scope.cate)
      .then(() => {
        toastr.success("Đã thêm thành công");
        window.location.href = "./#!cate";
      })
      .catch((error) => toastr.error("Lỗi", error));
  };
}
