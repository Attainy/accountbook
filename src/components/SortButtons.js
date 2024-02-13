import React from 'react'

function SortButtons({ sortedData, setSortedData, categoryOptions, sortOptions }) {

    const filterCategory = (event) => {
        if (event.target.value !== 'all') {
            setSortedData(sortedData.filter(item => item.category === event.target.value));
            console.log(sortedData)
        }

        // if (event.target.value !== 'all') {
        //     setSortedData(prev => {
        //         return {
        //             prev.filter(item => item.category === event.target.value)
        //         }});
        //     console.log(sortedData)
        // }
    }

    const sortBy = (event) => {
        let sample;
        switch (event.target.value) {
            // case 'id':
            //     setSortedData(formData);
            case '가격 높은 순':
                sample = sortedData.sort((a, b) => b.price - a.price)
                setSortedData(sample)
            case '가격 낮은 순':
                sample = sortedData.sort((a, b) => a.price - b.price)
                setSortedData(sample)
                // setSortedData(sortedData.sort((a, b) => a.price - b.price))
            case '최신 순':
                setSortedData(sortedData.sort((a, b) => new Date(b) - new Date(a)))
            case '오래된 순':
                setSortedData(sortedData.sort((a, b) => new Date(a) - new Date(b)))
        }
        console.log('sortBy', sortedData)
    }

    const sortStartDate = (event) => {
        setSortedData(sortedData.filter(item => new Date(item.date) >= new Date(event.target.value)))
    }

    const sortEndDate = (event) => {
        setSortedData(sortedData.filter(item => new Date(item.date) <= new Date(event.target.value)))
    }


    

    // if (sortBy.category === 'all') {
    //     setSortedData(formData);
    //     } else {
    //     setSortedData(sortedData.filter(item => item.category === sortBy.category));
    //     }
    
    //     switch (sortBy.sortOrder) {
    //     case 'id':
    //         setSortedData(formData);
    //     case '가격 높은 순':
    //         setSortedData(sortedData.sort((a, b) => b.price - a.price))
    //         console.log(sortedData)
    //     case '가격 낮은 순':
    //         setSortedData(sortedData.sort((a, b) => a.price - b.price))
    //     case '최신 순':
    //         setSortedData(sortedData.sort((a, b) => new Date(b) - new Date(a)))
    //     case '오래된 순':
    //         setSortedData(sortedData.sort((a, b) => new Date(a) - new Date(b)))
    //     }

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