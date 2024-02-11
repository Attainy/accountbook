import React, { useState } from 'react'

function ItemList({ sortBy, formData }) {
    const [sortedData, setSortedData] = useState([...formData]);

        return (
            <div className='item-list'>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>가격</th>
                        <th>유형</th>
                        <th>구입 날짜</th>
                        <th>메모</th>
                        <th>재구매 의사</th>
                    </tr>
                </thead>
                <tbody>
                {sortedData.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td>{item.date}</td>
                        <td>{item.memoText}</td>
                        <td>{item.repurchase ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
                </tbody>
        </table>
        </div>
  )
}

export default ItemList