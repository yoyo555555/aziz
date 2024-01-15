'use client'
import React from 'react';


const convertCrypto = () => {

  return (
    <div>

<div style={{ width: '300px', height: '335px', backgroundColor: '#232937', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid #282E3B', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', fontSize: '12px', fontFeatureSettings: 'normal', boxShadow: 'inset 0 -20px 0 0 #262B38', margin: '0', padding: '1px' }}>
      <div style={{ height: '315px', padding: '0px', margin: '0px', width: '100%' }}>
        <iframe
          src="https://widget.coinlib.io/widget?type=converter&theme=dark"
          width="300"
          height="310px"
          scrolling="auto"
          marginWidth={0}
          marginHeight={0}
          frameBorder={0}
          style={{ border: '0', margin: '0', padding: '0' }}
        ></iframe>
      </div>
      <div style={{ color: '#626B7F', lineHeight: '14px', fontWeight: 400, fontSize: '11px', boxSizing: 'border-box', padding: '2px 6px', width: '100%', fontFamily: 'Verdana, Tahoma, Arial, sans-serif' }}>
        <a href="https://www.coinxsafe.com" target="_blank" style={{ fontWeight: 500, color: '#626B7F', textDecoration: 'none', fontSize: '11px' }}>Cryptocurrency Prices</a>&nbsp;by Coinxsafe C4Wave
      </div>
    </div>
     
    </div>
  );
};

export default convertCrypto;
