import Loader from "react-js-loader";
import './loader.scss'

const LoaderItem = ()=> {
    return(
        <div className='loader'>
            <Loader type="box-up" bgColor={"#FFFFFF"} title={"box-up"} color={'#FFFFFF'} size={100} />
        </div>
    )
}

export default LoaderItem