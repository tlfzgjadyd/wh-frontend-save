import React from 'react'
import './Input1.css'

function Input1(){
    return(
        <div id="Input1">
            <form action="Input1.php" method="post">
            <ul className="inputs">
                <li>
                    <lable>기업명</lable><br/>
                    <input type="text" id="companyName" name="companyName"></input>
                    <button>중복확인</button>
                </li>

                <li>
                    <lable>업종</lable><br/>
                    <input type="text" id="companyType" name="companyType"></input>
                </li>

                <li>
                    <lable>창고 유형</lable><br/>
                    <input type="text" id="storageType" name="storageType"></input>
                </li>

                <li>
                    <lable>창고 크기</lable><br/>
                    <input type="number" id="storageSize" name="storageSize"></input>
                </li>
            </ul>
            </form>
        </div>
    );
}

export default Input1;