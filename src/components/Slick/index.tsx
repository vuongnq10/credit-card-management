'use client';
import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import './slick.css';
import './slick-theme.css';

import './styles.css';

interface SlickType {
  children: ReactNode;
  settings?: Settings;
}
const Index: React.FC<SlickType> = ({ children, settings }) => {
  const defaultSettings: Settings = {
    variableWidth: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    // appendDots: () => <span />,
    ...settings,
  };

  switch (React.Children.count(children)) {
    case 1:
      return children;
    default:
      return (
        <div className='slick-slide-wrap'>
          <Slider {...defaultSettings}>{children}</Slider>
        </div>
      );
  }
};

export default Index;
