import Expenses from './components/Expenses';

function App() {

  const expenses = [
     {title: 'Car Insurance',amount: 522.44, date: new Date(2022,2,29)},
     {title: 'Toilet paper',amount: 444.44, date: new Date(2022,4,28)},
     {title: 'Life Insurance',amount: 233.22, date: new Date(2022,1,27)},
     {title: 'Moto Insurance',amount: 111.44, date: new Date(2022,12,26)},
  ];



  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>

  );
}

export default App;
