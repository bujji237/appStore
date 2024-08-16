import './index.css'

const TabItem = props => {
  const {tabsDetails, activeTabIdChanged, isActive} = props
  const {tabId, displayText} = tabsDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickedBtn = () => {
    activeTabIdChanged(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickedBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
