import Heading, { HeadingProps } from './heading';
import Typography, { TypographyProps } from './typography';
import Paragraph, { ParagraphProps } from './paragraph';
import Text, { TextProps } from './text';

export { HeadingProps, TypographyProps, ParagraphProps, TextProps };

type ITypography = typeof Typography & {
  Heading: typeof Heading;
  Paragraph: typeof Paragraph;
  Text: typeof Text;
};

const DefaultTypo = Typography as ITypography;
DefaultTypo.Heading = Heading;
DefaultTypo.Paragraph = Paragraph;
DefaultTypo.Text = Text;

export default DefaultTypo;
