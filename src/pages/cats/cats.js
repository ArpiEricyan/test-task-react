import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCatCategories} from "../../redux/cats-models/actions";

const Cates = ()=> {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCatCategories())
    }, [])
    return(
        <div>

        </div>
    )
}

export default Cates;