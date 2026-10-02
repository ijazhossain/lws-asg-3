import { useState } from "react";
import Footer from "./componts/footer/Footer";
import Header from "./componts/header/Header";
import Main from "./componts/main/Main";
import { initialTransactions } from "./data/transectionData";
import { TransactionContext } from "./context";

function App() {
    const [transactions, setTransactions] = useState(initialTransactions);
  return (
    <TransactionContext.Provider value={{transactions,setTransactions}}>
    <div className="min-h-screen flex flex-col antialiased selection:bg-[#FAD4C0] selection:text-[#111827]">
      <Header />

      <Main />

      <Footer />
    </div>
    </TransactionContext.Provider>
  );
}

export default App;
