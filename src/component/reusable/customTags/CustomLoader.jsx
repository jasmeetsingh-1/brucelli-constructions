import React from "react";
import Lottie from "lottie-react";
import Loader from "../../../assets/animations/loaderAnimation.json";

const loaderCss = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}

function CustomLoader(){
    return (
        <div style={loaderCss}>
            <Lottie
              animationData={Loader}
              loop={true}
              autoplay={true}
              style={{ height: 250 }}
            />
        </div>
    );
}

export default CustomLoader;