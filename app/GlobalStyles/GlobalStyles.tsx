import { createGlobalStyle } from 'styled-components';

import PressStart from './fonts/Press_Start_2P/PressStart2P-Regular.ttf';
import SourceCodeItalic from './fonts/Source_Code_Pro/SourceCodePro-Italic-VariableFont_wght.ttf';
import SourceCodeRegular from './fonts/Source_Code_Pro/SourceCodePro-VariableFont_wght.ttf';
import colors from './GlobalColors';

export default createGlobalStyle`
    @font-face {
        font-family: 'Press Start';
        src: url(${PressStart}) format('truetype');
    }
    @font-face {
        font-family: 'Source Code Italic';
        src: url(${SourceCodeItalic}) format('truetype');
    }
    @font-face {
        font-family: 'Source Code Regular';
        src: url(${SourceCodeRegular}) format('truetype');
    }
    .custom-a{
        color: ${colors.font.primary};
    }
`;