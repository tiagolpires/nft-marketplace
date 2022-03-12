import Image from 'next/image'
import { useState } from 'react'
import Slider from 'react-slick'

const images = ['1.jpeg', '2.jpeg', '3.jpeg', '1.jpeg', '2.jpeg', '3.jpeg']

const Carousel: React.FC = () => {
  const Arrow: React.FC<any> = ({ onClick, icon }) => {
    return (
      <div className="cursor-pointer" onClick={onClick}>
        <Image src={`/icons/${icon}`} width="180px" height="180px" />
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <Arrow icon="right-arrow.svg" />,
    prevArrow: <Arrow icon="left-arrow.svg" />,
    centerPadding: '0',
    beforeChange: (current: any, next: any) => setImageIndex(next),
  }

  return (
    <>
      <Slider
        className="my-6 flex w-full max-w-2xl items-center justify-center"
        {...settings}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`scale-65  opacity-50 duration-300	 ${
              idx === imageIndex && 'scale-110 opacity-100'
            }`}
          >
            <img className="rounded-lg" src={`/nfts/${img}`} />
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Carousel
