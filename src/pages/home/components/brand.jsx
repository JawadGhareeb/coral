import Slider from "react-slick";
import CardBrand from "../../../components/card-brand";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetBrands from "../../../hooks/brands";
import BASE_URL from "../../../constant/domain";

export default function Brand() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { data: brands, isLoading } = GetBrands();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="bg-white px-[8vw] py-[4vw]">
      <Slider {...settings}>
        {brands.data.map((brand) => {
          return (
            <CardBrand
              key={brand.id}
              src={`${BASE_URL}/${brand.preview.content}`}
            />
          );
        })}
      </Slider>
    </div>
  );
}
