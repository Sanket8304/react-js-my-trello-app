import { createGlobalStyle } from "styled-components";

export const UtilityStyles = createGlobalStyle`
    * {
        box-sizing  : border-box;
        outline     : none;
    }
    html,
    body{
        margin: 0;
        padding: 0;
        background-color:white;
    }
    body{
        line-height         : 1.2;
        min-height          : 100vh;
        position            : relative;
    }
    #root {
        display: flex;
    }
    .full-height{
        height: 100%;
    }
    .full-width {
        width: 100%;
    }

    .flex {
        display: flex;
    }
    .f-v-center{
        align-items: center;
    }
    .f-h-center{
        justify-content: center;
    }

    .text-center{
        text-align: center;
    }

    // //FONT SIZES

    .plain-notification{
        background-color: #fff;
    }

    .hover {
        cursor: pointer;
    }

    .elipsis {
        overflow        : hidden;
        text-overflow   : ellipsis;
        white-space     : nowrap;
    }
    
    .no-data-text {
        color       : #707070;
        font-size   : 15px;
        text-align  : center;
        width       : 100%;
    }
`;
