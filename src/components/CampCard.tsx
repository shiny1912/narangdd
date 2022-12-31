import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


const Card = styled.div`
    flex-shrink: 0;
    width : 327px;
    height : 280px;
    border-radius: 10px;
    background-color : #eeeeee;
    display: flex;
    flex-direction: horizontal;
    position: relative;
    overflow:hidden;
    @media (min-width: 576px) { 
        width : 327px;
        flex-wrap : wrap;
    } 
    @media (min-width: 768px) { 
        width : 327px;
        flex-wrap: wrap;
     } 
    @media (min-width: 992px) { 
        width : 224px;
     } 
    @media (min-width: 1200px) { 
        width : 224px;
     }
`
;

const CampCardContent = styled.div`
    width: 100%;
    height: 127px;
    background-color: #7471FF;
    position : absolute;
    bottom : 0;
   
    .state {
        font-size:14px;
    }
    .title {
        font-size:16px;
    }
    .date {
        font-size:12px;
    }
`
;

function CampCard(){
    
    return <Card>
        <CampCardContent>
        <div className="state">모집중</div>
        <div className="title">직접 해보는 페이스북 마케팅</div>
        <div className="date">2월 28일부터</div>
        </CampCardContent>
    </Card>
    
    ;
}

export default CampCard;