import Slider from "react-slick";
import "../style/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "flowbite-react";

function SimpleSlider({ speciesData }) {
  const customCards = {
    root: {
      base: "flex rounded-lg shadow-md bg-[#172026]",
      children: "flex h-full flex-col justify-center gap-4 pb-8 ps-8 pe-8 pt-3",
    },
  };
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
  };
  return (
      <Card theme={customCards} className="">
        <Slider {...settings}>
          {speciesData?.flavor_text_entries
            ?.filter(
              (value, index, self) =>
                index ===
                self.findIndex((t) => t.flavor_text === value.flavor_text)
            )
            .slice(0, 5)
            .map((item, index) => (
              <p key={index} className="font-normal text-gray-400">
                {item.flavor_text}
              </p>
            ))}
        </Slider>
      </Card>
  );
}

export default SimpleSlider;
