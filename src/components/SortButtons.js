import React from 'react'

function SortButtons({ sortFilter, setSortFilter, categoryOptions, sortOptions }) {
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

    let resetState = false;
    const handleReset = () => {
        resetState = true;
        setSortFilter({
            'category': 'all',
            'sort': 'id',
            'startDate': '',
            'endDate': ''
        })
    }
        
    return (
        <div className='sort-buttons'>
            <select className='sort-buttons__button--category' name='category' value={sortFilter.category} onChange={handleSort}>
                <option value='all'>유형 필터</option>
                {
                    categoryOptions.map((option, index) => (
                        <option key={`cat-${index}`} value={`${option}`}>{option}</option>
                    ))
                }
            </select>

            <select className='sort-buttons__button--sort' name='sort' value={sortFilter.sort} onChange={handleSort}>
                <option value='id'>정렬 기준</option>
                {
                    sortOptions.map((option, index) => (
                        <option key={`sort-${index}`} value={`${option}`}>{option}</option>
                    ))
                }
            </select>

            <div>
                <label htmlFor="start-date">시작 기간</label>
                <input type="date" id="start-date" name='startDate' value={sortFilter.startDate} onChange={handleSort}/>
            </div>

            <div>
                <label htmlFor="end-date">끝 기간</label>
                <input type="date" id="end-date" name='endDate' value={sortFilter.endDate} onChange={handleSort}/>
            </div>

            <button type="reset" onClick={handleReset}>RESET</button>
        </div>
    )
}

export default SortButtons