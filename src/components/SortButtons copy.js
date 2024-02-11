import React from 'react'

// const [sortBy, setSortBy] = useState({
//     category: '',
//     order: '',
//     startDate: '',
//     endDate: ''
//   })
  

function SortButtons({ sortBy, setSortBy, categoryOptions, sortOptions }) {
  return (
    <div className='sort-buttons'>
        <select className='sort-buttons__button--category' onChange={(event) => setSortBy({...sortBy, category:event.target.value})}>
            <option>유형 필터</option>
            {
                categoryOptions.map((option) => (
                    <option value={`${option}`}>{option}</option>
                ))
            }
        </select>

        <select className='sort-buttons__button--sort' onChange={(event) => setSortBy({...sortBy, order:event.target.value})}>
            <option>정렬 기준</option>
            {/* <option value="price-desc">가격 높은 순</option>
            <option value="price-asc">가격 낮은 순</option>
            <option value="date-recent">최신 순</option>
            <option value="date-oldest">오래된 순</option> */}
            {
                sortOptions.map((option) => (
                    <option value={`${option}`}>{option}</option>
                ))
            }
        </select>

        <div>
            <label htmlFor="start-date">시작 기간</label>
            <input type="date" id="start-date"/>
        </div>

        <div>
            <label htmlFor="end-date">끝 기간</label>
            <input type="date" id="end-date"/>
        </div>
    </div>
  )
}

export default SortButtons