import ReactPaginate from "react-paginate";

function Pagination(props) {
  const { data, currentPage, setOffset, setCurrentPage } = props;
  const itemsPerPage = 8;

  const handlePageClick = (e) => {
    let currentPage = e.selected + 1;
    setCurrentPage(currentPage);
    setOffset((currentPage - 1) * itemsPerPage);
  };

  return (
    <ReactPaginate
      className="flex justify-center space-x-4 text-red mt-6"
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={Math.ceil(data.length / itemsPerPage)}
      marginPagesDisplayed={3}
      onPageChange={handlePageClick}
      activeClassName={
        "btn-active btn btn-xs hover:bg-accent bg-red-200 rounded-xl text-black border-none animate-bounce"
      }
    />
  );
}

export default Pagination;
