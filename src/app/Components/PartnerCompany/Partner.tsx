import React from 'react';
import Image from 'next/image';
import './Partner.css'

import part1 from '../Asset/PartnerCompany/Rectangle 1.png';
import part2 from '../Asset/PartnerCompany/Rectangle 2.png';
import part3 from '../Asset/PartnerCompany/Rectangle 3.png';
import part4 from '../Asset/PartnerCompany/Rectangle 4.png';
import part5 from '../Asset/PartnerCompany/Rectangle 5.png';
import part6 from '../Asset/PartnerCompany/Rectangle 6.png';
import part7 from '../Asset/PartnerCompany/Rectangle 7.png';

export default function Partner() {
    const PartnerCompanyLogo = [part1, part1, part2, part3, part4, part2, part2, part2, part5, part6, part7];
    
    return (
        <div className='PartneryCompanyContainer'>
            {PartnerCompanyLogo.map((item, index) => (
                <Image className='PartnerImg' key={index} src={item} alt='IMG' />
            ))}
        </div>
    );
}

