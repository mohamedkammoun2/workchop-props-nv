import "./App.css";
import ProductList from "./Components/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const data = [
    {
      id: Math.random(),
      name: "Smartphone Itel A58 LITE A631W / 2 Go / 32 GO / BLEU",
      pic: "https://www.tunisianet.com.tn/284363-home/smartphone-itel-a58-lite-a631w-2-go-32-go-bleu.jpg",
      price: "250",
    },
    {
      id: Math.random(),
      name: "Smartphone Itel A58 LITE A631W / 2 Go / 32 GO / Noir",
      pic: "https://www.tunisianet.com.tn/284390-home/smartphone-itel-a58-lite-a631w-2-go-32-go-noir.jpg",
      price: "280",
    },
    {
      id: Math.random(),
      name: "PARTAGEZ CE PRODUIT XIAOMI Pèse Personne - Mi SMART SCALE 2 -Blanc",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/9645/1.jpg?3285",
      price: "69",
    },
    {
      id: Math.random(),
      name: "Aspirateur électrique visage pour les points noirs, graisses et points blancs",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/2937/1.jpg?2250",
      price: "30",
    },
  ];
  // alert function
  const handleAlert=(product)=>alert(`the ${product.name} cose ${product.price} DT`)
  return (
    <div className="App">
      <ProductList list={data} alertFunction={handleAlert} />
    </div>
  );
}

export default App;
