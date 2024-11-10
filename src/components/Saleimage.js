import sale_image from "../image/sale image.jpg"

function Saleimgae (){
    return(
<div class="sale_image">
    <img src={sale_image} alt="sale image"></img>
    <div className="sale_image--offer">
        <h2>Udemy Flash Sale!!24hours to Save.</h2>
        <p>Get the top courses for just 499.Just one day to save but lifetime to learn</p>
    </div>
</div>

    )
}

export default Saleimgae;