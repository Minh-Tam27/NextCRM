// single pages
import homePage from '../pages/Home.vue'
import loginPage from '../pages/Login.vue'
import notFoundPage from '../pages/NotFound.vue'
import calendar from '../pages/calendar/calendar.vue'
import calendarAdd from '../pages/calendar/calendar-add.vue'
import calendarDetail from '../pages/calendar/calendar-detail.vue'
import staff from '../pages/staff/index.vue'
import attentdent from '../pages/attentdent/index.vue'
import attentdentDetail from '../pages/attentdent/detail.vue'
import merchant from '../pages/merchant/merchant.vue'
import merchantAdd from '../pages/merchant/merchant-add.vue'
import staffAdd from '../pages/staff/staff-add.vue'
import staffEdit from '../pages/staff/staff-edit.vue'
import role from '../pages/role/role.vue'
import roleAdd from '../pages/role/role-add.vue'
import roleEdit from '../pages/role/role-edit.vue'
import staffDetail from '../pages/staff/staff-detail.vue'
import reportAttentdent from '../pages/report/report-attentdent.vue'
import reportMerchant from '../pages/report/report-merchant.vue'
import reportWork from '../pages/report/report-work.vue'
import changePassword from '../pages/ChangePass.vue'
import contract from '../pages/contract/'
import contractDetail from '../pages/contract/contract-detail.vue'
import contractAdd from '../pages/contract/contract-add.vue'
import contractEdit from '../pages/contract/contract-edit.vue'
import pdfContract from '../pages/export-to-pdf/'
import contractDetailEcommerce from '../pages/contract/contract-detail-ecommerce.vue'
import contractDetailPaper from '../pages/contract/contract-detail-paper.vue'
import reviewHDDT from '../pages/review-hddt/review'
// import { routePropResolver } from './util'
import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | home` }
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage,
    meta: { title: `${DOMAIN_TITLE} | login`, layout: 'login' }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  },
  {
    path: '/calendar',
    component: calendar,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Lich làm việc` }
  },
  {
    path: '/calendar/add',
    component: calendarAdd,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Thêm mới lịch làm việc` }
  },
  {
    path: '/calendar/detail',
    component: calendarDetail,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Chi tiết lịch làm việc` }
  },
  {
    path: '/merchant',
    component: merchant,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Merchant` }
  },
  {
    path: '/reviewHDDT',
    component: reviewHDDT,
    meta: { title: `${DOMAIN_TITLE} | Review`, layout: 'login' }
  },
  {
    path: '/merchant-add',
    component: merchantAdd,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Thêm merchant` }
  },
  {
    path: '/staff',
    component: staff,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Quản lý nhân viên` }
  },
  {
    path: '/staff-add',
    component: staffAdd,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Thêm mới nhân viên` }
  },
  {
    path: '/staff-edit',
    component: staffEdit,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Sửa nhân viên` }
  },
  {
    path: '/attentdent',
    component: attentdent,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Quản lý điểm danh` }
  },
  {
    path: '/attentdent/detail',
    component: attentdentDetail,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Chi tiết điểm danh` }
  },
  {
    path: '/role',
    component: role,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Quản lý phân quyền` }
  },
  {
    path: '/contract-detail-ecommerce/:id',
    component: contractDetailEcommerce,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Chi tiết hợp đồng điện tử ` }
  },
  {
    path: '/contract-detail-paper/:id',
    component: contractDetailPaper,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Chi tiết hợp đồng giấy ` }
  },
  {
    path: '/role-add',
    component: roleAdd,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Thêm mới quyền` }
  },
  {
    path: '/role-edit/:id',
    component: roleEdit,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Cập nhật quyền` }
  },
  {
    path: '/staff-detail/:id',
    component: staffDetail,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Chi tiết nhân viên` }
  },
  {
    path: '/report-attentdent',
    component: reportAttentdent,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Báo cáo chấm công` }
  },
  {
    path: '/report-merchant',
    component: reportMerchant,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Báo cáo khách hàng` }
  },
  {
    path: '/report-work',
    component: reportWork,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Báo cáo công việc` }
  },
  {
    path: '/change-pass',
    component: changePassword,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Thay đổi mật khẩu` }
  },
  {
    path: '/contract',
    component: contract,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Quản lý hợp đồng` }
  },
  {
    path: '/contract-add',
    component: contractAdd,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Thêm mới hợp đồng` }
  },
  {
    path: '/contract-edit',
    component: contractEdit,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Sửa hợp đồng` }
  },
  {
    path: '/contract/detail/',
    component: contractDetail,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Chi tiết hợp đồng` }
  },
  {
    path: '/contract-electronic',
    component: contract,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Quản lý hợp đồng điện tử` }
  },
  {
    path: '/contract-electronic-add',
    component: contractAdd,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Thêm mới hợp đồng điện tử` }
  },
  {
    path: '/contract-electronic-edit',
    component: contractEdit,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Sửa hợp đồng điện tử` }
  },
  {
    path: '/contract-electronic/detail/',
    component: contractDetail,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Chi tiết hợp đồng điện tử` }
  },
  {
    path: '/pdf-contract/:id',
    component: pdfContract,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Hợp đồng PDF`, layout: 'login' }
  }
]
