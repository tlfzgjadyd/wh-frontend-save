import React from 'react'
import './Input2.css'

function Input1(){
    return(
        <div id="Input2">
            <form action="Input2.php" method="post">
            <ul className="inputs">
                <li>
                    <lable>아이디</lable><br/>
                    <input type="text" id="id" name="id"></input>
                    <button>중복확인</button>
                </li>

                <li>
                    <lable>이름</lable><br/>
                    <input type="text" id="userName" name="userName"></input>
                </li>

                <li>
                    <lable>비밀번호</lable><br/>
                    <input type="password" id="pwd" name="pwd"></input>
                    <input type="password" id="pwdConfirm" name="pwdConfirm"></input>
                </li>

                <li>
                <lable>연락처</lable><br/>
                <input type="number" id="phone1" name="phone1"></input>
                    <label>-</label>
                <input type="number" id="phone2" name="phone2"></input>
                    <label>-</label>
                <input type="number" id="phone3" name="phone3"></input><br/>

                <input type="number" id="phone4" name="phone4"></input>
                    <label>-</label>
                <input type="number" id="phone5" name="phone5"></input>
                    <label>-</label>
                <input type="number" id="phone6" name="phone6"></input>
                </li>
            </ul>
            </form>



        </div>
    );
}

export default Input1;