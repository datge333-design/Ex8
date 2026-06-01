import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        Vui lòng kiểm tra lại thông tin trước khi đặt vé.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <h1 className="mb-4 fw-normal">Form đặt vé máy bay</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label text-secondary">Họ tên</label>
          <div className="input-group">
            <span className="input-group-text bg-light text-muted">👤</span>
            <input type="text" className="form-control" placeholder="Họ tên" />
            <span className="input-group-text bg-light text-muted">vnđ</span>
          </div>
          <div className="form-text text-muted" style={{ fontSize: "0.85rem" }}>
            Phải nhập 5 ký tự, in hoa....
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label text-secondary">Địa chỉ</label>
          <input type="text" className="form-control" />
          <div className="form-text text-muted" style={{ fontSize: "0.85rem" }}>
            Phải nhập 5 ký tự, in hoa....
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6">
            <label className="form-label text-secondary">Đi từ</label>
            <select className="form-select" defaultValue="Hà Nội">
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </div>
          <div className="col-6">
            <label className="form-label text-secondary">Đến</label>
            <select className="form-select" defaultValue="Hà Nội">
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label text-secondary d-block">
            Chọn chiều đi (Khứ hồi)
          </label>
          <div className="form-check form-check-inline me-4">
            <input className="form-check-input" type="checkbox" id="goOption" />
            <label
              className="form-check-label text-secondary"
              htmlFor="goOption"
            >
              Đi
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="returnOption"
            />
            <label
              className="form-check-label text-secondary"
              htmlFor="returnOption"
            >
              Về
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100 py-2 fs-5">
          Đặt vé
        </button>
      </form>
    </div>
  );
}
