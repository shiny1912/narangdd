import CampCard from "../components/CampCard";
import styled from "styled-components";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UpperHome = styled.div`
    width : 100%;
    height : 560px;
    background-color : #7471FF;
    size: 48px;
`;

const Container = styled.div`
    max-width: 960px;
    
`

const PopularCamp = styled.div`
    display: flex;
    flex-direction : row;   
`
    ;

const SalesCamp = styled.div`
    display: flex;
    flex-direction : row;   
`
    ;


const Banner = styled.div`
    width: 100%;
    background-color: #7471FF;
    color:#ffffff;
    height: 100px;
    align-items:center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top : 54px;

`;


function Home() {

    return <HomeContainer>
        <UpperHome>개발은 나랑뜨와 함께</UpperHome>
        <Container>
            <h2>인기 부트 캠프</h2>
            <PopularCamp>
                <CampCard></CampCard>
                <CampCard></CampCard>
                <CampCard></CampCard>
                <CampCard></CampCard>
            </PopularCamp >
            <h2>특가 할인 캠프</h2>
            <SalesCamp>
                <CampCard></CampCard>
                <CampCard></CampCard>
                <CampCard></CampCard>
                <CampCard></CampCard>
            </SalesCamp>
            <Banner>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</Banner>
        </Container>
    </HomeContainer>


        ;
}

export default Home;