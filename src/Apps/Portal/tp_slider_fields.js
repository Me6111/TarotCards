


const Tp_slider_fields = ({
    SliderId,
    imgPath,
    currentIndex,
    sliderRef,
    fullWidth,
    direction,
    handleRef,
    items,
}) => {

  return (
        <div className="tp_slider_fields" ref={sliderRef} id={SliderId}>
          <div
            className="tp_sliderField_0"
            id={items[0]}
            ref={handleRef(items[0])}
            style={{ left: `${(currentIndex === 0 ? 0 : (direction === 'prev' ? fullWidth : -fullWidth)) * fullWidth}%` }} 
          >
            <div className="tp_sliderField_0_background_0">
              <img src={imgPath} alt="Hogwarts Window" />
            </div>
          </div>

          <div
            className="tp_sliderField_0"
            id={items[1]}
            ref={handleRef(items[1])}
            style={{ left: `${(currentIndex === 0 ? -fullWidth : 0) * fullWidth}%` }} 
          >
            <div className="tp_sliderField_0_background_0">
              <img src={imgPath} alt="Hogwarts Window" />
            </div>
          </div>
        </div>
  );
};

export default Tp_slider_fields;