import Sections from "./sections";

export default function Featured() {
  const items = [
    {
      title: "Sale",
      href: "/sale",
      img: "/sale.webp",
      imgAlt: "sale",
    },
    {
      title: "Sympathy",
      href: "/sympathy",
      img: "/sympathy.webp",
      imgAlt: "sympathy",
    },
    {
      title: "Gifts",
      href: "/gifts",
      img: "/gifts.jpg",
      imgAlt: "gifts",
    },
    {
      title: "Plants",
      href: "/Plants",
      img: "/plants.jpg",
      imgAlt: "plants",
    },
    {
      title: "Birthday",
      href: "/birthday",
      img: "/birthday.webp",
      imgAlt: "birthday",
    },
    {
      title: "Same Day Delivery",
      href: "/same_day_delivery",
      img: "/sddelivery.webp",
      imgAlt: "Same Day Delivery",
    },
  ];
  return <Sections title={"Featured Flowers & Gifts"} items={items}></Sections>;
}
