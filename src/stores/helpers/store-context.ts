import { MobXProviderContext } from 'mobx-react';
import React, { createContext } from 'react';
import RootStore from '../root-store';

export const StoreContext = createContext<RootStore>({} as RootStore);

export const StoreProvider = StoreContext.Provider;

export const StoreConsumer = StoreContext.Consumer



