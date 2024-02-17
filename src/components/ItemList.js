import React, { useEffect, useState } from 'react'

function ItemList({ formData, sortFilter }) {
    const [sortedData, setSortedData] = useState([...formData]);
    console.log('ItemList')
    console.log(sortFilter)

    if (sortFilter.category !== 'all') {
        setSortedData(prev => {
            return prev.filter(item => item.category === sortFilter.category)
        })
    }
    
    switch (sortFilter.sort) {
        case '가격 높은 순':
            setSortedData(prev => {
                return prev.sort((a, b) => b.price - a.price)
            });
            break;
        case '가격 낮은 순':
            setSortedData(prev => {
                return prev.sort((a, b) => a.price - b.price)
            });
            break;
        case '최신 순':
            setSortedData(prev => {
                return prev.sort((a, b) => new Date(b) - new Date(a))
            });
            break;
        case '오래된 순':
            setSortedData(prev => {
                return prev.sort((a, b) => new Date(a) - new Date(b))
            });
            break;
    }

    if (sortFilter.startDate != '') {
        setSortedData(prev => {
            return prev.filter(item => new Date(item.date) >= new Date(sortFilter.startDate))
        });
    }

    if (sortFilter.endDate != '') {
        setSortedData(prev => {
            return prev.filter(item => new Date(item.date) <= new Date(sortFilter.endDate))
        });
    }

    console.log(sortedData)

    // const filterCategory = (event) => {
    //     if (event.target.value !== 'all') {
    //         setSortedData(sortedData.filter(item => item.category === event.target.value));
    //         console.log(sortedData)
    //     }
    // }

    // const sortBy = (event) => {
    //     console.log(event.target.value);
    //     switch (event.target.value) {
    //         case '가격 높은 순':
    //             setSortedData(prev => {
    //                 return prev.sort((a, b) => b.price - a.price)
    //             });
    //             break;
    //         case '가격 낮은 순':
    //             setSortedData(prev => {
    //                 return prev.sort((a, b) => a.price - b.price)
    //             });
    //             break;
    //         case '최신 순':
    //             setSortedData(prev => prev.sort((a, b) => new Date(b) - new Date(a)))
    //             break;
    //         case '오래된 순':
    //             setSortedData(prev => prev.sort((a, b) => new Date(a) - new Date(b)))
    //             break;
    //     }
    //     console.log(sortedData)
    // }

    // const sortStartDate = (event) => {
    //     setSortedData(sortedData.filter(item => new Date(item.date) >= new Date(event.target.value)))
    // }

    // const sortEndDate = (event) => {
    //     setSortedData(sortedData.filter(item => new Date(item.date) <= new Date(event.target.value)))
    // }



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