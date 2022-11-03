import Head from 'next/head'
import { Icon } from '../components/atoms/Icon'
import { wrapper } from '../store/store'
import styles from '../styles/Home.module.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadData, startClock, tickClock } from '../store/actions/actExample';
import { useStore } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const store:any = useStore();
  const clock = store.getState().rdcExample.lastUpdate;


  useEffect(() => {
    dispatch(startClock());
    console.log('clock:',clock);
  }, []);
  return (
    <div className={styles.container}>
      <main>
        <p>time: {clock}</p>
        <Icon src="/bulldog.png" width='10vw' height='10vw' />
      </main>

      <footer className={styles.footer}>
       
          developed by Moon Ju-wan
       
      </footer>
    </div>
  )
}

