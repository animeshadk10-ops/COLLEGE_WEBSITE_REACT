import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'





const Testimonial = () => {

    const slider = useRef();
    let tx = useRef(0);

    const slideForward = () => {
        if (tx.current > -50) {
            tx.current -= 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    }
    const slideBackward = () => {
        if (tx.current < 0) {
            tx.current += 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    }


    return (
        <div className='testimonial' id='testimonial'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Previous" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_1} alt="Sarah Chen" />
                                <div>
                                    <h3>Sarah Chen</h3>
                                    <span>Computer Science, Class of 2023</span>

                                </div>

                            </div>
                            <p>The hands-on learning approach and state-of-the-art labs prepared me perfectly for my career in tech. The professors genuinely care about student success, and the collaborative environment fostered lifelong friendships and professional connections.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_2} alt="Marcus Johnson" />
                                <div>
                                    <h3>Marcus Johnson</h3>
                                    <span>Business Administration, Class of 2022</span>

                                </div>

                            </div>
                            <p>What sets this university apart is its commitment to real-world experience. The internship program connected me with industry leaders, and the entrepreneurship center helped me launch my startup. I couldn't have asked for a better foundation.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_3} alt="Priya Sharma" />
                                <div>
                                    <h3>Priya Sharma</h3>
                                    <span>Biomedical Engineering, Class of 2024</span>

                                </div>

                            </div>
                            <p>The research opportunities here are unparalleled. Working alongside renowned faculty on cutting-edge projects gave me invaluable experience. The supportive community and world-class facilities make this university truly exceptional.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_4} alt="David Martinez" />
                                <div>
                                    <h3>David Martinez</h3>
                                    <span>Liberal Arts, Class of 2023</span>

                                </div>

                            </div>
                            <p>The diverse curriculum and study abroad programs broadened my perspective in ways I never imagined. The emphasis on critical thinking and creativity prepared me not just for a job, but for a meaningful career making a difference in the world.</p>
                        </div>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Testimonial