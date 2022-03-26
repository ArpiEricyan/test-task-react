import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCatCategories, getCats} from "../../redux/cats-models/actions";
import LoaderItem from "../../component/loader/loader";
import './cats.scss';
import Category from "../../component/category/category";
import Cat from "../../component/cat/cat";

const Cats = ()=> {
    const dispatch = useDispatch();
    const { isLoader, categories, categoryId, cats } = useSelector((state) => state.cats)
    const[page, setPage] =  useState(1);
    const changePage = useCallback(()=> {
            setPage(1)
    }, [page])
    const seeMoreCats = ()=>{
        setPage(prev=> prev + 1)
    }
    useEffect(()=>{
        dispatch(getCatCategories())
    }, [])

    useEffect(()=>{
        dispatch(getCats(categoryId, page))
    }, [categoryId, page]);
    return(
        <div className='cats-page'>
            <div className={`${ isLoader  ? 'background' : ''}`}></div>
            { isLoader && <LoaderItem/> }
            <div className='categories'>
                { categories?.map(category => <Category key={category.id} {...category} changePage={changePage}/>)}
            </div>
            <div className='cats'>
                {
                    cats?.map((cat, index) => <Cat key={index} {...cat}/>)
                }
            </div>
            <div className='see-more'>
                <button onClick={seeMoreCats}>see more cate</button>
            </div>
        </div>
    )
}

export default Cats;