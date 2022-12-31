import styled from "styled-components";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const TagContainer = styled.div`
    height:22px;
    size:12px;
    padding: 4px;
    color: ${colors.white};
    background-color: ${colors.primary1};
    
`;

interface TagProps {
    tagText: string;
}

function Tag(props: TagProps){

    return <TagContainer >{props.tagText}</TagContainer>
}

export default Tag;