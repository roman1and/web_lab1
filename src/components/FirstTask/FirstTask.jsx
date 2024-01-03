import './FirstTask.css'

import image1 from "../../images/2.jpg"
import image2 from '../../images/bg.jpg'
export default function FirstTask(){
    return(
        <div className="container-float">
                <div className='main-content-float'>
                    <img src={image1} className='img-float' alt="" />
                    <div className='text-section-float'>
                        <div className='top-text-float'>
                            <h3>Top text</h3>
                        </div>
                        <div className='main-text-float'>
                            <h3>
                                Main text
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='footer-content-float'>
                    <div className='footer-content-text-float'>
                        <h3>
                            Footer text
                        </h3>
                    </div>
                    <img src={image2} alt="" className='footer-content-img-float'/>
                </div>
        </div>
    )
}