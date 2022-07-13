import React from 'react'
import './learnVariable.css'

const LearnVariable = () => {

    function btnClick() {
        let text = document.getElementById("text").value;
        if (text === "") {
            text = "isi dulu doongg!!"
            alert(text)
        }
        else
        {
            alert(text)
        }
        
    }

  return (

    

    <div className="materi__dom">
      <h2 className="tittle__dom">JAVASCRIPT VARIABLE </h2>
      <div className="materi__dom">
          <h3>Membuat Variabel bisa menggunakan</h3>
          <ul>
            <li>1. let = bisa diubah</li>
            <li>2. Conts = tidak bisa diubah</li>
            <li>3. Var = bisa diubah</li>
          </ul>

          <p>
            contoh mengambil nilai varibel di dalam element input
          </p>

          <div className='textInput'>
            <p>Masukan Text</p>
            <input type="text" id='text' /> <br/>
            <button id='btnInput' className='btn btn-primary' onClick={btnClick}>Tampilkan Alert</button>
          </div>
          
      </div>
    </div>
  )
}

export default LearnVariable