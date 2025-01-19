import { ArgTypes, type } from '@storybook/react';
import { StoryArgs, StoryArg } from 'storybook';
import { IconButtonProps} from './IconButton'

type IconButtonStory = Story<IconButtonProps>;

const iconButtonArgs: StoryArgs<IconButtonProps> = {
  name: {
    control: 'select',
    options: ['add', 'close', 'trash-2', 'arrow-back'],
  },
  size: {
    control: 'select',
    options: [18, 24],
  }
};

export const argTypes = iconButtonArgs;