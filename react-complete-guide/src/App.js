import ExpenseItem from './components/ExpenseItem';

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
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />

    </div>

  );
}

export default App;
