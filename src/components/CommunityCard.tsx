import styled from "styled-components";
import Tag from "./Tag";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const Card = styled.div`
    flex-shrink: 0;
    height : 320px;
    border-radius: 10px;
    background-color : #EEEEEE;
    position: relative;
    box-sizing: border-box;
    &:last-child {
        margin-right: 0;
    }
    overflow:hidden;
    padding: 16px;

    @media (min-width: 576px) { 
        width : 327px;
    } 
    @media (min-width: 768px) { 
        width : 327px;
     } 
    @media (min-width: 992px) { 
        width : 224px;
     } 
    @media (min-width: 1200px) { 
        width : 224px;
     }

    
`
    ;

const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const CampCardContent = styled.div`
    height: 127px;
    .title {
        ${fonts.Body1};
        font-weight: bold;
    }
    .content {
        ${fonts.Body1};

    }
    
`
    ;

const CommentIcon = styled.div`
    width:30px;
    height:30px;
    border-radius  : 15px;
    background-color: #EEEEEE;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction  : row;
  align-items: center;
`;

const CommentTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Button = styled.div`
    color:#24DBAF;
    text-align: center;
`
    ;






function CampCard() {

    return <Card>
        <TagContainer>
            <Tag tagText="조회수TOP"></Tag>
            <Tag tagText="취업고민"></Tag>
        </TagContainer>
        <CampCardContent>
            <div className="title"> 합격 메일 답장 어떻게 할까요?</div>
            <div className="content">고칠 부분이 있는지 봐주시면 감사하겠습니다.</div>
            <CommentContainer>
                <CommentIcon></CommentIcon>
                <CommentTextContainer>
                    <div>멘토1342</div>
                    <div>안녕하세요, 먼저 면접까지...</div>
                </CommentTextContainer>
            </CommentContainer>
            <Button>+더보기</Button>
        </CampCardContent>
    </Card>

        ;
}

export default CampCard;