import ReactPaginate from "react-paginate";

function Pagination(props) {
  const { dataCount, handlePageClick } = props;
  return (
    <ReactPaginate
      className="flex justify-center space-x-4 text-red mt-6"
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={Math.ceil(dataCount.length / 10)}
      marginPagesDisplayed={2}
      onPageChange={handlePageClick}
      activeClassName={
        "btn-active btn btn-xs hover:bg-accent bg-red-200 rounded-xl text-black border-none animate-bounce"
      }
    />
  );
}

export default Pagination;
