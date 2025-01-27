import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../assets/styles/Paperinfo.css';

const paperdetails = [
  {
    papertitle: 'The insights of ruminal culturomics',
    paperstatus: 'Pending',
  },
  {
    papertitle: 'Political Environment in the Middle East',
    paperstatus: 'Reviewed',
  },
  {
    papertitle: 'EV vehicles and how they are useless',
    paperstatus: 'Submitted',
  },
  {
    papertitle: 'The concept of global health security',
    paperstatus: 'Submitted',
  },
  {
    papertitle: 'The healthy food standards are not always unbiased',
    paperstatus: 'Submitted',
  },
  {
    papertitle:
      'The Efficacy of Plant-based Diets in Preventing Chronic Diseases',
    paperstatus: 'Reviewed',
  },
  {
    papertitle: 'The psychological aspect in the perception of allergies',
    paperstatus: 'Reviewed',
  },
];

const PaperInfo = () => {
  return (
    <div className="paper-maincontainer">
      <h1>Paper Info</h1>
      <div className="paperinfo-header">
        <h3>Paper Title</h3>
        <h3>Status</h3>
      </div>
      {paperdetails.map((details) => {
        const { papertitle, paperstatus } = details;
        return (
          <div className="paperinfobox">
            <h4 style={{ fontFamily: 'sans-serif', fontWeight: 'normal' }}>
              {papertitle}
            </h4>
            <div className={paperstatus == 'Pending' ? 'red box' : 'green box'}>
              {paperstatus}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PaperInfo;
