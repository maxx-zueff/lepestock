import Link from "next/link";
import theme from "../styles/theme";

export default function SeasonsFlowers(props) {
  return (
    <React.Fragment>
      <h1
        style={{
          textAlign: "center",
          fontFamily: theme.fonts.sectionTitle,
          fontWeight: theme.fonts.sectionWeight,
        }}
      >
        {props.title}
      </h1>

      <div className="rootWrapper">
        <div className="sectionsWrapper">
          {props.items.map((item, index) => {
            return (
              <Link href={item.href} key={index}>
                <a className="item">
                  <img src={item.img} alt={item.imgAlt} />
                  <h2 className="link">{item.title}</h2>
                </a>
              </Link>
            );
          })}
        </div>

        <style jsx>{`
          .rootWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 -5px;
          }

          .sectionsWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            text-align: center;
            font-family: ${theme.fonts.link};
            font-weight: ${theme.fonts.linkWeight};
          }

          .item {
            text-decoration: none;
            color: ${theme.colors.link};
          }

          @media screen and (max-width: 768px) {
            .item {
              width: 50%;
            }
          }

          @media screen and (min-width: 768px) and (max-width: 1240px) {
            .item {
              width: 33.33%;
            }
          }

          @media screen and (min-width: 1240px) {
            .item {
              flex-grow: 1;
              margin: 0 5px;
            }
          }

          .item:hover {
            text-decoration: underline;

            color: ${theme.colors.linkHover};
          }

          .link {
            text-align: center;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
}
