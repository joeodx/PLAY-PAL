import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";


export default function Home() {
  return (
    <>
    <div className="bg-slate-900">
      <Header />

    <h2 className="text-2xl text-center p-1">Choose games by their genre!</h2>
     <select className="form-select">
     <option value="Action">Action</option>
     <option value="Strategy">Strategy</option>
     <option value="Adventure">Adventure</option>
     <option value="RPG">RPG</option>
    <option value="Indie">Indie</option>



     </select>
      <div className="flex justify-center">
        <GameCard />
      </div>
      <Footer />
      </div>
    </>
  );
}
