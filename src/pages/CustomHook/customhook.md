# CustomHook

## useArray
操作陣列
使用方法
### 
```javascript !=
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ])
    // set(newArray)
    // update(index,value)
    // remove(index)
    // filter(callback)
```

## useDebounce
延遲
使用方法
```javascript !=
useDebounce(callback, delay, dependencies)
```

## useInput
輸入框
使用方法
```javascript !=
const [valueProps, resetValue] = useInput(initValue)
<input {...valueProps} />
```

## useTimeout
控制delay
使用方法
```javascript !=
const { clear, reset } =useTimeout(callback, delay)
```

## useToggle
布林值
使用方法
```javascript !=
 const [value, toggleValue] = useToggle(false)
 // toggleValue
 // toggleValue(true)
 // toggleValue(false)
```

## useUpdateEffect
更新時執行
使用方法
```javascript !=
useUpdateEffect(callback, dependencies)
```




