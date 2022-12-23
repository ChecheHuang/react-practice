# Ch06

## ColorProvider
```javascript !=
1. 引入createContext, useState, useContext
2. 引入初始資料
3. 使用createContext創建ColorContext
4. 使用useContext製作customHook
5. export ColorProvider
6. 寫好自定義方法
7. return ColorContext.Provider
```

## AddColorForm
```javascript !=
1. 使用useInput來控制輸入框 //custom hook
2. 使用useColors來加入新顏色 //custom context
3. 使用@emotion/react來操作樣式 //需另外設定
```

## ColorLIst
```javascript !=
1. 使用useColors取出顏色並且當Color的容器
```

### Color 
```javascript !=
1. 取出useColors的{ rateColor, removeColor }
2. 要刪除時將id傳入removeColor
3. 將id傳入rateColor並包裝成onRate傳入StarRating
```

### StarRating
```javascript !=
1. 使用createArray創建陣列
2. 將selectedStar與陣列長度判斷選的星星做成selected傳入下層
3. 將onRate傳入index+1包成OnSelect傳入下層
```

### Star
```javascript !=
1. 用selected 來決定顯示顏色
2. OnSelect來決定星等
```