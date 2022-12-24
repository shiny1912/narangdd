import styled from "styled-components";
import Tag from "./Tag";

const Card = styled.div`
    width : 224px;
    height : 320px;
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
    padding: 16px;
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

const CommentIcon = styled.div`
    width:30px;
    height:30px;
    border-radius  : 15px;
    background-color: #EEEEEE;
`;







function CampCard(){
    
    return <Card>
        <CampCardContent>
        <Tag tagText="조회수TOP"></Tag>
        <Tag tagText="취업고민"></Tag>
        <h4>합격 메일 답장 어떻게 할까요?</h4>
        <h4>고칠 부분이 있는지 봐주시면 감사하겠습니다.</h4>
        
        </CampCardContent>
    </Card>
    
    ;
}

export default CampCard;