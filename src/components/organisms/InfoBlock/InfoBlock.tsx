import { StyledWrapper, StyledText } from "./InfoBlock.styled";
import { InfoBlockProps } from "./InfoBlock.interface";
import Image from "next/image";
import { SVG } from "components";

export const InfoBlock: React.FC<InfoBlockProps> = ({
  image,
  title,
  checkBadge = false,
  proBadge = false,
  content,
  link,
  ...props
}: InfoBlockProps) => {
  return (
    <StyledWrapper {...props}>
      {image && (
        <Image width={image.width} height={image.height} src={image.src} />
      )}
      <StyledText bold>
        {title}
        {checkBadge && (
          <SVG
            name="greenCheck"
            size="small"
            color="#2DE577"
            className="check"
          />
        )}
      </StyledText>
      {proBadge && (
        <SVG name="proBadge" size="large" color="white" className="pro" />
      )}
      <StyledText>{content}</StyledText>
      {link && (
        <StyledText as="a" href={link.url} target="_blank">
          {link.label}
        </StyledText>
      )}
    </StyledWrapper>
  );
};
