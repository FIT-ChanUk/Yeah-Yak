/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { AppProps } from 'next/app';
import Header from '../components/Header';
import './index.css';

const MyApp = (props: AppProps) => {
    return (
        <div css={css`
            display: flex;
        `}>
            <Header />

            <div css={css`
                flex: 1 1 0;
                background: #E8EAF6;
                height: 100vh;
            `}>
                <props.Component />
            </div>
        </div>
    )
}

export default MyApp;