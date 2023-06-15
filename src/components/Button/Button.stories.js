import { Button } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Solid = {
  args: {
    mode: 'solid',
    label: 'Solid',
  },
};

export const Outlined = {
  args: {
    mode: 'outlined',
    label: 'Outlined',
  },
};

export const Plain = {
  args: {
    mode: 'plain',
    label: 'Plain',
  },
};

export const Ordinary = {
  args: {
    mode: 'ordinary',
    label: 'Ordinary'
  }
}

export const Large = {
  args: {
     size: 'large',
     label: 'Button', 
  }
}

export const Medium = {
  args: {
     size: 'medium',
     label: 'Button', 
  }
}

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
