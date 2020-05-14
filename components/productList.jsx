import Link from "next/link";
import theme from "../styles/theme";
import BoxIcon from "../components/boxIcon";

export default function ProductList(props) {
  const rows = [];
  let row = [];
  const columns = Math.max(2, Math.min(4, props.columns));
  props.items.forEach((item) => {
    if (row.length === columns) {
      rows.push(row);
      row = [];
    }
    row.push(item);
  });
  if (row.length > 0) {
    rows.push(row);
  }

  const fullWidth = `${100 / (columns + 1)}%`;

  return (
    <React.Fragment>
      <h2
        style={{
          textAlign: "center",
          fontFamily: theme.fonts.sectionTitle,
          fontWeight: theme.fonts.productTitleWeight,
        }}
      >
        {props.title}
      </h2>
      {rows.map((row, indexRow) => {
        return (
          <div className="rootWrapper" key={indexRow}>
            <div className="sectionsWrapper">
              {row.map((item, index) => {
                return (
                  <Link href={item.href} key={index}>
                    <a className="item">
                      <div className="contentWrapper">
                        <div className="content">
                          <img src={item.img} alt={item.imgAlt} />
                          <h3 className="link">{item.title}</h3>
                          {item.salePrice && (
                            <div className="link sale">
                              {item.salePrice} SALE
                            </div>
                          )}
                          <div
                            className={
                              item.salePrice ? "link crossedOut" : "link price"
                            }
                          >
                            {item.price}
                          </div>
                          {item.shippedInBox && (
                            <React.Fragment>
                              <div className="link shippedInBox">
                                <BoxIcon />
                                Shipped in a Box
                              </div>
                            </React.Fragment>
                          )}
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .rootWrapper {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: 0 -7px;
        }

        .sectionsWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          text-align: center;
        }

        .item {
          text-decoration: none;

          color: ${theme.colors.productTitle};
        }

        @media screen and (max-width: 768px) {
          .item {
            width: 100%;
          }
        }

        @media screen and (min-width: 768px) and (max-width: 1240px) {
          .item {
            width: 50%;
          }
        }

        @media screen and (min-width: 1240px) {
          .item {
            width: ${fullWidth};
            margin: 0 25px;
          }
        }

        .contentWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content {
          flex-grow: 1;
        }

        .link {
          margin: 0 20px;
          text-align: center;
          font-family: ${theme.fonts.link};
          font-weight: ${theme.fonts.productNameWeight};
          font-size: ${theme.fonts.productNameSize};
          font: ${theme.fonts.productListFont};
        }

        .sale {
          color: ${theme.colors.red};
        }

        .price {
          color: ${theme.colors.grey};
        }

        .crossedOut {
          color: ${theme.colors.grey};
          font: ${theme.fonts.productListFontСrossedOut};
          text-decoration: line-through;
        }

        .shippedInBox {
          color: ${theme.colors.shippedInBox};
          font: ${theme.fonts.productShippedInBox};
        }
      `}</style>
    </React.Fragment>
  );
}
