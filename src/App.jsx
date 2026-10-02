import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { initialTransactions } from "./data/transectionData";
import { ModalToggleContext, NewTransactionContext, TransactionContext } from "./context";
import Modal from "./components/shared/Modal";
import { ToastContainer } from "react-toastify";

function App() {
    const [transactions, setTransactions] = useState(initialTransactions);
   const [modalOpen,setModalOpen]=useState(false);
     const initialForm = {
    title: "",
    amount: "",
    category: "",
    date: "",
    type: "",
    note:""
  };
  const [newTransaction, setNewTransaction] = useState(initialForm);

  return (
    <TransactionContext.Provider value={{transactions,setTransactions}}>
      <NewTransactionContext value={{newTransaction, setNewTransaction,initialForm}}>
      <ModalToggleContext.Provider value={{modalOpen,setModalOpen}}>
    <div className="min-h-screen flex flex-col antialiased selection:bg-[#FAD4C0] selection:text-[#111827]">
      <Header />

      <Main />

      <Footer />
      {modalOpen && <Modal />}
      <ToastContainer />
    </div>
    
    </ModalToggleContext.Provider>
    </NewTransactionContext>
    </TransactionContext.Provider>
    
  );
}

export default App;
