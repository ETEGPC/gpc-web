import styled from 'styled-components';

export const MenuHeader = styled.header`
    height: 7vh;
    display: flex;
    width: 100vw;
    justify-content: flex-start;
    position: relative;    

    svg {
        color: #fff;
        width: 10vw;
        height: 100%;
        max-width: 40px;
        margin-left: 20px;
        cursor: pointer;
    }

    h2 { display: none; }
`;

export const MenuHeaderSchoolIcon = styled.img` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15vw;
    cursor: pointer;
    max-width: 60px;
`;

export const MenuContent = styled.div`
	z-index: 2;
	flex-direction: column;
	position: absolute;
	background-color: #020063;
	width: 84vw;
	transform: translateX(-100%);
	transition: 0.2s;
	top: 0; 

    main {
        background-color: #010030;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    main > header {
        display: flex;
	    margin: 0 0 0 9%;
    }

    main > header > svg {
        align-self: center;
        color: #fff;
        width: 7vw;
        height: 7vh;
    }

    main > header > h1 {
        color: white;
        text-decoration: underline;
        font-size: 26px;
        display: inline;
        align-self: center;
        margin-left: 19px;
    }
`;

export const MenuInstallAppContainer = styled.div`
    padding: 0 0 0 9%;
    display: flex;
    align-items: center;

    svg {
        color: white;
        width: 25px;
        height: 25px;
    }

    button {
        border: 1px solid #fff;
        background-color: transparent;
        border-radius: 10px;
        margin: 0 0 0 19px;
        height: 25px;
        width: 130px;
        cursor: pointer;
        color: #FFF;
	    font-family: 'Raleway', sans-serif;
	    font-weight: bold;
    }

    .menu-open {
        transform: translateX(0%);
    }

    .menu-closed {
        transform: translateX(-100%);
    }
`;

export const MenuItemContainer = styled.div`
    padding: 0% 0% 0 9%;	
	display: flex;

    svg {
        color: white;
        width: 25px;
        height: 25px;
    }

    p {
        color: white;
	    font-weight: 600;
	    padding: 0 0 0 19px;
	    margin: auto 0;
	    text-decoration: none;
	    cursor: pointer;
    }
`;

export const MenuContainer = styled.div`
    background-color: #020063;
    font-family: 'Raleway', sans-serif;   

    @media screen and (min-width: 800px) and (min-height: 497px){ 
        ${MenuHeader} {
            width: 100vw;
            position: absolute;
            height: 60px;
            background: #020063;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            z-index: 2;
            cursor: pointer;
        }

        ${MenuContent} {
            z-index: 2;
            flex-direction: column;
            background-color: #020063;
            transition: 0.2s;
            transform: translateX(0);
            width: 340px;
            height: 100vh;
            position: absolute;
            top: 60px;

            main {
                background-color: #010030;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
            }

            main > header {
                display: none;
            }
        }

        ${MenuHeader} svg {
            display: none;
        }

        ${MenuHeader} h2 {
            color: #fff;
	        font-size: var(--h2-font-size);
	        margin-left: 1%;
	        display: block;
        }

        ${MenuHeaderSchoolIcon} {
            margin: 0 0 0 1%;
	        width: 80px;
        }
    }
`;