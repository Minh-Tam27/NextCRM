<template>
  <div class="reviewHDDT">
    <div class="header header-before">
      <div class="logo">
        <a href="#"><img src="./img/Nextpay-logo-white.svg" alt="" /></a>
        <h1>Xác nhận thông tin hợp đồng</h1>
      </div>
    </div>
    <!-- End header -->

    <!-- Mmain -->
    <div class="main">
      <div class="title-main">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
            >
              <span><img src="./img/tomtat.svg" alt="" /></span>
              Xem tóm tắt
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
            >
              <span><img src="./img/xemhd.svg" alt="" /></span>
              Xem hợp đồng
            </a>
          </li>
        </ul>
        <div class="list-btn">
          <button
            type="button"
            class="btn btn-primary btn-sm"
            data-target="#modal-thanhcong"
            data-toggle="modal"
          >
            Xác nhận
          </button>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            data-target="#modal-tuchoi"
            data-toggle="modal"
          >
            Từ chối
          </button>
          <div class="btn btn-outline-success btn-sm" disabled="">
            <i class="bx bxs-check-circle"></i> Đã xác nhận
          </div>
          <div class="btn btn-outline-danger btn-sm" disabled="">
            <i class="bx bxs-minus-circle"></i> Đã từ chối
          </div>
        </div>
        <!-- Modal từ chối duyệt  -->
        <div
          class="modal fade"
          id="modal-tuchoi"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Từ chối xác nhận
                </h5>
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
                  <div class="form-group">
                    <select class="form-control f12" name="" id="">
                      <option value="">Chọn lý do</option>
                      <option value="">Lý do 1</option>
                      <option value="">Lý do 1</option>
                      <option value="">Khác</option>
                    </select>
                  </div>
                  <div class="form-group pos-relative">
                    <textarea
                      class="form-control f12"
                      placeholder="Ghi chú"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <!-- <button type="button" class="btn btn-light" data-dismiss="modal">Xác nhận</button> -->
                <a href="" class="btn btn-primary" data-dismiss="modal"
                  >Xác nhận</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Modal từ chối duyệt  -->
        <div
          class="modal fade"
          id="modal-thanhcong"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body text-center">
                <div class="form-success">
                  <span><i class="bx bxs-check-circle"></i> </span>
                  <h3>Xác nhận thành công</h3>
                </div>
                <a href="" class="btn btn-primary mt-4" data-dismiss="modal"
                  >Hoàn tất</a
                >
              </div>
              <!-- <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-dismiss="modal">Xác nhận</button>
                            <a href="" class="btn btn-primary" data-dismiss="modal">Ok</a>
                        </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="main-content">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home">
            <section class="box-detail form-detail">
              <h1>Thông tin MC</h1>
              <div class="form-group form-row">
                <label for="" class="col-sm-3 col-form-label"
                  >Tên Merchant <span class="float-right">:</span></label
                >
                <div class="col-sm-9">
                  <p class="form-control-plaintext f12">Kiều Chí Công</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-3 col-form-label"
                  >Email<span class="float-right">:</span></label
                >
                <div class="col-sm-9">
                  <p class="form-control-plaintext f12">
                    kieuchicong@gmail.com
                  </p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-3 col-form-label"
                  >Số điện thoại<span class="float-right">:</span></label
                >
                <div class="col-sm-9">
                  <p class="form-control-plaintext f12">0981 332 566</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-3 col-form-label"
                  >Địa chỉ<span class="float-right">:</span></label
                >
                <div class="col-sm-9">
                  <p class="form-control-plaintext f12">
                    18 Tam Trinh, Hai Bà Trung, Hà Nội
                  </p>
                </div>
              </div>
            </section>
            <section class="box-detail form-detail">
              <h1>Thông tin hợp đồng</h1>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Số hợp đồng <span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Loại<span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">
                    Cá nhân/ Hộ KD/ Doanh nghiệp
                  </p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Dịch vụ<span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Ngày ký<span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Trạng thái<span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">
                    <span class="badge badge-warning">Chờ xác nhận</span>
                    <span class="badge badge-success">Đã xác nhận</span>
                    <span class="badge badge-danger">Đã từ chối</span>
                  </p>
                </div>
              </div>
            </section>

            <section class="box-detail form-detail">
              <h1>Phụ lục phí giao dịch</h1>
              <div class="table-responsive">
                <table
                  class="table table-hover table-bordered"
                  id="tableScroll"
                >
                  <thead class="thead-light">
                    <tr>
                      <th scope="col" class="text-left">Loại phí</th>
                      <th scope="col" class="text-left">Số phụ lục</th>
                      <th scope="col" class="text-left">Chi tiết</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row">
                      <td align="left">Phí giao dịch</td>
                      <td align="left">PLP 01</td>
                      <td align="left">
                        <a href="#bieuphi-thanhtoan" data-toggle="modal"
                          >Xem biểu phí</a
                        >
                      </td>
                    </tr>
                    <tr class="table-row">
                      <td align="left">Phí trả góp</td>
                      <td align="left">PLP 01</td>
                      <td align="left">
                        <a href="#bieuphi-dexuat" data-toggle="modal"
                          >Xem biểu phí</a
                        >
                      </td>
                    </tr>
                    <tr class="table-row">
                      <td align="left">Phí trả góp</td>
                      <td align="left">PLP 01</td>
                      <td align="left">
                        <a href="#bieuphi-tragop" data-toggle="modal"
                          >Xem biểu phí</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section class="box-detail form-detail">
              <h1>Phụ lục thiết bị</h1>
              <div class="table-responsive">
                <table
                  class="table table-hover table-bordered"
                  id="tableScroll"
                >
                  <thead class="thead-light">
                    <tr>
                      <th scope="col" class="text-left">Số phụ lục</th>
                      <th scope="col" class="text-left">Ngày ký</th>
                      <th scope="col" class="text-left">SL thiết bị</th>
                      <th scope="col" class="text-right">Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row">
                      <td align="left">PLP 01</td>
                      <td align="left">01/01/2020</td>
                      <td class="text-left">01</td>
                      <td align="right">1.300.000</td>
                    </tr>
                  </tbody>
                </table>

                <table
                  class="table table-hover table-bordered"
                  id="tableScroll"
                >
                  <thead class="thead-light">
                    <tr>
                      <th scope="col" class="text-left">Số phụ lục</th>
                      <th scope="col" class="text-left">Tên</th>
                      <th scope="col" class="text-left">Mã serial</th>
                      <th scope="col" class="text-right">Giá bán</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row">
                      <td align="left">PLP 01</td>
                      <td class="text-left">PR01</td>
                      <td class="text-left">0523423</td>
                      <td align="right">1.300.000</td>
                    </tr>
                    <tr class="table-row">
                      <td align="left">PLP 01</td>
                      <td class="text-left">PR01</td>
                      <td class="text-left">0523423</td>
                      <td align="right">1.300.000</td>
                    </tr>
                    <tr class="table-row">
                      <td align="left">PLP 01</td>
                      <td class="text-left">PR01</td>
                      <td class="text-left">0523423</td>
                      <td align="right">1.300.000</td>
                    </tr>
                    <tr class="table-row">
                      <td align="left">PLP 01</td>
                      <td class="text-left">PR01</td>
                      <td class="text-left">0523423</td>
                      <td align="right">1.300.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section class="box-detail form-detail">
              <h1>Phụ lục đổi thông tin</h1>
              <div class="table-responsive">
                <table
                  class="table table-hover table-bordered"
                  id="tableScroll"
                >
                  <thead class="thead-light">
                    <tr>
                      <th scope="col" class="text-left">Số phụ lục</th>
                      <th scope="col" class="text-left">Ngày ký</th>
                      <th scope="col" class="text-left">Nội dung đổi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row">
                      <td align="left">PLP 01</td>
                      <td align="left">01/01/2020</td>
                      <td align="left">kiều chi công, địa chỉ, số CMND ...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section class="box-detail form-detail">
              <h1>Thông tin người đại diện</h1>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Họ và tên <span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Số điện thoại<span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Email<span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Số CMND/CCCD/HC<span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Nơi cấp<span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
            </section>
            <section class="box-detail form-detail">
              <h1>Thông tin nhận thanh toán</h1>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Chủ tài khoản <span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Số tài khoản<span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Ngân hàng<span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
              <div class="form-group form-row">
                <label for="" class="col-sm-4 col-form-label"
                  >Chi nhánh<span class="float-right">:</span></label
                >
                <div class="col-sm-8">
                  <p class="form-control-plaintext f12">sadasdasd ád</p>
                </div>
              </div>
            </section>
            <section class="box-detail form-detail">
              <h1>Điểm chấp nhận thanh toán</h1>
              <div class="table-responsive">
                <table
                  class="table table-hover table-bordered"
                  id="tableScroll"
                >
                  <thead class="thead-light">
                    <tr>
                      <th scope="col" class="text-left">Tên điểm</th>
                      <th scope="col" class="text-left">Địa chỉ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row">
                      <td class="text-left">Điểm chấp nhận 1</td>
                      <td align="left">Tam trinh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <!-- Modal Biểu phí trả góp đề xuất  -->
            <div
              class="modal fade"
              id="bieuphi-thanhtoan"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Biểu phí thanh toán
                    </h5>
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
                    <div class="table-price table-responsive text-center">
                      <table class="table table-striped table-bordered f12">
                        <thead>
                          <tr class="bg-head1">
                            <th style="width: 50px"><b>STT</b></th>
                            <th><b>Loại thẻ/Phương thức thanh toán</b></th>
                            <th class="txt-center"><b>Mức phí</b></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="txt-center">1</td>
                            <td>Thẻ nội địa ATM/ NAPAS</td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">2</td>
                            <td>
                              Thẻ Visa, Master, JCB, CUP phát hành tại Việt Nam
                            </td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">3</td>
                            <td>
                              Thẻ Visa, Master, JCB, CUP phát hành tại nước
                              ngoài
                            </td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">4</td>
                            <td>Thanh toán thẻ từ xa (thanh toán qua LINK)</td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">5</td>
                            <td>QRCode mVisa, MasterPass, JCBQR, UPIQR</td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">6</td>
                            <td>QRCode QR-Pay, ViettelPay, VinID</td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">7</td>
                            <td>QRCode số dư ví VIMO</td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                        </tbody>
                      </table>
                      <p class="f14"><b>Lưu ý: </b></p>
                      <ol class="form-style2 f12 text-left">
                        <li><i>Đơn vị tính là VNĐ và đã bao gồm VAT.</i></li>
                        <li>
                          <i
                            >Biểu phí này căn cứ theo chính sách của Bên A được
                            ban hành tại từng thời điểm.</i
                          >
                        </li>
                      </ol>
                    </div>
                  </div>
                  <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-dismiss="modal">Xác nhận</button>
                                    <a href="#" class="btn btn-primary" data-dismiss="modal">Xác nhận</a>
                                    <a href="#lydo-tuchoiduyet" class="btn btn-danger" data-dismiss="modal" data-toggle="modal">Từ chối</a>
                                </div> -->
                </div>
              </div>
            </div>
            <!-- Modal Biểu phí trả góp đề xuất  -->
            <div
              class="modal fade"
              id="bieuphi-dexuat"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Biểu phí trả góp
                    </h5>
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
                    <div class="table-price table-responsive text-center">
                      <table class="table table-striped table-bordered f12">
                        <tr>
                          <th rowspan="2" width="86px">Ngân hàng</th>
                          <th colspan="6" class="text-center">
                            Kỳ trả góp ( tháng )
                          </th>
                        </tr>
                        <tr>
                          <th class="text-center">03</th>
                          <th class="text-center">06</th>
                          <th class="text-center">09</th>
                          <th class="text-center">12</th>
                          <th class="text-center">18</th>
                          <th class="text-center">24</th>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Sacombank</p>
                          </td>
                          <td class="text-center">
                            <span class="old-price">2%</span>
                            <strong class="new-price"> 2%</strong>
                          </td>
                          <td class="text-center">
                            <span class="old-price">3,9%</span>
                            <strong class="new-price"> 3,9%</strong>
                          </td>
                          <td class="text-center">
                            <span class="old-price">4,9%</span>
                            <strong class="new-price"> 4,9%</strong>
                          </td>
                          <td class="text-center">
                            <span class="old-price">5,9%</span>
                            <strong class="new-price"> 5,9%</strong>
                          </td>
                          <td class="text-center">--</td>
                          <td class="text-center">--</td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>HSBC</p>
                          </td>
                          <td class="text-center">
                            <span class="old-price">2%</span>
                            <strong class="new-price"> 2%</strong>
                          </td>
                          <td class="text-center">
                            <span class="old-price">3,9%</span>
                            <strong class="new-price"> 3,9%</strong>
                          </td>
                          <td class="text-center">
                            <span class="old-price">4,9%</span>
                            <strong class="new-price"> 4,9%</strong>
                          </td>
                          <td class="text-center">
                            <span class="old-price">5,9%</span>
                            <strong class="new-price"> 5,9%</strong>
                          </td>
                          <td class="text-center">--</td>
                          <td class="text-center">--</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-dismiss="modal">Xác nhận</button>
                                    <a href="#" class="btn btn-primary" data-dismiss="modal">Xác nhận</a>
                                    <a href="#lydo-tuchoiduyet" class="btn btn-danger" data-dismiss="modal" data-toggle="modal">Từ chối</a>
                                </div> -->
                </div>
              </div>
            </div>
            <!-- Modal Biểu phí trả góp mặc định  -->
            <div
              class="modal fade"
              id="bieuphi-tragop"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Biểu phí trả góp
                    </h5>
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
                    <div class="table-price table-responsive text-center">
                      <table class="table table-striped table-bordered f12">
                        <tr>
                          <th rowspan="2" width="86px">Ngân hàng</th>
                          <th colspan="6" class="text-center">
                            Kỳ trả góp ( tháng )
                          </th>
                        </tr>
                        <tr>
                          <th class="text-center">03</th>
                          <th class="text-center">06</th>
                          <th class="text-center">09</th>
                          <th class="text-center">12</th>
                          <th class="text-center">18</th>
                          <th class="text-center">24</th>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Sacombank</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center">--</td>
                          <td class="text-center">--</td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>HSBC</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Shinhan</p>
                          </td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>VIB</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Eximbank</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">6,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Maritimebank</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>VPB</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">7,9%</td>
                          <td class="text-center">8,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Teckcombank</p>
                          </td>
                          <td class="text-center">--</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">--</td>
                          <td class="text-center">6,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Citibank</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Seabank</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Standard Chartered</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>SCB</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">6,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>SHB</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center">8,5%</td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>BIDV</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <!-- <tr>
                                                <td class="text-center">
                                                    <span><img src="assets/img/favicon/Logo NH Merchant-17.png" alt=""></span><br />
                                                    <p>Nam Á</p>
                                                </td>
                                                <td class="text-center"><i>--</i></td>
                                                <td class="text-center">3,9%</td>
                                                <td class="text-center"><i>--</i></td>
                                                <td class="text-center">5,9%</td>
                                                <td class="text-center"><i>--</i></td>
                                                <td class="text-center"><i>--</i>
                                                    
                                                </td>
                                            </tr> -->
                        <tr>
                          <td class="text-center">
                            <p>FeCredit</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>OCB</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Kiên Long</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">6,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>TP Bank</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Vietcombank</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">6,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <!-- <tr>
                                                <td class="text-center">
                                                    <span><img src="assets/img/favicon/Logo NH Merchant-28.png" alt=""></span><br />
                                                    <p>Vietinbank</p>
                                                </td>
                                                <td class="text-center">2%</td>
                                                <td class="text-center">3,9%</td>
                                                <td class="text-center">4,9%</td>
                                                <td class="text-center">6,9%</td>
                                                <td class="text-center"><i>--</i></td>
                                                <td class="text-center"><i>--</i>
                                                    
                                                </td>
                                            </tr> -->
                        <tr>
                          <td class="text-center">
                            <p>MBbank</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>ACB</p>
                          </td>
                          <td class="text-center">2%</td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">4,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                        <tr>
                          <td class="text-center">
                            <p>Home Credit</p>
                          </td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center">3,9%</td>
                          <td class="text-center">5,9%</td>
                          <td class="text-center">6,9%</td>
                          <td class="text-center"><i>--</i></td>
                          <td class="text-center"><i>--</i></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-dismiss="modal">Xác nhận</button>
                                    <a href="#" class="btn btn-primary" data-dismiss="modal">Xác nhận</a>
                                    <a href="#lydo-tuchoiduyet" class="btn btn-danger" data-dismiss="modal" data-toggle="modal">Từ chối</a>
                                </div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="profile">
            <ul class="nav nav-tabs tab-child-list" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="tab1-tab"
                  data-toggle="tab"
                  href="#tab1"
                  >Hợp đồng</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2"
                  >Phụ lục giao dịch</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3"
                  >Phụ lục trả góp</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3"
                  >Phụ lục thiết bị</a
                >
              </li>
            </ul>
            <div class="tab-content tab-child-content" id="myTabContent">
              <div class="tab-pane fade show active" id="tab1">
                <div class="contract">
                  <div class="head-contract table-responsive">
                    <table class="table">
                      <tr>
                        <td align="left">
                          <label>CÔNG TY CỔ PHẦN CÔNG NGHỆ VI MÔ</label>
                          <p>
                            Tầng 12A, tòa nhà VTC Online, 18 Tam Trinh, Hai Bà
                            Trưng, Hà Nội
                          </p>
                          <p>
                            <em>Hotline:1900 2079</em> |
                            <em>Email:hotro@mpos.vn</em>
                          </p>
                        </td>
                        <td align="right">
                          <span><img src="img/nextpay-logo.svg" alt="" /></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <p class="txt-center fonsize-16 txt-tranf">
                    <b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM </b>
                  </p>
                  <p class="txt-center fonsize-16">
                    <b>Độc lập – Tự do – Hạnh phúc</b>
                  </p>
                  <p class="txt-center fonsize-16">***</p>
                  <p class="txt-tranf txt-center fonsize-20">
                    <b
                      >HỢP ĐỒNG HỢP TÁC<br />
                      CHẤP NHẬN THANH TOÁN</b
                    >
                  </p>
                  <p class="txt-center">
                    (Số: <mark>HL280</mark>/ <mark>VM09</mark>/VIMO-CNTT)
                  </p>
                  <h3>Căn cứ:</h3>
                  <ul class="form-style">
                    <li>
                      Bộ Luật Dân sự được Quốc hội nước Cộng hòa xã hội chủ
                      nghĩa Việt Nam thông qua ngày 24 tháng 11 năm 2015, có
                      hiệu lực từ ngày 01 tháng 01 năm 2017 và các văn bản hướng
                      dẫn thi hành;
                    </li>
                    <li>
                      Luật Thương mại được Quốc hội nước Cộng hòa xã hội chủ
                      nghĩa Việt Nam thông qua ngày 14 tháng 6 năm 2005, có hiệu
                      lực từ ngày 01 tháng 01 năm 2006 và các văn bản hướng dẫn
                      thi hành;
                    </li>
                    <li>
                      Nghị định 101/2012/NĐ-CP của Chính Phủ về thanh toán không
                      dùng tiền mặt ngày 22 tháng 11 năm 2012;
                    </li>
                    <li>
                      Nghị định 80/2016/NĐ-CP của Chính Phủ sửa đổi, bổ sung một
                      số điều của Nghị định 101/2012/NĐ-CP ngày 22 tháng 11 năm
                      2012 của Chính phủ về thanh toán không dùng tiền mặt;
                    </li>
                    <li>
                      Thông tư 19/2016/TT-NHNN về hoạt động thẻ ngân hàng của
                      Ngân hàng nhà nước Việt Nam ngày 30 tháng 06 năm 2016;
                    </li>
                    <li>
                      Thông tư 30/2016/TT-NHNN sửa đổi, bổ sung một số thông tư
                      quy định về hoạt động cung ứng dịch vụ thanh toán và dịch
                      vụ trung gian thanh toán ngày 14 tháng 10 năm 2016;
                    </li>
                    <li>
                      Thông tư 26/2017/TT-NHNN sửa đổi, bổ sung một số điều của
                      thông tư số 19/2016/TT-NHNN ngày 30 tháng 6 năm 2016 của
                      Thống đốc ngân hàng nhà nước Việt Nam quy định về hoạt
                      động thẻ ngân hàng ngày 29 tháng 12 năm 2017;
                    </li>
                    <li>
                      Thông tư 41/2018/TT-NHNN sửa đổi, bổ sung một số điều của
                      Thông tư số 19/2016/TT-NHNN ngày 30 tháng 06 năm 2016 của
                      Thống đốc Ngân hàng nhà nước Việt Nam quy định về hoạt
                      động thẻ ngân hàng ngày 28 tháng 12 năm 2018;
                    </li>
                    <li>
                      Thông tư 28/2019/TT-NHNN sửa đổi, bổ sung một số điều của
                      Thông tư số 19/2016/TT-NHNN ngày 30 tháng 06 năm 2016 của
                      Thống đốc Ngân hàng nhà nước Việt Nam quy định về hoạt
                      động thẻ ngân hàng ngày 25 tháng 12 năm 2019;
                    </li>
                    <li>
                      Văn bản hợp nhất số 06/BHN-NHNN quy định về hoạt động thẻ
                      ngân hàng do Thống đốc Ngân hàng nhà nước Việt Nam ban
                      hành ngày 19 tháng 01 năm 2018;
                    </li>
                    <li>Nhu cầu và khả năng của các Bên.</li>
                  </ul>
                  <p>
                    Hôm nay, ngày <mark>30</mark> tháng <mark>10</mark> năm
                    <mark>2020</mark>, tại trụ sở Công ty Cổ phần Công nghệ Vi
                    Mô, chúng tôi gồm có:
                  </p>
                  <p class="fonsize-16 txt-tranf">
                    <b>BÊN A: CÔNG TY CỔ PHẦN CÔNG NGHỆ VI MÔ</b>
                  </p>
                  <p><b>(sau đây được gọi là “BÊN A”)</b></p>
                  <p>
                    Địa chỉ: Tầng 12A, tòa nhà VTC online số 18 Đường Tam Trinh,
                    Phường Minh Khai, Quận Hai Bà Trưng, Thành phố Hà Nội, Việt
                    Nam.
                  </p>
                  <ul class="form">
                    <li>Điện thoại: 1900-2079</li>
                    <li>Mã số thuế: 0106393463</li>
                    <li>Đại diện: Ông <b>ĐỖ CÔNG DIỄN</b></li>
                    <li>Chức vụ: <b>Tổng Giám Đốc</b></li>
                  </ul>
                  <p class="fonsize-16 txt-tranf flex">
                    <span> <b>BÊN B:</b></span>
                    <mark><b>Ông Đỗ Công Diễn</b></mark>
                  </p>
                  <p><b>(sau đây được gọi là “BÊN B”)</b></p>
                  <p>
                    <span>Họ và tên người đại diện: </span>
                    <mark><b>Đỗ Công Diễn</b></mark>
                  </p>
                  <p>
                    <span>Số CMND/Hộ chiếu/Thẻ căn cước:</span>
                    <mark>044389201</mark> <span>; Nơi cấp:</span>
                    <mark>Hai Bà trưng Hà nội</mark>
                  </p>
                  <p>
                    <span
                      >Mã số thuế doanh nghiệp/ Số đăng ký kinh doanh:
                    </span>
                    <mark>HL 0980</mark>
                  </p>
                  <p>
                    <span>Địa chỉ:</span>
                    <mark>18 Tam Trinh Hai Bà trưng Hà nội</mark>
                  </p>
                  <p>
                    <span>Email:</span> <mark>diendc@gmail.com</mark
                    ><span>; Điện thoại:</span> <mark>0989029999 </mark>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Sau khi xem xét các điều khoản và điều kiện của Hợp đồng,
                    chúng tôi cùng đồng ý ký kết và thực hiện các điều khoản
                    dưới đây:
                  </p>
                  <ol class="form-style1">
                    <li>
                      <h1>nội dung hợp tác</h1>
                      <p>
                        Bên A là một pháp nhân hoạt động hợp pháp trong lĩnh vực
                        Trung gian thanh toán đã được Ngân hàng Nhà nước Việt
                        Nam cấp giấy phép hoạt động số 30/GP-NHNN, ngày
                        22/02/2016; bằng năng lực của mình, thực hiện việc cung
                        cấp dịch vụ chấp nhận thanh toán thẻ và QRCode cho Khách
                        hàng dưới các điều khoản và điều kiện trong Hợp đồng
                        này.
                      </p>
                      <p>
                        Bên B là một cá nhân hoặc pháp nhân hoạt động hợp pháp
                        trong lĩnh vực <mark>Kinh doanh</mark> hiểu và đồng ý
                        các điều khoản và điều kiện cho việc chấp thuận sử dụng
                        dịch vụ của Bên A cung cấp trên tinh thần thiện chí hợp
                        tác, tự nguyện, cùng có lợi.
                      </p>
                      <p>
                        Vì vậy, các bên thống nhất ký kết hợp đồng này với phạm
                        vi công việc và mục đích sau:
                      </p>
                      <ul class="form-style">
                        <li>
                          Hợp đồng này quy định quyền lợi và trách nhiệm của các
                          Bên trong việc ký kết và thực hiện
                          <b>
                            “Hợp đồng hợp tác chấp nhận thanh toán bằng thẻ và
                            QRCode” </b
                          >(viết tắt là <b>“Hợp đồng”</b>), cho phép Khách hàng
                          có thể sử dụng thẻ thanh toán mang thương hiệu Visa,
                          Master Card hoặc JCB, các loại thẻ ATM, thẻ Napas do
                          các ngân hàng tại Việt Nam phát hành để thanh toán
                          tiền hàng hoá, dịch vụ.
                        </li>
                        <li>
                          Bên B đồng ý sử dụng dịch vụ của Bên A theo các Điều
                          khoản được quy định trong nội dung Hợp đồng này cùng
                          các Phụ lục hợp đồng kèm theo.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h1>PHÍ GIAO DỊCH</h1>
                      <ol>
                        <li>
                          <span class="txt-bold"> Mức phí giao dịch</span>
                          <p>
                            Mức phí giao dịch được quy định chi tiết trong Phụ
                            lục đính kèm Hợp đồng này.
                          </p>
                        </li>
                        <li>
                          <span class="txt-bold"
                            >Cơ sở tính phí và hình thức thanh toán phí</span
                          >
                          <ul>
                            <li>
                              Phí được tính toán theo từng giao dịch trên hệ
                              thống của Bên A, căn cứ trên số lượng và tổng số
                              tiền của Giao dịch thành công.
                            </li>
                            <li>
                              Phí giao dịch được khấu trừ trực tiếp trên tổng số
                              tiền Bên A thanh toán cho Bên B theo chu kỳ được
                              quy định tại Điều 3 của Hợp đồng này.
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h1>ĐỐI SOÁT VÀ THANH QUYẾT TOÁN</h1>
                      <ol>
                        <li>
                          <span class="txt-bold">Nguyên tắc thanh toán</span>
                          <ul>
                            <li>Đồng tiền thanh toán là tiền Việt Nam (VNĐ)</li>
                            <li>
                              <p>
                                Gọi ngày giao dịch là T, vào
                                <b>Ngày làm việc</b> [<b class="clred">T+1</b>]
                                (<i
                                  >là ngày theo Dương lịch, không bao gồm các
                                  ngày thứ Bảy, Chủ nhật và các ngày nghỉ lễ
                                  theo qui định pháp luật của Việt Nam</i
                                >), Bên A tiến hành thanh toán cho Bên B số tiền
                                theo nguyên tắc như sau:
                              </p>
                              <p>
                                <b>Số tiền thanh toán</b> = [<b
                                  >Tổng tiền Giao dịch thành công</b
                                >] – [<b>Tổng phí Giao dịch</b>] – [<b
                                  >Tổng tiền Giao dịch hoàn trả </b
                                ><i>(nếu có)</i>].
                              </p>
                            </li>
                            <li>
                              Phí chuyển tiền do ngân hàng của Bên A thu (nếu
                              có), do Bên A chi trả.
                            </li>
                            <li>
                              Phí nhận tiền do ngân hàng của Bên B thu (nếu có),
                              do Bên B chi trả.
                            </li>
                            <li>
                              Số tiền tối thiểu BÊN A thanh toán cho BÊN B là
                              <b>100.000 VNĐ</b>
                              <i>(Một trăm nghìn Việt Nam Đồng)</i> trong mỗi
                              lần thanh toán hoặc nếu hết tháng của kỳ đối soát
                              (kỳ quyết toán), BÊN A phải thanh toán cho BÊN B
                              toàn bộ số tiền BÊN A thu hộ BÊN B mà không bị
                              giới hạn bởi số tiền tối thiểu tuỳ theo điều kiện
                              nào đến trước.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="txt-bold">Hình thức thanh toán</span>
                          <ul>
                            <li>
                              Bên A thanh toán bằng hình thức chuyển khoản qua
                              ngân hàng tới số tài khoản ngân hàng của Bên B
                              theo thông tin như sau:
                            </li>
                            <li>
                              Khi Bên B có nhu cầu thay đổi tài khoản ngân hàng,
                              hai Bên cần xác nhận bằng văn bản hoặc thông báo
                              từ Bên B bằng email đã đăng ký trên hệ thống của
                              Bên A.
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h1>DANH SÁCH ĐIỂM CHẤP NHẬN THANH TOÁN CỦA BÊN B</h1>
                    </li>
                    <li>
                      <h1>QUYỀN VÀ TRÁCH NHIỆM CỦA BÊN A</h1>
                      <ol>
                        <li>
                          <span class="txt-bold">Quyền của Bên A</span>
                          <ul>
                            <li>
                              Được hưởng phí xử lý giao dịch quy định tại Điều 2
                              của Hợp đồng này.
                            </li>
                            <li>
                              Được quyền tạm dừng thanh toán cho Bên B cho đến
                              khi Bên B cung cấp đầy đủ các giấy tờ hợp lệ đối
                              với các giao dịch nghi ngờ gian lận, giả mạo hoặc
                              giao dịch tra soát hoặc từ chối thanh toán hoặc
                              truy đòi một phần hoặc toàn bộ các khoản đã thanh
                              toán đối với các giao dịch thực hiện tại Bên B
                              trong các trường hợp Bên B có hành vi gian lận,
                              không thực hiện theo đúng hướng dẫn và quy định
                              tại Hợp đồng này hoặc tại các quy định của Bên A
                              đã được thông báo bằng văn bản hoặc trên ứng dụng
                              của Bên A cung cấp cho Bên B trong quá trình sử
                              dụng dịch vụ hoặc ngân hàng phát hành thẻ, đơn vị
                              cung cấp dịch vụ thanh toán QRCode yêu cầu tra
                              soát giao dịch thanh toán nhưng Bên B không cung
                              cấp được chứng từ bán hàng hoá, dịch vụ để xác
                              minh giao dịch của chủ thẻ hoặc chủ tài khoản thực
                              hiện giao dịch thanh toán.
                            </li>
                            <li>
                              Phối hợp với Bên B để tra soát và hoàn tiền cho
                              các giao dịch mà khách hàng đã trừ tiền trên thẻ/
                              tài khoản nhưng chưa được hệ thống của Bên A ghi
                              nhận thành công cho Bên B hoặc Bên B có nhu cầu
                              hoàn lại tiền cho khách hàng khi khách hàng huỷ
                              đơn hàng.
                            </li>
                            <li>
                              Được quyền từ chối và/ hoặc tạm dừng việc thực
                              hiện nghĩa vụ của Bên A trong trường hợp Bên B vi
                              phạm bất kỳ nghĩa vụ đối trừ nào đã được quy định
                              trong Hợp đồng này.
                            </li>
                            <li>
                              Được quyền kiểm tra, kiểm soát và tạm dừng ghi
                              nhận giao dịch đối với các giao dịch mà Bên A nghi
                              ngờ có sự gian lận của chủ thẻ/ chủ tài khoản hoặc
                              từ chối giao dịch đối với các giao dịch phát hiện
                              có sự gian lận của chủ thẻ/ chủ tài khoản.
                            </li>
                            <li>
                              Bên A được quyền nêu tên Bên B trong các chiến
                              dịch quảng bá chương trình có nội dung phù hợp với
                              loại hình kinh doanh của Bên B mà Bên A có thể sẽ
                              thực hiện trong thời hạn của Hợp đồng này.
                            </li>
                            <li>
                              Từ chối thực hiện quảng cáo cho Bên B nếu Bên B
                              không tuân thủ các quy định tại Hợp đồng này hoặc
                              vi phạm các quy định của pháp luật.
                            </li>
                            <li>
                              Dừng hợp đồng và đóng dịch vụ chấp nhận thanh toán
                              trên hệ thống của Bên A nếu Bên B có hành vi gian
                              lận (như tự ý sao chép thông tin thẻ/ tài khoản
                              của khách hàng) hoặc không tuân thủ các quy định
                              liên quan đến giao dịch thanh toán mà Bên A đã
                              hướng dẫn.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="txt-bold"> Trách nhiệm của Bên A</span>
                          <ul>
                            <li>
                              Đảm bảo bí mật các thông tin về Bên B, chỉ được
                              phép tiết lộ thông tin khi có yêu cầu của cơ quan
                              chức năng theo quy định của pháp luật hoặc theo
                              yêu cầu của Hợp đồng này và phải báo cho Bên B nội
                              dung đã tiết lộ.
                            </li>
                            <li>
                              Thanh toán đầy đủ, đúng hạn các giao dịch hợp lệ
                              phát sinh theo Điều 3 Hợp đồng này.
                            </li>
                            <li>
                              Giải quyết các yêu cầu tra soát, khiếu nại của Bên
                              B.
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h1>QUYỀN VÀ TRÁCH NHIỆM CỦA BÊN B</h1>
                      <ol>
                        <li>
                          <span class="txt-bold">Quyền của Bên B</span>
                          <ul>
                            <li>
                              Được sử dụng Dịch vụ thanh toán thẻ/ QRCode trên
                              ứng dụng của Bên A để Khách hàng có thể thực hiện
                              thanh toán tiền hàng hoá, dịch vụ cho Bên B.
                            </li>
                            <li>
                              Được Bên A thanh toán giá trị giao dịch (sau khi
                              đã trừ phí) đầy đủ và đúng hạn cho những giao dịch
                              Khách hàng đã thanh toán bằng thẻ/ QRCode và được
                              ghi nhận thành công trên hệ thống của Bên A theo
                              quy định trong Điều 3 của Hợp đồng này.
                            </li>
                            <li>
                              Được quyền yêu cầu Bên A phối hợp và hỗ trợ xử lý
                              những sai sót xảy ra trong quá trình giao dịch
                              trên hệ thống của Bên A cung cấp.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="txt-bold">Trách nhiệm của Bên B</span>
                          <ul>
                            <li>
                              Thanh toán phí xử lý giao dịch cho Bên A theo quy
                              định tại Điều 2 của Hợp đồng này.
                            </li>
                            <li>
                              Phối hợp với Bên A thiết lập và duy trì Dịch vụ
                              thanh toán do Bên A cung cấp.
                            </li>
                            <li>
                              Thiết lập, lưu trữ các chứng từ liên quan đến hàng
                              hoá, dịch vụ của khách hàng trong thời gian 180
                              (một trăm tám mươi) ngày kể từ ngày giao dịch phát
                              sinh và cung cấp cho Bên A khi có các khiếu nại
                              liên quan đến giao dịch của chủ thẻ/ chủ tài khoản
                              trong thời gian không quá 03 (ba) ngày kể từ ngày
                              nhận được yêu cầu của Bên A.
                            </li>
                            <li>
                              Không được phép tăng giá bán và không được phép
                              thu thêm các khoản phí xử lý thanh toán hoặc áp
                              dụng các chính sách tạo nên sự phân biệt đối xử
                              giữa hình thức thanh toán thẻ/ QRCode so với các
                              hình thức thanh toán khác.
                            </li>
                            <li>
                              Tham gia các buổi đào tạo, hướng dẫn dịch vụ thanh
                              toán do Bên A tổ chức tại cửa hàng.
                            </li>
                            <li>
                              Xây dựng đội ngũ nhân sự và các quy trình nghiệp
                              vụ cần thiết để hai Bên triển khai Dịch vụ thanh
                              toán do Bên A cung cấp cho việc phát triển kinh
                              doanh của Bên B.
                            </li>
                            <li>
                              Áp dụng các biện pháp nghiệp vụ để đảm bảo an toàn
                              số liệu và chịu trách nhiệm bảo mật hệ thống của
                              mình để tránh hiện tượng truy cập trái phép vào
                              mạng lưới của một Bên thông qua hệ thống của Bên
                              kia và ngược lại.
                            </li>
                            <li>
                              Phối hợp với Bên A đối soát và chốt số liệu giao
                              dịch thanh toán thông qua Dịch vụ thanh toán do
                              Bên A cung cấp định kỳ hàng tháng trên hệ thống
                              của Bên A cung cấp.
                            </li>
                            <li>
                              Chịu trách nhiệm giải quyết các tranh chấp, khiếu
                              nại của Khách hàng liên quan đến hàng hoá, dịch vụ
                              đối với khách hàng của Bên B.
                            </li>
                            <li>
                              Cung cấp, cập nhật đầu mối liên hệ hoặc xử lý giao
                              dịch qua email của người có thẩm quyền hoặc bằng
                              văn bản cho Bên A trước 05 (năm) ngày làm việc kể
                              từ ngày thay đổi.
                            </li>
                            <li>
                              Có trách nhiệm xuất chứng từ hoặc hóa đơn bán hàng
                              hoá, dịch vụ hợp lệ cho Khách hàng tương ứng với
                              khoản tiền đã thanh toán cho hàng hoá, dịch vụ do
                              Bên B cung ứng.
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h1>CÁC HÀNH VI NGHIÊM CẤM</h1>
                      <ul>
                        <li>
                          Bên B không được mua, bán, cung cấp hay trao đổi thông
                          tin giao dịch dưới bất kỳ hình thức nào khi chưa có sự
                          chấp thuận bằng văn bản của Bên A hoặc cơ quan có thẩm
                          quyền.
                        </li>
                        <li>
                          Bên B không được cấu kết với các tổ chức, cá nhân thực
                          hiện các hành vi gian lận, thực hiện giao dịch chấp
                          nhận thanh toán khống.
                        </li>
                        <li>
                          Bên B không được thực hiện các hành vi bị nghiêm cấm
                          khác theo quy định của Pháp luật Việt Nam.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h1>SỬA ĐỔI VÀ CHẤM DỨT HỢP ĐỒNG</h1>
                      <ul>
                        <li>
                          Việc sửa đổi, bổ sung, chấm dứt Hợp đồng phải được lập
                          thành văn bản có chữ ký xác nhận của người có thẩm
                          quyền của Hai bên.
                        </li>
                        <li>
                          Hợp đồng chấm dứt khi xảy ra một trong các sự kiện
                          sau:
                          <ol>
                            <li>
                              Một Bên vi phạm nghĩa vụ của mình theo quy định
                              của Hợp đồng và không sửa chữa, khắc phục được vi
                              phạm trong thời hạn do Bên kia yêu cầu;
                            </li>
                            <li>
                              Sau 30 (ba mươi) ngày kể từ ngày một/các bên gửi
                              văn bản cho bên còn lại thông báo yêu cầu chấm dứt
                              Hợp đồng;
                            </li>
                            <li>Một trong các Bên bị giải thể, phá sản;</li>
                            <li>
                              Các trường hợp khác theo quy định của Pháp luật
                              Việt Nam.
                            </li>
                          </ol>
                        </li>
                        <li>
                          Khi hợp đồng chấm dứt, các bên phối hợp giải quyết
                          toàn bộ các tra soát, khiếu nại, các khoản nợ và các
                          nghĩa vụ tài chính khác liên quan đến các giao dịch
                          được chấp nhận thanh toán trả góp bằng thẻ tín
                          dụngtrên hệ thống do Bên A cung cấp.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h1>CHUYỂN NHƯỢNG HỢP ĐỒNG</h1>
                      <ul>
                        <li>
                          Không bên nào trong Hợp đồng này được chuyển nhượng
                          một phần hoặc toàn bộ nghĩa vụ của hợp đồng cho bên
                          thứ ba khi chưa có sự đồng ý bằng văn bản của bên còn
                          lại.
                        </li>
                        <li>
                          Trong trường hợp một bên trong hợp đồng tiến hành
                          chia, tách, sáp nhập, hợp nhất thì toàn bộ quyền và
                          nghĩa vụ của Hợp đồng này sẽ được chuyển giao cho pháp
                          nhân/tổ chức có quan hệ chia, tách, sáp nhập, hợp nhất
                          với pháp nhân bị chia, tách, sáp nhập và hợp nhất.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h1>CÁC TRƯỜNG HỢP BẤT KHẢ KHÁNG</h1>
                      <ol>
                        <li>
                          <span class="txt-bold">Sự kiện bất khả kháng:</span>
                          <ul>
                            <li>
                              <p>
                                Là sự kiện vượt ra ngoài khả năng kiểm soát của
                                một Bên (“Bên bị ảnh hưởng”) và không liên quan
                                tới lỗi hoặc sự bất cẩn của Bên đó cũng như
                                không thể thấy trước, không thể tránh được và
                                không thể khắc phục được mặc dù đã áp dụng mọi
                                biện pháp cần thiết và khả năng cho phép và làm
                                cho Bên bị ảnh hưởng không thể thực hiện được
                                bất kỳ nghĩa vụ hay trách nhiệm nào quy định tại
                                Hợp đồng này.
                              </p>
                              <p>
                                Sự kiện bất khả kháng ("<b
                                  >Sự kiện bất khả kháng</b
                                >") bao gồm, nhưng không giới hạn một trong các
                                sự kiện sau:
                              </p>
                            </li>
                            <li>
                              Các hiện tượng tự nhiên bao gồm: thiên tai, dịch
                              bệnh, hoả hoạn, lũ lụt, sóng thần, xoáy lốc, hạn
                              hán, động đất cao hơn cấp thiết kế, sấm sét cao
                              hơn mức thiết kế; nhiễm hạt nhân hoặc phóng xạ.
                            </li>
                            <li>
                              Chiến tranh, hành động xâm lược, khủng bố, bạo
                              loạn, nội chiến, phá hoại hoặc các hành động thù
                              địch khác;
                            </li>
                            <li>
                              Bãi công và các hoạt động ngừng trệ không phải do
                              lỗi của một trong hai Bên gây ra. Hỏng hóc kỹ
                              thuật nằm ngoài tầm kiểm soát của mỗi Bên.
                            </li>
                            <li>
                              Do thay đổi chính sách pháp luật của Nhà nước Việt
                              Nam.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="txt-bold">Thông báo:</span>
                          <ul>
                            <li>
                              Bên bị ảnh hưởng của Sự kiện bất khả kháng phải
                              thông báo cho Bên kia về sự kiện, tình huống gây
                              ra Sự kiện bất khả kháng trong thời gian sớm nhất
                              có thể nhưng không được muộn hơn một (01) ngày kể
                              từ sau khi thông tin liên lạc đã phục hồi. Nhưng
                              cũng không quá bảy (07) ngày kể từ khi xảy ra Sự
                              kiện bất khả kháng phải thông báo bằng văn bản cho
                              Bên kia và trong vòng ba mươi (30) ngày phải gửi
                              văn bản cho Bên kia mô tả về nguyên nhân, ảnh
                              hưởng của Sự kiện bất khả kháng đối với việc thực
                              hiện nghĩa vụ hợp đồng và gửi kèm các chứng nhận
                              về việc xảy ra sự cố có xác nhận của chính quyền
                              địa phương.
                            </li>
                            <li>
                              Bất cứ các thông báo nào cũng sẽ bao gồm chi tiết
                              về sự kiện, tình huống tạo thành Sự kiện bất khả
                              kháng, tác động của nó đối với việc thực hiện
                              nghĩa vụ Hợp đồng của Bên bị ảnh hưởng và kiến
                              nghị các biện pháp khắc phục. Bên bị ảnh hưởng
                              phải cung cấp các báo cáo thường xuyên cho Bên kia
                              về việc triển khai các biện pháp khắc phục nhằm
                              ngăn chặn hoặc giảm nhẹ những tác động của Sự kiện
                              bất khả kháng và các thông tin mà Bên kia yêu cầu
                              một cách hợp lý.
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h1>CÁC ĐIỀU KHOẢN KHÁC</h1>
                      <ul>
                        <li>
                          Hợp đồng này có hiệu lực trong vòng 01 (một) năm kể từ
                          ngày ký. Trong vòng 30 (ba mươi) ngày trước khi hợp
                          đồng hết hạn, nếu các bên không có thoả thuận nào
                          khác, hợp đồng sẽ tự động được gia hạn liên tục 01
                          (một) năm một lần.
                        </li>
                        <li>
                          Nếu một bên có bất kỳ sự thay đổi nào trong quá trình
                          thực hiện hợp đồng, phải có nghĩa vụ thông báo bằng
                          văn bản hoặc các hình thức khác (được bên kia chấp
                          nhận) với bên còn lại trước 15 (mười lăm) ngày kể từ
                          ngày có sự thay đổi.
                        </li>
                        <li>
                          Các bên cam kết nghiêm chỉnh thực hiện Hợp đồng này.
                          Nếu có tranh chấp phát sinh, trước hết các bên sẽ cùng
                          giải quyết bằng thương lượng. Nếu không giải quyết
                          được, một trong các bên được quyền đưa tranh chấp ra
                          Toà án có thẩm quyền để giải quyết theo thủ tục tố
                          tụng được quy định bởi pháp luật Việt Nam.
                        </li>
                        <li>
                          Hợp đồng này được lập thành 02 (hai) bản có giá trị
                          như nhau; mỗi Bên giữ 01 (một) bản.
                        </li>
                      </ul>
                    </li>
                  </ol>

                  <div class="table-responsive">
                    <table class="table" style="border: 0">
                      <tr>
                        <td
                          width="50%"
                          align="center"
                          style="vertical-align: top; border: 0 !important"
                        >
                          <p style="text-align: center">ĐẠI DIỆN BÊN A</p>
                          <img
                            src=""
                            style="
                              width: 150px;
                              height: 150px;
                              display: inline-block;
                            "
                            alt=""
                          /><br />
                          <strong>ĐỖ CÔNG DIỄN</strong>
                        </td>
                        <td
                          width="50%"
                          align="center"
                          style="vertical-align: top; border: 0 !important"
                        >
                          <p style="text-align: center">ĐẠI DIỆN BÊN A</p>
                          <span
                            style="
                              width: 150px;
                              height: 150px;
                              display: inline-block;
                            "
                          ></span>
                          <strong>&nbsp;</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          colspan="2"
                          align="center"
                          style="border: 0 !important"
                        >
                          <p style="text-align: center">
                            <b>CHUYÊN VIÊN THỰC HIỆN</b><br /><i
                              >(Ký ghi rõ họ tên)</i
                            >
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab2">
                <div class="contract">
                  <div class="head-contract table-responsive">
                    <table class="table">
                      <tr>
                        <td align="left">
                          <label>CÔNG TY CỔ PHẦN CÔNG NGHỆ VI MÔ</label>
                          <p>
                            Tầng 12A, tòa nhà VTC Online, 18 Tam Trinh, Hai Bà
                            Trưng, Hà Nội
                          </p>
                          <p>
                            <em>Hotline:1900 2079</em> |
                            <em>Email:hotro@mpos.vn</em>
                          </p>
                        </td>
                        <td align="right">
                          <span><img src="img/nextpay-logo.svg" alt="" /></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <p class="txt-center fonsize-16 txt-tranf">
                    CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                  </p>
                  <p class="txt-center fonsize-16">
                    Độc lập – Tự do – Hạnh phúc
                  </p>
                  <p class="txt-center fonsize-16">***</p>
                  <p class="txt-tranf txt-center fonsize-20 magb20">
                    <b
                      >PHỤ LỤC<br />
                      BIỂU PHÍ VÀ NGUYÊN TẮC CHẤP NHẬN THANH TOÁN
                    </b>
                  </p>
                  <p class="txt-center">(PL số:<mark>123</mark>)</p>
                  <p>Căn cứ:</p>
                  <ol class="form-style2">
                    <li>
                      <span>
                        Hợp đồng hợp tác chấp nhận thanh toán thẻ số
                        <mark> HL98</mark>
                      </span>
                      <p class="magt10">
                        (sau đây được viết tắt là “Hợp đồng”) ký ngày<mark
                          >30</mark
                        >
                        tháng <mark>10</mark> năm <mark>2020</mark>
                      </p>
                    </li>
                    <li>Nhu cầu và khả năng của hai Bên.</li>
                  </ol>
                  <p>
                    Hôm nay, ngày <mark>30</mark> tháng <mark>10</mark> năm
                    <mark>2020</mark>, tại trụ sở Công ty Cổ phần Công nghệ Vi
                    Mô, chúng tôi gồm có:
                  </p>
                  <p class="fonsize-16 txt-tranf flex">
                    <b>BÊN A: CÔNG TY CỔ PHẦN CÔNG NGHỆ VI MÔ</b>
                  </p>
                  <p>và</p>
                  <p class="fonsize-16 txt-tranf flex">
                    <span class="nowrap"> <b>BÊN B:</b></span>
                    <mark><b>Ông Đỗ Công Diễn</b></mark>
                  </p>
                  <p>
                    cùng thỏa thuận hợp tác và cam kết thực hiện những điều sau
                    đây:
                  </p>

                  <ol class="form-style1">
                    <li>
                      <h1>PHÍ GIAO DỊCH</h1>
                      <table class="magb20">
                        <thead>
                          <tr class="bg-head1">
                            <th style="width: 50px"><b>STT</b></th>
                            <th><b>Loại thẻ/Phương thức thanh toán</b></th>
                            <th><b>Mức phí</b></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="txt-center">1</td>
                            <td>Thẻ nội địa ATM/ NAPAS</td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">2</td>
                            <td>
                              Thẻ Visa, Master, JCB, CUP phát hành tại Việt Nam
                            </td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">3</td>
                            <td>
                              Thẻ Visa, Master, JCB, CUP phát hành tại nước
                              ngoài
                            </td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">4</td>
                            <td>Thanh toán thẻ từ xa (thanh toán qua LINK)</td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">5</td>
                            <td>QRCode mVisa, MasterPass, JCBQR, UPIQR</td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">6</td>
                            <td>QRCode QR-Pay, ViettelPay, VinID</td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                          <tr>
                            <td class="txt-center">7</td>
                            <td>QRCode số dư ví VIMO</td>
                            <td class="txt-center"><b>0.44%</b></td>
                          </tr>
                        </tbody>
                      </table>
                      <p><b>Lưu ý: </b></p>
                      <ol class="form-style2">
                        <li><i>Đơn vị tính là VNĐ và đã bao gồm VAT.</i></li>
                        <li>
                          <i
                            >Biểu phí này căn cứ theo chính sách của Bên A được
                            ban hành tại từng thời điểm.</i
                          >
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h1>NGUYÊN TẮC CHẤP NHẬN THANH TOÁN</h1>
                      <ul>
                        <li>
                          Loại thẻ hỗ trợ thanh toán là thẻ mang thương hiệu
                          Visa, Master hoặc JCB/CUP, hoặc thẻ nội địa ATM/
                          Napas.
                        </li>
                        <li>
                          Các loại giao dịch QR được hỗ trợ, bao gồm: QR-Pay,
                          ViettelPay, VinID, ví VIMO, mVisa, MasterPass, JCBQR,
                          UPIQR.
                        </li>
                        <li>
                          Loại thẻ và QRCode có thể được bổ sung/ thay đổi trong
                          tương lai, khi có sự bổ sung/ thay đổi, Bên A sẽ thông
                          báo cho Bên B bằng email hoặc bằng văn bản.
                        </li>
                        <li>
                          Giá trị giao dịch thanh toán tối thiểu cho mỗi đơn
                          hàng là <b>10,000đ</b>
                          <i class="fonsize-12">(Mười nghìn đồng chẵn).</i>
                        </li>
                        <li>
                          Chỉ có các giao dịch khách hàng đã thanh toán và được
                          ghi nhận thành công trên hệ thống ứng dụng dành cho
                          điểm bán hàng của Bên A mới được tiến hành đối soát và
                          thanh toán.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h1>ĐIỀU KHOẢN THI HÀNH</h1>
                      <ul class="form-style2">
                        <li>
                          Phụ lục này là bộ phận không thể tách rời của Hợp đồng
                          và các điều khoản khác của Hợp đồng vẫn được giữ
                          nguyên. Các bên cam kết tuân thủ các quy định trong
                          phụ lục Hợp đồng này.
                        </li>
                        <li>
                          Phụ lục này có hiệu lực kể từ ngày đại diện có thẩm
                          quyền của hai Bên tham gia ký kết. Thời hạn hiệu lực
                          của Phụ lục này được xác định theo thời hạn hiệu lực
                          của Hợp đồng nêu trên trừ khi hai bên có thỏa thuận
                          khác bằng văn bản.
                        </li>
                        <li>
                          Phụ lục này được lập thành 02 (hai) bản có nội dung và
                          giá trị pháp lý như nhau, mỗi Bên giữ 01 (một) bản.
                        </li>
                      </ul>
                    </li>
                  </ol>
                  <div class="table-responsive">
                    <table class="table" style="border: 0">
                      <tr>
                        <td
                          width="50%"
                          align="center"
                          style="vertical-align: top; border: 0 !important"
                        >
                          <p style="text-align: center">ĐẠI DIỆN BÊN A</p>
                          <img
                            src=""
                            style="
                              width: 150px;
                              height: 150px;
                              display: inline-block;
                            "
                            alt=""
                          /><br />
                          <strong>ĐỖ CÔNG DIỄN</strong>
                        </td>
                        <td
                          width="50%"
                          align="center"
                          style="vertical-align: top; border: 0 !important"
                        >
                          <p style="text-align: center">ĐẠI DIỆN BÊN A</p>
                          <span
                            style="
                              width: 150px;
                              height: 150px;
                              display: inline-block;
                            "
                          ></span>
                          <strong>&nbsp;</strong>
                        </td>
                      </tr>
                      <!-- <tr>
                                            <td colspan="2" align="center" style="border: 0 !important;">
                                                <p style="text-align: center;"><b>CHUYÊN VIÊN THỰC HIỆN</b><br/><i>(Ký ghi rõ họ tên)</i></p>
                                            </td>
                                        </tr> -->
                    </table>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab3">
                <div class="contract">
                  <div class="head-contract table-responsive">
                    <table class="table">
                      <tr>
                        <td align="left">
                          <label>CÔNG TY CỔ PHẦN CÔNG NGHỆ VI MÔ</label>
                          <p>
                            Tầng 12A, tòa nhà VTC Online, 18 Tam Trinh, Hai Bà
                            Trưng, Hà Nội
                          </p>
                          <p>
                            <em>Hotline:1900 2079</em> |
                            <em>Email:hotro@mpos.vn</em>
                          </p>
                        </td>
                        <td align="right">
                          <span><img src="img/nextpay-logo.svg" alt="" /></span>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <p class="txt-center fonsize-16 txt-tranf">
                    CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                  </p>
                  <p class="txt-center fonsize-16">
                    Độc lập – Tự do – Hạnh phúc
                  </p>
                  <p class="txt-center fonsize-16">***</p>
                  <p class="txt-tranf txt-center fonsize-20 magb20">
                    <b
                      >PHỤ LỤC<br />
                      DỊCH VỤ TRẢ GÓP BẰNG THẺ TÍN DỤNG
                    </b>
                  </p>
                  <p class="txt-center">(PL số: <mark>123</mark> )</p>
                  <p>Căn cứ:</p>
                  <ol class="form-style2">
                    <li>
                      <span class="flex">
                        <span class="nowrap">
                          Hợp đồng hợp tác chấp nhận thanh toán thẻ số
                        </span>
                        <mark> HL98</mark>
                      </span>
                      <p class="magt10">
                        (sau đây được viết tắt là “Hợp đồng”) ký ngày<mark
                          >30</mark
                        >
                        tháng <mark>10</mark> năm <mark>2020</mark>
                      </p>
                    </li>
                    <li>Nhu cầu và khả năng của hai Bên.</li>
                  </ol>
                  <p>
                    Hôm nay, ngày <mark>30</mark> tháng <mark>10</mark> năm
                    <mark>2020</mark>, tại trụ sở Công ty Cổ phần Công nghệ Vi
                    Mô, chúng tôi gồm có:
                  </p>
                  <p class="fonsize-16 txt-tranf flex">
                    <b>BÊN A: CÔNG TY CỔ PHẦN CÔNG NGHỆ VI MÔ</b>
                  </p>
                  <p>và</p>
                  <p class="fonsize-16 txt-tranf flex">
                    <span class="nowrap"> <b>BÊN B:</b></span>
                    <mark><b>Ông Đỗ Công Diễn</b></mark>
                  </p>
                  <p>
                    cùng thỏa thuận hợp tác và cam kết thực hiện những điều sau
                    đây:
                  </p>

                  <ol class="form-style1">
                    <li>
                      <h1>NỘI DUNG HỢP TÁC</h1>
                      <ul>
                        <li>
                          Bên A và Bên B đồng ý hợp tác thực hiện chương trình
                          ưu đãi trả góp lãi suất 0% dành cho Chủ thẻ tín dụng
                          (Chủ thẻ) Visa/Master/JCB của các ngân hàng được Bên A
                          hỗ trợ theo Phụ lục hợp đồng này hoặc thông báo từ Bên
                          A cập nhật theo từng thời điểm tại website:
                          www.mpos.vn hoặc ứng dụng mPOS.vn.
                        </li>
                        <li>
                          Bên B thực hiện chương trình ưu đãi trả góp (Dịch vụ
                          Trả góp) dành cho Chủ thẻ khi mua hàng hóa và thanh
                          toán tại các địa điểm kinh doanh của Bên B và đồng ý
                          thanh toán chi phí dịch vụ cho Bên A được nêu ở Nội
                          dung hợp tác.
                        </li>
                        <li>
                          Bên B chấp nhận thanh toán hàng hóa, dịch vụ bằng thẻ
                          mà không thuyết phục chủ thẻ dùng phương tiện thanh
                          toán khác.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h1>NGUYÊN TẮC CHẤP NHẬN TRẢ GÓP BẰNG THẺ TÍN DỤNG</h1>
                      <ul>
                        <li>
                          Loại thẻ hỗ trợ trả góp là THẺ TÍN DỤNG mang thương
                          hiệu Visa, Master hoặc JCB (tuỳ theo từng ngân hàng)
                          do các ngân hàng tại Việt Nam phát hành được liệt kê
                          trong Phụ lục hợp đồng này.
                        </li>
                        <li>
                          Giá trị giao dịch thanh toán trả góp tối thiểu (số
                          tiền mà khách hàng thanh toán trả góp) áp dụng theo
                          quy định của từng ngân hàng (từ 2,000,000 VNĐ hoặc
                          3,000,000 VNĐ).
                        </li>
                        <li>
                          Chỉ có các giao dịch khách hàng đã thanh toán và được
                          ghi nhận thành công trên hệ thống ứng dụng dành cho
                          điểm bán hàng của Bên A mới được tiến hành đối soát và
                          thanh toán.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h1>QUYỀN VÀ TRÁCH NHIỆM CỦA BÊN A</h1>
                      <ul>
                        <li>
                          Quảng cáo chương trình ưu đãi cho các khách hàng thông
                          qua các phương tiện truyền thông của Bên A hoặc phối
                          hợp với ngân hàng phát hành thẻ truyền thông quảng bá
                          chương trình ưu đãi đến các tập khách hàng phù hợp để
                          biết đến dịch vụ này tại các điểm kinh doanh của Bên
                          B.
                        </li>
                        <li>
                          Hỗ trợ giải đáp các thắc mắc theo yêu cầu của Khách
                          hàng hoặc Bên B.
                        </li>
                        <li>
                          Phối hợp các ngân hàng có tham gia chương trình trả
                          góp lãi suất 0% để giải đáp và thực hiện đúng quyền
                          lợi của khách hàng/chủ thẻ khi thực hiện giao dịch tại
                          các điểm kinh doanh của Bên B và tham gia Chương trình
                          này.
                        </li>
                        <li>
                          Bên A có quyền nêu tên Bên B trong các chiến dịch
                          quảng bá chương trình có nội dung phù hợp với loại
                          hình kinh doanh của Bên B mà Bên A có thể thực hiện
                          trong thời hạn của Hợp đồng.
                        </li>
                        <li>
                          Được quyền kiểm tra việc thực hiện Hợp đồng của Bên B,
                          nếu Bên B thực hiện không đúng hoặc từ chối không thực
                          hiện các nội dung của Hợp đồng vì bất kỳ lý do nào,
                          bao gồm nhưng không giới hạn việc không chấp nhận hoặc
                          từ chối bán trả góp bằng thẻ tín dụng cho khách hàng,
                          các chế độ giao hàng và hậu mãi cho Chủ thẻ, các hành
                          vi mang tính phân biệt đối xử khi thanh toán bằng
                          thẻ,… thì Bên A có quyền: (1) ngay lập tức đơn phương
                          chấm dứt Hợp đồng và yêu cầu bồi thường các thiệt hại
                          thực tế phát sinh (chi phí quảng cáo, maketing cho
                          chương trình và chi phí thông báo trên báo giấy hoặc
                          các phương tiện thông tin khác để thông báo về việc
                          chấm dứt chương trình); và/hoặc (2) yêu cầu Bên B gửi
                          thư và/hoặc công khai xin lỗi (các) khách hàng qua các
                          phương tiện thông tin truyền thông và (3) hoàn lại cho
                          khách hàng khoản tiền tương đương với giá trị của hình
                          thức ưu đãi mà khách hàng đáng lẽ đã được nhận bằng
                          tiền mặt hoặc quà tặng kèm theo (nếu có).
                        </li>
                        <li>
                          Từ chối thực hiện quảng cáo cho Bên B nếu Bên B không
                          tuân thủ các quy định tại Hợp đồng này hoặc vi phạm
                          các quy định của pháp luật.
                        </li>
                        <li>
                          Đảm bảo bí mật các thông tin về Bên B, chỉ được phép
                          tiết lộ thông tin khi có yêu cầu của cơ quan chức năng
                          theo quy định của pháp luật và phải thông báo cho Bên
                          B về nội dung thông tin được tiết lộ.
                        </li>
                        <li>
                          Thanh toán đầy đủ và đúng hạn các giao dịch hợp lệ
                          phát sinh tại Bên B trừ đi tỷ lệ phí chuyển đổi trả
                          góp và giao dịch thẻ như quy định trong Điều 3 của Hợp
                          đồng.
                        </li>
                        <li>
                          Giải quyết các yêu cầu tra soát, khiếu nại của Bên B
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h1>QUYỀN VÀ TRÁCH NHIỆM CỦA BÊN B</h1>
                      <ul>
                        <li>
                          Cam kết thực hiện đúng quy trình và phương thức trả
                          góp trên ứng dụng mPOS.vn để đảm bảo quyền lợi cho chủ
                          thẻ. Trường hợp Bên B không thực hiện lựa chọn chương
                          trình trả góp trên ứng dụng mPOS.vn cho chủ thẻ theo
                          yêu cầu, giao dịch đó không được coi là giao dịch hợp
                          lệ và Bên B phải chịu trách nhiệm đền bù chi phí phát
                          sinh do không ghi nhận giao dịch trả góp cho chủ thẻ.
                        </li>
                        <li>
                          Đồng ý thực hiện Chương trình ưu đãi cho khách hàng có
                          thẻ tín dụng như nội dung Hợp đồng.
                        </li>
                        <li>
                          Giới thiệu Chương trình ưu đãi đến khách hàng và thực
                          hiện quảng cáo chương trình bằng một trong các phương
                          tiện do Bên B quyết định.
                        </li>
                        <li>
                          Hỗ trợ Bên A để dán các sticker, standee,… tại địa
                          điểm kinh doanh hoặc treo banner, nội dung truyền
                          thông tại website, fanpage,…. của Bên B để khách hàng
                          biết đến dịch vụ này.
                        </li>
                        <li>
                          Hợp tác với Bên A thực hiện Chương trình dành cho
                          khách hàng có thẻ tín dụng theo đúng nội dung Hợp đồng
                          và Phụ lục hợp đồng này.
                        </li>
                        <li>
                          Thanh toán phần hỗ trợ lãi suất và phí dịch vụ cho Bên
                          A theo thoả thuận
                        </li>
                        <li>
                          Sử dụng nội dung thông tin, dữ liệu, hình ảnh, logo,
                          tên thương mại trong các tài liệu quảng cáo chương
                          trình ưu đãi Bên A theo Hợp đồng một cách hợp pháp và
                          không vi phạm quyền sở hữu trí tuệ của Bên còn lại
                          và/hoặc bất kỳ bên thứ ba nào.Đảm bảo đội ngũ nhân
                          viên bán hàng tại các địa điểm kinh doanh đều nắm rõ
                          Chương trình và các ưu đãi (nếu có) cũng như duy trì
                          dịch vụ trả lời qua điện thoại một cách hiệu quả để
                          giải đáp các thắc mắc của khách hàng liên quan đến
                          Chương trình trả góp này.
                        </li>
                        <li>
                          Chịu trách nhiệm hoàn toàn với khách hàng về những
                          tranh chấp liên quan đến việc thực hiện chương trình
                          ưu đãi, bao gồm nhưng không giới hạn các tranh chấp về
                          việc chủ thẻ không được tham gia chương trình, không
                          được hưởng các ưu đãi như thanh toán bằng tiền mặt;
                          tranh chấp vì có sự phân biệt giá giữa các chủ thẻ,
                          yêu cầu chủ thẻ trả thêm phụ phí đối với các giao dịch
                          thanh toán tiền dịch vụ bằng thẻ so với thanh toán
                          bằng tiền mặt…
                        </li>
                        <li>
                          Chịu trách nhiệm hoàn toàn về chất lượng hàng hóa dịch
                          vụ và các chế độ hậu mãi, bảo hành đối với hàng hóa đã
                          bán cho Chủ thẻ.
                        </li>
                        <li>
                          Mọi trường hợp sử dụng thông tin thuộc sở hữu hợp pháp
                          của Bên A ngoài những nội dung đã thỏa thuận phải có ý
                          kiến chấp thuận bằng văn bản của Bên A.
                        </li>
                        <li>
                          Không đưa ra các thông lệ hay quy trình thanh toán
                          mang tính phân biệt đối xử hoặc không khuyến khích
                          việc sử dụng Thẻ tín dụng.
                        </li>
                        <li>
                          Thanh toán phí hỗ trợ lãi suất cho Bên A trên từng
                          giao dịch thành công và phí dịch vụ thẻ theo thoả
                          thuận trong Hợp đồng chấp nhận thẻ đã ký và Phụ lục
                          hợp đồng này.
                        </li>
                        <li>
                          Không yêu cầu Khách hàng tham gia chương trình thanh
                          toán thêm bất kỳ khoản chi phí nào liên quan đến việc
                          mua hàng hóa bằng thẻ tín dụng và/hoặc không được áp
                          dụng bất kỳ khoản phụ thu nào khác đối với khách hàng
                          khi thanh toán bằng thẻ tín dụng thông qua ứng dụng
                          mPOS.vn.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h1>PHÍ DỊCH VỤ TRẢ GÓP BẰNG THẺ TÍN DỤNG</h1>
                      <p>
                        Phí tham gia chương trình trả góp 0% (chưa bao gồm phí
                        chấp nhận thanh toán thẻ tín dụng quy định tại Phụ lục
                        Biểu phí và nguyên tắc chấp nhận thanh toán được đính
                        kèm Hợp đồng mà hai bên đã ký) theo từng ngân hàng và
                        theo từng chu kỳ trả góp như sau:
                      </p>
                      <table>
                        <thead>
                          <tr class="bg-head2">
                            <th width="15%" rowspan="2"><b>Ngân hàng</b></th>
                            <th colspan="6"><b>Kỳ hạn trả góp</b></th>
                            <th width="15%" rowspan="2">
                              <b>Mức giao dịch tối thiểu (VNĐ)</b>
                            </th>
                          </tr>
                          <tr class="bg-head2">
                            <th width="10%"><b>3 tháng</b></th>
                            <th width="10%"><b>6 tháng</b></th>
                            <th width="10%"><b>9 tháng </b></th>
                            <th width="10%"><b>12 tháng </b></th>
                            <th width="10%"><b>18 tháng</b></th>
                            <th width="10%"><b>24 tháng</b></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="txt-center">Sacombank</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><strong>7,9%</strong></td>
                            <td class="text-right"><strong>9.9%</strong></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">HSBC</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Shinhan/ANZ</td>
                            <td class="text-right">
                              <strong><em>Không hỗ trợ</em></strong>
                            </td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">VIB</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">
                              <strong>2.000.000</strong>
                            </td>
                          </tr>
                          <tr>
                            <td class="txt-center">Eximbank</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Maritimebank (*)</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">VP bank</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right"><strong>7,9%</strong></td>
                            <td class="text-right"><strong>8,9%</strong></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Techcombank (**)</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Citibank</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em>%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Seabank</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Standard Chartered</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">
                              <strong>2.000.000</strong>
                            </td>
                          </tr>
                          <tr>
                            <td class="txt-center">SCB</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">SHB</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><strong>8,5%</strong></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">BIDV</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Nam Á</td>
                            <td class="text-right">
                              <strong><em>Không hỗ trợ</em></strong>
                            </td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">
                              <strong><em>Không hỗ trợ</em></strong>
                            </td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">FeCredit</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">
                              <strong>2.000.000</strong>
                            </td>
                          </tr>
                          <tr>
                            <td class="txt-center">OCB</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Kiên Long</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">TP Bank</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Vietcombank</td>
                            <td class="text-right"><strong>2,9%</strong></td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Vietinbank</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">MBbank</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">ACB</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Home Credit</td>
                            <td class="text-right">
                              <strong><em>Không hỗ trợ</em></strong>
                            </td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                          <tr>
                            <td class="txt-center">Viet Capital Bank</td>
                            <td class="text-right">2,0%</td>
                            <td class="text-right">3,9%</td>
                            <td class="text-right">4,9%</td>
                            <td class="text-right">5,9%</td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right"><em>Không hỗ trợ</em></td>
                            <td class="text-right">3.000.000</td>
                          </tr>
                        </tbody>
                      </table>
                      <p><b class="txt-under">LƯU Ý:</b></p>
                      <p>
                        (*) Đối với <b>MaritimeBank:</b> Theo quy định của ngân
                        hàngMaritimebank, ngân hàng sẽ thêm của chủ thẻ
                        <b> 3% </b>phí quản lý dịch vụ trả góp trên giá trị giao
                        dịch đối với kỳ hạn 3, 9, 12 tháng và<b>
                          miễn phí dịch vụ quản lý đối với kỳ hạn 6 tháng.</b
                        >
                      </p>
                      <p>
                        (**) Đối với <b>Techcombank: </b>Theo quy định của ngân
                        hàng Techcombank, ngân hàng sẽ thu chủ thẻ phí chuyển
                        đổi giao dịch trả góp là 1,1%*Giá trị giao dịch (đã bao
                        gồm VAT, tối thiểu 100.000VNĐ/1 giao dịch).
                      </p>
                      <p class="magb20">
                        (***) Đối với FE Credit: Đơn vị phát hành thẻ sẽ thu
                        thêm phí chuyển đổi giao dịch trả góp (thu một lần) của
                        chủ thẻ như sau:
                      </p>
                      <table>
                        <thead>
                          <tr>
                            <th><b>Loại phí/Kỳ hạn</b></th>
                            <th><b>03 tháng</b></th>
                            <th><b>06 tháng</b></th>
                            <th><b>09 tháng </b></th>
                            <th><b>12 tháng </b></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="txt-center">
                              Phí chuyển đổi trả góp (VPB FC thu của Chủ Thẻ)
                            </td>
                            <td class="txt-center"><b>1.99%</b></td>
                            <td class="txt-center"><b>2.99%</b></td>
                            <td class="txt-center"><b>3.99%</b></td>
                            <td class="txt-center"><b>3.99%</b></td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <h1>
                        QUY TRÌNH THỰC HIỆN GIAO DỊCH TRẢ GÓP BẰNG THẺ TÍN DỤNG
                      </h1>
                      <p>
                        <b class="txt-under">Bước 1:</b> Bên B hướng dẫn các
                        điều kiện, thủ tục của Dịch vụ Trả góp bằng thẻ tín dụng
                        cho Chủ thẻ.
                      </p>
                      <p>
                        <b class="txt-under">Bước 2:</b> Bên B mở ứng dụng
                        mPOS.vn, điền các thông tin giao dịch theo yêu cầu và
                        thực hiện giao dịch thanh toán trả góp bằng thẻ. Nếu
                        giao dịch thanh toán thành công, Bên B thực hiện giao
                        hàng cho chủ thẻ và thông báo chủ thẻ cách trả góp với
                        từng Ngân hàng theo hướng dẫn sau:
                      </p>
                      <table>
                        <thead>
                          <tr class="bg-head2">
                            <th width="7%"><b>STT</b></th>
                            <th width="21%"><b>NGÂN HÀNG PHÁT HÀNH THẺ</b></th>
                            <th width="26%"><b>QUY TRÌNH THỰC HIỆN </b></th>
                            <th width="46%"><b>LƯU Ý</b></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="txt-center">1</td>
                            <td class="txt-center">ACB</td>
                            <td rowspan="18" class="txt-center">
                              <b>Bên A (mPOS.vn) thực hiện</b>
                            </td>
                            <td rowspan="18" class="txt-center">
                              <b>Chủ thẻ không phải thực hiện gì thêm</b>
                            </td>
                          </tr>
                          <tr>
                            <td class="txt-center">2</td>
                            <td class="txt-center">MBbank</td>
                          </tr>
                          <tr>
                            <td class="txt-center">3</td>
                            <td class="txt-center">Vietcombank</td>
                          </tr>
                          <tr>
                            <td class="txt-center">4</td>
                            <td class="txt-center">Sacombank</td>
                          </tr>
                          <tr>
                            <td class="txt-center">5</td>
                            <td class="txt-center">HSBC</td>
                          </tr>
                          <tr>
                            <td class="txt-center">6</td>
                            <td class="txt-center">Shinhan/ANZ</td>
                          </tr>
                          <tr>
                            <td class="txt-center">7</td>
                            <td class="txt-center">VP bank</td>
                          </tr>
                          <tr>
                            <td class="txt-center">8</td>
                            <td class="txt-center">Standard Chartered</td>
                          </tr>
                          <tr>
                            <td class="txt-center">9</td>
                            <td class="txt-center">SCB</td>
                          </tr>
                          <tr>
                            <td class="txt-center">10</td>
                            <td class="txt-center">SHB</td>
                          </tr>
                          <tr>
                            <td class="txt-center">11</td>
                            <td class="txt-center">BIDV</td>
                          </tr>
                          <tr>
                            <td class="txt-center">12</td>
                            <td class="txt-center">Nam Á</td>
                          </tr>
                          <tr>
                            <td class="txt-center">13</td>
                            <td class="txt-center">FeCredit</td>
                          </tr>
                          <tr>
                            <td class="txt-center">14</td>
                            <td class="txt-center">Kiên Long</td>
                          </tr>
                          <tr>
                            <td class="txt-center">15</td>
                            <td class="txt-center">TP Bank</td>
                          </tr>
                          <tr>
                            <td class="txt-center">16</td>
                            <td class="txt-center">Eximbank</td>
                          </tr>
                          <tr>
                            <td class="txt-center">17</td>
                            <td class="txt-center">VIB</td>
                          </tr>
                          <tr>
                            <td class="txt-center">18</td>
                            <td class="txt-center">Vietinbank</td>
                          </tr>
                          <tr>
                            <td class="txt-center">19</td>
                            <td class="txt-center">FE Credit</td>
                            <td class="txt-center">&nbsp;</td>
                            <td>
                              - FE Credit thu thêm phí chuyển đổi trả góp của
                              chủ thẻ từ 1.99% đến 3.99%, tuỳ theo kỳ hạn.
                            </td>
                          </tr>
                          <tr>
                            <td class="txt-center">20</td>
                            <td class="txt-center">Home Credit</td>
                            <td class="txt-center">&nbsp;</td>
                            <td>
                              - Home credit: chỉ chuyển đổi trả góp với các giao
                              dịch thực hiện
                              <b><u>trước 5 ngày làm việc của kỳ</u></b
                              ><b><u> sao kê thẻ.</u></b>
                            </td>
                          </tr>
                          <tr>
                            <td class="txt-center">21</td>
                            <td class="txt-center">Techcombank</td>
                            <td rowspan="4" class="txt-center">
                              <b>Bên A (mPOS.vn) thực hiện</b>
                            </td>
                            <td>
                              - Techcombank sẽ thu thêm phí của Chủ thẻ khi tham
                              gia trả góp là <b>1.1%*Giá trị giao dịch </b>(đã
                              bao gồm VAT, tối thiểu 100.000VNĐ/1 giao dịch)
                            </td>
                          </tr>
                          <tr>
                            <td class="txt-center">22</td>
                            <td class="txt-center">Seabank</td>
                            <td>
                              <b>- Chủ thẻ cần nghe điện thoại </b>khi ngân hàng
                              gọi điện cho chủ thẻ để xác nhận giao dịch trả
                              góp.
                            </td>
                          </tr>
                          <tr>
                            <td class="txt-center">23</td>
                            <td class="txt-center">OCB</td>
                            <td>
                              <b>Chủ thẻ cần nghe điện thoại </b>khi ngân hàng
                              gọi điện cho chủ thẻ để xác nhận giao dịch trả
                              góp.
                            </td>
                          </tr>
                          <tr>
                            <td class="txt-center">24</td>
                            <td class="txt-center">Maritimebank</td>
                            <td>
                              - Ngân hàng thu thêm 3% phí quản lý trả góp của
                              chủ thẻ với các kỳ hạn 3, 9, 12 tháng. Riêng kỳ
                              hạn 6 tháng, chủ thẻ sẽ không bị thu thêm.
                            </td>
                          </tr>
                          <tr>
                            <td class="txt-center">25</td>
                            <td class="txt-center">Citibank</td>
                            <td>
                              <b
                                >Chủ thẻ nhận Link online qua tin nhắn MPOS hoặc
                                Nhắn tin cú pháp &ldquo;0&rdquo; gửi 6058 để
                                Điền đơn online.</b
                              >
                            </td>
                            <td>
                              <p>
                                - Chủ thẻ sẽ nhận được đường dẫn tới đơn
                                <b
                                  ><u
                                    >Đăng Ký Chương Trình Trả Góp 0% Lãi Suất
                                    Citi PayLite
                                  </u></b
                                >trực tuyến, điền thông tin giao dịch, sau đó
                                bấm "Gửi Yêu Cầu".
                              </p>
                              <p>
                                - Trong trường hợp chủ thẻ không sử dụng
                                smartphone/ không thể kết nối với internet,
                                khách hàng có thể sử dụng đường link
                                <b
                                  ><u
                                    >Đăng Ký Chương Trình Trả Góp 0% Lãi Suất
                                    Citi PayLite</u
                                  ></b
                                >
                                để mở trên máy tính/ thiết bị di động để điền
                                thông tin và gửi yêu cầu tham gia trả góp Citi
                                PayLite.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <h1>ĐIỀU KHOẢN THI HÀNH</h1>
                      <ul class="form-style2">
                        <li>
                          Phụ lục này là bộ phận không thể tách rời của Hợp đồng
                          và các điều khoản khác của Hợp đồng vẫn được giữ
                          nguyên. Các bên cam kết tuân thủ các quy định trong
                          phụ lục Hợp đồng này.
                        </li>
                        <li>
                          Phụ lục này có hiệu lực kể từ ngày đại diện có thẩm
                          quyền của hai Bên tham gia ký kết. Thời hạn hiệu lực
                          của Phụ lục này được xác định theo thời hạn hiệu lực
                          của Hợp đồng nêu trên trừ khi hai bên có thỏa thuận
                          khác bằng văn bản.
                        </li>
                        <li>
                          Phụ lục này được lập thành 02 (hai) bản có nội dung và
                          giá trị pháp lý như nhau, mỗi Bên giữ 01 (một) bản.
                        </li>
                      </ul>
                    </li>
                  </ol>
                  <div class="table-responsive">
                    <table class="table" style="border: 0">
                      <tr>
                        <td
                          width="50%"
                          align="center"
                          style="vertical-align: top; border: 0 !important"
                        >
                          <p style="text-align: center">ĐẠI DIỆN BÊN A</p>
                          <img
                            src=""
                            style="
                              width: 150px;
                              height: 150px;
                              display: inline-block;
                            "
                            alt=""
                          /><br />
                          <strong>ĐỖ CÔNG DIỄN</strong>
                        </td>
                        <td
                          width="50%"
                          align="center"
                          style="vertical-align: top; border: 0 !important"
                        >
                          <p style="text-align: center">ĐẠI DIỆN BÊN A</p>
                          <span
                            style="
                              width: 150px;
                              height: 150px;
                              display: inline-block;
                            "
                          ></span>
                          <strong>&nbsp;</strong>
                        </td>
                      </tr>
                      <!-- <tr>
                                            <td colspan="2" align="center" style="border: 0 !important;">
                                                <p style="text-align: center;"><b>CHUYÊN VIÊN THỰC HIỆN</b><br/><i>(Ký ghi rõ họ tên)</i></p>
                                            </td>
                                        </tr> -->
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-button">
          <ul>
            <li>
              <a
                href=""
                class="btn btn-primary"
                data-target="#modal-thanhcong"
                data-toggle="modal"
                >Xác nhận</a
              >
            </li>
            <li>
              <a
                href=""
                class="btn btn-danger"
                data-target="#modal-tuchoi"
                data-toggle="modal"
                >Từ chối</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End main -->

    <!-- Footer -->
    <footer class="mb-4">
      <div class="footer-title">
        <p>
          <a href=""><img src="img/nextpay-logo.svg" alt="" /></a> Hỗ trợ thanh
          toán
        </p>
        <p>CÔNG TY CỔ PHẦN CÔNG NGHỆ VI MÔ</p>
      </div>
      <div class="footer-about">
        <p>
          Hotline: <b><a href="tel:1900 2079">1900 2079</a></b> - Email:
          <b><a href="mailto:hotro@vimo.vn">hotro@vimo.vn</a></b>
        </p>
      </div>
      <ul class="footer-logo">
        <li>
          <a
            href="https://cdn.webrazzi.com/uploads/2013/12/redherring-global-winner.png"
            target="_blank"
            ><img src="img/global.png" alt=""
          /></a>
        </li>
        <li>
          <a
            href="https://www.sbv.gov.vn/webcenter/portal/vi/menu/trangchu/ttsk/ttsk_chitiet;jsessionid=Pkrwf92VGC5GdKySnvLJWgK5Hg5T6rv6BQK9G5lr8ZyK0DthZvwF!298591869!1655082551?centerWidth=80%25&amp;dDocName=SBVWEBAPP01SBV079234&amp;leftWidth=20%25&amp;rightWidth=0%25&amp;showFooter=false&amp;showHeader=false&amp;_adf.ctrl-state=9sau1ipwg_115&amp;_afrLoop=3971849221001628#%40%3F_afrLoop%3D3971849221001628%26centerWidth%3D80%2525%26dDocName%3DSBVWEBAPP01SBV079234%26leftWidth%3D20%2525%26rightWidth%3D0%2525%26showFooter%3Dfalse%26showHeader%3Dfalse%26_adf.ctrl-state%3Dyj4aegj4q_4"
            target="_blank"
            ><img src="img/icon-hh.png" alt=""
          /></a>
        </li>
        <li>
          <a
            href="https://sealserver.trustwave.com/cert.php?customerId=babcfe2b2147448e86b66ee7eee659e2&amp;size=105x54&amp;style="
            target="_blank"
            ><img src="img/pci.png" alt=""
          /></a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped >
@font-face {
  font-family: "Roboto-Bold" !important;
  src: url("./fonts/Roboto-Bold.ttf") !important;
}
@font-face {
  font-family: "Roboto-Italic" !important;
  src: url("./fonts/Roboto-Italic.ttf") !important;
}
@font-face {
  font-family: "Roboto-Medium" !important;
  src: url("./fonts/Roboto-Medium.ttf") !important;
}
@font-face {
  font-family: "Roboto-Regular" !important;
  src: url("./fonts/Roboto-Regular.ttf") !important;
}
html {
  overflow-x: hidden !important;
  font-family: "Roboto-Regular" !important;
}
body {
  font-family: "Roboto-Regular" !important;
  color: #3e4348 !important;
}
.font-bold {
  font-family: "Roboto-Bold" !important;
}
.font-italic {
  font-family: "Roboto-Italic" !important;
}
.font-medium {
  font-family: "Roboto-Medium" !important;
}
.font-regular {
  font-family: "Roboto-Regular" !important;
}
ol,
ul {
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  font-size: 100% !important;
  font: inherit !important;
  vertical-align: baseline !important;
}
li {
  list-style: none !important;
}
pre {
  color: #121212 !important;
}
a {
  text-decoration: none !important;
}
a:hover {
  text-decoration: none !important;
}
a:focus,
a:active,
a:hover,
a:visited {
  outline: none !important;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0 !important;
}
h1.light,
h2.light,
h3.light,
h4.light,
h5.light {
  font-family: "Roboto-Bold" !important;
  font-weight: initial !important;
}
h1,
.h1 {
  font-size: 45px !important;
  margin-top: 0 !important;
}
div,
p,
span {
  text-align: left !important;
}
h2,
.h2 {
  font-size: 25px !important;
}
h3 {
  font-size: 20px !important;
}
strong,
label {
  /*  font-family: 'Roboto-Medium';*/
  /*margin: 0;*/
}
p {
  line-height: 23px !important;
  margin-bottom: 0 !important;
}
button,
a {
  outline: none !important;
}
button {
  font-family: "Roboto-Medium" !important;
}
.btn:focus,
.btn.focus,
button:focus,
button.focus {
  outline: 0 !important;
  box-shadow: none !important;
}
td,
th {
  vertical-align: middle !important;
}
.table td,
.table th {
  padding: 8px 10px !important;
}
input {
  outline: none !important;
  box-shadow: none !important;
}
input:focus {
  border-color: #006ee3 !important;
}
img {
  max-width: 100% !important;
  max-height: 100% !important;
}
td {
  vertical-align: middle !important;
}
.p-0 {
  padding: 0 !important;
}
.p-10 {
  padding: 10px !important;
}
.p-t-0 {
  padding-top: 0 !important;
}
.p-b-0 {
  padding-bottom: 0 !important;
}
.p-l-0 {
  padding-left: 0 !important;
}
.p-r-0 {
  padding-right: 0 !important;
}
.p-t-10 {
  padding-top: 10px !important;
}
.p-b-10 {
  padding-bottom: 10px !important;
}
.p-l-10 {
  padding-left: 10px !important;
}
.p-r-10 {
  padding-right: 10px !important;
}
.p-t-20 {
  padding-top: 20px !important;
}
.p-b-20 {
  padding-bottom: 20px !important;
}
.p-b-50 {
  padding-bottom: 50px !important;
}
.p-l-20 {
  padding-left: 20px !important;
}
.p-l-30 {
  padding-left: 30px !important;
}
.p-r-20 {
  padding-right: 20px !important;
}
.p-r-30 {
  padding-right: 30px !important;
}
.pt-15 {
  padding: 15px 0px 0px !important;
}
.pl-15 {
  padding-left: 15px !important;
}
.m-0 {
  margin: 0 !important;
}
.m-0-auto {
  margin: 0 auto !important;
}
.m-b-0 {
  margin-bottom: 0 !important;
}
.m-t-0 {
  margin-top: 0 !important;
}
.m-l-0 {
  margin-left: 0 !important;
}
.m-r-0 {
  margin-right: 0 !important;
}
.m-r-10 {
  margin-right: 10px !important;
}
.m-t-10 {
  margin-top: 10px !important;
}
.m-t-50 {
  margin-top: 50px !important;
}
.m-t-80 {
  margin-top: 80px !important;
}
.m-t-100 {
  margin-top: 100px !important;
}
.m-t-20 {
  margin-top: 20px !important;
}
.m-t-28 {
  margin-top: 28px !important;
}
.m-t-30 {
  margin-top: 30px !important;
}
.m-t-36 {
  margin-top: 36px !important;
}
.m-b-5 {
  margin-bottom: 5px !important;
}
.m-b-10 {
  margin-bottom: 10px !important;
}
.m-b-15 {
  margin-bottom: 15px !important;
}
.m-b-20 {
  margin-bottom: 20px !important;
}
.m-b-30 {
  margin-bottom: 30px !important;
}
.m-b-40 {
  margin-bottom: 40px !important;
}
.m-b-50 {
  margin-bottom: 50px !important;
}
.m-b-60 {
  margin-bottom: 60px !important;
}
.m-b-70 {
  margin-bottom: 70px !important;
}
.m-b-80 {
  margin-bottom: 80px !important;
}
.m-b-90 {
  margin-bottom: 90px !important;
}
.m-b-100 {
  margin-bottom: 100px !important;
}
.m-0 {
  margin: 0 !important;
}
.m-l-0 {
  margin-left: 0 !important;
}
.m-l-10 {
  margin-left: 10px !important;
}
.m-r-0 {
  margin-right: 0 !important;
}
.m-r-20 {
  margin-right: 20px !important;
}
.m-t--70 {
  margin-top: -70px;
}
.text-transform {
  text-transform: uppercase !important;
}
.text-transform-none {
  text-transform: initial !important;
}
.b-r-5 {
  border-radius: 5px !important;
}
.border-fff {
  border-color: #fff !important;
}
.border-trans {
  border-color: transparent !important;
}
.b-t-das {
  border-top: 1px dashed #e8ebf1 !important;
}
.b-0 {
  border: 0 !important;
}
.b-b-0 {
  border-bottom: 0 !important;
}
.b-t-0 {
  border-top: 0 !important;
}
.b-l-0 {
  border-left: 0 !important;
}
.b-r-0 {
  border-right: 0 !important;
}
.b-b-1-869fb229 {
  border-bottom: 1px solid #869fb229 !important;
}
.b-t-1-869fb229 {
  border-top: 1px solid #869fb229 !important;
}
.b-t-2-869fb229 {
  border-top: 2px solid #869fb229 !important;
}
.b-l-1-869fb229 {
  border-left: 1px solid #869fb229 !important;
}
.b-r-1-869fb229 {
  border-right: 1px solid #869fb229 !important;
}
.b-1-869fb229 {
  border: 1px solid #869fb229 !important;
}
.boder-fff-2 {
  border: 2px solid #fff !important;
}
.pos-absolute {
  position: absolute !important;
}
.pos-relative {
  position: relative !important;
}
.top-0 {
  top: 0 !important;
}
.left-0 {
  left: 0 !important;
}
.right-0 {
  right: 0 !important;;
}
.bottom-0 {
  bottom: 0 !important;;
}
.width-10 {
  width: 10% !important;;
}
.width-20 {
  width: 20% !important;;
}
.width-30 {
  width: 30% !important;;
}
.width-40 {
  width: 40% !important;;
}
.width-50 {
  width: 50% !important;;
}
.width-60 {
  width: 60% !important;;
}
.width-70 {
  width: 70% !important;;
}
.width-80 {
  width: 80% !important;;
}
.width-90 {
  width: 90% !important;;
}
.width-100 {
  width: 100% !important;;
}
.wd-150 {
  width: 150px !important;;
}
.wd-200 {
  width: 200px !important;;
}
.wd-300 {
  width: 300px !important;;
}
.width-auto {
  width: auto !important;;
}
.f12 {
  font-size: 12px !important;;
}
.f14 {
  font-size: 14px !important;;
}
.f16 {
  font-size: 16px !important;;
}
.f18 {
  font-size: 18px !important;;
}
.f20 {
  font-size: 20px !important;;
}
.f30 {
  font-size: 30px !important;;
}
.height-40vh {
  height: 40vh !important;;
}
.height-400 {
  height: 400px !important;;
}
.transfor_rotate_-90 {
  -ms-transform: rotate(-90deg) !important;
  -webkit-transform: rotate(-90deg) !important;
  transform: rotate(-90deg) !important;
}
.transfor_rotate_90 {
  -ms-transform: rotate(90deg) !important;
  -webkit-transform: rotate(90deg) !important;
  transform: rotate(90deg) !important;
}
.transfor_rotate_-180 {
  -ms-transform: rotate(-180deg) !important;
  -webkit-transform: rotate(-180deg) !important;
  transform: rotate(-180deg) !important;
}
.transfor_rotate_180 {
  -ms-transform: rotate(180deg) !important;
  -webkit-transform: rotate(180deg) !important;
  transform: rotate(180deg) !important;
}
.display-none {
  display: none !important;;
}
.display-inlineblock {
  display: inline-block !important;;
}
.display-block {
  display: block !important;;
}
.prepend-icon {
  position: relative !important;
}
.prepend-icon i {
  color: #1b1e25 !important;
  color: rgba(27, 30, 37, 0.7) !important;
  font-size: 18px !important;
  height: 34px !important;
  right: 0px !important;
  line-height: 34px !important;
  position: absolute !important;
  text-align: center !important;
  top: 0 !important;
  width: 36px !important;
}
.height-combox {
  height: 37px !important;;
}
.pull-left {
  float: left !important;;
}
.pull-right {
  float: right !important;;
}
::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
}
::-webkit-scrollbar:hover {
  width: 5px !important;
  height: 5px !important;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1 !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888 !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555 !important;
  transform: all 1s ease !important;
}
.title-all {
  font-size: 18px !important;
  font-family: "Roboto-Medium" !important;
}
/*Button*/
.base-btn {
  border-radius: 4px !important;
  border: 0 !important;
}
.basic-btn {
  background: #006ee3 !important;
  border: 1px solid #006ee3 !important;
  color: #fff !important;
  transition: all 0.5s ease !important;
}
.basic-btn:hover {
  background: #007cff !important;
  border: 1px solid #007cff !important;
}
.outline-btn {
  background: #fff !important;
  border: 1px solid #006ee3 !important;
  color: #006ee3 !important;
  transition: all 0.5s ease !important;
}
.outline-btn:hover {
  border: 1px solid #006ee3 !important;
  background: #e5f0fc !important;
}
.default-btn {
  background: #e5f0fc !important;
  border: 1px solid #e5f0fc !important;
  color: #006ee3 !important;
  transition: all 0.5s ease !important;
}
.default-btn:hover {
  border: 1px solid #c1dfff !important;
  background: #c1dfff !important;
}
.bb-sm {
  height: 40px !important;
  font-size: 14px !important;
}
.bb-lg {
  height: 50px !important;
  font-size: 16px !important;
}

/*End Button*/

/*Form*/

.form-search {
  position: relative !important;
}
.form-search input {
  height: 40px !important;
  border: 1px solid #d5d8db !important;
  border-radius: 4px !important;
  padding-left: 35px !important;
  font-size: 14px !important;
}
.form-search input::placeholder {
  color: #c4c4c4 !important;
  font-size: 14px !important;
}
.form-search span {
  display: inline-block !important;
  position: absolute !important;
  top: 9px !important;
  left: 8px !important;
}
.form-search span i {
  font-size: 24px !important;
  color: #c4c4c4 !important;
}
.list-form {
}
.list-form .form-group {
  position: relative !important;
}
.list-form .form-group label {
  font-size: 14px !important;
  font-family: "Roboto-Medium" !important;
}
.list-form .form-group input {
  height: 40px !important;
  font-size: 16px !important;
  color: #3e4348 !important;
  transition: all 0.5s ease !important;
}
.list-form .form-group input::placeholder {
  font-size: 14px !important;
  color: #c4c4c4 !important;
}
.list-form .form-group input:focus {
  color: #006ee3 !important;
  border-color: #006ee3 !important;
  font-family: "Roboto-Medium" !important;
}
.list-form .form-group.form-erross input {
  border-color: #e1000a !important;
  color: #e1000a !important;
}
.list-form .form-group small.text-erross {
  display: none !important;
  color: #e1000a !important;
}
.list-form .form-group.form-erross small.text-erross {
  display: block !important;
}
.list-form .form-group span.img-cvv {
  position: absolute !important;
  right: 7px !important;
  bottom: 10px !important;
}

/*switch*/
.switch {
  position: relative !important;
  display: block !important;
  width: 34px !important;
  height: 20px !important;
}
.switch input {
  opacity: 0 !important;
  width: 0 !important;
  height: 0 !important;
}
.slider {
  position: absolute !important;
  cursor: pointer !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background-color: #ccc !important;
  -webkit-transition: 0.4s !important;
  transition: 0.4s !important;
}
.slider:before {
  position: absolute !important;
  content: "" !important;
  height: 18px !important;
  width: 18px !important;
  left: 1px !important;
  bottom: 1px !important;
  background-color: white !important;
  -webkit-transition: 0.4s !important;
  transition: 0.4s !important;
}
input:checked + .slider {
  background-color: #2f6bff !important;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2f6bff !important;
}
input:checked + .slider:before {
  -webkit-transform: translateX(14px) !important;
  -ms-transform: translateX(14px) !important;
  transform: translateX(14px) !important;
}
.slider.round {
  border-radius: 34px !important;
}
.slider.round:before {
  border-radius: 50% !important;
}
/* End switch */
/* Style Radio */
.container-radio {
  display: block !important;
  position: relative !important;
  padding-left: 35px !important;
  margin-bottom: 12px !important;
  cursor: pointer !important;
  font-size: 14px !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}
.container-radio input {
  position: absolute !important;
  opacity: 0 !important;
  cursor: pointer !important;
}
.radiomark {
  position: absolute !important;
  top: -2px !important;
  left: 0 !important;
  height: 20px !important;
  width: 20px !important;
  background-color: #fff !important;
  border-radius: 50% !important;
  border: 3px solid #bcc0c5 !important;
}
.container-radio:hover input ~ .radiomark {
  background-color: #ccc !important;
}
.container-radio input:checked ~ .radiomark {
  background-color: #2f6bff !important;
  border: 0 !important;
}
.radiomark:after {
  content: "" !important;
  position: absolute !important;
  display: none !important;
}
.container-radio input:checked ~ .radiomark:after {
  display: block !important;
}
.container-radio .radiomark:after {
  top: 4px !important;
  left: 4px !important;
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
  background: white !important;
}
/* End Style radio */

/*Style check*/
.container-check {
  display: block !important;
  position: relative !important;
  padding-left: 35px !important;
  margin-bottom: 12px !important;
  cursor: pointer !important;
  font-size: 14px !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}
.container-check input {
  position: absolute !important;
  opacity: 0 !important;
  cursor: pointer !important;
  height: 0 !important;
  width: 0 !important;
}
.checkmark {
  position: absolute !important;
  top: -2px !important;
  left: 0 !important;
  height: 20px !important;
  width: 20px !important;
  background-color: #fff !important;
  border-radius: 4px !important;
  border: 3px solid #bcc0c5 !important;
}
.container-check:hover input ~ .checkmark {
  background-color: #ccc !important;
}
.container-check input:checked ~ .checkmark {
  background-color: #2f6bff !important;
  border: 0 !important;
}
.checkmark:after {
  content: "" !important;
  position: absolute !important;
  display: none !important;
}
.container-check input:checked ~ .checkmark:after {
  display: block !important;
}
.container-check .checkmark:after {
  left: 7px !important;
  top: 3px !important;
  width: 6px !important;
  height: 11px !important;
  border: solid white !important;
  border-width: 0px 2px 2px 0px !important;
  -webkit-transform: rotate(45deg) !important;
  -ms-transform: rotate(45deg) !important;
  transform: rotate(45deg) !important;
}
/*End stylecheck*/

.dropdown-toggle.inv-dropdown {
  background-color: #fff !important;
  border: 1px solid #ced4da !important;
  border-radius: 4px !important;
  height: 40px !important;
  font-size: 14px !important;
  color: #2a2a2a !important;
  padding: 0 20px 0 8px !important;
  position: relative !important;
  width: 100% !important;
  text-align: left !important;
}

.dropdown-toggle.inv-dropdown:focus {
  box-shadow: none !important;
}

.caret {
  border-color: #888 transparent transparent transparent !important;
  border-style: solid !important;
  border-width: 5px 4px 0 4px !important;
  height: 0 !important;
  position: absolute !important;
  top: 14px !important;
  width: 0 !important;
  right: 6px !important;
  color: #fff !important;
}
.dropdown-toggle::after {
  position: absolute !important;
  right: 10px !important;
  top: 17px !important;
}
.dropdown-style .dropdown-menu {
  background-color: white !important;
  width: 100% !important;;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2) !important;
  border: none !important;
  /*margin-top: 38px !important;;*/
  padding-left: 0 !important;
  padding-top: 0 !important;
}

.dropdown-style .dropdown-menu #myInput {
  background: #fff !important;
  padding: 8px 10px !important;
  height: auto !important;
  border: 0 !important;
}

.option-toggle {
  border: 2px solid #aeb1b5 !important;
  background-color: #fff !important;
  position: relative !important;
  display: inline-block !important;
  cursor: pointer !important;
  flex: 0 0 16px !important;
  border-radius: 50% !important;
  height: 16px !important;
  width: 16px !important;
  margin-right: 10px !important;
}

.option-toggle input {
  cursor: pointer !important;
  position: absolute !important;
  top: -2px !important;
  left: -20000px !important;
}

.selected .option-toggle {
  border: 5px solid #2996cc !important;
}

.dropdown-style .dropdown-menu li a {
  display: flex !important;
  font-size: 14px !important;
  color: #343b42 !important;
  align-items: center !important;
  padding: 5px 10px !important;
}

.iv-search {
  display: flex !important;
  border-bottom: 1px solid #bcc1c7 !important;
  margin-bottom: 10px !important;
}

.iv-search svg {
  width: 20px !important;
  margin-left: 10px !important;
  height: 20px !important;
  margin-top: 10px !important;
}

.iv-search svg path {
  fill: #bcc1c7 !important;
}

.list-link .icon {
  width: 20px !important;
  height: 20px !important;
  border-radius: 50% !important;
  display: flex !important;
  text-align: center !important;
  color: #fff !important;
  align-items: center !important;
  justify-content: center !important;
  margin-right: 10px !important;
}
.radios {
  position: relative !important;
  cursor: pointer !important;
  width: 100% !important;
  padding-left: 10px !important;
  font-size: 14px !important;
}

.radios .label {
  position: relative !important;
  display: block !important;
  float: left !important;
  margin-right: 10px !important;
  width: 18px !important;
  height: 18px !important;
  border: 2px solid #aeb1b5 !important;
  border-radius: 100% !important;
  -webkit-tap-highlight-color: transparent !important;
}

.radios:hover .label:after {
  transform: scale(3.6) !important;
}

input[type="radio"]:checked + .label {
  border: 5px solid #2996cc !important;
}

input[type="radio"]:checked + .label:after {
  transform: scale(1) !important;
  transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9) !important;
  opacity: 1 !important;
}

.hidden {
  display: none !important;
}

@media (max-width: 576px) {
  .boxcont {
    padding: 0 40px 0 30px !important;
    margin-top: 30px !important;
  }

  .drag {
    left: 5px !important;
  }
}
/*End Form*/
/* Alert */
.alert-warning {
  color: #856404 !important;
  background-color: #fff3cd !important;
  border-color: #ffeeba !important;
}
.alert-dismissible {
  padding-right: 4rem !important;
}
.alert {
  position: relative !important;
  padding: 9px 50px 9px 35px !important;
  margin-bottom: 1rem !important;
  border: 1px solid transparent !important;
  border-radius: 4px !important;
  font-size: 14px !important;
}
.fade {
  transition: opacity 0.15s linear !important;
}
.alert-dismissible .close {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  padding: 9px 15px !important;
  color: inherit !important;
}
.bd-example::after {
  display: block !important;
  clear: both !important;
  content: "" !important;
}
.close {
  float: right !important;
  font-size: 1.5rem !important;
  font-weight: normal !important;
  line-height: 1 !important;
  color: #000 !important;
  text-shadow: 0 1px 0 #fff !important;
  opacity: 0.5 !important;
}
.alert-edit strong {
}
.alert-edit strong i {
  font-size: 20px !important;
  position: absolute !important;
  left: 8px !important;
  top: 8px !important;
}
.alert-edit.alert-warning strong i {
  color: #e28d1e !important;
}
.alert-edit.alert-primary strong i {
  color: #006ee3 !important;
}
.alert-edit.alert-danger strong i {
  color: #e1000a !important;
}
.alert-edit.alert-warning {
  background-color: #ffecd2 !important;
}
.alert-edit.alert-primary {
  background-color: #e5f0fc !important;
}
.alert-edit.alert-danger {
  background-color: #ffcbcd !important;
}
.icon-form {
  position: absolute !important;
  display: inline-block !important;
  right: 10px !important;
  bottom: 10px !important;
}
.icon-form i {
  font-size: 20px !important;
}

.form-card {
}
.form-card label {
}
.form-card .form-input {
  position: relative !important;
}
.form-card .form-input input {
}
.form-card .form-input input:nth-child(1) {
  border-radius: 4px 4px 0 0 !important;
}
.form-card .form-input input:nth-child(2) {
  width: 50% !important;
  float: left !important;
  border-top: 1px solid #fff !important;
  border-radius: 0 0 0 4px !important;
  border-right: 1px solid #fff !important;
}
.form-card .form-input input:nth-child(3) {
  width: 50% !important;
  border-top: 1px solid #fff !important;
  border-radius: 0 0 4px 0 !important;
}
.form-card .form-input input:nth-child(2):focus {
  border-top: 1px solid #006ee3 !important;
  border-right: 1px solid #006ee3 !important;
}
.form-card .form-input input:nth-child(3):focus {
  border-top: 1px solid #006ee3 !important;
}
.form-card .form-input ul.fi-img {
  position: absolute !important;
  right: 5px !important;
}
.form-card .form-input li {
  width: 32px !important;
  float: left !important;
  margin-right: 2px !important;
}
.form-card .form-input li img {
  width: 100% !important;
}
.form-card .form-input ul.fi-img.fi-card {
  top: 7px !important;
}
.form-card .form-input ul.fi-img.fi-cvv {
  bottom: 8px !important;
}
/*Header*/
.header {
  background: #1765aa !important;
  position: relative !important;
}
.header-before:before {
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  background: #1765aa !important;
  width: 100% !important;
  height: 209px !important;
  top: 50px !important;
  z-index: -1 !important;
}
.logo {
  text-align: center !important;
  width: auto !important;
  padding: 15px 0 !important;
}
.logo a {
  display: inline-block !important;
  width: 130px !important;
}
.logo a img {
}
.logo h1 {
  color: #fff !important;
  margin-top: 16px !important;
  font-size: 24px !important;
  /*font-family: 'Roboto-Medium'*/
}
/*End Header*/

/*Main*/
.main {
  max-width: 800px !important;
  margin: 0 auto !important;
  background: #fff !important;
  border-radius: 5px !important;
  box-shadow: 0 0px 32px rgba(0, 0, 0, 0.06) !important;
}
.title-main {
  /*padding: 15px !important;*/
  position: relative !important;
  background-image: linear-gradient(white, #e1e1e1) !important;
  border-radius: 5px 5px 0 0 !important;
}
.title-main .nav-tabs {
  display: inline-block !important;
  width: 100% !important;
  padding: 16px 15px !important;
}
.title-main .nav-tabs .nav-item {
  /*width: 100% !important;*/
  float: left !important;
}
.title-main .nav-tabs .nav-item .nav-link {
  display: block !important;
  border: 0 !important;
  border-radius: 0 !important;
  padding: 0 !important;
  /* margin-bottom: 15px !important; */
  line-height: 24px !important;
  font-size: 12px !important;
  color: #333 !important;;
  font-family: "Roboto-Medium" !important;
  /*text-transform: uppercase !important;*/
  border: 1px solid #dcdcdc !important;
  padding: 4px 10px !important;
  background: #fff !important;
  border-radius: 25px !important;
}
.title-main .nav-tabs .nav-item .nav-link span {
  display: inline-block !important;
  margin-right: 5px !important;
}
.btn .bx {
  font-size: 18px !important;
  vertical-align: text-bottom !important;
}
.title-main .nav-tabs .nav-item .nav-link:hover {

}
.title-main .nav-tabs .nav-item .nav-link.active {
  display: none !important;
}
.list-btn {
  position: absolute !important;
  top: 12px !important;
  right: 15px !important;
  width: auto  !important;
}
.list-btn button,
.list-btn a {
  margin-left: 10px !important;
}
/*.form-detail{
    border: 1px solid #dcdcdc !important;
    padding: 10px 15px !important;
    border-radius: 4px !important;
    margin-bottom: 15px !important;
}*/
.form-detail h1 {
  font-size: 14px !important;
  padding-bottom: 5px !important;
  border-bottom: 1px solid #dcdcdc !important;
  margin-bottom: 10px !important;;
}
.form-detail .form-group {
  margin-bottom: 5px !important;
}
.form-detail .form-group:last-child {
  margin-bottom: 0px !important;
}
.form-detail .form-group label,
.form-detail .form-group p.form-control-plaintext {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  font-size: 12px !important;
}
.form-success {
  text-align: center !important;
}
.form-success span {
  font-size: 100px !important;
  margin-bottom: 10px !important;
  display: inline-block !important;
  color: #4caf50 !important;
}
.form-success h1 {
}

.main-content {
  padding: 15px !important;
  background: #fafafa !important;
}
.box-detail table td,
.box-detail table th {
  font-size: 12px !important;
}

.old-price {
  text-decoration: line-through !important;
  color: #a1a1a1 !important;
}
.new-price {
  color: #ff0000 !important;
}
.box-title {
  margin-bottom: 10px !important;
}
.box-title h3 {
  font-size: 14px !important;
}
.box-content {
  background: #fff !important;
  border-radius: 5px !important;
  padding: 10px !important;
  font-size: 12px !important;
}
/*-----hợp đồng-----*/
.contract {
  max-width: 980px !important;
  margin: 0 auto !important;
  font-size: 14px !important;
}

.contract p {
  margin: 5px 0 !important;
}

.txt-center {
  text-align: center !important;
}

.txt-bold {
  font-weight: bold !important;
}

.fonsize-16 {
  font-size: 16px !important;
}

.fonsize-20 {
  font-size: 20px !important;
}

.fonsize-12 {
  font-size: 12px !important;
}

.contract {
  padding: 15px !important;
  background: #fff !important;
  border: 1px solid #eeeded !important;
  box-shadow: 0 0px 32px rgba(0, 0, 0, 0.06) !important;
}

.contract ol {
  counter-reset: item !important;
  /*list-style-type: none !important;*/
  padding: 0 !important;
  padding-left: 20px !important;
}

.contract li {
  margin-bottom: 10px !important;
  line-height: 18px !important;
  list-style: inherit !important;;
}

.contract ol li ol {
  list-style-type: none !important;
  padding-left: 60px !important;
}

.contract ol li ol li {
  position: relative !important;
}

.contract ol li:before {
  content: counters(item, ".") " " !important;
  counter-increment: item !important;
  font-weight: bold !important;
  color: #fff !important;
}

.contract li ol li::before {
  color: #000 !important;
  position: absolute !important;
  left: -30px !important;
}

.contract li ol li ol li::before {
  font-weight: normal !important;
  margin-right: 5px !important;
  color: #000 !important;
}

.contract ol li ul {
  list-style-type: lower-alpha !important;;
  margin-top: 10px !important;
  padding-left: 0 !important;
  margin-left: -15px !important;
}

.contract ol li ul li {
  padding-left: 16px !important;
}

.contract ol li ul li::before {
  counter-increment: inherit !important;
  content: normal !important;
}

.contract h1 {
  counter-reset: subsection !important;
  font-size: 14px !important;
  display: inline-block !important;
  margin: 0 0 10px !important;
}

.contract .paddL20 {
  padding-left: 20px !important;
}

.txt-tranf {
  text-transform: uppercase !important;
}

.contract .form-control {
  border: 0 !important;
  border-bottom: 1px dashed #000 !important;
  border-radius: 0 !important;
  padding: 0 10px !important;
  color: #000 !important;
  font-size: 14px !important;
}

.contract .form-control:focus {
  outline: none !important;
}

.contract .form-style {
  list-style-type: lower-alpha !important;;
  font-style: italic !important;
  margin-bottom: 30px !important;
  padding-left: 40px !important;
}

.contract h3 {
  font-style: italic !important;
  font-weight: bold !important;
  font-size: 14px !important;
  margin: 0 0 10px !important;
}

.contract ul.form {
  list-style: none !important;
  padding: 0 !important;
  display: flex !important;
  flex-wrap: wrap !important;
  width: 70% !important;
}

.contract ul.form li {
  width: 50% !important;
}

.contract .w50 {
  width: 50px !important;
}

.contract .w100 {
  width: 100% !important;
}

.magb20 {
  margin-bottom: 20px !important;
}

.magb10 {
  margin-bottom: 10px !important;
}

.magt10 {
  margin-top: 10px !important;
}

.contract .clred {
  color: red !important;
}

.contract .flex {
  display: flex !important;
}

.contract .form-style1 li::before {
  margin-left: -8px !important;
}

.contract .form-style1 h1 {
  text-transform: uppercase !important;
  font-size: 16px !important;
  /*text-decoration: underline !important;*/
  font-family: "Roboto-Medium" !important;
}

.contract .form-style1 .form-style {
  font-style: normal !important;
  padding-left: 35px !important;
}

.contract .form-style1 li ol li ul {
  padding-left: 0 !important;
}

.contract .form-style1 li ul {
  padding-left: 44px !important;
}

.contract .form-style1 li ul li ol,
.contract .form-style2,
.contract ol li ul.form-style2 {
  padding-left: 10px !important;
  margin-top: 10px !important;
  list-style-type: "-" !important;
}

.contract ol li ul.form-style2 {
  margin: 0 !important;
}

.contract ol.form-style2 li:before {
  content: none !important;
}

.contract ol.form-style2 li {
  padding-left: 10px !important;
}

.contract .form-style1 li ul li ol li {
  padding-left: 15px !important;
}

.contract table {
  border-collapse: collapse !important;
  border-top: 1px solid #000 !important;
  border-left: 1px solid #000 !important;
  width: 100% !important;
  margin-bottom: 10px !important;
}

.contract table td,
.contract table th {
  border-bottom: 1px solid #000 !important;;
  border-right: 1px solid #000 !important;;
  padding: 10px 5px !important;
}

.contract .bg-head {
  background: #9bc2e6 !important;
}

.contract .bg-head1 {
  background: #fabf8f !important;
}

.contract table th {
  text-align: center !important;
}

.contract .nowrap {
  white-space: nowrap !important;
}

.contract mark {
  margin: 0 5px !important;
  padding: 0 5px !important;
  background-color: #ffe34d !important;
}

.contract .form-style3 {
  list-style-type: none !important;
  padding-left: 12px !important;;
}

.contract .form-style3 li::before {
  content: "✓" !important;
  color: #000 !important;
  position: absolute !important;
  left: 4px !important;
  margin-left: 0 !important;
}

.contract .form-style3 li {
  padding-left: 30px !important;
  position: relative !important;
}

.contract .txt-under {
  text-decoration: underline !important;
}
.form-detail {
  border: 1px solid #eeeded !important;
  padding: 10px 15px !important;
  border-radius: 4px !important;
  margin-bottom: 15px !important;
  box-shadow: 0 0px 32px rgba(0, 0, 0, 0.06) !important;
}
.form-detail h1 {
  font-size: 16px !important;
  padding-bottom: 5px !important;
  border-bottom: 1px solid #dcdcdc !important;
  margin-bottom: 10px !important;;
}
.form-detail .form-group {
  margin-bottom: 5px !important;
}
.form-detail .form-group:last-child {
  margin-bottom: 0px !important;
}
.form-detail .form-group label,
.form-detail .form-group p.form-control-plaintext {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.head-contract {
}
.head-contract table {
  border: 0 !important;
  margin-bottom: 30px !important;
}
.head-contract table tr td {
  border: 0 !important;;
  border-bottom: 2px solid #dcdcdc !important;;
}
.head-contract table tr td label {
  font-size: 14px !important;
  font-family: "Roboto-Medium" !important;
  margin: 0 !important;
}
.head-contract table tr td p {
  font-size: 12px !important;
  margin: 0 !important;
  line-height: 18px !important;
}
/*End hợp đồng*/

.main-button {
}
.main-button ul {
  display: flex !important;
  margin: 0 -5px !important;
}
.main-button ul li {
  display: flex !important;
  width: 50% !important;
  padding: 0 5px !important;
}
.main-button ul li a {
  color: #fff !important;;
  width: 100% !important;
}

.tab-child-list {
  max-width: 500px !important;
  margin: 10px auto 20px !important;
  border: 1px solid #eaeaea !important;
  border-radius: 5px !important;
  /* -webkit-box-shadow: 0px 1px 16px -8px rgba(0,0,0,0.25) !important; */
  -moz-box-shadow: 0px 1px 16px -8px rgba(0, 0, 0, 0.25) !important;
  box-shadow: 0px 1px 16px -8px rgba(0, 0, 0, 0.25) !important;
  justify-content: space-around !important;
  background: #fff !important;
}
.tab-child-list li {
  /*width: 33.33% !important;*/
  text-align: center !important;
  margin: 0 !important;;
  padding: 0 5px !important;
}
.tab-child-list li a {
  border: 0 !important;;
  color: #333 !important;;
  font-family: "Roboto-Medium" !important;
  padding: 10px 5px !important;
  font-size: 12px !important;
}
.tab-child-list li a.active,
.tab-child-list li a:hover {
  border: 0 !important;
  color: #1765aa !important;;
  position: relative !important;
}
.tab-child-list li a.active:before,
.tab-child-list li a:hover:before {
  width: 100% !important;
  position: absolute !important;
  content: "" !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  height: 4px !important;
  background: #1765aa !important;
  border-radius: 10px 10px 0px 0px !important;
}
.tab-child-content {
}

/*End Main*/

/*Footer*/
footer {
  margin-top: 30px !important;
}
.footer-title p {
  font-size: 12px !important;
  color: #848484 !important;
  /* font-family: 'Roboto-Bold' !important; */
  display: inline-block !important;
  margin-bottom: 0 !important;
  line-height: 18px !important;
  text-align: center !important;
  width: 100% !important;
}
.footer-title a {
  display: inline-block !important;
  width: 64px !important;
}
.footer-title p a img {
  vertical-align: text-bottom !important;
}
.footer-about {
  margin: 5px 0 !important;
}
.footer-about p {
  color: #848484 !important;
  font-size: 11px !important;
  margin-bottom: 8px !important;
  line-height: 12px !important;
  text-align: center !important;
}
.footer-about p b a {
  color: #848484 !important;;
}

.footer-logo {
  padding: 0 !important;
  margin: 0 !important;
  text-align: center !important;
}
.footer-logo li {
  list-style: none !important;
  display: inline-block !important;
  margin: 0 3px !important;
}
.footer-logo li a {
  display: inherit !important;
  height: 24px !important;
  filter: grayscale(100%) !important;
  opacity: 0.5 !important;
}
.footer-logo li a img {
  max-width: 100% !important;
  max-height: 100% !important;
}
/*End Footer*/
</style>
