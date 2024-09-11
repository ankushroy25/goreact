import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { CSSObject } from "@emotion/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: CSSObject) => ({
      body: {
        backgroundColor: mode("gray.100", "")(props),
      },
    }),
  },
});

export default theme;
