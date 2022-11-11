import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NotificationBtn() {
    return (
        <span style={{"display": "inline-block"}}>
          <div className='textbox-schoolman text-left'>
            <h3>Send Notification</h3>
          </div>
          <div className='block-info'>
            <FontAwesomeIcon icon={faBullhorn} color="black" size="5x"/>
          </div>
        </span>
      )
}

export default NotificationBtn