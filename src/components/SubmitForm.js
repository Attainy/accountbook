import React, { useState } from 'react'

// useState로만 해보기
function SubmitForm() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [getDate, setGetDate] = useState(''); // 초기값 뭘로??
    const [isMemo, setIsMemo] = useState(false);
    const [memoText, setMemoText] = useState('');
    const [repurchase, setRepurchase] = useState('');

    
    const [newForm, setNewForm] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        setNewForm({
            id: new Date(),
            name: name,
            price: price,
            category: category,
            date: getDate,
            memoCheck: isMemo,
            memoText: memoText,
            repurchase: repurchase,
        });

        setName('');

    }
    
  return (
    <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="label name">이름</label>
            <input type="text" name="name" id="name" onChange={(event) => setName(event.target.value)}/>
        </div>
        <div>
            <label htmlFor="label price">가격</label>
            <input type="number" name="price" id="price" onChange={(event) => setPrice(event.target.value)}/>
        </div>
        <div>
            <label htmlFor="label category">유형</label>
            <select name="category" id="category" onChange={(event) => setCategory(event.target.value)}>
                <option value="grocery">식료품</option>
                <option value="grocery">식료품</option>
                <option value="grocery">식료품</option>
            </select>
        </div>
        <div>
            <label htmlFor="label date">구입 날짜</label>
            <input type="date" name="date" id="date" onChange={(event) => setGetDate(event.target.value)}/>
        </div>
        <div>
            <label htmlFor="label memo">메모</label>
            <input type="checkbox" name="memo" id="memo" onClick={() => setIsMemo(!isMemo)}/>
            <label htmlFor="memo">메모 작성</label>
            {/* 메모 작성 버튼을 눌렀을 때만 보이도록 */}
            {
                isMemo && <input type="text" name="memo-text" id="memo-text"  onChange={(event) => setMemoText(event.target.value)}/>
            }
        </div>
        <div>
            <label htmlFor="label repurchase">구입 날짜</label>
            <input type="radio" name="repurchase" id="yes" onClick={(event) => setRepurchase(event.target.value)}/>
            <label htmlFor="yes">한다</label>
            <input type="radio" name="repurchase" id="no" onClick={(event) => setRepurchase(event.target.value)}/>
            <label htmlFor="no">안한다</label>
        </div>
        <button type="submit">저장</button>
    </form>
  )
}

export default SubmitForm