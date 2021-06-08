import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const Widgets = () => {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className='widgets__article'>
                <div className='widgets__articleLeft'>
                    <FiberManualRecordIcon></FiberManualRecordIcon>
                </div>

                <div className='widgets__articleRight'>
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon></InfoIcon>
            </div>
            {newsArticle('Petrol prices drops', 'Now petrol at ₹90.40')}
            {newsArticle('ONGC gas sale from KG basin: Key to boost domestic output', 'ONGC is set to supply about 2 MMSCMD of natural gas from the fields from June-end')}
            {newsArticle('Govt raises 1.10 lakh crore in covid-hit FY21 against 77,052 crore in FY20', 'Fundraising via public, rights issues up 42%')}
            {newsArticle('Infosys Q4 net profit at Rs 5,076 crore', 'board approves share buyback at Rs 1,750 apiece')}
            {newsArticle('AT-1 bonds case', 'Sebi fines Yes Bank Rs 25')}
        </div>
    )
}

export default Widgets
