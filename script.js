function resetContent() {
  const main = document.getElementById("mainContent");
  main.innerHTML = `
    <div class="home-content">
    </div>
  `;
}

function showContent(option) {
  const main = document.getElementById("mainContent");
  switch(option) {
    case 1:
      main.innerHTML = `
        <h2>Mạng, IP, nội dung đã được tìm hiểu trong hôm nay</h2>
        <p>- Địa chỉ IP có 2 loại: IPv4 (32 bit) và IPv6 (128 bit)</p>
        <p>- Phân loại địa chỉ IP: </p>
        <p>     +IP Private: Dùng trong mạng nội bộ</p>
        <p>         - Dãy Private:  + Lớp A:  10.0.0.0/8</p>
        <p>                                + Lớp B:  172.16.0.0/12</p>
        <p>                                + Lớp C:  192.168.0.0</p>
        <p>- XAMPP(X(Cross-Platform), A(Apache), M(MySQL), P(PHP), P(Perl)) là môi trường server miễn phí, dùng để chạy PHP/MySQL</p>
        <p>- NAT (Network Address Translation) là cơ chế chuyển đổi địa chỉ IP của gói tin khi đi từ mạng này (IP Public) sang mạng khác (IP Private)</p>
        <p><b>- Giả sử trường hợp nhà em có cùng đường mạng với nhà hàng xóm(cùng cấu hình và cùng trong 1 mạng LAN) và câu hỏi đặt ra là điều đấy có được hay không?</b></p>
        <p>_ Với những kiến thức mà em đã tìm hiểu và học hỏi, kèm theo những hình ảnh thực tế thì em khẳng định rằng <b>được</b> vì:</p>
        <p>+ Thiết bị ở nhà em chỉ “nhìn thấy” các IP trong mạng LAN nhà em.</p>
        <p>+ Thiết bị ở nhà hàng xóm chỉ “nhìn thấy” các IP trong mạng LAN nhà em.</p>
        <p>+ Cả 2 modem đều thực hiện NAT để ra ngoài Internet.</p>
        <p>+ Khi gói tin đi ra ngoài, địa chỉ Private sẽ được chuyển thành Public do ISP cấp, các thiết bị trên Internet chỉ thấy IP Public, không quan tâm đến IP Private</p>
        <p>+ vì hai mạng LAN này tách biệt, mỗi modem có NAT riêng và kết nối ra Internet độc lập. Hai mạng không xung đột vì không giao tiếp trực tiếp với nhau.</p>
        `;
      break;
    case 2:
      main.innerHTML = `
        <h2>Bài tập vận dụng Excel</h2>
        <p><a href="b1.xlsx" target="_blank">File Excel</a></p>
        `;
      break;
    case 3:
      main.innerHTML = `
        <h2>Thời gian thực tập</h2>
        <p>- Số tuần thực tập: 12 tuần</p>
        <p>- Thời gian: T2-T6: 8h-17h ~ T7: 8h-12h</p>
        <p>- Ngày thực tập: 15/9/2025 - 6/12/2025 </p>
        `;
      break;
    case 4:
      main.innerHTML = `
        <h2>Lương, trợ cấp</h2>
        <p>- Thực tập không lương, được trợ cấp tiền gửi xe</p>
        `;
      break;
    case 5:
      main.innerHTML = `
        <h2>Về công ty TNHH thời trang Hạ Vàng (Golden Summer Fashion) </h2>
        <a href="https://havang.com" target="_blank">
        <img src="p1.png" alt="havang.com" width="1200" height="600"></a>
        `;
      break;
  }
}
