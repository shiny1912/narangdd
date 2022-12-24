import styled from "styled-components";

const Card = styled.div`
    width : 224px;
    height : 280px;
    border-radius: 10px;
    background-color : #ffffff;
    display: flex;
    flex-direction: horizontal;
    margin-right : 21.5px;
    position: relative;
    &:last-child {
        margin-right: 0;
    }
    border-radius: 10px;
    overflow:hidden;
`
;

const CampCardContent = styled.div`
    width: 224px;
    height: 127px;
    background-color: #7471FF;
    position : absolute;
    bottom : 0;
  
`
;

const CampState = styled.div`
    font-size:14px;
    
`;

const CampTitle = styled.div`
    font-size:16px;
    
`;

const CampStartDate = styled.div`
    font-size:12px;
`;



function CampCard(){
    
    return <Card>
        <CampCardContent>
        <CampState>모집중</CampState>
        <CampTitle>직접 해보는 페이스북 마케팅</CampTitle>
        <CampStartDate>2월 28일부터</CampStartDate>
        </CampCardContent>
    </Card>
    
    ;
}

export default CampCard;