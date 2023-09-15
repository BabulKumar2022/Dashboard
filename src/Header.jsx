import { BsFillBellFill, BsFillEnvelopeAtFill, BsJustify, BsPersonCircle, BsSearch} from 'react-icons/bs'

function Header() {
  return (
    <header className="header">
        <div className="menu-icon">
           <BsJustify className='icon'/>
        </div>
        <div className="header-left">
            <BsSearch className='icon'/>
        </div>
        <div className="header-right">
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeAtFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header