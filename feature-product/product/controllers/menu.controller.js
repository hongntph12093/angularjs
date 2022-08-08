function menuController($scope, $http, $routeParams) {
  const API = `http://localhost:3000/menus`;

  $scope.menus = [];
  const id = $routeParams.id;

  // Mặc định lấy danh sách sản phẩm và hiển thị ra ngoài
  $http.get(API).then(({ data }) => ($scope.menus = data));
  const getItemmenu = async () => {
    $http.get(`${API}/${id}`).then(({ data }) => ($scope.menu = data));
  };
  if (id) {
    getItemmenu();
  }
  // Xóa sản phẩm
  $scope.removemenu = function (id) {
    console.log(id);
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirm) {
      $http
        .delete(`${API}/${id}`)
        .then(() => {
          const newmenus = $scope.menus.filter((item) => item.id != id);
          $scope.menus = newmenus;
          toastr.success("Đã xóa thành công");
        })
        .catch((error) => console.log(error));
    }
  };

  $scope.addmenu = function (e) {
    e.preventDefault();
    $http
      .post(`${API}`, $scope.menu)
      .then(() => {
        toastr.success("Đã thêm thành công");
        window.location.href = "./#!menu";
      })
      .catch((error) => toastr.error("Lỗi", error));
  };
  $scope.updateItem = function (e) {
    $http
      .put(`${API}/${$scope.menu.id}`, $scope.menu)
      .then(() => {
        toastr.success("Đã thêm thành công");
        window.location.href = "./#!menu";
      })
      .catch((error) => toastr.error("Lỗi", error));
  };
}
