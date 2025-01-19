import { getConfigForPWA } from "expo-pwa";
import path from "path";
import { DefinePlugin } from "webpack";

/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: [],
        projectRoot: "../",
      },
    },
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  webpackFinal: (config) => {
    config.performance.maxAssetSize = 512000;
    config.performance.maxEntrypointSize = 512000;
    config.plugins.push(
      // Used for surfacing information related to constants
      new DefinePlugin({
        "process.env.APP_MANIFEST": JSON.stringify(
          sanitizeConfig(getConfigForPWA(path.join(__dirname, "..")))
        ),
      })
    );

    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

function sanitizeConfig(config) {
  delete config._internal;
  delete config.ios;
  delete config.android;
  delete config.plugins;
  delete config.hooks;
  delete config.facebookScheme;
  delete config.facebookAppId;
  delete config.facebookDisplayName;
  delete config.assetBundlePatterns;
  return config;
}

export default config;
