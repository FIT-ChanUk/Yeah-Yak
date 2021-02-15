/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { AppProps, Container } from 'next/app';
import Index from '.';
import Header from '../components/Header';
import './index.css';

const MyApp = (props: AppProps) => {


    return (
        <Container {...props.pageProps}>
            <Header />

            <div css={css`
                background: #E8EAF6;
                margin-left: 250px;
                height: 100vh;
            `}>
                <props.Component />
            </div>
        </Container>
    )
}

export default MyApp;