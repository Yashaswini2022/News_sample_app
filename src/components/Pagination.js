export default function Pagination({ page, setPage }) {
  return (
    <div className="d-flex justify-content-between my-3">
      <button className="btn btn-outline-primary" onClick={() => setPage(p => Math.max(p - 1, 1))}>
        Previous
      </button>
      <button className="btn btn-outline-primary" onClick={() => setPage(p => p + 1)}>
        Next
      </button>
    </div>
  );
}