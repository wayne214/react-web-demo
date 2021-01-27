import {createGlobalStyle} from 'styled-components'

export const GlobalIconFontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1611737381171'); /* IE9 */
    src: url('./iconfont.eot?t=1611737381171#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAXYAAsAAAAACuQAAAWLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqJBIcqATYCJAMUCwwABCAFhG0HThs0CRHVo3uS/Tgox3hWWc54p0lN/VHcd/aAm/69JNAsVIAGQsWpUzGbKDZxh27ORGFqguyLK1dzVmCjVqiQa1375NHRwR5hkpkEwPH3qmYsDdg8i8VlvfzMtSyAoQAHaO522wIpcGtaMKh6H+C5utSIBuAPAwEQEA0DqL6xvRE8OJCcoGzU8KH9wbsM4CLoBF4tZ45yRbQKMvDMEuYJVlip/zx9g4F4gIGMBW3tPKRhEKo/V305mLX5beil4oCKswG4ngJYAAYAHEAjWMcgsKbMoCsELpdDMQBenMUAn6s/L/xysN9/oqjEXbHxEPAfHsCCAwMCSA5SBCK5Ws4NGZL1YAcSgYhTFgIXGODLweLpUMjUIwIAJUCTAHKDVHr9KzPgEABWpeJ5jUKXoQ/PN2hUQYEz3Z8afT6Lx2Pa+tLxOsb7+TTfFxa32+j1mre9Wvoi0vNZiGAONAojFd17OKOFLTpr/8sKByCQcENY+ozsFotduKLcdOYAbAcVjttEYy+468kF1++XNl9PF9MvJ+uqzvvK1rstS0Vx3Rl9/Tpteoqk36MXpZQn2RDXia/R6ZLv+8r2v06XDkdILpdELmcK1okHnujFYmKCwiVJ0ixpexnpuu1PliK7OX1N55NL63gTuTYfvizZfVlhFul6uhRree7rVo4gpay40JuMey6IYmREyhWDaNDqbrgjIaZU5dsg6pK7m33dlycdjyG4g4u0TqdBErcYTrgN4gu3UQzQSekl+shnkfLFHZYa1bdwXU5O3n9ZkvYbXY714gZ3uXjgRco6pyQdfp1+3Tf1qsfmJtpSL83u+9U6PAnepW63zeNx+Hx2r9W03rZuqdbstLscsazNw8WEtXHzF7/89Sh3gvv6X/Yqb+pq4rm3YmODdv8T8aeBG0OaXqbUvxwc7KdP3hGVnUxM7YDhlT7un8qJk+4WZ5GsJnNsqnl4UG9Fu+rST/tYJj0O0/wTnvhTYjSSvvt6R6GW9E99g3Mdc1rTCpOuRqT26BaSE2cdbZrOQvlFz7vpp9bEisH8s5VKtE6Pp1/X1PpO3OyStKvo7xWdt6k0N6ipkFjG8gEdfbY8czYmt2b2JIprfd0/T8XsioFRXjFSmVyhbF0tJJv/rKr96nAHPZPyboLGnJ8+8J+8+AZV23emlieYFsytV3bt/lHn72JpWpHyzVfV+m0FX8e9DNtf9zp+TOWr3KT+wdTNvq9h8TsdBxd31H9zpKqOqxh+nMk4TX11HMswk3VEuyu2lQ39JW7Z802d05QYMy1v4eoFeoajTqVWWDN6hToeq+W9SxbjrdDls0eFvoWf5bvVAfnq86U1F1Vv755XOzQvd/7OSwdKqnF7dkPasEkSo6XdIMM4vtbj2jK1bcYZZw/LlkuWzc6eZ5CP0kuOZrXn3r1pWr92EczGNACA38YRa7s4/eyNHXclKzGvsfJ/zJ5gFcf3MuxunvF335Dy33jFPj/2blHbxBOWHR2kKDE6mjtkagDg6IaRUcZxCugOAIl0BCOAP1dHcDHAwYsdxRlAjfeL0WiOkRSBh8YGBgGIsrHgPwjwHNkAMiiQD3LwqAIB6Wg6rUAoJoAFcW0ApGGBAAQljgODYFwHFko8xXPk90AGLb4DOZTEggAzhV6pQBLZ+vJUkIzIgS6gWQxCMo8Xo/wd5eRIcWI64xtL1WHom86bfsOApYgddZbDOAoQJXp4FR6HzkVIJRpkY6PGMd3aVnCf1LDoV5fVU0EyIge6gGYxCHX0ePF9/zvKyZES0ffN+42l6smhb7oE+DdFSNS3KbV1lsOIMQHiWho9vKINnZiIkPhFBtnYqAyxdGtxmEiqaKpX+XmM/k8DabdszRBLHMlIjlNNOgz5ddfNnRyXyZNI9UWQIDkxWtWvVgA=') format('woff2'),
    url('./iconfont.woff?t=1611737381171') format('woff'),
    url('./iconfont.ttf?t=1611737381171') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1611737381171#iconfont') format('svg'); /* iOS 4.1- */* chrome, firefox, opera, Safari, Android, iOS 4.2+ */ url('./iconfont.svg?t=1611562874831#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconAa:before {
    content: "\e636";
  }

  .iconyumaobi:before {
    content: "\e611";
  }

  .iconfangdajing:before {
    content: "\e612";
  }
`
