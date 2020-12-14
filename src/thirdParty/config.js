export default {
  configGender: [{
    id: 'MALE', text: 'Nam'
  },
  {
    id: 'FEMALE', text: 'Nữ'
  }],

  optionCity: [
    { id: false, text: 'Tất cả' }
  ],

  optionUserStatus: [
    { id: false, text: 'Tất cả' },
    {
      text: 'Hoạt động',
      id: 'ACTIVE'
    },
    {
      text: 'Khóa',
      id: 'INACTIVE'
    }
  ],

  optionComphase: [
    { id: false, text: 'Tất cả' },
    { id: 'PROBATION', text: 'Thử việc' },
    { id: 'OFFICIAL', text: 'Chính thức' }
  ],

  listStatusContract: [
    { id: false, text: 'Tất cả' },
    {
      id: 'NEW',
      text: 'Mới tạo'
    },
    {
      id: 'WAITING_APPROVED_FEE',
      text: 'Chờ duyệt phí'
    },
    {
      id: 'APPROVED_FEE',
      text: 'Đã duyệt phí'
    },
    {
      id: 'SENT',
      text: 'Đã gửi MC'
    },
    {
      id: 'WAITING_SIGN',
      text: 'Chờ ký'
    },
    {
      id: 'SIGNING',
      text: 'Đang ký'
    },
    {
      id: 'SIGNED_MISS_IMAGE',
      text: 'Đã ký - Thiếu ảnh'
    },
    {
      id: 'SIGNED_WAITING_APPROVED',
      text: 'Đã ký - Chờ duyệt'
    },
    {
      id: 'APPROVED',
      text: 'Đã duyệt'
    },
    {
      id: 'REJECTED_SA',
      text: 'Bị từ chối SA'
    },
    {
      id: 'REJECTED_MC',
      text: 'Bị từ chối MC'
    },
    {
      id: 'REJECTED_MA',
      text: 'Bị từ chối MA'
    },
    {
      id: 'CANCELED',
      text: 'Đã hủy'
    },
    {
      id: 'EXPIRED',
      text: 'Hết hạn'
    }
  ],

  formContract: [
    {
      id: false,
      text: 'Tất cả'
    },
    {
      id: 'E_CONTRACT',
      text: 'Hợp đồng điện tử'
    },
    {
      id: 'PAPER_CONTRACT',
      text: 'Hợp đồng giấy'
    }],

  isDefaulValue: [{
    id: false,
    text: 'Đề xuất'
  },
  {
    id: true,
    text: 'Mặc định'
  }],

  customerType: [
    { id: false, text: 'Tất cả' },
    { id: 'COMPANY', text: 'Doanh nghiệp' },
    { id: 'HOUSEHOLD', text: 'Hộ kinh doanh' },
    { id: 'INDIVIDUAL', text: 'Cá nhân' }
  ]
}
