import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import Routes from './src/navigation/index';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

//a
<<<<<<< HEAD
=======
//bbbb
>>>>>>> 8c879537d30b8acd3753147d572391c88a35a4a6
