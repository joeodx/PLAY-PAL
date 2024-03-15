import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import ChooseGame from "./components/ChooseGame";

export default function Home() {
  return (
    <>
    <div className="bg-slate-900">
      <Header />

      <div className="grid-cols-3 gap-4 text-2xl text-center p-5 flex justify-center">
        <ChooseGame />
      </div>
      <div className="flex justify-center ">
        <GameCard />
      </div>
      <Footer />
      </div>
    </>
  );
}
