import Sections from "./sections";

export default function SeasonsFlowers() {
  const items = [
    {
      title: "Tulips",
      href: "/flowers/tulips",
      img: "/tulips.jpg",
      imgAlt: "Tulips",
    },
    {
      title: "Daffodils",
      href: "/flowers/daffodils",
      img: "/daffodils.webp",
      imgAlt: "Daffodils",
    },
    {
      title: "Hydrangeas",
      href: "/flowers/hydrangeas",
      img: "/hydrangeas.jpg",
      imgAlt: "Hydrangeas",
    },
    {
      title: "Sunflowers",
      href: "/flowers/sunflowers",
      img: "/sunflowers.jpg",
      imgAlt: "Sunflowers",
    },
    {
      title: "Daisies",
      href: "/flowers/daisies",
      img: "/daisies.jpg",
      imgAlt: "Daisies",
    },
    {
      title: "Spring Plants",
      href: "/flowers/springplants",
      img: "/splants.jpg",
      imgAlt: "Spring Plants",
    },
  ];
  return <Sections title={"Shop All Spring Flowers"} items={items}></Sections>;
}
