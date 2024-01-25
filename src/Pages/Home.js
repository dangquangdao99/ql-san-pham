import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Tạm thời sử dụng giá trị mặc định là false
    setIsLoggedIn(false);

    axios
      .get("http://localhost:3030/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <Link to="/login" className="btn btn-success d-inline-block text-right">
        Đăng nhập
      </Link>
      <h1 className="text-center">Quản lý sản phẩm</h1>

      <table className="table text-center" style={{ height: "6rem" }}>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Ảnh</th>
            <th>Giá</th>
            <th>Mô tả</th>
            <th>Ngày tạo</th>
            <th>Ngày cập nhật</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.Ten}</td>
              <td>
                <img src={d.anh} alt="" style={{ width: "5rem" }} />
              </td>
              <td>{isLoggedIn ? formatPrice(d.gia) : "Liên hệ"}</td>
              <td>{d.moTa}</td>
              <td>{d.ngayTao}</td>
              <td>{d.ngayCapNhat}</td>
              <td className="d-flex justify-center items-center">
                <Link
                  className="text-decoration-none btn btn-sm btn-success"
                  to={`/update/${d.id}`}
                >
                  Cập nhật
                </Link>

                <button
                  className="text-decoration-none btn btn-sm btn-danger"
                  onClick={(e) => handleDelete(d.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleDelete(id) {
    const confirm = window.confirm("Bạn có muốn xóa không?");
    if (confirm) {
      axios.delete("http://localhost:3030/users/" + id).then((res) => {
        alert("Thông báo xóa!");
        navigate("/");
      });
    }
  }
  function formatPrice(price) {
    // Thực hiện các xử lý định dạng giá ở đây
    return isLoggedIn ? `$${price}` : "Liên hệ";
  }
}

export default Home;
