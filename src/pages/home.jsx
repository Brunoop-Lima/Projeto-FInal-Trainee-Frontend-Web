import Link from "../components/link";
import VideoCarousel from "../components/carouselVideos";
import HeaderProject from "../components/header/indexProject";
import Footer from "../components/footer";
import Select from "../components/selectInput";
import Cards from "../components/cards";

const Home = () => {
  return (
    <>
      <u>
        <Link to="test">Ir para a página teste</Link>
      </u>
      <HeaderProject />
      <br />
      <main>
        <body>
          <u>
            <center>
              <h3>Lançamentos</h3>
            </center>
          </u>
          <div className="Home">
            <VideoCarousel />
          </div>
          <br />
          <u>
            <center>
              <h3>Destaque</h3>
            </center>
          </u>
          <Select></Select>
          <br />
          <Cards />
        </body>
        <Footer></Footer>
      </main>
    </>
  );
};

export default Home;
