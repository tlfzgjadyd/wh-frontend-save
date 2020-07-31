import React from 'react'
import './Input3.css'

function Input3(){
    return(
        <div id="Input3">
            <form action="Input3.php" method="post">
            <ul className="inputs">
                <li>
                    <textarea readOnly></textarea>
                </li>
                <li>
                 <textarea readOnly></textarea>
                </li>

                <li>
                 <textarea readOnly></textarea>
                </li>

                <li>
                 <input type="checkbox"></input>
                     <label> (필수)서비스 이용약관 동의 체크박스</label><br/>
                 <input type="checkbox"></input>
                    <label>(필수)서비스 이용약관 동의 체크박스</label><br/>
                 <input type="checkbox"></input>
                    <label> (필수)개인정보 수집 및 제 3자 제공 동의 체크박스</label><br/>
                 <input type="checkbox"></input>
                    <label>모든약관 동의</label><br/>
                </li>
            </ul>
            </form>

        </div>
    );
}

export default Input3;