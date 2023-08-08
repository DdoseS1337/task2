import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/EditNoteForm/Buttons/SaveButton',
} as Meta;

export const Default = () => (
  <button className="edit-note-save-button" onClick={action('Button Save')}>
    Зберегти
  </button>
);
