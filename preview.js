// Form 입력 데이터
import { useState } from "react"

const [newForm, setNewForm] = useState({
    id: new Date(),
    name: 'name',
    price: 'price',
    category: 'category',
    date: 'date',
    memo: 'memo',
    repurchase: true,
})

// 전체 리스트
const [itemList, setItemList] = useState([])