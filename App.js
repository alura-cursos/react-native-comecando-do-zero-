import { StatusBar, SafeAreaView } from 'react-native';
import Loading from './src/screens/Loading';
import Home from './src/components/Home'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      {/* <Loading /> */}
      <Home />
    </SafeAreaView>
  );
}

