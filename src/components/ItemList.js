import React from 'react'

function ItemList({ formData, sortFilter }) {
    let sortedData = [...formData];
    if (sortFilter.category !== 'all') {
        sortedData = sortedData.filter(item => item.category === sortFilter.category)
    }
    switch (sortFilter.sort) {
        case '가격 높은 순':
            sortedData.sort((a, b) => b.price - a.price)
            break;
        case '가격 낮은 순':
            sortedData.sort((a, b) => a.price - b.price)
            break;
        case '최신 순':
            sortedData.sort((a, b) => Number(new Date(a.date) - new Date(b.date)))
        case '오래된 순':
            sortedData.sort((a, b) => Number(new Date(b.date) - new Date(a.date)))
            break;
    }

    if (sortFilter.startDate !== '') {
        sortedData = sortedData.filter(item => new Date(item.date) >= new Date(sortFilter.startDate))
    }

    if (sortFilter.endDate !== '') {
        sortedData = sortedData.filter(item => new Date(item.date) <= new Date(sortFilter.endDate))
    }

    console.log(sortedData)

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