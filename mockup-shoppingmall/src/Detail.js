import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import './Detail.scss';

let BoxName = styled.div`
    padding: 20px;
`;

let TitleName = styled.h4`
    font-size: 25px;
`

function Detail(props, idx) {
    let { id } = useParams();
    let selectedItem = props.shoes.find(function(item){
        return id == item.id;
    })
    let history = useHistory();
    let [visibleAlert, setVisibleAlert] = useState(true);
    let [inputData, setInputData] = useState([]);

    useEffect(() => {
        let timer = setTimeout(() => {
            setVisibleAlert(false);
        }, 2000);

        return clearTimeout(timer);
    }, []);

    return (
        <div className="container">
            <BoxName><TitleName className="text-blue">테스트제목입니다</TitleName></BoxName>
            
            <input onChange={ (e) => { setInputData(e.target.value) } }/>
            {inputData}
            {
                visibleAlert === true 
                ? <div className="my-alert">
                    <p>재고가 얼마 남지 않았습니다</p>
                </div>
                : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(selectedItem.id+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{selectedItem.title}</h4>
                    <p>{selectedItem.content}</p>
                    <p>{selectedItem.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                    <button className="btn btn-danger" onClick={()=>{
                        history.goBack();
                    }}>뒤로가기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;