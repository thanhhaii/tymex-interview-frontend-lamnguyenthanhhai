'use client';

import { App, ConfigProvider, theme } from 'antd';
import { createStyles } from 'antd-style';
import vi_VN from 'antd/locale/vi_VN';

const useStyle = createStyles(({ prefixCls, css }) => ({
    linearGradientButton: css`
      &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
        > span {
          position: relative;
        }
  
        &::before {
          content: '';
          background: linear-gradient(75deg, #DA458F, #DA34DD);
          position: absolute;
          inset: -1px;
          opacity: 1;
          transition: all 0.3s;
          border-radius: inherit;
          box-shadow: 0px 0px 50px 0px rgba(187,75,255,0.31);
        }
  
        &:hover::before {
          opacity: 0;
        }
      }
    `,
}));

export default function AppConfigProvider({ children }: { children: React.ReactNode }) {
    const { styles } = useStyle();
    return (

        <ConfigProvider
            button={{
                className: styles.linearGradientButton,
            }}
            theme={{
                token: {
                    colorPrimary: '#DA458F',
                    fontFamily: 'var(--font-inter)',
                },
                algorithm: theme.darkAlgorithm,
            }}
            input={{
                classNames: {
                    wrapper: 'bg-transparent',
                    affixWrapper: 'bg-transparent',
                },
            }}
            locale={vi_VN}
        >
            <App>
                {children}
            </App>
        </ConfigProvider>
    );
}
