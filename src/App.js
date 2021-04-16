import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import DemoDataBinding from "./data-binding/DemoDataBinding";
import ShowRoomCar from "./show-room-car/ShowRoomCar";
import RenderWithMap from "./render-with-map/RenderWithMap";
import Parent from "./props/Parent";
import AppXucXac from "./AppXucXac/AppXucXac";
import AppBaiTap from "./BaiTap/AppBaiTap";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Contact />
      <ProductList />
      <Footer />
      {/* // 
      // 
      // <DemoDataBinding />
      // <ShowRoomCar />
      // <RenderWithMap />
      // <Parent />
      // <AppXucXac /> */}
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
7/ Có 2 loại components: 
- Dạng 1: class 
- Dạng 2: function
 */
