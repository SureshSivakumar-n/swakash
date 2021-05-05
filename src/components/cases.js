import React from 'react';
import service1 from '../Img/service1.png';
import service2 from '../Img/service2.png';
import service3 from '../Img/service3.png';
import service4 from '../Img/service4.png';
import service5 from '../Img/service5.png';
import service6 from '../Img/service6.png';


const data = [{
    img: service1,
    header: 'Family Asset Management',
    desc: 'combining the intimacy of a lowcountry-based, privately-held firm with access to resources that only an'

}, {
    img: service2,
    header: 'Succession Planning',
    desc: 'systematic approach for identifying, developing, and retaining capable and skilled employees'
},
{
    img: service3,
    header: 'Finance Marketing',
    desc: 'Sysytamatic approach to the process of accompanish the marketing recogntion goal team member'
}
    , {
    img: service4,
    header: 'Family Asset Management',
    desc: 'combining the intimacy of a lowcountry-based, privately-held firm with access to resources that only an'
},
{
    img: service5,
    header: 'Succession Planning',
    desc: 'systematic approach for identifying, developing, and retaining capable and skilled employees'
},
{
    img: service6,
    header: 'Finance Marketing',
    desc: 'Sysytamatic approach to the process to accompanish the marketing recogntion goal team member'
}
]

export const Cases = () => {
    return (

        <section className="service container">
            <h2>Our Cases</h2>

            <div className="service-container">
                {data.map((item, i) => (
                    <div key={i}>
                        <img src={item.img} alt="" />
                        <h3>{item.header}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}