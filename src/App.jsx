
import Footer from './footer/footer';
import Howbuild from './howbuild/howbuild';
import "./index.css";
import Introdaction from './intodaction/Introdactoin';
import Joinhydra from './joinhydra/joinhydra';
import Navbar from './navbar/navbar';
import Section from "./section/section"
import Swipers from './slider/swiper';
import Whybuild from './whybuild/whybuild';
function App() {
  return (<>
    <Navbar />
    <Section />
    <Swipers />
    <Introdaction />
    <Whybuild />
    <Howbuild />
    <Joinhydra />
    <Footer />
  </>
  )
}

export default App
