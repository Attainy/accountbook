import React from 'react'

function SortButtons({ sortedData, setSortedData, categoryOptions, sortOptions }) {

    const filterCategory = (event) => {
        if (event.target.value !== 'all') {
            setSortedData(sortedData.filter(item => item.category === event.target.value));
            console.log(sortedData)
        }
    }

    const sortBy = (event) => {
        console.log(event.target.value);
        switch (event.target.value) {
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
                setSortedData(prev => prev.sort((a, b) => new Date(b) - new Date(a)))
                break;
            case '오래된 순':
                setSortedData(prev => prev.sort((a, b) => new Date(a) - new Date(b)))
                break;
        }
        console.log(sortedData)
    }

    const sortStartDate = (event) => {
        setSortedData(sortedData.filter(item => new Date(item.date) >= new Date(event.target.value)))
    }

    const sortEndDate = (event) => {
        setSortedData(sortedData.filter(item => new Date(item.date) <= new Date(event.target.value)))
    }


  return (
    <div className='sort-buttons'>
        {/* <select className='sort-buttons__button--category' onChange={(event) => dispatch({ type:'category', payload:event.target.value })}> */}
        <select className='sort-buttons__button--category' onChange={filterCategory}>
            <option value='all'>유형 필터</option>
            {
                categoryOptions.map((option, index) => (
                    <option key={`cat-${index}`} value={`${option}`}>{option}</option>
                ))
            }
        </select>

        {/* <select className='sort-buttons__button--sort' onChange={(event) => dispatch({ type:'sortOrder', payload:event.target.value })}> */}
        <select className='sort-buttons__button--sort' onChange={sortBy}>
            <option value='id'>정렬 기준</option>
            {
                sortOptions.map((option, index) => (
                    <option key={`sort-${index}`} value={`${option}`}>{option}</option>
                ))
            }
        </select>

        <div>
            <label htmlFor="start-date">시작 기간</label>
            {/* <input type="date" id="start-date" onChange={(event) => dispatch({ type:'startDate', payload:event.target.value })}/> */}
            <input type="date" id="start-date" onChange={sortStartDate}/>
        </div>

        <div>
            <label htmlFor="end-date">끝 기간</label>
            {/* <input type="date" id="end-date" onChange={(event) => dispatch({ type:'endDate', payload:event.target.value })}/> */}
            <input type="date" id="end-date" onChange={sortEndDate}/>
        </div>

        <button type="reset">RESET</button>
    </div>
  )
}

export default SortButtons