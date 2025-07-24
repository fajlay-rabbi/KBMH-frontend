const { default: Image } = require("next/image");

const AutoSliderRow = ({ images, reverse = false }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={`flex gap-5 w-max animate-marquee ${
          reverse ? 'animate-marquee-reverse' : ''
        }`}
      >
        {[...images, ...images].map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`img-${idx}`}
            className="h-24 w-auto object-cover rounded-md"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSliderRow;
