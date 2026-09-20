import "./Home.css";
import Brief from "../component/Brief";
import HomeNav from "../component/HomeNavBar";
import PianoFrame from "../component/PianoFrame";

function Home() {
  return (
    <>
      <HomeNav />
      <PianoFrame maxScrollThres={0} id="homeframe" disableSection>
        <Brief />
      </PianoFrame>
    </>
  );
}

export default Home;
