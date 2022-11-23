import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { EXPLORE_BANNER_SLIDES } from 'data/Explore';
import BannerSlide from 'components/Explore/BannerSlide';
const ExploreBanner = ({ sidebarToggler }) => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={5000} showThumbs={false} showStatus={false} showArrows={false} >
            {
                EXPLORE_BANNER_SLIDES.map((slider, index) => (
                    <BannerSlide {...slider} key={index} index={index} type={"game"} />
                ))
            }
        </Carousel>
    )
}

export default ExploreBanner