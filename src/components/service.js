import React from 'react';
import field from '../Img/field.jpg';
import finance from '../Img/finance.jpg';
import now from '../Img/now.jpg';

const data = [{
    img: field,
    header: 'Family Asset Management',
    desc: 'combining the intimacy of a lowcountry-based, privately-held firm with access to resources that only an'

}, {
    img: finance,
    header: 'Succession Planning',
    desc: 'systematic approach for identifying, developing, and retaining capable and skilled employees'
},
{
    img: now,
    header: 'Finance Marketing',
    desc: 'Sysytamatic approach to the process of accompanish the marketing recogntion goal team member'
}
]

const Service = () => {
    return (
        <section className="features container">
            <h2>Our Cases</h2>

            <div className="feature-container">
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

export default Service;