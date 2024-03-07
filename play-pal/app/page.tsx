import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <p className="sm:pt-20">
        Tired of playing with yourself, now find others to play with.
      </p>
      <h2 className="text-3xl">
        Introducing..... PLAY-PAL, play with each other all night long
      </h2>
      <Footer />
    </>
  );
}
