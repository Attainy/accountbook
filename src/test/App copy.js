import { useState, useReducer, useEffect } from 'react';
import './App.css';
import SubmitForm from './components/SubmitForm';
import ItemList from './components/ItemList';
import SortButtons from './components/SortButtons';

function App() {
  const testData = [
    {
      id: 9999999999991,
      name: '과자',
      price: 3500,
      category: '식료품',
      date: '2024-02-12',
      memoText: '쿠팡에서 구매',
      repurchase: true,
    },
    {
      id: 9999999999992,
      name: '각티슈',
      price: 10800,
      category: '생활용품',
      date: '2024-02-10',
      memoText: '마트에서 구매',
      repurchase: false,
    },
    {
      id: 9999999999993,
      name: '무드등',
      price: 25000,
      category: '인테리어',
      date: '2024-02-2',
      memoText: '오늘의 집에서 구매',
      repurchase: true,
    }
  ]

  const [formData, setFormData] = useState([...testData]);

  const categoryOptions = ['식료품', '생활용품', '미용', '인테리어'];
  const sortOptions = ['가격 높은 순', '가격 낮은 순', '최신 순', '오래된 순']

  function reducer(state, action) {
    

    switch (action.type) {
      case 'category':
        if (action.payload === 'all') {
          return [...formData];
        } else {
          return state.filter(item => item.category === action.payload);
        }

      case 'sortby':
        if (action.payload === 'id') {
          return state.sort((a, b) => a.id - b.id)
        } else if (action.payload === '가격 높은 순') {
          console.log(state);
          return state.sort((a, b) => b.price - a.price)
        } else if (action.payload === '가격 낮은 순') {
          return state.sort((a, b) => a.price - b.price)
        } else if (action.payload === '최신 순') {
          return state.sort((a, b) => new Date(b) - new Date(a))
        } else { // (action.payload === '오래된 순') 
          return state.sort((a, b) => new Date(a) - new Date(b))
        }

      case 'start-date':
        return state.filter(item => new Date(item.date) >= new Date(action.payload))

      case 'end-date':
        return state.filter(item => new Date(item.date) <= new Date(action.payload))
    }
  }

  const [sortedData, dispatch] = useReducer(reducer, [...formData]);

  return (
    <div className="App">
      <SubmitForm formData={formData} setFormData={setFormData} categoryOptions={categoryOptions}/>
      <SortButtons dispatch={dispatch} categoryOptions={categoryOptions} sortOptions={sortOptions}/>
      <ItemList sortedData={sortedData}/>
    </div>
  );
}

export default App;
