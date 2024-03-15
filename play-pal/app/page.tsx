import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import ChooseGame from "./components/ChooseGame";

export default function Home() {
  return (
    <>
    <div className="bg-slate-900">
      <Header />

      <div className="text-2xl text-center p-5 ">
        <ChooseGame />
      </div>
      <div className="flex justify-center">
        <GameCard />
      </div>
      <Footer />
      </div>
    </>
  );
}
