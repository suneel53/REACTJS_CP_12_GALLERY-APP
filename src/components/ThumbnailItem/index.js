// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, clickimageItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const onclickedimage = () => {
    clickimageItem(id)
  }
  const name = isActive ? '' : 'blr'

  return (
    <li>
      <button type="button" onClick={onclickedimage} className={`btn ${name}`}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
