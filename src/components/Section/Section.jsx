import PropTypes from "prop-types";
import { SectionStyle, Title } from "./Section.styles";

const Section = ({ title = null, children }) => {
  return (
    <SectionStyle>
      {title && <Title />}
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;