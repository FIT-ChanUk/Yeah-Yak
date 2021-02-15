/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Logo = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
`;

const HeaderBanner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    cursor: pointer;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Link href={'/'}>
                <HeaderBanner>
                    <Logo
                        src={'/res/img/hingming.png'}
                        alt={''}
                        width={50}
                        height={50}
                        css={css`
                    
                    `}
                    />

                    <div css={css`
                        margin-left: 10px;
                    `}>
                        힝구월드
                </div>
                </HeaderBanner>
            </Link>

            <div css={css`
                margin: 0 10px;
                display: inline-block;
            `}>
                <Link href={'/calender'}>
                    <a>달력 보기</a>
                </Link>
            </div>
        </HeaderContainer>
    )
}

export default Header;