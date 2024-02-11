import React from 'react'

function SortButtons({ dispatch, categoryOptions, sortOptions }) {

  return (
    <div className='sort-buttons'>
        <select className='sort-buttons__button--category' onChange={(event) => dispatch({ type:'category', payload:event.target.value })}>
            <option value='all'>유형 필터</option>
            {
                categoryOptions.map((option, index) => (
                    <option key={`cat-${index}`} value={`${option}`}>{option}</option>
                ))
            }
        </select>

        <select className='sort-buttons__button--sort' onChange={(event) => dispatch({ type:'sortby', payload:event.target.value })}>
            <option value='id'>정렬 기준</option>
            {
                sortOptions.map((option, index) => (
                    <option key={`sort-${index}`} value={`${option}`}>{option}</option>
                ))
            }
        </select>

        <div>
            <label htmlFor="start-date">시작 기간</label>
            <input type="date" id="start-date" onChange={(event) => dispatch({ type:'start-date', payload:event.target.value })}/>
        </div>

        <div>
            <label htmlFor="end-date">끝 기간</label>
            <input type="date" id="end-date" onChange={(event) => dispatch({ type:'end-date', payload:event.target.value })}/>
        </div>
    </div>
  )
}

export default SortButtons