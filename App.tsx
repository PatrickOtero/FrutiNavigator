import { Routes } from './src/routes';
import { ProductContextProvider } from './src/contexts/productsContext';
import { StatusBar } from 'react-native';
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { GlobalContextProvider } from './src/contexts/globalContext';
import { AuthContextProvider } from './src/contexts/auth';

export default function App() {

  return (
    <GluestackUIProvider>
      <AuthContextProvider>
        <GlobalContextProvider>
          <ProductContextProvider>
              <StatusBar barStyle='light-content'
                translucent
              />
              <Routes/>
          </ProductContextProvider>
        </GlobalContextProvider>
        </AuthContextProvider>
    </GluestackUIProvider>
  );
}
