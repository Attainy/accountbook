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
  const [sortedData, setSortedData] = useState([...formData]);

  const categoryOptions = ['식료품', '생활용품', '미용', '인테리어'];
  const sortOptions = ['가격 높은 순', '가격 낮은 순', '최신 순', '오래된 순']

  // function reducer(state, action) {
  //   return {
  //     ...state,
  //     [action.type] : action.payload
  //   }
  // };
  // const initialState = {
  //   'category': 'all',
  //   'sortOrder': 'id',
  //   'startDate': 'all',
  //   'endDate': 'all'
  // };
  // const [sortBy, dispatch] = useReducer(reducer, initialState);


  //   if (sortBy.category === 'all') {
  //     setSortedData(formData);
  //   } else {
  //     setSortedData(sortedData.filter(item => item.category === sortBy.category));
  //   }

  //   switch (sortBy.sortOrder) {
  //     case 'id':
  //       setSortedData(formData);
  //     case '가격 높은 순':
  //       setSortedData(sortedData.sort((a, b) => b.price - a.price))
  //       console.log(sortedData)
  //     case '가격 낮은 순':
  //       setSortedData(sortedData.sort((a, b) => a.price - b.price))
  //     case '최신 순':
  //       setSortedData(sortedData.sort((a, b) => new Date(b) - new Date(a)))
  //     case '오래된 순':
  //       setSortedData(sortedData.sort((a, b) => new Date(a) - new Date(b)))
  //   }


  return (
    <div className="App">
      <SubmitForm formData={formData} setFormData={setFormData} categoryOptions={categoryOptions}/>
      {/* <SortButtons dispatch={dispatch} categoryOptions={categoryOptions} sortOptions={sortOptions}/> */}
      <SortButtons sortedData={sortedData} setSortedData={setSortedData} categoryOptions={categoryOptions} sortOptions={sortOptions}/>
      {/* <ItemList sortBy={sortBy} formData={formData}/> */}
      <ItemList sortedData={sortedData} formData={formData}/>
    </div>
  );
}

export default App;
