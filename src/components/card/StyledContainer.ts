import styled from "styled-components";


const StyledContainer = styled.section`
        width: calc(100vw - 164px);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px 15px;
        padding: 0 16px 61px;


        @media only screen and ( min-width:768px){

            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 24px 30px;
            padding: 0 25px 56px;

        }

        @media only screen and ( min-width:1440px){

            display: grid;
            grid-template-columns: repeat(4, 280px);
            gap: 32px 40px;
            padding: 0 0 52px;

      
    }



`

export default StyledContainer