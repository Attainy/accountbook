import React, { useState } from 'react';

// useState로만 해보기
function SubmitForm({ formData, setFormData, categoryOptions }) {
    const [isMemo, setIsMemo] = useState(false);

    const [newData, setNewData] = useState({
        id: new Date().getTime(),
        name: '',
        price: 0,
        category: '',
        date: '',
        memoCheck: isMemo,
        memoText: '',
        repurchase: false,
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormData([...formData, newData]);
    };
    
  return (
    <div className="submit-form">
        <form id="form" onSubmit={handleSubmit}>
            <div>
                <label className="label" htmlFor="name">이름</label>
                <input type="text" id="name" onChange={(event) => setNewData({...newData, name:event.target.value})}/>
            </div>
            <div>
                <label className="label" htmlFor="price">가격</label>
                <input type="number" id="price" onChange={(event) => setNewData({...newData, price:event.target.value})}/>
            </div>
            <div>
                <label className="label" htmlFor="category">유형</label>
                <select id="category" onChange={(event) => setNewData({...newData, category:event.target.value})}>
                    <option value="">선택하세요</option>
                    {
                        categoryOptions.map((option, index) => (
                            <option key={index} value={`${option}`}>{option}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label className="label" htmlFor="date">구입 날짜</label>
                <input type="date" id="date" onChange={(event) => setNewData({...newData, date:event.target.value})}/>
            </div>
            <div>
                <label className="label" htmlFor="memo-text">메모</label>
                <input type="checkbox" id="memo" onClick={() => setIsMemo(!isMemo)}/>
                <label htmlFor="memo">메모 작성</label>
                {/* 메모 작성 버튼을 눌렀을 때만 보이도록 */}
                {
                    isMemo && <input type="text" id="memo-text" onChange={(event) => setNewData({...newData, memoText:event.target.value})}/>
                }
            </div>
            <div>
                <label className="label">재구매 의사</label>
                <input type="radio" name="repurchase" id="yes" value={'Yes'} onClick={(event) => setNewData({...newData, repurchase:Boolean(event.target.value)})}/>
                <label htmlFor="yes">한다</label>
                <input type="radio" name="repurchase" id="no" value={''} onChange={(event) => setNewData({...newData, repurchase:Boolean(event.target.value)})}/>
                <label htmlFor="no">안한다</label>
            </div>
            <button type="submit">저장</button>
        </form>
    </div>
  )
}

export default SubmitForm