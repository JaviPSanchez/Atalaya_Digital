import Button from './components/Button';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mx-4">Something</Button>
        <Button className="mt-10" white>
          Something
        </Button>
      </div>
    </>
  );
};

export default App;
