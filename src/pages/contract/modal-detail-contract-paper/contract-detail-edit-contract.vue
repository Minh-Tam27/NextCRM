<template>
  <div
    class="modal fade"
    id="edit_hd"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Thông tin hợp đồng</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-center">
          <form>
            <div class="form-group row">
              <label for="" class="col-sm-3 col-form-label">Mã hợp đồng:</label>
              <div class="col-sm-9">
                <input
                  type="email"
                  class="form-control"
                  id=""
                  placeholder=""
                  value="MD1285960"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-3 col-form-label">Ngày ký:</label>
              <div class="col-sm-9">
                <input
                  type="email"
                  class="form-control"
                  id=""
                  placeholder=""
                  value="22/09/2020"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-3 col-form-label">Hình thức:</label>
              <div class="col-sm-9">
                <select class="form-control">
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="" class="col-sm-3 col-form-label"
                >Loại hợp đồng:</label
              >
              <div class="col-sm-9">
                <select class="form-control">
                  <option value="">Thiết bị</option>
                  <option>QR</option>
                  <option>Dịch vụ</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <div class="table-responsive">
                  <table
                    class="table table-hover table-bordered"
                    id="tableScroll"
                  >
                    <thead class="thead-light">
                      <tr>
                        <th scope="col" class="text-center">Tên thiết bị</th>
                        <th scope="col" class="text-center" width="120">
                          Số lượng thiết bị
                        </th>
                        <th scope="col" class="text-center">Giá bán</th>
                        <th scope="col" class="text-center">Thành tiền</th>
                        <th scope="col" class="text-center"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="table-row">
                        <th class="text-center">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="Thiết bị 1"
                          />
                        </th>
                        <td align="right">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="1"
                          />
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="1.300.000"
                          />
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="1.300.000"
                          />
                        </td>
                        <td align="right" width="50px">
                          <a href="#" class="text-danger"
                            ><i class="bx bx-trash bx-sm"></i
                          ></a>
                        </td>
                      </tr>
                      <tr class="table-row">
                        <th class="text-center">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="Thiết bị 2"
                          />
                        </th>
                        <td align="right">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="1"
                          />
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="1.300.000"
                          />
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="1.300.000"
                          />
                        </td>
                        <td align="right" width="50px">
                          <a href="#" class="text-danger"
                            ><i class="bx bx-trash bx-sm"></i
                          ></a>
                        </td>
                      </tr>
                      <tr class="table-row">
                        <th class="text-center">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="Thiết bị 3"
                          />
                        </th>
                        <td align="right">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="1"
                          />
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="1.300.000"
                          />
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            class="form-control f12"
                            placeholder=""
                            value="1.300.000"
                          />
                        </td>
                        <td align="right" width="50px">
                          <a href="#" class="text-danger"
                            ><i class="bx bx-trash bx-sm"></i
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="5" align="center">
                          <a href="" class="btn btn-block btn-link text-center"
                            ><span class="bx bx-plus-medical"></span> Thêm mới
                            thiết bị</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-dismiss="modal">
            Đóng
          </button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
