/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';
import { svg } from '../../res';
import { Colors } from '../../styles';

const HeaderContainer = styled.div`
    position: relative;
    width: 135px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`;

const HeaderNavi = styled.div`
    position: relative;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin: 15px 0;

    &:hover {
        background-color: ${Colors.dark100};
    }
`;

const css_svg_fill = css`
    path {
        fill: ${Colors.dark200};
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Link href={'/'}>
                <HeaderNavi>
                    {<svg.home_fill css={css_svg_fill} />}
                </HeaderNavi>
            </Link>
            <Link href={'/calendar'}>
                <HeaderNavi>
                    {<svg.calendar_fill css={css_svg_fill} />}
                </HeaderNavi>
            </Link>
            <Link href={'/customer'}>
                <HeaderNavi>
                    {<svg.user_fill css={css_svg_fill} />}
                </HeaderNavi>
            </Link>
            <Link href={'/messages'}>
                <HeaderNavi>
                    {<svg.message_fill css={css_svg_fill} />}
                </HeaderNavi>
            </Link>
            <Link href={'/'}>
                <HeaderNavi>
                    {<svg.info_fill css={css_svg_fill} />}
                </HeaderNavi>
            </Link>
        </HeaderContainer>
    )
}

export default Header;