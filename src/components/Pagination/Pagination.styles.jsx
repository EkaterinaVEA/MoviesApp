import { css } from "@emotion/css";

export const containerCss = css`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

export const breakCss = css`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
`;

export const breakLinkCss = css`
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding-bottom: 2px;
  transition: color 150ms ease, transform 150ms ease;
  &:hover {
    color: var(--color-accent);
    transform: scale(1.5) translateY(-5px);
  }
`;

export const pageCss = css`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  transition: color 150ms ease, background-color 150ms ease,
    box-shadow 150ms ease, transform 150ms ease;
  &:not(:nth-last-child(2)) {
    margin-right: 10px;
  }
  &:hover {
    color: #fff;
    background-color: var(--color-accent);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 2px 1px -1px rgb(0 0 0 / 12%);
    transform: scale(1.1);
  }
`;

export const pageLinkCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: 500;
`;

export const activePageCss = css`
  background-color: var(--color-accent);
    box-shadow: -5px -5px 20px 0 #ffffff, 5px 5px 20px 0 #aeaec090;
  transform: scale(1.1);
`;

export const activeLinkCss = css`
  color: #fff;
`;

export const arrowItemsCss = css`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &.previous {
    margin-right: 40px;
  }
  &.next {
    margin-left: 40px;
  }
`;

export const arrowLinksCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: transparent;
    box-shadow: -5px -5px 20px 0 #ffffff, 5px 5px 20px 0 #aeaec090;
  transition: color 150ms ease, background-color 150ms ease,
    transform 150ms ease;
  &[aria-disabled="true"] {
    cursor: default;
    box-shadow: none;
    color: #bdbdbd;
  }
  &:hover:not([aria-disabled="true"]) {
    color: #fff;
    background-color: var(--color-accent);
    transform: scale(1.1);
  }
`;

export const disabledCss = css`
  cursor: default;
  box-shadow: none;
`;