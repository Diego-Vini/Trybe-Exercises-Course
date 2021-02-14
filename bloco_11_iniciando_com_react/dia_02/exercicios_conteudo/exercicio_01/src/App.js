import { logDOM } from '@testing-library/react';
import './App.css';
import Image from './Image'

function App() {
  return (
    <div>
      <Image source = {'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'} alternativeText = {'Erro ao carregar imagem'} />
    </div>
  );
}

export default App;
