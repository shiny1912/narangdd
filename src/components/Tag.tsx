import styled from "styled-components";

const TagContainer = styled.div`
    height:22px;
    size:12px;
    padding: 4px;
    color: white;
    background-color: #7471FF;
    
`;

interface TagProps {
    tagText: string;
}

function Tag(props: TagProps){

    return <TagContainer >{props.tagText}</TagContainer>
}

export default Tag;