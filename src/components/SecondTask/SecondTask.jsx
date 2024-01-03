import './SecondTask.css'

import firstImg from '../../images/2.jpg'
import secondImg from '../../images/bg.jpg'
export default function SecondTask(){
    return(
        <div className="container">

                <div className='main-content'>
                    <div className='img'>
                    <img src={firstImg}  alt="" />
                    </div>
                    <div className='text-section'>
                        <div className='top-text'>
                            <h3>
                                Top text
                            </h3>
                        </div>
                        <div className='main-text'>
                            <h3>
                                Main text
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='footer-content'>
                    <div className='footer-content-text'>
                        <h3>
                            Footer text
                        </h3>
                    </div>
                    <img src={secondImg} className='footer-content-img' alt="" />
                </div>
        </div>
    )
}