import React from 'react';

import Modal from './Modal.js';

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    closeModal: function closeModal() {},
    message: "Message here"
  },
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'My Modal',
};