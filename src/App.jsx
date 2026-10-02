import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { initialTransactions } from "./data/transectionData";
import { ModalToggleContext, TransactionContext } from "./context";
import Modal from "./components/shared/Modal";

function App() {
    const [transactions, setTransactions] = useState(initialTransactions);
   const [modalOpen,setModalOpen]=useState(false)

  return (
    <TransactionContext.Provider value={{transactions,setTransactions}}>
      <ModalToggleContext.Provider value={{modalOpen,setModalOpen}}>
    <div className="min-h-screen flex flex-col antialiased selection:bg-[#FAD4C0] selection:text-[#111827]">
      <Header />

      <Main />

      <Footer />
      {modalOpen && <Modal />}
    </div>
    </ModalToggleContext.Provider>
    </TransactionContext.Provider>
  );
}

export default App;
