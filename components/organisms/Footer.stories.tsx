import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'organisms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => {
  return (
    <Footer />
  );
}

export const Base = Template.bind({});
