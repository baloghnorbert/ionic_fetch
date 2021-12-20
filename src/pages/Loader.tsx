import Loader from "react-loader-spinner";
import React from "react";

interface IProps {
    loading: boolean;
}

const LoaderComponent: React.FC<IProps> = (props: IProps): JSX.Element => {
    return (
        <div className="loader">
            <Loader type="BallTriangle"
                color="red"
                height={100}
                width={100}
                visible={props.loading}
            />
        </div>
    );
}

export default LoaderComponent;