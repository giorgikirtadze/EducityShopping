import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Menclothes from "./Components/MenClothes/Menclothes";
import Partner from "./Components/PartnerCompany/Partner";
import Section1 from "./Components/Section1/Section1";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Partner />
      <Section1 />
      <Menclothes />
    </main>
  );
}
