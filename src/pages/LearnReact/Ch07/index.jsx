import React, { useState } from 'react'
import UseMemo1 from './UseMemo/UseMemo1'
import UseMemo2 from './UseMemo/UseMemo2'
import UseCallback1 from './UseCallback/UseCallback1'
import UseCallback2 from './UseCallback/UseCallback2'
import UseLayoutEffect1 from './UseLayoutEffect/UseLayoutEffect1'
import UseLayoutEffect2 from './UseLayoutEffect/UseLayoutEffect2'
import UseLayoutEffect3 from './UseLayoutEffect/UseLayoutEffect3'
import UseReducer1 from './UseReducer/UseReducer1'
import UseReducer2 from './UseReducer/UseReducer2'
import UseReducer3 from './UseReducer/UseReducer3'
import UseReducer4 from './UseReducer/UseReducer4'
import UseReducer5 from './UseReducer/UseReducer5'
import UseReducer6 from './UseReducer/UseReducer6'
import PureComponent from './PureComponent/PureComponent'
import UseImperativeHandle from './UseImperativeHandle/UseImperativeHandle'

function Ch07() {
  const items = [
    'useMemo',
    'useCallback',
    'useLayoutEffect',
    'useReducer',
    'PureComponent',
    'UseImperativeHandle',
  ]
  const [item, setItem] = useState('')

  return (
    <>
      <div style={{ width: '100vw', margin: '10px' }}>
        {items.map((item, index) => {
          return (
            <button
              onClick={() => {
                setItem(item)
              }}
              key={index}
            >
              {item}
            </button>
          )
        })}
      </div>
      {item === 'useMemo' && (
        <div>
          useMemo
          <UseMemo1 />
          <UseMemo2 />
        </div>
      )}
      {item === 'useCallback' && (
        <div>
          useCallback
          <UseCallback1 />
          <UseCallback2 />
        </div>
      )}
      {item === 'useLayoutEffect' && (
        <div>
          useLayoutEffect
          <UseLayoutEffect1 />
          <UseLayoutEffect2 />
          <UseLayoutEffect3 />
        </div>
      )}
      {item === 'useReducer' && (
        <div
          style={{ display: 'grid', gap: '10px', gridTemplateColumns: '100vw' }}
        >
          useReducer
          <UseReducer1 />
          <UseReducer2 />
          <UseReducer3 />
          <UseReducer4 />
          <UseReducer5 />
          <UseReducer6 />
        </div>
      )}
      {item === 'PureComponent' && (
        <div>
          <PureComponent />
        </div>
      )}
      {item === 'UseImperativeHandle' && (
        <div>
          <UseImperativeHandle />
        </div>
      )}
    </>
  )
}

export default Ch07
