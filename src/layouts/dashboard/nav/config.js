// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// component
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: icon('ic_blog'),
  cart: icon('ic_cart'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  {
    title: 'xx dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user pets (cards)',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product rewards (list)',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog membership',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'xx ogin',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'xx Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
