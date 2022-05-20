import TokenAdder from "./tokenAdder";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ paddingBottom: 10 }}>
        Add Tokens to Metamask Wallet Using JS
      </header>
      <TokenAdder address={"0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"} />
    </div>
  );
}

export default App;
