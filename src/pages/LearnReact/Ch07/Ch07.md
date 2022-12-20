# Ch07

## useCallback
使用方法
```javascript !=
1. 用來防止rerender的hook
2. 用來包住函式的hook
3. 用法如下
    //相依於空
  const fn = useCallback(() => {
    console.log('我是useCallback包起來的fn')
  }, [])
4. 效果如下
  useEffect(() => {
    fn()
    //rerender判斷每次fn都不一樣，但只會執行一次，因為dependencies為空
  }, [fn])
```

## useMemo
使用方法
```javascript !=
1. 用來防止rerender的hook
2. 用來包住物件(陣列)的hook
3. 用法如下
//相依於children，只有children變時words才會變
const words = useMemo(() => children.split(' '), [children])
4. 效果如下
  useEffect(() => {
    //若不使用useMemo，則每次rerender抓到words記憶體位置不相同，因此每次都會執行
    console.count('用了useMemo')
  }, [words])
```

## useLayoutEffect
使用方法
``` javascript !=
import React, { useEffect, useLayoutEffect } from 'react'
export default function UseLayoutEffect1() {
    //順序1
  console.log('React元件樹渲染')
    //順序4
  useEffect(() => console.log('useEffect執行在React瀏覽器更新的Dom後'))
    //順序2
  useLayoutEffect(() =>
    console.log('useLayoutEffect執行在React瀏覽器更新的Dom前')
  )
    //順序3
  return <div>React瀏覽器更新的Dom</div>
}
```

## useReducer
使用方法
```javascript !=
1. 簡化useState
2. 運用reduce原則來實作
3. 用法如下
//toggle
const [checked, toggle] = useReducer((checked) => !checked, false)
//number plus
const [number, setNumber] = useReducer((number, newNumber) =>number + newNumber, 0)
//修改物件
const [state, setState] = useReducer(
// state = 現在值
// newState = 輸入值
// initialState= 初始值
(state, newState) => ({ ...state, ...newState }),
initialState
)
```

## PureComponent
使用方法
```javascript !=
import React, { memo, useState } from 'react'

const Cat = ({ name }) => {
  console.log('rendering', name)
  return <p> {name} </p>
}
const PureCat = memo(Cat)
//memo第二個參數為決斷函示，boolean判斷是否rerender
const PureCat2 = memo(Cat,(prevProps,nextProps)=>prevProps.name===nextProps.name)
```