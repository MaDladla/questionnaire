// import{pic} from '../public/WhatsApp Image 2023-07-07 at 08.56.23.jpeg'
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BiSolidBellRing} from 'react-icons/bi';
import { BsCalendarDateFill} from 'react-icons/bs';
import { BsPersonCircle} from 'react-icons/bs';


export default function Navbar() {
    const publicPath = process.env.REACT_APP_PUBLIC_PATH || '';

    return(
<div className='search'>
    <div className='search__img'>
    <img src={`${publicPath}/WhatsApp Image 2023-07-07 at 08.56.23.jpeg`} alt="My Image" width={60} height={60} />
    <div className='text'>
    <h4>Hi There</h4> <br/>
    <h3>I'm Cynthia Welcome</h3>
    </div>
    {/* <label><HiOutlineMailOpen/></label>
<label><BiSolidBellRing/></label>
<label><BsCalendarDateFill/></label>
<label><BsPersonCircle/></label> */}
</div>
<div className='searchIcons'>

<input type='text' placeholder='Search'/>
</div>
</div>
    )
}