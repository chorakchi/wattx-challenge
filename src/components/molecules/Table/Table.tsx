import {
  StyledTable,
  StyledWrapper,
  StyledHeading,
  TextStyled,
} from "./Table.styled";
import { TableProps } from "./Table.interface";
import { Typography } from "components";
import Image from "next/image";

export const Table: React.FC<TableProps> = ({
  title,
  onSelect,
  tableHead,
  items,
  noResultsLabel = "no Result",
  ...props
}: TableProps) => {
  return (
    <StyledWrapper {...props}>
      <StyledTable>
        <thead>
          <tr>
            {tableHead.map((item, i) => (
              <StyledHeading as="td" key={"heading" + i}>
                <Typography as="span">{item}</Typography>
              </StyledHeading>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={"row" + i}>
              {item.map((innerItem, j) => (
                <td key={"text" + j}>
                  {j === 0 ? (
                    <Image
                      className="icon"
                      src={
                        "https://s3-symbol-logo.tradingview.com/crypto/XTVC" +
                        innerItem +
                        ".svg"
                      }
                      width={52}
                      height={52}
                    />
                  ) : (
                    <TextStyled
                      negative={innerItem < 0}
                      number={typeof innerItem === "number" ? true : false}
                    >
                      {typeof innerItem === "number"
                        ? Number(innerItem).toLocaleString()
                        : innerItem}
                    </TextStyled>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      {!items.length && <Typography>{noResultsLabel}</Typography>}
    </StyledWrapper>
  );
};
