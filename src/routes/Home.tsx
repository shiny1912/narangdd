import CampCard from "../components/CampCard";
import styled from "styled-components";
import CommunityCard from "../components/CommunityCard";

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
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    width: 960px;
    
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

const Footer = styled.div`
    width: 100%;
    background-color : #EEEEEE;  
    display: flex;
    flex-direction: column;
    align-items: center;
`
    ;

const FooterContainer = styled.div`
    display: flex;
    flex-direction   : row;
`
    ;

function Home() {

    return <HomeContainer>
        <UpperHome>
            <Container>개발은 나랑뜨와 함께</Container>
        </UpperHome>
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
            <h2>커뮤니티</h2>
            <SalesCamp>
                <CommunityCard></CommunityCard>
                <CommunityCard></CommunityCard>
                <CommunityCard></CommunityCard>
                <CommunityCard></CommunityCard>
            </SalesCamp>
        </Container>
        <Footer>
            <Container>
                <FooterContainer>
                    <div>Naragdd</div>
                    <div>
                        대표: 모신영. <br /> 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호

                        Copyright by (주)카페인. All right reserved.
                        <br />이용약관  개인정보처리방침
                    </div>
                </FooterContainer>
            </Container>
        </Footer>
    </HomeContainer>


        ;
}

export default Home;