import React from "react";
import Button from '../../components/shared/Button'
import { css, jsx } from '@emotion/react'


const pageErrorStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`

const codeErrorStyles = css`
  font-size: 5rem;
  font-weight: bold;
  font-style: italic;
`

const msgErrorStyles = css`
  font-size: 1.5rem;
  margin: 1rem auto;
`

const SIZE = '350px'

const gifErrorStyles = css({
  margin: "1rem auto",
  width: SIZE,
  height: SIZE,
  objectFit: 'cover'
})

export default function ErrorPage() {
  const randomImage = () => {
    return `https://media.giphy.com/media/hLwSzlKN8Fi6I/giphy.gif`
  }

  return (
    <>
      <header />
      <div>
        <div css={pageErrorStyles}>
          <span css={codeErrorStyles}>404</span>
          <p css={msgErrorStyles}>Sometimes gettings lost isn't that bad</p>
          <img css={gifErrorStyles} src={randomImage()} alt="alt-page-404"/>
          <Button href='/'>Go back home</Button>
        </div>
      </div>
    </>
  );
}
