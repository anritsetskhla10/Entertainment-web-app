import styled from "styled-components";


export const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #161d2f;
    padding: 18px 16px;

    .logo{
        width: 25px;
        height: 20px;
        cursor: pointer;
    }

    ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;

        & > li{
            cursor: pointer;
            
            & > img{
                width: 16px;
                height: 16px;
    
            }

            &:hover{
                filter: brightness(0) saturate(100%) invert(35%) sepia(14%) saturate(2973%) hue-rotate(315deg) brightness(123%) contrast(110%);
            }

            a:focus{
                filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(49deg) brightness(107%) contrast(101%);
            }

        }

    }

    .avatar{
        width: 24px;
        height: 24px;
        border: solid 1px #fff;
        border-radius: 50%;
        cursor: pointer;
    }


    @media only screen and (min-width:768px){
        width: calc(100% - 50px);
        padding: 24px;
        margin: 25px ;
        border-radius: 10px;


        .logo{
            width: 32px;
            height: 25.6px;
        }

        ul{
        gap: 34px;

        & > img{
            width: 20px;
            height: 20px;
        }
    }

        .avatar{
            width: 32px;
            height: 32px;
        }
    }

    @media only screen and (min-width:1440px){
        width: 96px;
        height: 960px;
        flex-direction: column;
        padding: 35.4px 28px 32px;
        border-radius: 20px;
        gap: 0;
        margin: 32px 36px 32px 32px;


        .logo{
            margin-bottom: 75px;
        }

        ul{
            flex-direction: column;
            gap: 40px;
    }

        .avatar{
            width: 40px;
            height: 40px;
            margin-top: 552px;
        }
    }
`