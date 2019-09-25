import React from 'react';

export default function RemainingCharacters(props) {
  const { max, text } = props;
  const remaining = max - text.length;
  return (
    <span>{remaining} characters left</span>
  );
}