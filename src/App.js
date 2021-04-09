import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
/// 1/ cài đặt project
/**
 * npx create-react-app ten0app
 * 2/ chạy project 
 * npm run start 
 * 
 *3/ flow code của ReactJS
 index.html
 index.js (chú ý App)
=> App.js (chú ý return của function App)

4/ ReactJS không đọc được html, mà chỉ đọc được JSX
5/ JSX giúp cho chúng ta viết html và js vào 1 file duy nhất
6/ Lợi ích của việc chia components: 
- tái sử dụng lại (ưu tiên) 
-dễ quản lý file và mở rộng ứng dụng 
 */
