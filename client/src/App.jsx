import Payment from "./Payment";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Instamojo Payment Gateway Integration
          </h1>
        </header>
        <Payment />
      </div>
    </div>
  );
}

export default App;
