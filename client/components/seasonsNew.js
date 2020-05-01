import ProductList from "./productList";

export default function SeasonsNew() {
  const items = [
    {
      title: "Full of Joy™ Bouquet",
      salePrice: "$50 - $67.50",
      price: "$42 - $44",
      href: "/product/1",
      img: "/products/1.jpg",
      imgAlt: "Full of Joy™ Bouquet",
    },
    {
      title: "Rainbow Discovery Peruvian Lily Bouquet",
      price: "$42 - $44",
      href: "/product/2",
      img: "/products/2.jpg",
      imgAlt: "Rainbow Discovery Peruvian Lily Bouquet",
    },
    {
      title: "Darling Lavender & White Tulips with Vase",
      salePrice: "$50 - $67.50",
      price: "$42 - $44",
      shippedInBox: true,
      href: "/product/3",
      img: "/products/3.jpg",
      imgAlt: "Darling Lavender & White Tulips with Vase",
    },
  ];
  return (
    <ProductList
      title={"New Spring Flowers"}
      items={items}
      columns={3}
    ></ProductList>
  );
}
