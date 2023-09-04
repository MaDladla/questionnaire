import '../src/components/dashboard.css'
import {BsFillDatabaseFill} from 'react-icons/bs'
export default function Navigation(params) {
    const handleClick = () => {
        document.getElementById('selectFile').style.display="block";
        document.getElementById('selectFile1').style.display="none";
        document.getElementById('selectFile2').style.display="none";
      }
      const handleClick1 = () => {
        document.getElementById('selectFile').style.display="none";
        document.getElementById('selectFile1').style.display="block";
        document.getElementById('selectFile2').style.display="none";
      }
      const handleClick2 = () => {
        document.getElementById('selectFile').style.display="none";
        document.getElementById('selectFile1').style.display="none";
        document.getElementById('selectFile2').style.display="block";
      }
      
      return(

        <div className='dash__left'>
<div className='logo'>
  <label><BsFillDatabaseFill/></label>
<h1>Data</h1>
</div>
<div className='left--buttons'>

<label className="side-bar-list btn1" onClick={handleClick}>Dashboard</label>
<label onClick={handleClick1}>Quationnaire</label>
<label className="side-bar-list btn3" onClick={handleClick2}>Create</label>
</div>

</div>

      )
}
 