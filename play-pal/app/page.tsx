import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

export default function Home() {
  return (
    <>
    <div className="bg-slate-900">
      <Header />

      <h2 className="text-2xl text-center p-1">Pick a game below!</h2>
      <div className="flex justify-center">
        <GameCard />
      </div>
      <Footer />
      </div>
    </>
  );
}
