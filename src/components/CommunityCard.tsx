import styled from "styled-components";
import Tag from "./Tag";

const Card = styled.div`
    width : 224px;
    height : 320px;
    border-radius: 10px;
    background-color : #EEEEEE;
    
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

const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const CampCardContent = styled.div`
    width: 224px;
    height: 127px;
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
            <h4>합격 메일 답장 어떻게 할까요?</h4>
            <h4>고칠 부분이 있는지 봐주시면 감사하겠습니다.</h4>
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