



import './SliderField.css';
import './SliderField-HP_cardImg01.css';


import cardFrame from './cardFrame.png';

const SliderField = ({ imgPath, number, title }) => {

    return (

        <div className="HP_SliderField">
            <div className="HP_cardFrame">
                <img src={cardFrame} />

                <div className="HP_SliderField_0">
                    <div className="HP_sliderField_number">
                        <div className="HP_sliderField_number_0">{number}</div>
                    </div>
                </div>

                <div className="HP_SliderField_0">
                    <div className="HP_cardImg01" id={`HP_cardImg01-${number}`}>
                <img src={imgPath} />
                    </div>
                </div>

                <div className="HP_SliderField_0">
                    <div className="HP_sliderField_title">{title}</div>
                </div>

            </div>



        </div>

    );
};

export default SliderField;