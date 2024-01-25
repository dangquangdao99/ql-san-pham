import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id: id,
    Ten: "",
    anh: "",
    gia: "",
    moTa: "",
    ngayTao: "",
    ngayCapNhat: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3030/users/" + id, inputData).then((res) => {
      alert("Cập nhật thành công!");
      navigate("/");
    });
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Ten">Tên sản phẩm:</label>
            <input
              type="text"
              name="Ten"
              className="form-control"
              value={inputData.Ten}
              onChange={(e) =>
                setInputData({ ...inputData, Ten: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="anh">Hình ảnh:</label>

            <input
              type="text"
              name="anh"
              className="form-control"
              value={inputData.anh}
              onChange={(e) =>
                setInputData({ ...inputData, anh: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="gia">Giá:</label>

            <input
              type="text"
              name="gia"
              className="form-control"
              value={inputData.gia}
              onChange={(e) =>
                setInputData({ ...inputData, gia: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="moTa">Mô tả:</label>

            <input
              type="text"
              name="moTa"
              className="form-control"
              value={inputData.moTa}
              onChange={(e) =>
                setInputData({ ...inputData, moTa: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="ngayTao">Ngày tạo:</label>

            <input
              type="text"
              name="NgayTao"
              className="form-control"
              value={inputData.ngayTao}
              onChange={(e) =>
                setInputData({ ...inputData, ngayTao: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="ngayCapNhat">Ngày cập nhật:</label>

            <input
              type="text"
              name="ngayCapNhat"
              className="form-control"
              value={inputData.ngayCapNhat}
              onChange={(e) =>
                setInputData({ ...inputData, ngayCapNhat: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Cập nhật</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
