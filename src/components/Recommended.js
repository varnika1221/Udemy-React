import c1 from "../image/c1.jpg"
import c2 from "../image/c2.jpg"
import c3 from "../image/c3.jpg"
import c4 from "../image/c4.jpg"

function Recommended(){
    return(
       
    <div class="Recommended">
        <h1 class="recommended-title">Recommended For You</h1>
        <p>Pick the best Fit</p>
        <div class="container">
            <div class="card">
                <img src={c4} alt="c1"></img>
                <h3>2023 Python Data Vizualitation Workspace</h3>
                <p>Col Steete</p>
                <p>4.4 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="card">
                <img src={c2} alt="c1"></img>

                <h3>2023 WEB Development MERN Stack</h3>
                <p>Col Steete</p>
                <p>3.4 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="card">
                <img src={c3} alt="c2"></img>

                <h3>C/C++ , JAVA DSA Masterclass</h3>
                <p>Col Steete</p>
                <p>4.4 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="card">
                <img src={c1} alt="c3"></img>
                <h3>AI New Emergging Technology</h3>
                <p>Col Steete</p>
                <p>4.4 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
        </div>
    </div>
</div>
  
    )
}

export default Recommended;