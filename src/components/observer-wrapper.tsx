import { Observer } from 'mobx-react';
import React, { PropsWithChildren } from 'react';

//By some reason it doesn't work
export default class ObserverWrapper extends React.Component<PropsWithChildren> {
  render() {
    return (
      <Observer>
        {() => (
          <>
            {this.props.children}
          </>
        )}
      </Observer>
    );
  }
}
