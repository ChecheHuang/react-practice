# Ch10

## Jest TDD
### 配置
使用vite需要配置
```
npm i @babel/core @babel/preset-env @babel/preset-react @testing-library/jest-dom @testing-library/react babel-jest jest jest-environment-jsdom --save-dev
```
目錄下增加
```
// .babelrc
{
  "presets": [
    ["@babel/preset-env", { "targets": { "node": "current" } }],
    "@babel/preset-react"
  ]
}

```
```
//jest.config.mjs
export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
}
```
```
//.package.json
  "scripts": {
    // ...other
    "test": "jest"
  }
```
## 使用
### 測試普通js
建立  任意.test.js檔案
```javascript !=
// function.test.js
import { timesTwo, order } from './function'//從要測試的引入
describe('describe', () => {
  test('Multiplies by two', () => {
    expect(timesTwo(4)).toBe(8)
  })

  test('Build an order object', () => {
    const result = {
      orderItems: menuItems,
      total: 77,
    }
    expect(order(menuItems)).toEqual(result)
  })
})
```
### 測試jsx元件
```javascript !=
// Page1.test.jsx
import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import Page1 from './Page1'

test('renders the landing page', () => {
  render(<Page1 />)
  expect(screen.getByRole('img')).toBeInTheDocument()
})
```

