import useToggle from './useToggle'

function ToggleComponent() {
  const [value, toggleValue] = useToggle(false)

  return (
    <div>
      <div>toggle</div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button
        onClick={() => {
          toggleValue(true)
        }}
      >
        Make True
      </button>
      <button
        onClick={() => {
          toggleValue(false)
        }}
      >
        Make False
      </button>
    </div>
  )
}

export default ToggleComponent
