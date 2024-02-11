import { useState, useReducer } from 'react';
import './App.css';
import SubmitForm from './components/SubmitForm';
import ItemList from './components/ItemList';
import SortButtons from './components/SortButtons';

function App() {
  const [formData, setFormData] = useState([]);

  const categoryOptions = ['식료품', '생활용품', '미용', '인테리어'];
  const sortOptions = ['가격 높은 순', '가격 낮은 순', '최신 순', '오래된 순']

  function reducer(state, action) {
    // return {
    //   ...state,
    //   [action.type]: action.payload,
    // };

    switch (action.type) {
      case 'category':
        if (action.payload === 'all') {
          return state;
        } else {
          return formData.filter(item => item.category === action.payload);
        }

      // case ''
    }
  }

  const [sortedData, dispatch] = useReducer(reducer, formData);


  return (
    <div className="App">
      <SubmitForm formData={formData} setFormData={setFormData} categoryOptions={categoryOptions}/>
      <SortButtons dispatch={dispatch} categoryOptions={categoryOptions} sortOptions={sortOptions}/>
      <ItemList sortedData={sortedData}/>
    </div>
  );
}

export default App;
