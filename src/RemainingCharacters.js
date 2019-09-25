import React from 'react';

export default function RemainingCharacters(props) {
  const { max, text, children } = props;
  const remaining = max - text.length;

  if (typeof children === 'function') {
    return children(remaining);
  } else {
    return (
      <>{remaining} characters left</>
    );
  }
}