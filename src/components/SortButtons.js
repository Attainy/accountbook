import React from 'react'

function SortButtons({ setSortFilter, categoryOptions, sortOptions }) {

    const handleSort = (event) => {
        let targetName = event.target.name;
        let targetValue = event.target.value;
        switch (targetName) {
            case 'category':
                setSortFilter(prev => {
                    return {...prev, category: targetValue}
                });
                break;
            case 'sort':
                setSortFilter(prev => {
                    return {...prev, sort: targetValue}
                });
                break;
            case 'startDate':
                setSortFilter(prev => {
                    return {...prev, startDate: targetValue}
                });
                break;
            case 'endDate':
                setSortFilter(prev => {
                    return {...prev, endDate: targetValue}
                });
                break;
        }
    }
        
    return (
        <div className='sort-buttons'>
            {/* <select className='sort-buttons__button--category' onChange={(event) => dispatch({ type:'category', payload:event.target.value })}> */}
            <select className='sort-buttons__button--category' name='category' onChange={handleSort}>
                <option value='all'>유형 필터</option>
                {
                    categoryOptions.map((option, index) => (
                        <option key={`cat-${index}`} value={`${option}`}>{option}</option>
                    ))
                }
            </select>

            {/* <select className='sort-buttons__button--sort' onChange={(event) => dispatch({ type:'sortOrder', payload:event.target.value })}> */}
            <select className='sort-buttons__button--sort' name='sort' onChange={handleSort}>
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
                <input type="date" id="start-date" name='startDate' onChange={handleSort}/>
            </div>

            <div>
                <label htmlFor="end-date">끝 기간</label>
                {/* <input type="date" id="end-date" onChange={(event) => dispatch({ type:'endDate', payload:event.target.value })}/> */}
                <input type="date" id="end-date" name='endDate' onChange={handleSort}/>
            </div>

            <button type="reset">RESET</button>
        </div>
    )
}

export default SortButtons