import styled from "styled-components";


export const StyledMain = styled.main`
    width: calc(100vw - 164px);


    h2{
        font-size: 20px;
        font-weight: 300;
        letter-spacing: -0.31px;
        color: #fff;
    }
    .trending-title{
        margin: 26px 0 16px 16px;
    }

    .recomended-title{
        margin: 24px 0 24px 16px;
    }

    .recomend-section{
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px 15px;
        padding: 0 16px 61px;
        align-content: center;

        .card{
            display: flex;
            flex-direction: column;

            .thumbnail-container{
                width: 164px;
                height: 110px;
                position: relative;
                margin-bottom: 8px;

                .thumbnail{
                    width: 100%;
                    border-radius: 8px;
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


            .content{
                display: flex;
                flex-direction: column;
                gap: 4px;
                
                .info{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 6px;
                    .circle{
                        width: 2px;
                        height: 2px;
                        border-radius: 50%;
                        opacity: 0.5;
                        background-color: #fff;
                    }
               
            
                    .year{
                        font-size: 11px;
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
                            font-size: 11px;
                            font-weight: 300;
                            color: #fff;
                            opacity: 0.75;
                        }
                    }
            
            
                    .rating{
                        font-size: 11px;
                        font-weight: 300;
                        color: #fff;
                        opacity: 0.75;
                    }
                }

                h3{
                    font-size: 14px;
                    font-weight: 500;
                    color: #fff;
                }
            }
        }
    }

    @media only screen and ( min-width:768px){
        h2{
        font-size: 32px;
        letter-spacing: -0.5px;
        }
        .trending-title{
            margin: 34px 0 25px 25px;
        }

        .recomended-title{
            margin: 39px 0 24px 25px;
        }

        .recomend-section{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 24px 30px;
            padding: 0 25px 56px;

        .card{

            .thumbnail-container{
                width: 220px;
                height: 140px;
                margin-bottom: 12px;

                .bookmark-container{
                    top: 16px;
                    right: 16px;
    
                }
            }
            .content{
                gap: 5px;
                
                .info{
                    gap: 8px;
                    
                    .circle{
                        width: 3px;
                        height: 3px;
                    }
                    .year{
                        font-size: 13px;
                    }
        
                    .category-container{

                        .category{
                            font-size: 13px;
                        }
                    }
            
                    .rating{
                        font-size: 13px;
                    }
                }

                h3{
                    font-size: 18px;
                }
            }
        }
    }
}

    @media only screen and ( min-width:1440px){

        .trending-title{
            margin: 35px 0 25px 0;
        }

        .recomended-title{
            margin: 40px 0 32px 0;
        }

        .recomend-section{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px 40px;
            padding: 0 0 52px;

        .card{

            .thumbnail-container{
                width: 280px;
                height: 174px;
                margin-bottom: 16px;

            }
        }
    }
}

`