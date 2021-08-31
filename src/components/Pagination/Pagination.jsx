import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import {
  breakCss,
  breakLinkCss,
  containerCss,
  pageCss,
  pageLinkCss,
  activePageCss,
  activeLinkCss,
  arrowItemsCss,
  arrowLinksCss,
  disabledCss,
} from "./Pagination.styles";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const Pagination = ({ currentPage, totalPages, onClick }) => {
  return (
    <ReactPaginate
      initialPage={currentPage - 1}
      disableInitialCallback={true}
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      previousLabel={<TiArrowLeft size={28} />}
      nextLabel={<TiArrowRight size={28} />}
      breakLabel={<IoEllipsisHorizontalSharp size={24} />}
      onPageChange={onClick}
      breakClassName={breakCss}
      breakLinkClassName={breakLinkCss}
      containerClassName={containerCss}
      pageClassName={pageCss}
      pageLinkClassName={pageLinkCss}
      activeClassName={activePageCss}
      activeLinkClassName={activeLinkCss}
      previousClassName={`${arrowItemsCss} previous`}
      nextClassName={`${arrowItemsCss} next`}
      previousLinkClassName={arrowLinksCss}
      nextLinkClassName={arrowLinksCss}
      disabledClassName={disabledCss}
    />
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Pagination;