import '../src/components/dashboard.css'
import {useEffect, useState } from 'react'
import { RiDeleteBin7Line } from 'react-icons/ri';
import {GrEdit } from 'react-icons/gr';
import Navigation from './navigation'
import Navbar from './navbar';



export default function Dashboard(){
const [question, setQuestion] = useState('')
const [edit, setEdit] = useState(false)
const [id, setId] = useState('')
const [agreeCount, setAgreeCount] = useState(0);
const [disagree, setDisagree] = useState(0);
const [neutral, setNeutral] = useState(0);
const [totquestions, setTotquestions] = useState(0);
const [storedObjects, setStoredObjects] = useState([]);



const total= localStorage.length;
console.log(total)


    const handleSubmit = (event) => {
        event.preventDefault();
    
    if(edit){

        localStorage.setItem(
            id,
            JSON.stringify({
            question:question
            })
        )
    setEdit(false)
    }
    else{
    
        const userId = total + 1;
        localStorage.setItem(
        userId,
        JSON.stringify({
        question:question
        })
        )
    }
        window.location.reload();
        if(window.location.reload()){
        document.getElementById('selectFile').style.display="none";
        document.getElementById('selectFile1').style.display="none";
        document.getElementById('selectFile2').style.display="block";
        }
    }


    //handle edit button
    const data = Object.keys(localStorage);
    const handleEdit = (key)=>{
        const question = JSON.parse(localStorage.getItem(key))
        setQuestion(question.question)
        setId(key)
        setEdit(true)
    }

    //handle delete button
    const Delete = (id)=>{  
        localStorage.removeItem(id)   
    
        window.location.reload()
        
    } 

    //handle input change
    const handleChange = (i,val)=>{

    storedObjects[i] = val;
    console.log(storedObjects)

    }


    //Storing inputs from questions
    const handleRadio = ()=>{

            let tota= localStorage.length;
            let count = tota+1;
    
        localStorage.setItem(
            'qstn'+count,
            JSON.stringify({
                storedObjects 
            })
        )


    }

//useEffect for calculating agree, disagree and neutral
    useEffect(() => {
        
        let count = 0  
        let countVal = 0 
        let countSum = 0 
    
        data.map( key => {
        
            const storedArray = JSON.parse(localStorage.getItem(key)).storedObjects ||[];
            console.log(storedArray)
    
            storedArray.filter((name)=>{
                if( name === "Agree"){
                
                count++
                }
                
                    })

                    storedArray.filter((value)=>{
                        if( value === "Disagree"){
                    
                        countVal++
                        }
                    
                        })


                        storedArray.filter((sum)=>{
                            if( sum === "Neutral"){
                        
                            countSum++
                            }
                        
                            })
    
        })
        setDisagree(countVal);
    setAgreeCount(count);
    setNeutral(countSum);

    }
    , []);



    //useEffect for calculating total number of questions
    useEffect(() => {
    let i = 0;

        data.map( (key) => {
        const storedArray = JSON.parse(localStorage.getItem(key));

        if(storedArray.question){

        i++
    
        }
        setTotquestions(i)
    })
    }
    , []);


console.log('items' +agreeCount)
console.log('items2' +disagree)
console.log('items' +neutral)


return(
<div className='dashboard'>

<Navigation/>

<div className='dash__right'>
<Navbar/>

     <div className='right--container active' id='selectFile' >

          <h1>Dashboard</h1>
          <div>
        <div className='dash__info'>
           <div className='info'> 
            <p>Number of Quastions</p> 
            <h2>{totquestions}</h2>
        </div>

        <div className='info info2'>
            <p>Number of Agree</p> 
            <h2>{agreeCount}</h2>
        </div>

        <div className='info info3'>
           <p>Number of Disagree</p> 
           <h2>{disagree}</h2>
        </div>

        <div className='info info4'>
           <p>Number of Neutral</p> 
           <h2>{neutral}</h2>
        </div>
     </div>
     </div>
   

    


     </div>


     <div className='right--container' id='selectFile1' style={{display:"none"}}>
        <h1>Quastionnaires</h1>

        {localStorage.length !== 0  ? (
            
            data.filter(( total)=> !total.includes('qstn'))
            .map((key,i) => {
            const user= JSON.parse(localStorage.getItem(key));
           
       return(
        
    <div className='create--list'>
        <div className='list--qstn'>
          <p>{user.question}</p> 
        </div>
        <div className='list--btn' >
         
          <input type='radio' value="Agree" name={key}  id={key} onChange={() => handleChange(i,"Agree") }/><label>Agree</label>
          <input type='radio' value="Neutral" name={key} id={key} onChange={() => handleChange (i,"Neutral") }/><label>Neutral</label>
          <input type='radio' value="Disagree" name={key} id={key}onChange={() => handleChange (i,"Disagree")} /><label>disagree</label>
        </div>
        
    </div>
    
    

   ); }) ) : (
    <div></div>
    )}
        <button onClick={handleRadio}>Submit</button>
    </div>



    {/* Create a Quastion */}
 
 <div className='right--create' id='selectFile2' style={{display:"none"}}>

        <h1>Creating a Quationnaire</h1>
        <input type='text' value={question} onChange={e => setQuestion(e.target.value )}/> <br/>
        <button onClick={handleSubmit}>Add</button>

        <h1>List of Questions</h1>
       {localStorage.length !== 0 ? (
        data.filter((key)=>!key.includes('qstn'))
        .map((key,i) => {
         const user= JSON.parse(localStorage.getItem(key));
            
    return(
  
         <div className='create--list' id={key} >

            <div className='list--qstn'>
              <p>{user.question}</p> 
            </div>

            <div className='list--btn'> 
              <button onClick={() => handleEdit(key)}><GrEdit/></button>
              <button onClick={()=>Delete(key)}><RiDeleteBin7Line/></button>
            </div>

        </div>
        
    );
    })) : (
      <div> </div>
    )}

 </div>
 </div>
 </div>
 ) }