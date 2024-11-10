import c5 from "../image/c5.jpg"
import c6 from "../image/c6.jpg"
import c7 from "../image/c7.jpg"
import c8 from "../image/c8.jpg"
import c9 from "../image/c9.jpg"
import c10 from "../image/c10.jpg"
import c11 from "../image/c11.jpg"
import c12 from "../image/c12.jpg"


function Popular(){
return(<div class="popular">
    <h1>Most --Popular--</h1>
    <p>Pick Your best</p>
    <div class="popular__container">
        <div class="card">
            <img src={c5} alt="c1"></img>
            <h3>2023 Python Data Vizualitation Workspace</h3>
            <p>Col Steete</p>
            <p>4.4 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="card">
            <img src={c6} alt="c1"></img>

            <h3>2023 WEB Development MERN Stack</h3>
            <p>Col Steete</p>
            <p>3.4 ⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="card">
            <img src={c7} alt="c2"></img>

            <h3>C/C++ , JAVA DSA Masterclass</h3>
            <p>Col Steete</p>
            <p>4.4 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="card">
            <img src={c8} alt="c3"></img>
            <h3>AI New Emergging Technology</h3>
            <p>Col Steete</p>
            <p>4.4 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="card">
            <img src={c9} alt="c1"></img>
            <h3>2023 Python Data Vizualitation Workspace</h3>
            <p>Col Steete</p>
            <p>4.4 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="card">
            <img src={c10} alt="c1"></img>

            <h3>2023 WEB Development MERN Stack</h3>
            <p>Col Steete</p>
            <p>3.4 ⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="card">
            <img src={c11} alt="c2"></img>

            <h3>C/C++ , JAVA DSA Masterclass</h3>
            <p>Col Steete</p>
            <p>4.4 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="card">
            <img src={c12} alt="c3"></img>
            <h3>AI New Emergging Technology</h3>
            <p>Col Steete</p>
            <p>4.4 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
    </div>
</div>)}

export default Popular;