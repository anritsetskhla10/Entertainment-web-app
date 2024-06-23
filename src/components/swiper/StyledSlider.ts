import styled from "styled-components";


export const StyledSlider = styled.div`

        width: 100vw;
        margin: 0 auto;
        padding: 0 0 0 16px;

        .thumbnail-container{
            position: relative;
            min-width: 240px;
            max-height: 274px;
            border-radius: 8px;
            .thumbnail{
                width: 100%;
                height: 100%;
                border-radius: 8px;
            }
    
            h2{
                font-size: 15px;
                font-weight: 500;
                color: #fff;
                position: absolute;
                left: 16px;
                bottom: 16px;
            }
    
            .content{
                display: flex;
                align-items: center;
                gap: 8px;
                position: absolute;
                left: 16px;
                bottom: 39px;
    
                .circle{
                    width: 3px;
                    height: 3px;
                    border-radius: 50%;
                    opacity: 0.5;
                    background-color: #fff;
                }
           
        
                .year{
                    font-size: 12px;
                    font-weight: 300;
                    color: #fff;
                    opacity: 0.75;
                }
    
                .category-container{
                    display: flex;
                    align-items: center;
                    gap: 6px;
    
                    & > img{
                        width: 12px;
                        height: 12px;
                    }
                    .category{
                        font-size: 12px;
                        font-weight: 300;
                        color: #fff;
                        opacity: 0.75;
                    }
                }
        
        
                .rating{
                    font-size: 12px;
                    font-weight: 300;
                    color: #fff;
                    opacity: 0.75;
                }
            }
    
            .bookmark-container{
                width: 32px;
                height: 32px;
                padding: 9px 10px;
                border-radius: 50%;
                background-color: rgba(16, 20, 30, 0.5);
                position: absolute;
                top: 8px;
                right: 8px;
    
                .bookmark{
                    width: 12px;
                    height: 14px;
                    cursor: pointer;
                }
            }
        }

        @media only screen and (min-width:768px){
            padding: 0 0 0 25px;
            .thumbnail-container{
                max-width: 470px;
                max-height: 322px;


                .bookmark-container{
                width: 32px;
                height: 32px;
                padding: 9px 10px;
                border-radius: 50%;
                background-color: rgba(16, 20, 30, 0.5);
                position: absolute;
                top: 16px;
                right: 24px;
    
                .bookmark{
                    width: 12px;
                    height: 14px;
                    cursor: pointer;
                }
            }
            }
        }

        @media only screen and (min-width:1440px){
            padding: 0 ;

            .thumbnail-container{
                max-width: 100%;


                .bookmark-container{
                width: 32px;
                height: 32px;
                padding: 9px 10px;
                border-radius: 50%;
                background-color: rgba(16, 20, 30, 0.5);
                position: absolute;
                top: 16px;
                right: 24px;
    
                .bookmark{
                    width: 12px;
                    height: 14px;
                    cursor: pointer;
                }
            }
            }
        }


`