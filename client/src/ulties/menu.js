import icons from "./icons";
const {
  FaUserCircle,
  GrOrderedList,
  AiOutlineShoppingCart,
  MdOutlineCategory,
} = icons;
export const sidebarMenu = [
  {
    id: 1,
    path: "product",
    text: "Products",
    icon: <AiOutlineShoppingCart size="24px"></AiOutlineShoppingCart>,
  },
  // {
  //   id: 1,
  //   path: "create-product",
  //   text: "Create Products",
  //   icon: <AiOutlineShoppingCart size="24px"></AiOutlineShoppingCart>,
  // },
  {
    id: 2,
    path: "order",
    text: "Orders",
    icon: <GrOrderedList size="24"></GrOrderedList>,
  },
  {
    id: 3,
    path: "user",
    text: "Customers",
    icon: <FaUserCircle size="24"></FaUserCircle>,
  },
  {
    id: 4,
    path: "category",
    text: "Category",
    icon: <MdOutlineCategory size="24"></MdOutlineCategory>,
  },
];
