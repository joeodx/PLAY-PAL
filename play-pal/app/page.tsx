import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

export default function Home() {
  return (
    <>
      <Header />

      <h2 className="text-3xl text-center p-5">Pick a game below!</h2>
      <div className="grid-cols-3">
        <GameCard />
      </div>
      <Footer />
    </>
  );
}
