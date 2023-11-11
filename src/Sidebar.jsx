import {BsCart3} from 'react-icons/bs'

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
            <BsCart3 className='icon_header'/> Shop
        </div>
        <span className='icon close_icon'>X</span>
      </div>
    </aside>
  )
}

export default Sidebar