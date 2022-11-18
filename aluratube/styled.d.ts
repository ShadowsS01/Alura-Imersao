import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundBase: string;
    backgroundLevel1: string;
    backgroundLevel2: string;
    backgroundOpacity: string;
    borderBase: string;
    textColorBase: string;
    colorMain: string;
  }
}
