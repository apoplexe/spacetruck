import React from 'react';
import styles from './App.css';
import Inventory from './components/Inventory'

const App = () => (
  <div className={styles.root}>
    <h1 className={styles.appTitle}>Prepare your next storie</h1>
    <Inventory />
  </div>  
)

export default App;
