# Quiz_app
Game for multiplayer
====================
Giới Thiệu Những Trang Của Ứng Dụng Game Trắc Nghiệm -> Source Code bên nhánh Master

TRANG CHỦ
- User click vào chọn đường dẫn để điều hướng trang.
  + TRANG LOGIN
  + TRANG PIN

TRANG LOGIN gồm các chức năng:
- Register/Login/LogOut.
  + Register thành công trả về trang Login.
  + Login thành công trả về TRANG NGƯỜI DÙNG để Thêm - Xoá - Sửa bộ câu của User.

TRANG PIN:
- Khi người dùng nhập mã Pin để tham gia trò chơi
  + Nếu đúng sẽ được chuyển về phòng chat chung.
  + Nếu sai sẽ hiển thị thông báo sau đó yêu cầu nhập lại.

Trang Chat Chung:
- Hiển thị thành viên trong Room.
- Có một nút Start dành cho User tạo ra bộ câu hỏi và có thể bắt đầu bất cứ lúc nào.

Trang Play:
- Khi User click nút play trò chơi sẽ bắt đầu.

Trang InPlay:
- Trang này sẽ hiển thị câu hỏi và các đáp án, câu hỏi sẽ được hiển thị lần lượt mỗi khi User tạo ra câu hỏi click next.

Trang Result:
- Trả về xếp hạng của ba người chơi có số điểm cao nhất.
- Có một nút END sẽ chuyển người chơi về TRANG CHỦ.
-------------------------------------------------------
